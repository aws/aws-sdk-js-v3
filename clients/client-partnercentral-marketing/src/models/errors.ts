// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { AccessDeniedExceptionReason, ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";
import { PartnerCentralMarketingServiceException as __BaseException } from "./PartnerCentralMarketingServiceException";

/**
 * You do not have sufficient access to perform this action.
 *
 * An IAM denial carries no `Reason`. A refusal for the caller's Partner Central state carries one, so a client tells
 * the two apart by its presence.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * Why the caller was refused, when the refusal is about the caller's Partner Central state rather than IAM.
   * @public
   */
  Reason?: AccessDeniedExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * The request conflicts with the current state of the resource.
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * The affected resource identifier. For a uniqueness conflict this is the
   * identifier of the *existing* resource, so the caller can act on it
   * without a separate lookup.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The affected resource type.
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Machine-readable cause, for clients that branch on it.
   *
   * An open set of `SCREAMING_SNAKE_CASE` tokens, deliberately typed as a string
   * rather than an enum. `ConflictException` is shared by every resource in this
   * service, so an enum here would accumulate values that are meaningful for one
   * resource and inapplicable to the rest — the cohesiveness problem the Backward
   * Compatibility standard describes under "Sharing enums" — and each new value
   * would force an SDK regeneration on callers who can never encounter it.
   * Clients MUST treat an unrecognised value as an unspecified conflict and fall
   * back to `Message`.
   *
   * Values in use today:
   *
   * From the campaign asset activation path. Every one of these is decided before the
   * operation returns, so a caller that receives one knows nothing was started.
   *
   * These two are thrown by `DeactivateCampaignAsset`, which refuses one asset
   * outright. `StartCampaignAssetActivationTask` reports the same two causes
   * **per asset** as a FAILED task entry instead of throwing, because one bad
   * identifier must not refuse the twenty-four good ones beside it — so the
   * spellings are deliberately identical to `CampaignAssetStateReason`'s,
   * letting a client match one string whichever way the refusal arrived. The two
   * types evolve independently on purpose: this is an open string shared by every
   * resource, that is a closed enum owned by one operation.
   *
   * - `ASSET_START_IN_PROGRESS` — the asset is already being started, or another
   *   caller changed it during this request. Retryable once the outcome is visible.
   * - `PREREQUISITE_ASSET_NOT_ACTIVE` — this asset embeds output from another asset
   *   that is not live. `ResourceId` carries that asset's identifier.
   *
   * From the prerequisite edges between a campaign's assets — an email that embeds its landing page's URL.
   * Both refuse the whole request and write nothing.
   *
   * - `PREREQUISITE_ASSET_MISSING` — from `BatchCreateCampaignAsset`: an entry's blueprint embeds another
   *   blueprint's output, and that blueprint is neither named in the same request nor already an asset
   *   on the campaign. Retry with it in the request. `ResourceId` carries the missing blueprint's
   *   identifier.
   * - `ASSET_HAS_DEPENDENTS` — from `DeleteCampaignAsset`: another asset on the campaign embeds this
   *   asset's output, so deleting it would leave that asset unactivatable. Delete the dependents first.
   *   The message names them.
   *
   * `CAMPAIGN_COMPLETED` — the campaign is complete (the UTC date is after its `EndOn`), so it and its assets
   * are read-only. Refuses `UpdateCampaign`, `BatchCreateCampaignAsset`, `UpdateCampaignAsset`,
   * `DeleteCampaignAsset` and `StartCampaignAssetActivationTask`; never `DeactivateCampaignAsset`. **Not
   * retryable, and not fixable** — `EndOn` cannot be moved once it has passed, so nothing the caller does
   * will make the write succeed. `ResourceId` carries the campaign identifier.
   *
   * ⚠️ This is the one conflict reason whose condition **never clears**, which sits awkwardly with
   * `ConflictException` promising a state that may change. It is a conflict rather than a validation
   * failure because the request is well formed and would have succeeded a moment earlier — the resource's
   * state is what refuses it, which is what this exception is for. Contrast `ASSET_NOT_STARTABLE`, which
   * moved to `ValidationException` precisely because it is a property of the asset's *type* rather than
   * of its state.
   *
   * ⚠️ **`COMPLETED` also exists as a `CampaignAssetExportTaskStatus` value, on a different axis.** That
   * one means an export archive finished assembling. The two are unrelated and must not be unified.
   *
   * `CAMPAIGN_HAS_ACTIVE_ASSETS` — from `DeleteCampaign`: at least one of the campaign's assets is live,
   * and deleting the campaign would orphan what the delivery platform still serves or sends. Deactivate
   * those assets with `DeactivateCampaignAsset`, then retry. The message names them. `ResourceId`
   * carries the campaign identifier.
   *
   * `CAMPAIGN_ACTIVATION_IN_PROGRESS` — from
   * `StartCampaignAssetActivationTask` and `DeleteCampaign`, refusing the whole request: one activation
   * task runs on a campaign at a time. `ResourceId` carries the **holding task's
   * id**, so a caller can poll `GetCampaignAssetActivationTask` rather than guess.
   * Retryable once that task reaches a terminal status.
   *
   * `SERVICE_LINKED_ROLE_DELETION_IN_PROGRESS` — from `StartCampaignAssetActivationTask`, refusing the
   * whole request: this service's service-linked role is being deleted, so no asset may go live. Not a
   * lease conflict: `ResourceId` is unset and there is no task to poll. Retryable after a short wait; if
   * the role was deleted, the next activation recreates it.
   *
   * `LAYOUT_LOCKED_AFTER_ACTIVATION` — from `UpdateCampaignAsset`, refusing a `Layout`
   * change on a multi-layout asset that has activated successfully at least once
   * (DG-044). The published object is that layout's, so switching would leave the
   * asset describing a layout that is not the one live. **Not fixable**: the asset
   * keeps its layout for life. A failed activation does not lock it. Re-sending the
   * layout already selected is not a change and is accepted. `ResourceId` carries
   * the asset identifier.
   *
   * `ASSET_START_IN_PROGRESS` — also from `UpdateCampaignAsset`, refusing any edit to
   * an asset the campaign's running activation task has accepted and not yet finished:
   * the run publishes the content it read, so an edit accepted mid-run would either be
   * published unvalidated or never published. Nothing is written. Retryable once the
   * asset's outcome on the task (`GetCampaignAssetActivationTask`) is terminal; the
   * asset's siblings may still be running. `ResourceId` carries the asset identifier.
   *
   * `ASSET_ALREADY_ACTIVE` — from `UpdateCampaignAsset`, refusing any change to a live
   * email or social post, content or schedule. Deactivate it first; the next
   * activation sends everything current. Landing pages and documents are edited
   * live and converge by re-activation. `ResourceId` carries the asset identifier.
   *
   * `ASSET_NOT_DEACTIVATABLE` — from `DeactivateCampaignAsset`, for an asset that
   * can't be stopped: a document, banner or landing page until the campaign has
   * completed, when it becomes removable. Until then, update it and activate it
   * again. `ResourceId` carries the asset identifier.
   *
   * `ASSET_HAS_LOCKED_SENDS` — from `DeactivateCampaignAsset`, within an hour of the
   * asset's send (a social post's publish), when it can no longer be withdrawn.
   * `ASSET_ALREADY_DELIVERED` — the same, once that time has passed: a sent email or
   * a published post cannot be recalled. Neither is retryable.
   *
   * Three values were removed with the campaign lifecycle and the singular
   * activate, and none should be re-added here:
   *
   * - `CAMPAIGN_NOT_STARTED` — a campaign has no state to be started out of.
   * - `ASSET_NOT_STARTABLE` — moved to `ValidationException`, with no reason. The
   *   value's own documentation said it was "not retryable and not fixable: it is a
   *   property of the asset's type", and `ConflictException` promises a state that
   *   may change. The gate itself stays — deleting it lets a download-only asset
   *   into a task with no dispatch arm, which would succeed and do nothing.
   * - `ASSET_START_UNCONFIRMED` — described a state that no longer occurs. DG cannot
   *   be more idempotent than a platform whose social create has no idempotency
   *   key, so an ambiguous hand-over is now an ordinary failure carrying
   *   `INTERNAL_ERROR`. Holding the asset in a distinct state bought a
   *   guarantee that was never real, and had no exit.
   * @public
   */
  Reason?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.Reason = opts.Reason;
  }
}

/**
 * An unexpected error occurred during the processing of the request.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * Seconds before retry.
   * @public
   */
  RetryAfterSeconds?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * The specified resource does not exist.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * The affected resource identifier.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The affected resource type.
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * The request was denied due to request throttling.
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * Seconds before retry.
   * @public
   */
  RetryAfterSeconds?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * The input fails to satisfy the constraints specified by the service.
 *
 * A caller branches on `Reason`, and where the rejection is attributable to particular fields it reads
 * `FieldList` rather than parsing `Message`, which is prose and may change.
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * The single coarse reason the request was rejected, for a caller that does not care which field.
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * Every field that failed, not just the first.
   *
   * <p>⚠️ **Every field, deliberately.** The convention comment carried by most internal models — *"if more
   * than one field caused the error, pick one and elaborate in the message"* — is the reading this service
   * does NOT take: a partner editing a form would then discover their errors one request at a time. The whole
   * request is validated and the full set reported, so one round of fixes is one call.
   *
   * <p><strong>Each entry names a member of the request just sent</strong>, and only that: the value to change
   * and send again. A template field value is `Name` `FieldValues` with the template field in `FieldId`, one
   * entry per failing field.
   *
   * <p><strong>When it is present.</strong> Only when the refusal points at something the partner fixes in a
   * form, and then every such refusal carries it:
   * - `UpdateCampaignAsset`: `FieldValues` (including a file the content scan declined, which is why a partner
   *   handles image failures and text failures the same way, through this list), `Layout`, `SendMode` and
   *   `ScheduledSendAt`;
   * - `CreateCampaign` and `UpdateCampaign`: campaign settings and files;
   * - `GetCampaignTemplate`: `Identifier`.
   *
   * <p>Every other `ValidationException` carries `Message` only — tags, ARNs, social connections, exports, and
   * `CAMPAIGN_INCOMPLETE`, whose missing settings are not members of the request it refuses.
   * @public
   */
  FieldList?: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.FieldList = opts.FieldList;
  }
}

/**
 * The request exceeds a service quota.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.partnercentralmarketing#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   * @public
   */
  Message: string | undefined;

  /**
   * The affected resource type.
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The exceeded quota code.
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * The service code.
   * @public
   */
  ServiceCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}
