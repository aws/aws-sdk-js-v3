// smithy-typescript generated code
import type {
  AssetLanguage,
  AttemptStatus,
  CampaignAssetActivationStatus,
  CampaignAssetActivationTaskStatus,
  CampaignAssetCategory,
  CampaignAssetExportFailureCode,
  CampaignAssetExportTaskStatus,
  CampaignAssetState,
  CampaignAssetStateReason,
  CampaignAssetTemplateType,
  CampaignSetting,
  CampaignSortName,
  CampaignState,
  CampaignTemplateCollection,
  Catalog,
  CompanySize,
  CustomerSegment,
  DeliveryStatus,
  FileFormat,
  ImageFormat,
  Industry,
  LayoutFormat,
  LayoutPageType,
  PartnerProfileField,
  Platform,
  ScanStatus,
  SendMode,
  SocialConnectionStatus,
  SortOrder,
  TemplateFieldSection,
  Theme,
  ValidationExceptionFieldCode,
} from "./enums";

/**
 * One thing that must be fixed before activation.
 * @public
 */
export interface ActivationIssue {
  /**
   * What is wrong. Branch on this, not on `Message`.
   * @public
   */
  Code: CampaignAssetStateReason | undefined;

  /**
   * The asset field to fix. Present for asset-level issues, except `SEND_MODE_MISSING`
   * and a `CONTENT_REJECTED` that refused the asset's text as a whole rather than
   * one field.
   * @public
   */
  FieldId?: string | undefined;

  /**
   * The `UpdateCampaign` member to set. Present for campaign-level issues.
   * @public
   */
  CampaignSetting?: CampaignSetting | undefined;

  /**
   * The partner-profile value to set or shorten, in AWS Partner Central, or the derived value whose input
   * it is. Present on `PARTNER_PROFILE_FIELD_MISSING` and `PARTNER_PROFILE_FIELD_DOES_NOT_FIT`.
   * @public
   */
  PartnerProfileField?: PartnerProfileField | undefined;

  /**
   * The assets this campaign-level issue blocks.
   * @public
   */
  AffectedAssetIds?: string[] | undefined;

  /**
   * A description for display. Don't parse it.
   * @public
   */
  Message: string | undefined;
}

/**
 * An `AssetLink` field's constraints.
 * @public
 */
export interface AssetLinkFieldType {
  /**
   * The category of asset the field may name. The value must be an asset of this category on the same
   * campaign; list the candidates with `ListCampaignAssets`.
   * @public
   */
  Category: CampaignAssetCategory | undefined;

  /**
   * The text field on the same asset whose copy names the linked asset, such as the "Solution Brief" in
   * "Your Solution Brief is ready to download!". When the partner picks an asset, fill this field with the
   * picked asset's `LinkLabel`, in a preview and in the same save, unless the partner has edited it. The
   * field stays editable. The service does the same when a save changes the link without setting this field
   * and the partner has never written it.
   * @public
   */
  LabelFieldId?: string | undefined;
}

/**
 * One blueprint to instantiate.
 *
 * Carries nothing but the blueprint's identity, and that is the point rather
 * than a saving: category, name, FileFormat and platform are
 * all derived from the named blueprint, so no caller has a member with which to
 * contradict the pinned schema (asset design section 3.1).
 *
 * There is deliberately no per-entry ClientToken. AWS Batch Operations requires a
 * *request identifier* per entry -- "a request identifier CAN either be a
 * resource identifier or a client idempotency token" -- and
 * SourceAssetTemplateIdentifier is a resource identifier, unique across entries
 * and echoed in this entry's error. Idempotency is structural rather than
 * token-based: an asset id is derived from (CampaignId, SourceAssetTemplateId),
 * so a replayed entry resolves to the same asset (I-16).
 * @public
 */
export interface BatchCreateCampaignAssetEntry {
  /**
   * The asset template to instantiate, as returned by GetCampaignTemplate in
   * CampaignTemplate.AssetTemplates[].id.
   *
   * Must belong to the campaign's own campaign template. An asset's editable
   * field schema is copied from this blueprint at creation and pinned, so an
   * asset without one could be neither validated on update nor made live.
   *
   * Also this entry's request identifier: it MUST be unique across the
   * request's entries, since a campaign holds at most one asset per blueprint
   * (I-15) and two entries naming the same blueprint could not both succeed.
   * @public
   */
  SourceAssetTemplateIdentifier: string | undefined;
}

/**
 * Input for BatchCreateCampaignAsset operation.
 *
 * DG-038: replaces CreateCampaignAssetRequest. Selecting assets is a set
 * decision -- a partner picks which of the bound campaign template's blueprints
 * this campaign will carry -- so the operation takes a list of entries and there
 * is no singular create. "Add the blueprint I skipped" is a batch of one.
 * @public
 */
export interface BatchCreateCampaignAssetRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The blueprints to instantiate, one entry each.
   * @public
   */
  Entries: BatchCreateCampaignAssetEntry[] | undefined;
}

/**
 * Why one entry could not be instantiated.
 * @public
 */
export interface BatchCreateCampaignAssetError {
  /**
   * The failing entry's request identifier, so a caller can match this error
   * to the entry it sent.
   * @public
   */
  SourceAssetTemplateId: string | undefined;

  /**
   * Error code -- ResourceNotFoundException when the blueprint is not on the
   * campaign's bound template, InternalServerException otherwise. Throttling
   * never appears here: DG throttles per operation, so a throttle fails the
   * whole batch.
   * @public
   */
  Code: string | undefined;

  /**
   * Human-readable cause.
   * @public
   */
  Message: string | undefined;
}

/**
 * A rendering of an AWS-authored layout skeleton or placeholder image.
 *
 * The url is a stable, cache-friendly CloudFront URL rather than a presigned
 * GET, because the bytes are AWS marketing content that is already public.
 * The key's random segment is the object's only protection, so the URL is a
 * bearer credential for the object and is withheld entirely while a template
 * is not yet effective — see CampaignTemplate.EffectiveDateBegin.
 * @public
 */
export interface LayoutPreview {
  /**
   * The format of the referenced object.
   * @public
   */
  Format: LayoutFormat | undefined;

  /**
   * A stable URL serving the object. Not presigned, so it does not expire.
   * @public
   */
  Url: string | undefined;

  /**
   * Which page of a multi-page layout this is. Present only for LANDING_PAGE,
   * which genuinely has two layout objects — the page carrying the form, and
   * the confirmation page shown after submit — and absent for every other
   * category, which has one.
   *
   * A confirmation page is a second LAYOUT, never a second asset: modelling it
   * as its own asset would give it a lifecycle, an activation and a state it
   * does not have.
   * @public
   */
  PageType?: LayoutPageType | undefined;
}

/**
 * One layout a multi-layout asset offers.
 * @public
 */
export interface CampaignAssetLayoutOption {
  /**
   * The value that selects this option.
   * @public
   */
  Value: string | undefined;

  /**
   * Display label.
   * @public
   */
  Label?: string | undefined;

  /**
   * The fields this option uses: the FieldValues that stay in scope when it is
   * selected. Lets a client show an option's form before selecting it.
   * @public
   */
  FieldIds: string[] | undefined;

  /**
   * This option's pages, in page order.
   * @public
   */
  LayoutPreviews?: LayoutPreview[] | undefined;
}

/**
 * A multi-layout asset's layout choice: the selection, when made, and its options.
 * @public
 */
export interface CampaignAssetLayout {
  /**
   * The selected option's value. An asset is created with its first option
   * selected; an asset created before that rule, with none stored, reports and
   * activates its first option.
   * @public
   */
  Selected?: string | undefined;

  /**
   * Every option the asset was created with, in authored order.
   * @public
   */
  Options: CampaignAssetLayoutOption[] | undefined;
}

/**
 * One asset that exists as a result of this call.
 * @public
 */
export interface BatchCreateCampaignAssetResult {
  /**
   * The entry's request identifier.
   * @public
   */
  SourceAssetTemplateId: string | undefined;

  /**
   * The asset's identifier, derived from (CampaignId, SourceAssetTemplateId)
   * rather than minted, so the same entry always resolves to the same id.
   * @public
   */
  Id: string | undefined;

  /**
   * For a multi-layout blueprint, the asset's layout options, so a client can
   * render the first layout picker without reading each asset back. Nothing
   * is selected at creation. Absent for a single-layout blueprint.
   * @public
   */
  Layout?: CampaignAssetLayout | undefined;
}

/**
 * Output for BatchCreateCampaignAsset.
 *
 * Per-entry, per AWS Batch Operations. `Errors` is required and is empty rather
 * than absent on a fully successful call; `Successful` is the success list the
 * standard makes optional, and DG returns it because a client otherwise cannot
 * learn the ids that were created.
 *
 * Status is 200 whenever entries were processed individually -- including when
 * every entry failed, since the batch itself succeeded and the entries did not.
 * A 4xx means the batch could not be attempted as a whole and nothing was
 * written.
 *
 * A partial batch is a real state and the recovery is to re-send the same entry
 * list: an entry is idempotent by identity (I-15/I-16), so what landed no-ops
 * and what did not gets created. An already-existing asset is therefore a
 * `Successful` row, not an error -- were it an error, a client looping until
 * `Errors` is empty would never terminate.
 * @public
 */
export interface BatchCreateCampaignAssetResponse {
  /**
   * One entry per blueprint that could not be instantiated. Empty, never
   * absent, when all entries succeeded.
   * @public
   */
  Errors: BatchCreateCampaignAssetError[] | undefined;

  /**
   * One entry per asset that exists as a result of this call, whether created
   * here or already present.
   * @public
   */
  Successful?: BatchCreateCampaignAssetResult[] | undefined;
}

/**
 * A field that failed validation.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The member of the request that failed, as the request names it: `FieldValues` for a template field value,
   * `Layout`, `EmailTarget`, `Identifier`, and so on. It is never a template field id: a template field is
   * always `FieldValues`, with the field in `FieldId`.
   * @public
   */
  Name: string | undefined;

  /**
   * The template field that failed, when `Name` is `FieldValues`; absent otherwise.
   * @public
   */
  FieldId?: string | undefined;

  /**
   * Why this field failed, in prose a partner can be shown directly.
   * @public
   */
  Message: string | undefined;

  /**
   * Why this field failed, as a value a client branches on. Read this rather than `Message`.
   * @public
   */
  Code?: ValidationExceptionFieldCode | undefined;
}

/**
 * A reference to a partner-supplied file in the Partner Central file staging bucket.
 *
 * <p>The URI must be `s3://\{stagingBucket\}/\{callerAccountId\}/…`, where the account id segment
 * equals the caller's session-derived account — never an account named in the request body. A
 * mismatch is refused `FILE_REFERENCE_NOT_OWNED`; any other bucket, `FILE_REFERENCE_INVALID`.
 *
 * <p>`VersionId` is required: the staging bucket is versioned, and the service takes exactly the
 * version the upload returned, so a later upload to the same key cannot change what was
 * referenced. The service copies that version into storage it controls and pins the copy for
 * scanning and processing.
 * @public
 */
export interface FileRef {
  /**
   * The `s3://` location of the file.
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The version of the object to take: the `VersionId` the staging upload returned.
   * @public
   */
  VersionId: string | undefined;
}

/**
 * An amount of money in a named currency.
 *
 * <p>The amount is a decimal string, not a float: a budget is exact, and binary floating point
 * cannot represent every two-decimal value. Mirrors the Partner Central Selling API's
 * `ExpectedCustomerSpend.Amount`.
 * @public
 */
export interface MonetaryValue {
  /**
   * The amount, as a decimal string with at most two decimal places.
   * @public
   */
  Amount: string | undefined;

  /**
   * The ISO 4217 currency the amount is denominated in.
   * @public
   */
  CurrencyCode: string | undefined;
}

/**
 * A key-value pair applied to a resource.
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   * @public
   */
  Key: string | undefined;

  /**
   * The tag value.
   * @public
   */
  Value: string | undefined;
}

/**
 * Advisory targeting metadata for a campaign.
 *
 * <p>Describes who the campaign is *about*, and never drives a send — that is `EmailTarget`.
 * Nothing here is validated at create, because a partner refines it across the wizard.
 * @public
 */
export interface TargetAudience {
  /**
   * Target industries.
   * @public
   */
  Industries?: Industry[] | undefined;

  /**
   * Target company sizes.
   * @public
   */
  CompanySizes?: CompanySize[] | undefined;

  /**
   * Target countries, as ISO 3166-1 alpha-2 codes.
   * @public
   */
  Countries?: string[] | undefined;
}

/**
 * Input for CreateCampaign operation.
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * The campaign template this campaign draws its assets from.
   *
   * <p>Binds the campaign to a single source template: every asset must come from this
   * template's asset templates, and one from another template is refused at
   * `BatchCreateCampaignAsset`. Immutable once set. Every campaign has one: a campaign's language
   * and its assets' blueprints both come from its template.
   *
   * <p>Templates are AWS-authored and read-only — they are discovered through
   * `SearchCampaignTemplates` and `GetCampaignTemplate`, and there is no create, update or
   * delete operation for one.
   *
   * <p>The template's id only: a campaign template has no ARN (DG-084). The member keeps the
   * `<Resource>Id` name, which is the convention for referencing another resource from a body.
   * @public
   */
  CampaignTemplateId: string | undefined;

  /**
   * The address every email of this campaign is sent from.
   *
   * <p>Printable ASCII only, with no spaces or line breaks, or field code `PATTERN_MISMATCH`. Then three rules, all
   * checked when the sender is set. Its domain must exactly match, ignoring case, the domain
   * of the partner's alliance lead email in AWS Partner Central (a subdomain does not), or field code
   * `SENDER_DOMAIN_NOT_ALLIANCE_LEAD`. Then, for a sender at example.com, DNS must hold the CNAME
   * `dkim._domainkey.example.com` → `dkim._domainkey.md02.com` (field code `SENDER_DOMAIN_DKIM_MISSING`) and a
   * DMARC record, one TXT `_dmarc.example.com` starting `v=DMARC1` with a `p` of `none`, `quarantine` or `reject`
   * (field code `SENDER_DOMAIN_DMARC_MISSING`). Both DNS codes are reported together when both records are missing.
   *
   * <p>A partner who can't satisfy them can't set a sender, so can't run email campaigns. A shared mail provider's
   * domain, such as gmail.com, can't carry the records. Optional here: a campaign with no sender can be created
   * and edited, but its email assets cannot be activated until one is set.
   * @public
   */
  SenderEmail?: string | undefined;

  /**
   * The URL of the partner's privacy policy, linked from every email and landing page footer. Optional here: a
   * campaign whose emails or landing pages show it cannot activate them until one is set.
   * @public
   */
  PrivacyPolicyUrl?: string | undefined;

  /**
   * The partner's physical postal address, shown in every email footer and as a landing page's contact line.
   * Optional here: an email that shows it cannot activate until one is set. A landing page that shows it
   * publishes it empty when it is unset, and a document's footer then prints the partner's name alone.
   * @public
   */
  PartnerAddress?: string | undefined;

  /**
   * The partner's badge — a tier or designation badge from AWS Partner Badge Manager — shown in every badge slot
   * of the campaign's emails, landing pages and documents. Optional: until one is set, every badge slot shows the
   * Standalone AWS Partner badge.
   *
   * <p>A PNG or JPEG of at most 2 MB, staged like an asset image and checked the same way: it must have passed
   * the staging scan (`SCAN_REJECTED`, or `SCAN_IN_PROGRESS` while it is pending), and its bytes must be the
   * format its name says (`IMAGE_FORMAT_NOT_SUPPORTED`). Any shape is accepted: a badge is drawn whole, never
   * cropped. Content moderation judges it when an asset that shows it is activated.
   * @public
   */
  PartnerBadge?: FileRef | undefined;

  /**
   * The campaign's send audience — a CSV of recipient email addresses.
   *
   * <p>The campaign's *target*: who the campaign is sent to, as distinct from a
   * `CampaignAsset`, which is the content that is sent. It sits on the campaign and not on the
   * activation call because a partner assembles it in the same wizard flow that sets the
   * name and the dates — and because attaching it here means it is validated,
   * staged and resolved to a count before anything is activated, rather than at the
   * last click.
   *
   * <p>Required format: a header row naming the email column `Email`, `E-mail`,
   * `Email Address` or `E-mail Address` — compared without case, spaces or punctuation.
   * Other columns are permitted and ignored, and with two email columns the first is used.
   * A file without such a header is refused with field code `EMAIL_COLUMN_MISSING`: the
   * address column is never guessed. The rows reach the delivery platform's importer as the
   * partner wrote them — a partner's audience is never rewritten.
   *
   * <p>At most 5 MB, checked against the object's size before anything is copied, and at
   * most 10,000 distinct addresses, refused with `RECIPIENT_LIST_TOO_LARGE`. A file with no
   * valid address at all is refused with `RECIPIENT_LIST_EMPTY`; otherwise rows without a
   * usable address are not a refusal: they are skipped and counted, and `GetCampaign`
   * reports the counts. Optional here, because a campaign is a container and holds no state
   * to be incomplete in — but an email asset cannot be activated without it, so the
   * requirement moved to the point of activation.
   *
   * <p>Editable at any time, and an edit reaches the delivery platform only when an asset is
   * activated after it. Each email activation loads the audience into a contact list of its
   * own, so an address taken off the file is not sent to by the next activation.
   *
   * <p>The bytes are write-only. No response returns a URL or an `S3Uri` for this file;
   * `GetCampaign` returns the scan verdict, when the list was attached and how its rows
   * resolved, and nothing more.
   * @public
   */
  EmailTarget?: FileRef | undefined;

  /**
   * Engagement groups whose contacts the campaign's emails will also go to: the `Id`s
   * `ListEngagementGroups` returns (AWS Partner Central Selling). 1–10, each named once.
   *
   * <p>Each group is named once: a repeated id is refused with field code `INVALID_VALUE`.
   * Not checked against your groups when saved. StartCampaignAssetActivationTask resolves
   * them to recipients. On a stage that can't resolve groups yet, Start refuses an email
   * while groups are set (`ENGAGEMENT_GROUPS_UNAVAILABLE`), rather than send to
   * `EmailTarget` alone.
   * @public
   */
  EmailTargetEngagementGroupIds?: string[] | undefined;

  /**
   * Advisory targeting metadata. Refined later, and not validated here.
   * @public
   */
  TargetAudience?: TargetAudience | undefined;

  /**
   * What the partner expects the campaign to cost.
   * @public
   */
  EstimatedBudget?: MonetaryValue | undefined;

  /**
   * The campaign's total budget.
   * @public
   */
  TotalBudget?: MonetaryValue | undefined;

  /**
   * The first day of the campaign's run window. Not after `EndOn` (`ValidationException`, `INVALID_VALUE`).
   * @public
   */
  StartOn?: string | undefined;

  /**
   * The last day of the campaign's run window, inclusive and in UTC. Not in the past: the campaign completes
   * at the UTC midnight after it (see `CampaignState`). A scheduled send must fall on or before it.
   *
   * Optional here, but required before any asset activates: until it is set, GetCampaign's `ActivationIssues`
   * reports `END_ON_MISSING` and StartCampaignAssetActivationTask refuses (`CAMPAIGN_INCOMPLETE`). Set it with
   * UpdateCampaign.
   * @public
   */
  EndOn?: string | undefined;

  /**
   * Idempotency token. Same token within 24h returns existing resource.
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Tags to apply at creation.
   *
   * Tag-on-create rather than create-then-tag is a Tagris requirement, not a
   * convenience: it is what lets a tag-based access control policy govern the
   * creation itself. A campaign created untagged and tagged a moment later is
   * briefly outside any such policy.
   *
   * <p>A key beginning `aws:` (any case) is reserved for AWS-applied system tags and is
   * refused with `ValidationException`, as is a key repeated in the list; nothing is
   * created. The tags are recorded before the campaign is written, so a create that
   * cannot record them fails and creates nothing. A retry with the same `ClientToken`
   * returns the campaign the first attempt created and does not re-apply tags — use
   * `TagResource` to change them afterwards. `ListTagsForResource` returns them.
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Output for CreateCampaign.
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * The new campaign's identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The new campaign's ARN.
   * @public
   */
  Arn: string | undefined;
}

/**
 * Input for DeactivateCampaignAsset.
 * @public
 */
export interface DeactivateCampaignAssetRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The asset identifier.
   * @public
   */
  CampaignAssetIdentifier: string | undefined;
}

/**
 * Output for DeactivateCampaignAsset.
 *
 * Synchronous, so the outcome of the stop is this response — there is no
 * `lastDeactivationStatus`, and its absence is not an oversight. Activation is
 * asynchronous and its outcome arrives long after the response, which is why
 * that one has to be persisted where a partner can read it later.
 * @public
 */
export interface DeactivateCampaignAssetResponse {
  /**
   * The asset identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The asset's lifecycle position — INACTIVE once the stop is confirmed.
   * @public
   */
  State: CampaignAssetState | undefined;

  /**
   * How the most recent *activation* attempt ended, which a stop does not
   * change. Read with state, it is what separates a stopped asset
   * (INACTIVE + SUCCEEDED) from one never activated (INACTIVE, this member
   * absent). Omitted until a first activation has been attempted.
   * @public
   */
  LastActivationStatus?: AttemptStatus | undefined;

  /**
   * Why the asset sits where it does. Present when LastActivationStatus is
   * FAILED, or on a deliberate INACTIVE.
   * @public
   */
  StateReason?: CampaignAssetStateReason | undefined;
}

/**
 * Input for DeleteCampaign.
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign to delete.
   * @public
   */
  CampaignIdentifier: string | undefined;
}

/**
 * Input for DeleteCampaignAsset operation.
 * @public
 */
export interface DeleteCampaignAssetRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The asset identifier.
   * @public
   */
  CampaignAssetIdentifier: string | undefined;
}

/**
 * Input for GetCampaign operation.
 * @public
 */
export interface GetCampaignRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;
}

/**
 * The campaign's attached recipient list, as read — metadata only.
 *
 * <p>No URL and no `S3Uri`, presigned or otherwise. The file is a list of email addresses
 * belonging to people who are not the partner, so there is no read path for the bytes at all;
 * what a caller needs is whether the list was accepted and how many recipients it resolved to.
 *
 * <p>The three counts describe the file as it was read when attached. They are absent for a list
 * attached before the service began reading lists at upload.
 * @public
 */
export interface EmailTargetDetail {
  /**
   * The scan verdict for the attached list.
   * @public
   */
  ScanStatus?: ScanStatus | undefined;

  /**
   * When the list was attached.
   * @public
   */
  AttachedAt?: Date | undefined;

  /**
   * Distinct usable addresses — the recipients an email activation sends to.
   * @public
   */
  ValidCount?: number | undefined;

  /**
   * Rows skipped because their email cell is not a usable address.
   * @public
   */
  RejectedCount?: number | undefined;

  /**
   * Rows repeating an address already counted. Not an error: each address is sent to once.
   * @public
   */
  DuplicateCount?: number | undefined;

  /**
   * The display name of the uploaded file, as the partner named it, with no path: for example
   * `Q4 leads.csv`. Absent for a list attached before the service kept the name. There is no link to
   * the file: the list is never downloadable from the campaign.
   * @public
   */
  FileName?: string | undefined;
}

/**
 * The campaign's partner badge, as read.
 * @public
 */
export interface PartnerBadgeDetail {
  /**
   * A presigned GET of the badge, which expires one hour after the read: fetch it again with `GetCampaign` when
   * it returns 403.
   * @public
   */
  Url: string | undefined;

  /**
   * When the badge was set.
   * @public
   */
  AttachedAt: Date | undefined;
}

/**
 * A partner's branding, read from their AWS Partner Central profile.
 *
 * <p>The profile is the only source: a campaign carries no branding of its own, so every campaign of a
 * partner shows the same identity, vetted by Partner Central. Edit it in Partner Central.
 * @public
 */
export interface PartnerProfileBranding {
  /**
   * The profile's display name.
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The profile's website.
   * @public
   */
  WebsiteUrl?: string | undefined;

  /**
   * The profile's logo URL, as AWS Partner Central serves it — the image every asset of the campaign shows.
   * Absent when the profile names none.
   *
   * <p>Partner Central Marketing keeps no copy: the same URL is written into a published landing page and email, and
   * fetched when a document is composed, so what a client renders from it is what is sent. Only a document
   * fetches the image: one it cannot fetch and draw fails that asset with `INTERNAL_ERROR`, which a retry can clear.
   * A landing page or email links the URL as given, so a logo that does not load shows as a broken image.
   * @public
   */
  LogoUrl?: string | undefined;

  /**
   * When this branding was last read from Partner Central. Earlier than the request when Partner Central
   * could not be reached and Partner Central Marketing answered from its last copy.
   * @public
   */
  RefreshedAt: Date | undefined;
}

/**
 * A marketing campaign resource.
 * @public
 */
export interface Campaign {
  /**
   * The campaign identifier.
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The campaign ARN.
   * @public
   */
  Arn: string | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * The campaign's state, derived on every read from `EndOn` and its assets. See `CampaignState`.
   * @public
   */
  State: CampaignState | undefined;

  /**
   * The campaign template this campaign draws its assets from. Set at create, immutable.
   * @public
   */
  CampaignTemplateId?: string | undefined;

  /**
   * The language the campaign's assets are written and typeset in: its template's `LanguageCode`, set at
   * create. To work in another language, create the campaign from that language's template.
   * @public
   */
  Language?: AssetLanguage | undefined;

  /**
   * The partner's branding — display name, website and logo — from their AWS Partner Central profile,
   * rendered onto every asset of this campaign. Read-only here: the partner edits it in Partner Central,
   * and the next activation or export uses the change. Absent only when the partner has no profile.
   * @public
   */
  PartnerProfile?: PartnerProfileBranding | undefined;

  /**
   * The address the campaign's emails are sent from. Absent until one is set.
   * @public
   */
  SenderEmail?: string | undefined;

  /**
   * The URL of the partner's privacy policy. Absent until one is set.
   * @public
   */
  PrivacyPolicyUrl?: string | undefined;

  /**
   * The partner's postal address. Absent until one is set.
   * @public
   */
  PartnerAddress?: string | undefined;

  /**
   * The partner's badge. Absent until one is set, and every badge slot shows the Standalone AWS Partner badge
   * while the partner's primary AWS Partner path is at stage Validated or Differentiated. Below that, no badge is
   * shown.
   * @public
   */
  PartnerBadge?: PartnerBadgeDetail | undefined;

  /**
   * The attached recipient list — metadata only. There is no read path for the addresses.
   * @public
   */
  EmailTarget?: EmailTargetDetail | undefined;

  /**
   * The engagement groups set by `CreateCampaign` / `UpdateCampaign`. Absent until set.
   * Resolved to recipients at Start, where the stage can.
   * @public
   */
  EmailTargetEngagementGroupIds?: string[] | undefined;

  /**
   * The account the campaign's social posts publish from, per platform, as set by `UpdateCampaign`. Absent until
   * one is set.
   *
   * <p>Needed only for a platform where you hold two or more connections. With none set, a post uses your one
   * connection on its platform, and fails `SOCIAL_CONNECTION_NOT_CHOSEN` when you hold several. A choice that no
   * longer names a connection on its platform fails `SOCIAL_CONNECTION_MISSING`. Join with
   * `ListSocialConnections` for each connection's status.
   * @public
   */
  SocialConnections?: Partial<Record<Platform, string[]>> | undefined;

  /**
   * What the partner expects the campaign to cost.
   * @public
   */
  EstimatedBudget?: MonetaryValue | undefined;

  /**
   * The campaign's total budget.
   * @public
   */
  TotalBudget?: MonetaryValue | undefined;

  /**
   * Target audience configuration.
   * @public
   */
  TargetAudience?: TargetAudience | undefined;

  /**
   * The first day of the campaign's run window.
   * @public
   */
  StartOn?: string | undefined;

  /**
   * The last day of the campaign's run window.
   * @public
   */
  EndOn?: string | undefined;

  /**
   * Creation timestamp.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Last update timestamp.
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Campaign settings that must be set before the assets listed in each issue
   * can be activated. Empty when nothing is missing.
   *
   * Each issue names the setting in `CampaignSetting` — set it with `UpdateCampaign` — or the
   * profile value in `PartnerProfileField` — set it in Partner Central — and the assets it blocks
   * in `AffectedAssetIds`.
   * `StartCampaignAssetActivationTask` refuses with `ValidationException`
   * (`CAMPAIGN_INCOMPLETE`) while a requested asset is affected.
   * @public
   */
  ActivationIssues: ActivationIssue[] | undefined;
}

/**
 * Output for GetCampaign.
 * @public
 */
export interface GetCampaignResponse {
  /**
   * The campaign.
   * @public
   */
  Campaign: Campaign | undefined;
}

/**
 * Input for GetCampaignAsset operation.
 * @public
 */
export interface GetCampaignAssetRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The asset identifier.
   * @public
   */
  CampaignAssetIdentifier: string | undefined;
}

/**
 * An image field's constraints and default.
 * @public
 */
export interface ImageFieldType {
  /**
   * Maximum accepted file size in bytes.
   * @public
   */
  MaxSizeBytes?: number | undefined;

  /**
   * Accepted image formats.
   * @public
   */
  AllowedFormats?: ImageFormat[] | undefined;

  /**
   * The AWS-authored image the asset uses until the partner sets one: shown in previews and published in an empty
   * slot of an email, landing page, banner ad or social post. It fills a required image field. A document leaves an
   * empty image slot blank.
   * @public
   */
  DefaultValue?: LayoutPreview | undefined;

  /**
   * The image size, in pixels, that fills this slot and prints sharply, for example 1920 x 301 for a
   * full-width header. Shown to the partner as "Recommended: W x H px".
   *
   * Present, together with `RecommendedHeightPixels`, on document (PDF) image slots only, where the slot is a
   * fixed rectangle. Such a slot is always filled: the image is scaled to cover it, centred, and clipped to
   * it, the same as CSS `object-fit: cover`. An image whose shape is too far from W:H is refused with
   * `IMAGE_ASPECT_RATIO_MISMATCH`; one narrower than W is accepted. A slot showing the partner's logo or badge,
   * and a slot without the two members (every slot from before sizes existed), fits the image inside instead
   * (`object-fit: contain`): a logo or a badge is never cropped. Email and landing-page image slots are laid out
   * by HTML and carry neither.
   * @public
   */
  RecommendedWidthPixels?: number | undefined;

  /**
   * The image height, in pixels, that fills this slot. Present exactly when `RecommendedWidthPixels` is.
   * @public
   */
  RecommendedHeightPixels?: number | undefined;
}

/**
 * A rich-text field's constraints and placeholder. Distinct from text because the
 * value is a markup fragment whose permitted tags are part of the contract:
 * a client needs the tag list to configure its editor, and the service needs
 * it to sanitize.
 * @public
 */
export interface RichTextFieldType {
  /**
   * Maximum accepted length of the markup fragment.
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * The HTML tags permitted in the value. Anything else is stripped.
   * @public
   */
  AllowedTags: string[] | undefined;

  /**
   * Example markup shown where the field is empty in a preview of the asset, restricted to AllowedTags. Never the
   * asset's value: it is not set on the asset at create, does not fill a required field, and is never published.
   * @public
   */
  Placeholder?: string | undefined;
}

/**
 * A plain-text field's constraints and placeholder.
 * @public
 */
export interface TextFieldType {
  /**
   * Minimum accepted length.
   * @public
   */
  MinLength?: number | undefined;

  /**
   * Maximum accepted length.
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * Regular expression the value must match — used for URL, email, phone
   * and hex-colour fields.
   * @public
   */
  Pattern?: string | undefined;

  /**
   * Example text shown where the field is empty in a preview of the asset. Never the asset's value: it is not set
   * on the asset at create, does not fill a required field, and is never published.
   * @public
   */
  Placeholder?: string | undefined;
}

/**
 * The kind of a template field, carrying that kind's constraints, placeholder or default.
 * One discriminator instead of a separate kind enum, constraints blob and
 * preset value, so kind and constraints cannot disagree. Read-only — templates
 * are AWS-authored; the service validates each partner value against it.
 *
 * A URL the partner types is not a distinct kind: it is text with a URL pattern, and its link
 * role is carried by the layout placeholder. The same holds for a colour,
 * which is text with a hex-colour pattern. A link to another of the campaign's
 * assets, whose URL DG writes at activation, is `AssetLink`.
 * @public
 */
export type FieldType =
  | FieldType.AssetLinkMember
  | FieldType.ImageMember
  | FieldType.RichTextMember
  | FieldType.TextMember
  | FieldType.$UnknownMember;

/**
 * @public
 */
export namespace FieldType {
  /**
   * A plain-text field.
   * @public
   */
  export interface TextMember {
    Text: TextFieldType;
    RichText?: never;
    Image?: never;
    AssetLink?: never;
    $unknown?: never;
  }

  /**
   * A field whose value is a constrained HTML fragment.
   * @public
   */
  export interface RichTextMember {
    Text?: never;
    RichText: RichTextFieldType;
    Image?: never;
    AssetLink?: never;
    $unknown?: never;
  }

  /**
   * An image field.
   * @public
   */
  export interface ImageMember {
    Text?: never;
    RichText?: never;
    Image: ImageFieldType;
    AssetLink?: never;
    $unknown?: never;
  }

  /**
   * A link to another asset on the same campaign. The partner chooses which asset, by `LinkedAssetId`; at
   * activation DG writes that asset's public URL into the field. A landing page's download button is one,
   * naming a `DOCUMENT`.
   * @public
   */
  export interface AssetLinkMember {
    Text?: never;
    RichText?: never;
    Image?: never;
    AssetLink: AssetLinkFieldType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Text?: never;
    RichText?: never;
    Image?: never;
    AssetLink?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Text: (value: TextFieldType) => T;
    RichText: (value: RichTextFieldType) => T;
    Image: (value: ImageFieldType) => T;
    AssetLink: (value: AssetLinkFieldType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * One slot in an asset template's layout: addressing key, placement, and the
 * field kind carrying its own constraints, placeholder or default.
 * @public
 */
export interface CampaignAssetTemplateField {
  /**
   * The field identifier; matches a \{\{fieldId\}\} slot in the layout.
   * @public
   */
  FieldId: string | undefined;

  /**
   * Human-readable name for the field, for display. Authored in the template policy, never derived
   * from the field id or the source layout's field name: the id is a slug (`Page_2_Title`) and is
   * not meant to be shown to a partner. Absent on fields imported before labels existed.
   * @public
   */
  Label?: string | undefined;

  /**
   * What belongs in this field, in English: its role in the asset and what good content for it is (for example
   * "Headline that names the customer and leads with a source-backed statistic"). AWS-authored with the template;
   * never written by a partner. Absent when the template carries none, never empty. Pinned onto the asset with the
   * field, so a corrected description reaches assets created after the correction.
   * @public
   */
  Description?: string | undefined;

  /**
   * Layout section the field belongs to.
   * @public
   */
  Section?: TemplateFieldSection | undefined;

  /**
   * One-based page number, for paginated layouts (print documents).
   * @public
   */
  Page?: number | undefined;

  /**
   * Whether the field must be filled before the asset can be activated.
   * Derived from DG policy — never inherited from an upstream authoring system.
   *
   * Required for activation, not for saving: `UpdateCampaignAsset` accepts
   * partial content and may clear a required field. An unfilled required field
   * appears in the asset's `ActivationIssues` as `REQUIRED_FIELD_MISSING`, and
   * activation refuses the asset with the same code.
   *
   * A text field is filled only by a non-blank value, and a rich-text field only by a value with non-blank text;
   * a `Placeholder` never fills one. An image field is filled by the partner's image or by the template's
   * `DefaultValue`. A field the campaign fills (`CampaignSetting`) or the partner's profile fills
   * (`PartnerProfileField`) is never unfilled on the asset.
   * @public
   */
  Required?: boolean | undefined;

  /**
   * The field kind, with that kind's constraints, placeholder or default.
   * @public
   */
  Type: FieldType | undefined;

  /**
   * The campaign setting this field shows, when it shows one: the partner sets it once on the campaign and
   * every asset displays it. Present only on such fields.
   *
   * A client shows the field as "Set on the campaign", linking to the campaign, rather than as an input.
   * `UpdateCampaignAsset` refuses a value for it with `FIELD_SET_ON_CAMPAIGN`, and on an asset the field
   * carries no value: read it from the named member of `GetCampaign`'s `Campaign`.
   * @public
   */
  CampaignSetting?: CampaignSetting | undefined;

  /**
   * The partner-profile value this field shows, when it shows one: the partner's AWS Partner Central profile
   * supplies it, and every asset of every campaign displays it. Present only on such fields.
   *
   * A client shows the field as "From your Partner Central profile" rather than as an input.
   * `UpdateCampaignAsset` refuses a value for it with `FIELD_FROM_PARTNER_PROFILE`. On a read the field carries
   * the partner's resolved value — the logo as its URL, the name and website as text — so a slot renders from
   * this list alone; `GetCampaign`'s `Campaign$PartnerProfile` carries the same three values.
   * @public
   */
  PartnerProfileField?: PartnerProfileField | undefined;
}

/**
 * An image stored on one of your assets, named by the field that holds it.
 * @public
 */
export interface CampaignAssetImageSource {
  /**
   * The source campaign's id or ARN.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The source asset's id.
   * @public
   */
  CampaignAssetIdentifier: string | undefined;

  /**
   * The source image field.
   * @public
   */
  FieldId: string | undefined;
}

/**
 * The value of a template field. Exactly one variant is set, matching the
 * field's type: text and RichText fields use text, image fields use
 * ImageReference (or, on a write, CampaignAssetImage), AssetLink fields use LinkedAssetId.
 * @public
 */
export type TemplateFieldValue =
  | TemplateFieldValue.CampaignAssetImageMember
  | TemplateFieldValue.ImageReferenceMember
  | TemplateFieldValue.LinkedAssetIdMember
  | TemplateFieldValue.TextMember
  | TemplateFieldValue.$UnknownMember;

/**
 * @public
 */
export namespace TemplateFieldValue {
  /**
   * Text value — for both text and RichText fields. A RichText value is a
   * markup fragment restricted to the field's AllowedTags.
   * @public
   */
  export interface TextMember {
    Text: string;
    ImageReference?: never;
    LinkedAssetId?: never;
    CampaignAssetImage?: never;
    $unknown?: never;
  }

  /**
   * Image reference (image fields).
   *
   * On a write, one of exactly two forms:
   * - the `s3://` URI of a file you staged in the Partner Central file staging bucket. It is scanned, then
   *   copied into this asset.
   * - the URL Build with AI returned for a suggested image, unchanged. It is copied into this asset and not
   *   scanned.
   * Any other URL is refused with `FILE_REFERENCE_INVALID`, including one a read returned: to keep the current
   * image, omit the field; to put it on another asset, use `CampaignAssetImage`.
   *
   * On a read, a URL the caller can fetch:
   * an image in the asset's own storage comes back as a presigned GET that expires one hour after the
   * read, so fetch it again with `GetCampaignAsset` when it returns 403; an image already on DG's
   * public CDN comes back as that stable URL.
   * A stored reference outside this asset's storage, or not a raster image, is never signed, and the
   * value is omitted. The signed URL serves the image as its image type, whatever the upload declared.
   * @public
   */
  export interface ImageReferenceMember {
    Text?: never;
    ImageReference: string;
    LinkedAssetId?: never;
    CampaignAssetImage?: never;
    $unknown?: never;
  }

  /**
   * The asset an `AssetLink` field names: the id of an asset on the same campaign, of the field's category.
   * It is a prerequisite of this asset while linked, so it activates first, this asset cannot start until it
   * is live, and it cannot be deleted.
   * @public
   */
  export interface LinkedAssetIdMember {
    Text?: never;
    ImageReference?: never;
    LinkedAssetId: string;
    CampaignAssetImage?: never;
    $unknown?: never;
  }

  /**
   * Write only. Copies an image stored on another of your assets into this image field. The image is checked
   * against this field's constraints and not scanned again. Also requires `partnercentral:GetCampaignAsset` on
   * the source campaign. Reads return the copy as `ImageReference`.
   * @public
   */
  export interface CampaignAssetImageMember {
    Text?: never;
    ImageReference?: never;
    LinkedAssetId?: never;
    CampaignAssetImage: CampaignAssetImageSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Text?: never;
    ImageReference?: never;
    LinkedAssetId?: never;
    CampaignAssetImage?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Text: (value: string) => T;
    ImageReference: (value: string) => T;
    LinkedAssetId: (value: string) => T;
    CampaignAssetImage: (value: CampaignAssetImageSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * One template field on an asset: the schema snapshot taken at instantiation
 * plus the current value. The value is absent while the field is unfilled.
 *
 * Schema and value are one shape rather than two lists because a client
 * rendering an edit form needs both together, and because the pin (design
 * section 3.1) is what an update validates against — separating them would let
 * values outlive the schema they were checked against.
 *
 * Addressed by the **DG** FieldId throughout. The delivery platform's own
 * field-definition ids stay on the template record and are joined in at
 * activation, so a vendor identifier never reaches an asset row or a response
 * (DG-025 containment).
 * @public
 */
export interface CampaignAssetFieldValue {
  /**
   * The field schema (snapshot from the template).
   * @public
   */
  Field: CampaignAssetTemplateField | undefined;

  /**
   * The field's current value; the variant matches the field's type.
   * @public
   */
  Value?: TemplateFieldValue | undefined;
}

/**
 * A marketing asset resource within a campaign.
 * @public
 */
export interface CampaignAsset {
  /**
   * The asset identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The asset category.
   * @public
   */
  Category: CampaignAssetCategory | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * DOCUMENT only: the words a page uses for this document, such as "eBook". Fill an `AssetLink` field's
   * `LabelFieldId` with it when the partner picks this asset.
   * @public
   */
  LinkLabel?: string | undefined;

  /**
   * Whether the asset is live.
   *
   * Reports current truth only, and nothing else on this shape overrides it. During an *initial*
   * publication it stays INACTIVE until the delivery platform holds the object; during a
   * *re*-publication it stays ACTIVE, because the previously published content is still serving.
   *
   * A stopped asset and one never started both read INACTIVE; `LastActivationStatus` tells them
   * apart, because a stop does not change how the last activation went — stopped is INACTIVE with
   * that member `SUCCEEDED`, never started is INACTIVE with it absent.
   *
   * An update never moves this member.
   * @public
   */
  State: CampaignAssetState | undefined;

  /**
   * How the most recent hand-over to the delivery platform ended.
   *
   * The hand-over, not the delivery: if DG got the artifact scheduled at the platform this is
   * SUCCEEDED, and whether the platform then delivered is `DeliveryStatus`. Per category the
   * hand-over point is — email: the mailing armed; social: the create, which *is* the schedule;
   * landing page: create plus publish-personalisation; document: bytes written.
   *
   * Read with `State` this is what separates a stopped asset (INACTIVE with SUCCEEDED here) from
   * one never activated (INACTIVE with this member absent) — a stop does not change how the last
   * *activation* went.
   *
   * There is no public UNKNOWN. A hand-over whose outcome DG cannot yet determine reports
   * IN_PROGRESS, because a partner's action is identical either way and there is nothing to do
   * with "unknown". Reporting it as FAILED would be the harmful collapse: that reads as safe to
   * retry, and a retry on an at-most-once create publishes a second live object.
   *
   * Omitted before the first activation attempt.
   * @public
   */
  LastActivationStatus?: AttemptStatus | undefined;

  /**
   * What the platform did with the artifact after accepting it.
   *
   * EMAIL and SOCIAL_POST only — absent on every other category, which has no delivery event.
   * See the DeliveryStatus docs.
   * @public
   */
  DeliveryStatus?: DeliveryStatus | undefined;

  /**
   * Why delivery failed. Present only when DeliveryStatus is FAILED. For an email the platform
   * rejected: SENDER_EMAIL_INVALID, RECIPIENT_LIST_EMPTY, MAILING_CREDITS_EXHAUSTED or
   * RECIPIENT_LIMIT_EXCEEDED. Otherwise DELIVERY_FAILED. A Facebook post refused because its
   * connection has no Page is FAILED with SOCIAL_CONNECTION_PAGE_REQUIRED, and withdrawn: reconnect
   * Facebook with a Page selected. A social post the platform stopped retrying, because it could not
   * publish within 12 hours of its scheduled time, is FAILED with DELIVERY_FAILED. Any other social post
   * that could not be published stays PENDING while it is investigated, and is reported FAILED with
   * DELIVERY_FAILED once it is confirmed it will not go out. Deactivate and activate the asset again to
   * retry.
   * @public
   */
  DeliveryStatusReason?: CampaignAssetStateReason | undefined;

  /**
   * The asset template this asset was created from: the `SourceAssetTemplateIdentifier` its
   * `BatchCreateCampaignAsset` entry named, one of `GetCampaignTemplate`'s `CampaignTemplate.AssetTemplates[].Id`.
   * Set at create and never writable. Absent on an asset created before DG recorded it, which can't be
   * activated either. A campaign holds at most one asset per asset template, so this is how a
   * client matches a campaign's assets to its template's asset templates, for example to create the same
   * assets in another campaign. Names don't identify one: two asset templates can share a name.
   * @public
   */
  SourceAssetTemplateId?: string | undefined;

  /**
   * SOCIAL_POST only: the platform the post goes to, set from its template and never writable. The same
   * value `CampaignAssetSummary.SocialPlatform` reports. Absent for every other category.
   * @public
   */
  SocialPlatform?: Platform | undefined;

  /**
   * Concrete file format of the finished artifact. For `DOWNLOAD_ONLY` this is
   * the format of the object export copies through verbatim.
   * @public
   */
  FileFormat?: FileFormat | undefined;

  /**
   * When this asset sends, as chosen with UpdateCampaignAsset. `EMAIL` and `SOCIAL_POST` only — the two
   * categories whose delivery platform holds a schedule of its own. Absent until chosen, and then the asset
   * reports `SEND_MODE_MISSING`.
   * @public
   */
  SendMode?: SendMode | undefined;

  /**
   * The send time, present only when `SendMode` is `SCHEDULED`. It reaches the delivery platform at the
   * asset's next activation.
   *
   * Was `scheduleDate: UtcDate`; retyped with the write member of the same name.
   * @public
   */
  ScheduledSendAt?: Date | undefined;

  /**
   * The asset's pinned template fields — the field schema copied from the
   * blueprint at instantiation, each paired with the partner's current value.
   * Present on every asset instantiated from a blueprint that offers editable
   * fields, whatever its category (design section 3.1); absent on one whose
   * blueprint offers none.
   * @public
   */
  FieldValues?: CampaignAssetFieldValue[] | undefined;

  /**
   * The asset's AWS-authored layout, as stable public CDN URLs composed from
   * the fileKeys copied off the blueprint at instantiation. Together with
   * FieldValues this makes the asset self-describing: a client renders the edit
   * form and shows the real layout while editing, with no template lookup.
   *
   * The stored form is a bare object key and the URL is composed on read. The
   * key is revision-addressed and prior revisions are retained, so the key IS
   * the pin — nothing is copied into the asset bucket, and there is no version
   * parameter to carry (DG-038).
   *
   * One entry for every category except LANDING_PAGE, which has two and
   * distinguishes them with PageType.
   *
   * On a multi-layout asset, the SELECTED option's pages only (its first option
   * when none is stored); each option's own previews are on layout.options.
   * @public
   */
  LayoutPreviews?: LayoutPreview[] | undefined;

  /**
   * A multi-layout asset's layout choice (DG-044): the selection once made, and
   * every option the asset was created with. Absent for a single-layout asset.
   *
   * FieldValues is always the union of every option's fields, selected or not,
   * so a client can switch layouts without a round trip: each option lists its
   * own FieldIds. The selection drives layout.selected and the top-level
   * LayoutPreviews only.
   * @public
   */
  Layout?: CampaignAssetLayout | undefined;

  /**
   * What must be fixed on this asset before it can be activated. Empty when the
   * asset is ready.
   *
   * Issues don't block saving: an asset can be saved incomplete and fixed over
   * several updates. `StartCampaignAssetActivationTask` refuses an asset that
   * still has issues: an issue blocks activation when only an edit to the asset
   * can change the outcome. Most issues name the field to fix in `FieldId`. Fix it
   * with `UpdateCampaignAsset`, then read this list again.
   *
   * Besides the issues computed from the asset's content, the list carries
   * what the last activation found: `CONTENT_REJECTED` and `PARTNER_IMAGE_REJECTED`
   * when moderation refused a field. Editing that field removes its issue. A
   * `CONTENT_REJECTED` without a `FieldId` means the text was refused as a whole;
   * editing any text field removes it.
   *
   * Problems with the campaign's own settings, such as a missing recipient list, and
   * with the partner's profile, such as a missing logo, are reported on
   * `Campaign.ActivationIssues`, not here.
   * @public
   */
  ActivationIssues: ActivationIssue[] | undefined;

  /**
   * The live public address this asset's activation produced.
   *
   * A landing page's page URL, read back from the delivery platform at activation and preserved
   * across every convergence; a document's public CDN URL, composed on read from the key the
   * publish wrote. Absent until the asset activates, and absent for EMAIL and SOCIAL_POST, which
   * produce no partner-addressable URL of their own.
   *
   * For a landing page this is the entire deliverable — without it a partner has no way to learn
   * where their live page is. A WIDGET landing page reports none: it is embedded rather than
   * standalone, so absence there is expected rather than a fault.
   * @public
   */
  PublicUrl?: string | undefined;

  /**
   * Creation timestamp.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Last update timestamp.
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Output for GetCampaignAsset.
 * @public
 */
export interface GetCampaignAssetResponse {
  /**
   * The asset resource.
   * @public
   */
  Asset: CampaignAsset | undefined;
}

/**
 * Input for GetCampaignAssetActivationTask.
 * @public
 */
export interface GetCampaignAssetActivationTaskRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign whose current task to read. This addresses the task, and also
   * authorizes the call.
   * @public
   */
  CampaignIdentifier: string | undefined;
}

/**
 * How one asset named in a task is going.
 * @public
 */
export interface CampaignAssetActivationOutcome {
  /**
   * The asset this outcome belongs to.
   * @public
   */
  CampaignAssetId: string | undefined;

  /**
   * This asset's contribution to the task's status.
   * @public
   */
  Status: CampaignAssetActivationStatus | undefined;

  /**
   * Why the activation did not succeed. Present when status is FAILED.
   * @public
   */
  Reason?: CampaignAssetStateReason | undefined;

  /**
   * A description of `Reason` for display. Don't parse it. For a mailing-credit
   * shortfall it states the credits needed and remaining.
   * @public
   */
  Message?: string | undefined;
}

/**
 * Output for GetCampaignAssetActivationTask: the campaign's most recent task.
 * @public
 */
export interface GetCampaignAssetActivationTaskResponse {
  /**
   * The campaign's id. Canonical: because `CampaignIdentifier` accepts an id or an
   * ARN, echoing this tells a caller who passed an ARN what the id is. The task's own
   * id is `TaskId`.
   * @public
   */
  CampaignId: string | undefined;

  /**
   * Opaque correlation value for the task. Echoed so a caller can tell the
   * task it started from a later one that superseded it. Never an input: the
   * campaign is what addresses a task, because a campaign has at most one.
   * @public
   */
  TaskId: string | undefined;

  /**
   * The task's status over every asset it names, refused ones included: one
   * refused and one succeeded is PARTIAL_FAILURE.
   * @public
   */
  TaskStatus: CampaignAssetActivationTaskStatus | undefined;

  /**
   * When the task was created.
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * When the task reached a terminal status. Absent while IN_PROGRESS.
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * One entry per asset the request named, in the order named. An asset
   * refused up front is FAILED from the first response, with its reason.
   * @public
   */
  Assets: CampaignAssetActivationOutcome[] | undefined;
}

/**
 * Input for GetCampaignAssetExportTask.
 *
 * Takes the catalog, the owning campaign, and the export task identifier. The
 * campaign identifier is required so the operation can be authorized on the
 * task's owning campaign/\{CampaignId\}: the task is addressable by its id within
 * the caller's partition, but the campaign is not derivable from the task id
 * alone at authorization time.
 * @public
 */
export interface GetCampaignAssetExportTaskRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign that owns the export task. Accepts the campaign id or ARN.
   * Required so the read is authorized on campaign/\{CampaignId\}; the task must
   * belong to this campaign or the request resolves to not-found.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The export task to retrieve: the `Id` StartCampaignAssetExportTask returned (`etsk-…`).
   *
   * An id only. An export task has no ARN: none is returned, recorded or authorized on (the
   * read authorizes on its campaign), so there is no ARN to accept (DG-063 D-35).
   * @public
   */
  CampaignAssetExportTaskIdentifier: string | undefined;
}

/**
 * Why a campaign asset export task failed. Present only when the task's status
 * is FAILED.
 *
 * Dedicated to the export flow — deliberately not the service-wide
 * FailureReason/FailureCode, so export codes are not advertised in the SDKs of
 * unrelated operations. Treat an unrecognised code as an unspecified failure
 * and fall back to message.
 * @public
 */
export interface CampaignAssetExportFailureReason {
  /**
   * Machine-readable failure cause.
   * @public
   */
  Code: CampaignAssetExportFailureCode | undefined;

  /**
   * Human-readable explanation.
   * @public
   */
  Message: string | undefined;
}

/**
 * Output for GetCampaignAssetExportTask.
 * @public
 */
export interface GetCampaignAssetExportTaskResponse {
  /**
   * The export task identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The task's state.
   * @public
   */
  Status: CampaignAssetExportTaskStatus | undefined;

  /**
   * When the task was created.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Presigned GET URL for the ZIP archive. Present only when status is
   * COMPLETED. Freshly minted on each call and short-lived (<=15 minutes).
   * @public
   */
  DownloadUrl?: string | undefined;

  /**
   * When DownloadUrl expires. Present only when status is COMPLETED.
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * Why the task failed. Present only when status is FAILED.
   * @public
   */
  FailureReason?: CampaignAssetExportFailureReason | undefined;
}

/**
 * Input for ListCampaignAssets operation.
 * @public
 */
export interface ListCampaignAssetsRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * Maximum results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary representation of an asset for list operations.
 * @public
 */
export interface CampaignAssetSummary {
  /**
   * The asset identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The asset category.
   * @public
   */
  Category: CampaignAssetCategory | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * DOCUMENT only: the words a page uses for this document, such as "eBook". A client listing the
   * candidates for an `AssetLink` field reads it here, so a preview can update on pick without a fetch.
   * @public
   */
  LinkLabel?: string | undefined;

  /**
   * Where the asset sits in its lifecycle.
   * @public
   */
  State?: CampaignAssetState | undefined;

  /**
   * How the last hand-over to the delivery platform ended. Absent before the first activation.
   * @public
   */
  LastActivationStatus?: AttemptStatus | undefined;

  /**
   * Whether the platform has delivered the asset.
   * @public
   */
  DeliveryStatus?: DeliveryStatus | undefined;

  /**
   * Why delivery failed. Present only when DeliveryStatus is FAILED. For an email the platform
   * rejected: SENDER_EMAIL_INVALID, RECIPIENT_LIST_EMPTY, MAILING_CREDITS_EXHAUSTED or
   * RECIPIENT_LIMIT_EXCEEDED. Otherwise DELIVERY_FAILED. A Facebook post refused because its
   * connection has no Page is FAILED with SOCIAL_CONNECTION_PAGE_REQUIRED, and withdrawn: reconnect
   * Facebook with a Page selected. A social post the platform stopped retrying, because it could not
   * publish within 12 hours of its scheduled time, is FAILED with DELIVERY_FAILED. Any other social post
   * that could not be published stays PENDING while it is investigated, and is reported FAILED with
   * DELIVERY_FAILED once it is confirmed it will not go out. Deactivate and activate the asset again to
   * retry.
   * @public
   */
  DeliveryStatusReason?: CampaignAssetStateReason | undefined;

  /**
   * The asset template this asset was created from. The same value `CampaignAsset.SourceAssetTemplateId`
   * reports, and absent when it is.
   * @public
   */
  SourceAssetTemplateId?: string | undefined;

  /**
   * SOCIAL_POST only: the platform the post goes to. Join it with ListSocialConnections' status
   * for that platform to show a post that cannot activate (a connection missing, EXPIRED or
   * PAGE_REQUIRED) before Start is pressed.
   * @public
   */
  SocialPlatform?: Platform | undefined;

  /**
   * When the asset first went live, set once. Absent if it never has.
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * Concrete file format of the finished artifact.
   * @public
   */
  FileFormat?: FileFormat | undefined;

  /**
   * When this asset sends, as chosen with UpdateCampaignAsset. `EMAIL` and `SOCIAL_POST` only — the two
   * categories whose delivery platform holds a schedule of its own. Absent until chosen, and then the asset
   * reports `SEND_MODE_MISSING`.
   * @public
   */
  SendMode?: SendMode | undefined;

  /**
   * The send time, present only when `SendMode` is `SCHEDULED`. It reaches the delivery platform at the
   * asset's next activation.
   *
   * Was `scheduleDate: UtcDate`; retyped with the write member of the same name.
   * @public
   */
  ScheduledSendAt?: Date | undefined;
}

/**
 * Output for ListCampaignAssets operation.
 * @public
 */
export interface ListCampaignAssetsResponse {
  /**
   * The list of results.
   * @public
   */
  Items: CampaignAssetSummary[] | undefined;

  /**
   * Pagination token.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * How to order `ListCampaigns`. Ties break by campaign id, ascending.
 * @public
 */
export interface CampaignSort {
  /**
   * The attribute to sort by.
   * @public
   */
  SortBy: CampaignSortName | undefined;

  /**
   * The direction.
   * @public
   */
  SortOrder: SortOrder | undefined;
}

/**
 * Input for ListCampaigns operation.
 *
 * Filters combine with AND. Results are eventually consistent: a campaign created, renamed or
 * activated a moment ago can take up to a second to appear with its current values. `GetCampaign`
 * is strongly consistent.
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * Only these campaigns, each named by its id or its campaign ARN. A campaign that does not exist,
   * was deleted, or whose ARN names another account or catalog is left out rather than refused.
   * @public
   */
  CampaignIdentifiers?: string[] | undefined;

  /**
   * Only campaigns whose name contains this, compared case-insensitively.
   * @public
   */
  Name?: string | undefined;

  /**
   * Only campaigns in one of these states.
   * @public
   */
  States?: CampaignState[] | undefined;

  /**
   * The order of the results. Default: `CREATED_AT`, `DESCENDING`.
   * @public
   */
  Sort?: CampaignSort | undefined;

  /**
   * Maximum results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token. Bound to the filters and sort it was issued for: a request that changes
   * `CampaignIdentifiers`, `Name`, `States` or `Sort` between pages is refused with
   * `ValidationException`. `MaxResults` may change.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary representation of a campaign for list operations.
 * @public
 */
export interface CampaignSummary {
  /**
   * The campaign identifier.
   * @public
   */
  CampaignId: string | undefined;

  /**
   * The campaign ARN. Present on the summary so a caller can tag a campaign
   * straight from a list result without a GetCampaign per row — the same
   * reason the audit timestamps are here.
   * @public
   */
  Arn: string | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * The campaign's state, derived on every read from `EndOn` and its assets. See `CampaignState`.
   * @public
   */
  State: CampaignState | undefined;

  /**
   * The language the campaign's assets are written and typeset in. See `Campaign$Language`.
   * @public
   */
  Language?: AssetLanguage | undefined;

  /**
   * The first day of the campaign's run window.
   * @public
   */
  StartOn?: string | undefined;

  /**
   * The last day of the campaign's run window.
   * @public
   */
  EndOn?: string | undefined;

  /**
   * Creation timestamp. Present on the summary so a caller can order a list
   * by recency without reading each campaign in full.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Last update timestamp. Present on the summary for the same reason as
   * CreatedAt.
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Output for ListCampaigns operation.
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * The list of results.
   * @public
   */
  Items: CampaignSummary[] | undefined;

  /**
   * Pagination token.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for StartCampaignAssetActivationTask.
 * @public
 */
export interface StartCampaignAssetActivationTaskRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier, which also authorizes the call.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The assets to activate, in any order — the service derives the dependency
   * order and ignores the order given here.
   * @public
   */
  CampaignAssetIdentifiers: string[] | undefined;

  /**
   * Idempotency token. Two requests carrying the same token are one request,
   * and the second returns the first one's task rather than starting a second.
   *
   * The deduplication window is the **life of the task record**, not a fixed
   * number of hours: replaying a token after the task has expired starts a new
   * task. Stated because a caller would otherwise assume the usual few-hour
   * guarantee.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Output for StartCampaignAssetActivationTask: the task just created.
 * @public
 */
export interface StartCampaignAssetActivationTaskResponse {
  /**
   * The campaign's id. Canonical: because `CampaignIdentifier` accepts an id or an
   * ARN, echoing this tells a caller who passed an ARN what the id is. The task's own
   * id is `TaskId`.
   * @public
   */
  CampaignId: string | undefined;

  /**
   * Opaque correlation value for the task. Echoed so a caller can tell the
   * task it started from a later one that superseded it. Never an input: the
   * campaign is what addresses a task, because a campaign has at most one.
   * @public
   */
  TaskId: string | undefined;

  /**
   * The task's status over every asset it names, refused ones included: one
   * refused and one succeeded is PARTIAL_FAILURE.
   * @public
   */
  TaskStatus: CampaignAssetActivationTaskStatus | undefined;

  /**
   * When the task was created.
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * When the task reached a terminal status. Absent while IN_PROGRESS.
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * One entry per asset the request named, in the order named. An asset
   * refused up front is FAILED from the first response, with its reason.
   * @public
   */
  Assets: CampaignAssetActivationOutcome[] | undefined;
}

/**
 * Input for StartCampaignAssetExportTask.
 * @public
 */
export interface StartCampaignAssetExportTaskRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign whose assets are exported. Accepts the campaign id or ARN.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * Idempotency token. Two requests carrying the same token within the
   * dedup window are one request and return the same task id.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Output for StartCampaignAssetExportTask.
 *
 * Returns the newly created task id and its status, which is always IN_PROGRESS
 * on this synchronous return. Poll GetCampaignAssetExportTask for the outcome.
 * @public
 */
export interface StartCampaignAssetExportTaskResponse {
  /**
   * The export task identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The task's state, always IN_PROGRESS at creation.
   * @public
   */
  Status: CampaignAssetExportTaskStatus | undefined;
}

/**
 * Input for UpdateCampaign operation.
 * @public
 */
export interface UpdateCampaignRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The display name.
   * @public
   */
  Name?: string | undefined;

  /**
   * Sets or replaces the address the campaign's emails are sent from. Checked by the same three rules as on
   * `CreateCampaign`, with the same codes, but only when it differs, ignoring case, from the stored sender: re-sending
   * the stored one is not checked, and `StartCampaignAssetActivationTask` re-checks it before an email activates.
   *
   * <p>Replaces, never clears: like every member of this operation, an omitted value leaves the sender as
   * it was, and there is no way to remove one once set.
   * @public
   */
  SenderEmail?: string | undefined;

  /**
   * Sets or replaces the URL of the partner's privacy policy. Replaces, never clears.
   * @public
   */
  PrivacyPolicyUrl?: string | undefined;

  /**
   * Sets or replaces the partner's postal address. Replaces, never clears.
   * @public
   */
  PartnerAddress?: string | undefined;

  /**
   * Sets or replaces the partner's badge, checked exactly as on `CreateCampaign`. Replaces, never clears: upload
   * the Standalone AWS Partner badge to show it again. The badge an asset already published keeps showing on it
   * until that asset is activated again.
   * @public
   */
  PartnerBadge?: FileRef | undefined;

  /**
   * Replaces the campaign's attached recipient list.
   *
   * <p>The referenced object is copied and pinned again on every call that supplies it, so
   * the pinned copy always reflects the *last* `UpdateCampaign` that named one. Editing the
   * source object in your own bucket without calling this operation again has no effect.
   *
   * <p>Replaces, never detaches: a partner can swap the list but cannot remove it.
   * @public
   */
  EmailTarget?: FileRef | undefined;

  /**
   * Engagement groups whose contacts the campaign's emails will also go to (see
   * `CreateCampaign`). Replaces the stored list; never clears it.
   *
   * <p>As on `CreateCampaign`: each group once (`INVALID_VALUE` otherwise), not checked
   * against your groups when saved, and resolved at Start where the stage can
   * (`ENGAGEMENT_GROUPS_UNAVAILABLE` where it can't).
   * @public
   */
  EmailTargetEngagementGroupIds?: string[] | undefined;

  /**
   * Sets the account the campaign's social posts publish from, per platform. Each platform named replaces that
   * platform's choice; a platform not named keeps its own. Replaces, never clears.
   *
   * <p>Not checked against your connections here: a connection can be deleted at any time, so the activation
   * checks the choice. See `Campaign$SocialConnections`.
   * @public
   */
  SocialConnections?: Partial<Record<Platform, string[]>> | undefined;

  /**
   * What the partner expects the campaign to cost.
   * @public
   */
  EstimatedBudget?: MonetaryValue | undefined;

  /**
   * The campaign's total budget.
   * @public
   */
  TotalBudget?: MonetaryValue | undefined;

  /**
   * Target audience configuration.
   * @public
   */
  TargetAudience?: TargetAudience | undefined;

  /**
   * Idempotency token. Accepted and not stored: this is a change-only partial update with
   * last-writer-wins, so re-applying the same call produces the same result and the same
   * response. There is nothing a replay cache would protect.
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The first day of the campaign's run window. Not after `EndOn` (`ValidationException`, `INVALID_VALUE`).
   * @public
   */
  StartOn?: string | undefined;

  /**
   * The last day of the campaign's run window, inclusive and in UTC.
   *
   * Editable only while the campaign is open, like everything else here: once the stored `EndOn` has passed
   * the campaign is completed and this update is refused (`CAMPAIGN_COMPLETED`). Refused with
   * `ValidationException` (`INVALID_VALUE`) when it is in the past, or earlier than the day of a scheduled
   * send on one of the campaign's assets: move or cancel that send first. Setting it to today ends the
   * campaign at the next UTC midnight.
   * @public
   */
  EndOn?: string | undefined;
}

/**
 * Output for UpdateCampaign.
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * The campaign identifier.
   * @public
   */
  Id: string | undefined;
}

/**
 * A value-only update to one email template field. The write counterpart of
 * CampaignAssetFieldValue: it carries just the addressing key and the new
 * value, never the service-owned schema.
 * @public
 */
export interface FieldValueInput {
  /**
   * The field to update; must match a FieldId in the asset's stored schema.
   * @public
   */
  FieldId: string | undefined;

  /**
   * The new value. Omit to clear the field.
   * @public
   */
  Value?: TemplateFieldValue | undefined;
}

/**
 * Input for UpdateCampaignAsset operation.
 * @public
 */
export interface UpdateCampaignAssetRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign identifier.
   * @public
   */
  CampaignIdentifier: string | undefined;

  /**
   * The asset identifier.
   * @public
   */
  CampaignAssetIdentifier: string | undefined;

  /**
   * Value-only updates to the asset's pinned template fields, keyed by
   * FieldId. The field schema (labels, descriptions, constraints, placeholders, image defaults) is
   * service-owned and pinned at instantiation, so clients send only the
   * values they are changing. Fields omitted keep their stored values; send the entry with `Value` omitted
   * to clear one.
   *
   * Named `FieldValues` to match the member it edits on `CampaignAsset`, which is
   * the same concept read back. It was `templateFieldUpdates`; the two names for one
   * concept were the defect, not the length.
   * @public
   */
  FieldValues?: FieldValueInput[] | undefined;

  /**
   * Selects a multi-layout asset's layout: one of the values in `CampaignAsset.layout.options`.
   *
   * PATCH: omitted leaves the selection unchanged, and there is no way to clear it. A value that
   * is not one of the asset's options — or any value on a single-layout asset — is a plain
   * `ValidationException`, and nothing in the call is applied. Every pinned field stays
   * writable whichever layout is selected.
   * @public
   */
  Layout?: string | undefined;

  /**
   * When a **sendable** asset (`EMAIL`, `SOCIAL_POST`) sends: on activation, or at `ScheduledSendAt`.
   *
   * A mode beside a value rather than a union, on purpose: `ScheduledSendAt` stays a plain `Timestamp`, and
   * the precedent is EventBridge Scheduler's `FlexibleTimeWindow \{ Mode, MaximumWindowInMinutes \}`. The pair
   * is checked as one, and a request where they disagree is refused with `ValidationException`
   * (`INVALID_VALUE`, naming the member) and applies nothing:
   * - `SCHEDULED` requires `ScheduledSendAt`; a reschedule resends `SCHEDULED` with the new time;
   * - `ON_ACTIVATION` forbids `ScheduledSendAt`, and drops any time already stored;
   * - `ScheduledSendAt` without `SendMode` is refused.
   *
   * PATCH: omitted leaves both unchanged. Until a mode is chosen the asset reports `SEND_MODE_MISSING` and
   * does not activate: no default, because an unchosen send mails the real audience. Rejected with
   * `ValidationException` (`NOT_SUPPORTED_FOR_CATEGORY`) for a category that has no send (`LANDING_PAGE`,
   * `DOCUMENT`, `BANNER_AD`). Like every other edit, it reaches the delivery platform at the asset's next
   * activation, and a live email or social post refuses it (`ASSET_ALREADY_ACTIVE`): deactivate first.
   * @public
   */
  SendMode?: SendMode | undefined;

  /**
   * The send time, with `SendMode: SCHEDULED` and only then. See `SendMode`.
   *
   * Must be at least an hour out (`SEND_WINDOW_TOO_SOON`), unless it is the time already stored: resending
   * the stored mode and time changes nothing and is accepted, so a form that always resubmits does not
   * trip the window.
   *
   * Must also fall on or before the campaign's `EndOn` (by the end of that UTC day): refused with
   * `ValidationException` (`INVALID_VALUE`) otherwise, so nothing is scheduled to send after the campaign
   * completes.
   *
   * Was `scheduleDate`, a `YYYY-MM-DD` string. Retyped because a date alone cannot
   * express a send *time*, which is the whole point of a schedule — and because the
   * resource already spelled the same concept `ScheduledSendAt` on the activation
   * responses. Two spellings of one concept on one resource was the defect.
   * @public
   */
  ScheduledSendAt?: Date | undefined;

  /**
   * Idempotency token. Retry-safety only — this is **not** a concurrency token, and
   * sequential edits to one field are last-writer-wins.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Output for UpdateCampaignAsset.
 *
 * A minimal acknowledgment, not an echo. Read GetCampaignAsset for the applied values (`FieldValues`).
 * @public
 */
export interface UpdateCampaignAssetResponse {
  /**
   * The asset identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The asset's state, **unchanged**.
   *
   * An update never moves it, so a live asset stays ACTIVE while its edited values take effect for the
   * next activation. There is no edit-outcome member: a 200 means every submitted value applied, and every
   * failure is a refusal on the call itself (DG-040 Decision 11).
   * @public
   */
  State: CampaignAssetState | undefined;

  /**
   * What must be fixed on this asset before it can be activated. Empty when the
   * asset is ready.
   *
   * Issues don't block saving: an asset can be saved incomplete and fixed over
   * several updates. `StartCampaignAssetActivationTask` refuses an asset that
   * still has issues: an issue blocks activation when only an edit to the asset
   * can change the outcome. Most issues name the field to fix in `FieldId`. Fix it
   * with `UpdateCampaignAsset`, then read this list again.
   *
   * Besides the issues computed from the asset's content, the list carries
   * what the last activation found: `CONTENT_REJECTED` and `PARTNER_IMAGE_REJECTED`
   * when moderation refused a field. Editing that field removes its issue. A
   * `CONTENT_REJECTED` without a `FieldId` means the text was refused as a whole;
   * editing any text field removes it.
   *
   * Problems with the campaign's own settings, such as a missing recipient list, and
   * with the partner's profile, such as a missing logo, are reported on
   * `Campaign.ActivationIssues`, not here.
   * @public
   */
  ActivationIssues: ActivationIssue[] | undefined;
}

/**
 * Input for CreateSocialConnectionAuthorizationUrl.
 *
 * Names a platform, not a connection: the same call serves a first connect,
 * connecting another account, and re-authorizing an expired one. Which of those
 * it was is decided by the account the partner consents with, and shows up in
 * ListSocialConnections afterwards. Writes nothing in this service.
 * @public
 */
export interface CreateSocialConnectionAuthorizationUrlRequest {
  /**
   * Catalog the connection belongs to.
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * Social platform to authorize.
   * @public
   */
  Platform: Platform | undefined;
}

/**
 * Output for CreateSocialConnectionAuthorizationUrl.
 * @public
 */
export interface CreateSocialConnectionAuthorizationUrlResponse {
  /**
   * Social platform the URL authorizes.
   * @public
   */
  Platform: Platform | undefined;

  /**
   * Fresh single-use URL the partner visits to grant authorization.
   * @public
   */
  AuthorizationUrl: string | undefined;
}

/**
 * Input for DeleteSocialConnection.
 * @public
 */
export interface DeleteSocialConnectionRequest {
  /**
   * Catalog the connection belongs to.
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * Identifier or ARN of the social connection to delete.
   * @public
   */
  Identifier: string | undefined;

  /**
   * Idempotency token.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Input for GetCampaignTemplate.
 * @public
 */
export interface GetCampaignTemplateRequest {
  /**
   * The catalog (AWS or Sandbox).
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * The campaign template's id. A campaign template has no ARN (DG-084).
   * @public
   */
  Identifier: string | undefined;
}

/**
 * One asset blueprint inside a campaign template. The id is template-local —
 * an asset template is not a standalone resource and has no ARN.
 * @public
 */
export interface CampaignAssetTemplate {
  /**
   * The template-local asset template identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The kind of asset this blueprint instantiates as.
   * @public
   */
  Type: CampaignAssetTemplateType | undefined;

  /**
   * Display label; becomes the instantiated asset's name.
   * @public
   */
  Label: string | undefined;

  /**
   * Ordering for preview and instantiation.
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * The editable-field schema, copied and pinned onto each campaign asset at
   * create. Fields the service fills itself are not listed.
   * @public
   */
  Fields?: CampaignAssetTemplateField[] | undefined;

  /**
   * Previews of the AWS-authored layout skeleton.
   * @public
   */
  LayoutPreviews?: LayoutPreview[] | undefined;

  /**
   * The asset templates this one embeds output from, such as an email's landing page. Each must be in the same
   * `BatchCreateCampaignAsset` request or already an asset on the campaign, else the create is refused
   * `PREREQUISITE_ASSET_MISSING`; include them when the partner picks this one. Absent when there are none. A
   * link the partner chooses, such as a landing page's download button, is not listed here: it is an
   * `AssetLink` field and needs nothing at create.
   * @public
   */
  PrerequisiteAssetTemplateIds?: string[] | undefined;

  /**
   * SOCIAL_POST only: the platform an asset made from this blueprint posts to, which the asset reports as
   * `SocialPlatform`. Fixed by the template, so a client can show which social connection the post needs before
   * it is created. Absent for every other type.
   * @public
   */
  SocialPlatform?: Platform | undefined;
}

/**
 * A reference material that comes with a campaign template: a file the partner downloads as-is.
 *
 * Not a blueprint: it carries no fields, cannot be instantiated, and is not activated.
 *
 * Not the `ReferenceMaterial` resource deleted on 2026-09-22 (its six operations, ARN and record
 * are gone). That was partner-uploaded and addressable; this is AWS-authored template content with
 * no identity of its own.
 * @public
 */
export interface ReferenceMaterial {
  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * A stable public CDN URL for the file. AWS-authored content, so it is not presigned and
   * carries no expiry — the same treatment as `LayoutPreview.url`, and withheld on the same
   * condition: absent while the template's `EffectiveDateBegin` is in the future.
   * @public
   */
  Url?: string | undefined;
}

/**
 * A platform-managed campaign template — an AWS-authored kit of asset
 * blueprints a partner creates a campaign from.
 * @public
 */
export interface CampaignTemplate {
  /**
   * The campaign template identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * Target industry for filtering or categorization.
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * Campaign use case for filtering or categorization.
   * @public
   */
  UseCase?: string | undefined;

  /**
   * A short overview of the campaign, as plain text in the template's language: no HTML and no
   * character entities. Absent when the template has none; never an empty string.
   * @public
   */
  Description?: string | undefined;

  /**
   * Language the template is authored in, which a campaign created from it takes. A template has one
   * language; the same content in another language is another template.
   * @public
   */
  LanguageCode?: AssetLanguage | undefined;

  /**
   * The browsing context the template is listed in. Every template has exactly one.
   * @public
   */
  Collection: CampaignTemplateCollection | undefined;

  /**
   * AWS services the template promotes.
   * @public
   */
  AwsServices?: string[] | undefined;

  /**
   * The customer segments the template is written for. Absent when the template names none, in which case it
   * matches every `CustomerSegments` search filter.
   * @public
   */
  CustomerSegments?: CustomerSegment[] | undefined;

  /**
   * The template's marketing themes. Absent when the template names none, in which case it matches every
   * `Themes` search filter.
   * @public
   */
  Themes?: Theme[] | undefined;

  /**
   * Estimated setup time.
   * @public
   */
  SetupDuration?: string | undefined;

  /**
   * Thumbnail URL.
   * @public
   */
  ThumbnailUrl?: string | undefined;

  /**
   * The instant the template becomes available to partners. Until then the template does not
   * exist to a partner: SearchCampaignTemplates omits it and GetCampaignTemplate returns
   * ResourceNotFoundException.
   * @public
   */
  EffectiveDateBegin?: Date | undefined;

  /**
   * The ordered asset blueprints. One call serves both template browsing and
   * server-side copy-at-create.
   * @public
   */
  AssetTemplates?: CampaignAssetTemplate[] | undefined;

  /**
   * The template's reference materials: guides, briefs, copy blocks and other files a partner
   * downloads and uses in their own channels. Kept apart from `AssetTemplates` because none of
   * them can become a campaign asset — they have no editable field and nothing to activate —
   * and listing them beside the blueprints invited a `BatchCreateCampaignAsset` that could only
   * fail.
   *
   * Absent when the template has none.
   * @public
   */
  ReferenceMaterials?: ReferenceMaterial[] | undefined;

  /**
   * Creation timestamp.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Last update timestamp.
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Output for GetCampaignTemplate.
 * @public
 */
export interface GetCampaignTemplateResponse {
  /**
   * The campaign template, including its asset templates.
   * @public
   */
  CampaignTemplate: CampaignTemplate | undefined;
}

/**
 * Input for ListSocialConnections.
 * @public
 */
export interface ListSocialConnectionsRequest {
  /**
   * Catalog to list connections from.
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * Restrict results to a single social platform.
   * @public
   */
  Platform?: Platform | undefined;

  /**
   * Maximum number of results to return per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token from a previous response.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary of a social connection returned by ListSocialConnections.
 *
 * Carries no ARN (owner ruling 2026-10-05): a connection is addressed by its `Id`.
 * Social connections are not taggable, and every social operation authorizes on
 * its action rather than on a resource ARN.
 * @public
 */
export interface SocialConnectionSummary {
  /**
   * Identifier of the social connection.
   * @public
   */
  Id: string | undefined;

  /**
   * Social platform this connection authorizes.
   * @public
   */
  Platform: Platform | undefined;

  /**
   * Authorization state.
   * @public
   */
  Status: SocialConnectionStatus | undefined;

  /**
   * The Facebook Page this connection publishes to. Absent where no Page
   * applies.
   * @public
   */
  PageName?: string | undefined;

  /**
   * Display name of the account behind this connection. Absent when the
   * execution backend reports none.
   * @public
   */
  AccountName?: string | undefined;

  /**
   * When the account was last authorized. Advances on every re-authorization.
   * @public
   */
  ConnectedAt?: Date | undefined;

  /**
   * When the authorization lapses. Absent where the platform reports no
   * expiry (X never does). A connection past this time reads EXPIRED only once
   * the backend notices, so treat this as a warning date, not a status.
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * Output for ListSocialConnections.
 * @public
 */
export interface ListSocialConnectionsResponse {
  /**
   * The social connections for this partner and catalog.
   * @public
   */
  Items: SocialConnectionSummary[] | undefined;

  /**
   * Pagination token for the next page, absent on the last page.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for ListTagsForResource.
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource whose tags should be returned.
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Output for ListTagsForResource.
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The ARN of the resource the tags belong to.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags currently applied. Absent rather than empty when the resource
   * carries no tags.
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Input for SearchCampaignTemplates.
 * @public
 */
export interface SearchCampaignTemplatesRequest {
  /**
   * The catalog (AWS or Sandbox). AWS and Sandbox templates may differ.
   * @public
   */
  Catalog: Catalog | undefined;

  /**
   * Free-text query matched against the template's name and description. Any word may match, and the last word
   * matches as a prefix when it has 3 or more characters, so `nov` finds Amazon Nova. A template whose name holds the query as a phrase ranks first,
   * then whole-word matches, then prefix-only ones. Omit to browse the whole catalog. Text analysis is derived
   * from each template's own LanguageCode, never from the language filter.
   * @public
   */
  SearchText?: string | undefined;

  /**
   * Restrict to templates in these industries. Values within this member are
   * OR-ed; distinct facet members are AND-ed. Exact, case-sensitive match.
   * @public
   */
  Industry?: Industry[] | undefined;

  /**
   * Restrict to templates with these campaign use cases. Values within this
   * member are OR-ed; distinct facet members are AND-ed. Exact,
   * case-sensitive match.
   * @public
   */
  UseCase?: string[] | undefined;

  /**
   * Restrict to templates in these language(s), matched by each template's `LanguageCode`. Values within
   * this member are OR-ed; distinct facet members are AND-ed. Narrows results; it does not reinterpret
   * SearchText.
   * @public
   */
  Language?: AssetLanguage[] | undefined;

  /**
   * Restrict to templates promoting these AWS services. Values within this
   * member are OR-ed; distinct facet members are AND-ed. Exact,
   * case-sensitive match.
   * @public
   */
  AwsServices?: string[] | undefined;

  /**
   * Restrict to templates for these customer segments. Values within this member are OR-ed; distinct facet
   * members are AND-ed. A template that names no customer segment matches every value.
   * @public
   */
  CustomerSegments?: CustomerSegment[] | undefined;

  /**
   * Restrict to templates with these themes. Values within this member are OR-ed; distinct facet members are
   * AND-ed. A template that names no theme matches every value.
   * @public
   */
  Themes?: Theme[] | undefined;

  /**
   * Restrict to templates in these collections. Values within this member are OR-ed; distinct facet
   * members are AND-ed. Omit for no restriction; there is no default.
   * @public
   */
  Collection?: CampaignTemplateCollection[] | undefined;

  /**
   * Maximum results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary representation of a campaign template, returned by search.
 * @public
 */
export interface CampaignTemplateSummary {
  /**
   * The campaign template identifier.
   * @public
   */
  Id: string | undefined;

  /**
   * The display name.
   * @public
   */
  Name: string | undefined;

  /**
   * Target industry for filtering or categorization.
   * @public
   */
  Industry?: Industry | undefined;

  /**
   * Campaign use case for filtering or categorization.
   * @public
   */
  UseCase?: string | undefined;

  /**
   * The campaign overview. See `CampaignTemplate$Description`.
   * @public
   */
  Description?: string | undefined;

  /**
   * Language the template is authored in. See `CampaignTemplate$LanguageCode`.
   * @public
   */
  LanguageCode?: AssetLanguage | undefined;

  /**
   * The browsing context the template is listed in. See `CampaignTemplate$Collection`.
   * @public
   */
  Collection: CampaignTemplateCollection | undefined;

  /**
   * AWS services the template promotes.
   * @public
   */
  AwsServices?: string[] | undefined;

  /**
   * The customer segments the template is written for. See `CampaignTemplate$CustomerSegments`.
   * @public
   */
  CustomerSegments?: CustomerSegment[] | undefined;

  /**
   * The template's marketing themes. See `CampaignTemplate$Themes`.
   * @public
   */
  Themes?: Theme[] | undefined;

  /**
   * Thumbnail URL.
   * @public
   */
  ThumbnailUrl?: string | undefined;
}

/**
 * Output for SearchCampaignTemplates.
 * @public
 */
export interface SearchCampaignTemplatesResponse {
  /**
   * Total count over the whole matching set, not just this page — for
   * "over N results" display.
   * @public
   */
  TotalResults: number | undefined;

  /**
   * This page of template summaries.
   * @public
   */
  CampaignTemplates: CampaignTemplateSummary[] | undefined;

  /**
   * Pagination token.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for TagResource.
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to tag.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add or replace.
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * Output for TagResource.
 * @public
 */
export interface TagResourceResponse {}

/**
 * Input for UntagResource.
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to remove tags from.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys to remove. Associated values are removed with them.
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Output for UntagResource.
 * @public
 */
export interface UntagResourceResponse {}
