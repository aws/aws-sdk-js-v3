// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { QAppsServiceException as __BaseException } from "./QAppsServiceException";

/**
 * <p>The client is not authorized to perform the requested operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const Action = {
  READ: "read",
  WRITE: "write",
} as const;

/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * @enum
 */
export const CardType = {
  FILE_UPLOAD: "file-upload",
  FORM_INPUT: "form-input",
  Q_PLUGIN: "q-plugin",
  Q_QUERY: "q-query",
  TEXT_INPUT: "text-input",
} as const;

/**
 * @public
 */
export type CardType = (typeof CardType)[keyof typeof CardType];

/**
 * <p>A card in an Amazon Q App that allows the user to upload a file.</p>
 * @public
 */
export interface FileUploadCard {
  /**
   * <p>The unique identifier of the file upload card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The title of the file upload card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Any dependencies or requirements for the file upload card.</p>
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The name of the file being uploaded.</p>
   * @public
   */
  filename?: string | undefined;

  /**
   * <p>The unique identifier of the file associated with the card.</p>
   * @public
   */
  fileId?: string | undefined;

  /**
   * <p>A flag indicating if the user can override the default file for the upload card.</p>
   * @public
   */
  allowOverride?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const InputCardComputeMode = {
  APPEND: "append",
  REPLACE: "replace",
} as const;

/**
 * @public
 */
export type InputCardComputeMode = (typeof InputCardComputeMode)[keyof typeof InputCardComputeMode];

/**
 * <p>The metadata of the form input card.</p>
 * @public
 */
export interface FormInputCardMetadata {
  /**
   * <p>The JSON schema that defines the shape of the response data.</p>
   * @public
   */
  schema: __DocumentType | undefined;
}

/**
 * <p>A card in an Amazon Q App that allows the user to submit a response.</p>
 * @public
 */
export interface FormInputCard {
  /**
   * <p>The unique identifier of the form input card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The title of the form input card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Any dependencies or requirements for the form input card.</p>
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The metadata that defines the form input card data.</p>
   * @public
   */
  metadata: FormInputCardMetadata | undefined;

  /**
   * <p>The compute mode of the form input card. This property determines whether individual
   *       participants of a data collection session can submit multiple response or one response. A
   *       compute mode of <code>append</code> shall allow participants to submit the same form multiple
   *       times with different values. A compute mode of <code>replace</code>code&gt; shall overwrite the
   *       current value for each participant.</p>
   * @public
   */
  computeMode?: InputCardComputeMode | undefined;
}

/**
 * @public
 * @enum
 */
export const PluginType = {
  ASANA: "ASANA",
  ATLASSIAN_CONFLUENCE: "ATLASSIAN_CONFLUENCE",
  CUSTOM: "CUSTOM",
  GOOGLE_CALENDAR: "GOOGLE_CALENDAR",
  JIRA: "JIRA",
  JIRA_CLOUD: "JIRA_CLOUD",
  MICROSOFT_EXCHANGE: "MICROSOFT_EXCHANGE",
  MICROSOFT_TEAMS: "MICROSOFT_TEAMS",
  PAGERDUTY_ADVANCE: "PAGERDUTY_ADVANCE",
  SALESFORCE: "SALESFORCE",
  SALESFORCE_CRM: "SALESFORCE_CRM",
  SERVICENOW_NOW_PLATFORM: "SERVICENOW_NOW_PLATFORM",
  SERVICE_NOW: "SERVICE_NOW",
  SMARTSHEET: "SMARTSHEET",
  ZENDESK: "ZENDESK",
  ZENDESK_SUITE: "ZENDESK_SUITE",
} as const;

/**
 * @public
 */
export type PluginType = (typeof PluginType)[keyof typeof PluginType];

/**
 * <p>A card in an Q App that integrates with a third-party plugin or service.</p>
 * @public
 */
export interface QPluginCard {
  /**
   * <p>The unique identifier of the plugin card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The title or label of the plugin card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Any dependencies or requirements for the plugin card.</p>
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The prompt or instructions displayed for the plugin card.</p>
   * @public
   */
  prompt: string | undefined;

  /**
   * <p>The type or category of the plugin used by the card.</p>
   * @public
   */
  pluginType: PluginType | undefined;

  /**
   * <p>The unique identifier of the plugin used by the card.</p>
   * @public
   */
  pluginId: string | undefined;

  /**
   * <p>The action identifier of the action to be performed by the plugin card.</p>
   * @public
   */
  actionIdentifier?: string | undefined;
}

/**
 * <p>The value of a document attribute. You can only provide one value for a document
 *       attribute.</p>
 * @public
 */
export type DocumentAttributeValue =
  | DocumentAttributeValue.DateValueMember
  | DocumentAttributeValue.LongValueMember
  | DocumentAttributeValue.StringListValueMember
  | DocumentAttributeValue.StringValueMember
  | DocumentAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace DocumentAttributeValue {
  /**
   * <p>A string.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    stringListValue?: never;
    longValue?: never;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of strings.</p>
   * @public
   */
  export interface StringListValueMember {
    stringValue?: never;
    stringListValue: string[];
    longValue?: never;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A long integer value. </p>
   * @public
   */
  export interface LongValueMember {
    stringValue?: never;
    stringListValue?: never;
    longValue: number;
    dateValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A date expressed as an ISO 8601 string.</p>
   *          <p>It's important for the time zone to be included in the <i>ISO 8601
   *         date-time</i> format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601
   *       date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
   *     </p>
   * @public
   */
  export interface DateValueMember {
    stringValue?: never;
    stringListValue?: never;
    longValue?: never;
    dateValue: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    stringListValue?: never;
    longValue?: never;
    dateValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    stringListValue: (value: string[]) => T;
    longValue: (value: number) => T;
    dateValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentAttributeValue, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.stringListValue !== undefined) return visitor.stringListValue(value.stringListValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.dateValue !== undefined) return visitor.dateValue(value.dateValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A document attribute or metadata field.</p>
 * @public
 */
export interface DocumentAttribute {
  /**
   * <p>The identifier for the attribute.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the attribute. </p>
   * @public
   */
  value: DocumentAttributeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const CardOutputSource = {
  APPROVED_SOURCES: "approved-sources",
  LLM: "llm",
} as const;

/**
 * @public
 */
export type CardOutputSource = (typeof CardOutputSource)[keyof typeof CardOutputSource];

/**
 * <p>A card in an Amazon Q App that allows the user to input text.</p>
 * @public
 */
export interface TextInputCard {
  /**
   * <p>The unique identifier of the text input card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The title or label of the text input card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Any dependencies or requirements for the text input card.</p>
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The placeholder text to display in the text input field.</p>
   * @public
   */
  placeholder?: string | undefined;

  /**
   * <p>The default value to pre-populate in the text input field.</p>
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * <p>Represents a file upload card. It can optionally receive a <code>filename</code> and
 *         <code>fileId</code> to set a default file. If not received, the user must provide the file
 *       when the Q App runs.</p>
 * @public
 */
export interface FileUploadCardInput {
  /**
   * <p>The title or label of the file upload card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the file upload card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The default filename to use for the file upload card.</p>
   * @public
   */
  filename?: string | undefined;

  /**
   * <p>The identifier of a pre-uploaded file associated with the card.</p>
   * @public
   */
  fileId?: string | undefined;

  /**
   * <p>A flag indicating if the user can override the default file for the upload card.</p>
   * @public
   */
  allowOverride?: boolean | undefined;
}

/**
 * <p>Represents a form input card for an Amazon Q App.</p>
 * @public
 */
export interface FormInputCardInput {
  /**
   * <p>The title or label of the form input card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the form input card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The metadata that defines the form input card data.</p>
   * @public
   */
  metadata: FormInputCardMetadata | undefined;

  /**
   * <p>The compute mode of the form input card. This property determines whether individual
   *       participants of a data collection session can submit multiple response or one response. A
   *       compute mode of <code>append</code> shall allow participants to submit the same form multiple
   *       times with different values. A compute mode of <code>replace</code>code&gt; shall overwrite the
   *       current value for each participant.</p>
   * @public
   */
  computeMode?: InputCardComputeMode | undefined;
}

/**
 * <p>The input shape for defining a plugin card in an Amazon Q App.</p>
 * @public
 */
export interface QPluginCardInput {
  /**
   * <p>The title or label of the plugin card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the plugin card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The prompt or instructions displayed for the plugin card.</p>
   * @public
   */
  prompt: string | undefined;

  /**
   * <p>The unique identifier of the plugin used by the card.</p>
   * @public
   */
  pluginId: string | undefined;

  /**
   * <p>The action identifier of the action to be performed by the plugin card.</p>
   * @public
   */
  actionIdentifier?: string | undefined;
}

/**
 * <p>The input shape for defining a text input card in an Amazon Q App.</p>
 * @public
 */
export interface TextInputCardInput {
  /**
   * <p>The title or label of the text input card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the text input card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The placeholder text to display in the text input field.</p>
   * @public
   */
  placeholder?: string | undefined;

  /**
   * <p>The default value to pre-populate in the text input field.</p>
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AppRequiredCapability = {
  CREATOR_MODE: "CreatorMode",
  FILE_UPLOAD: "FileUpload",
  PLUGIN_MODE: "PluginMode",
  RETRIEVAL_MODE: "RetrievalMode",
} as const;

/**
 * @public
 */
export type AppRequiredCapability = (typeof AppRequiredCapability)[keyof typeof AppRequiredCapability];

/**
 * @public
 * @enum
 */
export const AppStatus = {
  DELETED: "DELETED",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];

/**
 * @public
 */
export interface AssociateLibraryItemReviewInput {
  /**
   * <p>The unique identifier for the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the library item to associate the review with.</p>
   * @public
   */
  libraryItemId: string | undefined;
}

/**
 * <p>The requested operation could not be completed due to a conflict with the current state of
 *       the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>An internal service error occurred while processing the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying the operation</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The requested operation could not be completed because it would exceed the service's quota
 *       or limit.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The code for the service where the quota was exceeded</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The code of the quota that was exceeded</p>
   * @public
   */
  quotaCode: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The requested operation could not be completed because too many requests were sent at
 *       once. Wait a bit and try again later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code for the service where the quota was exceeded</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The code of the quota that was exceeded</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * <p>The number of seconds to wait before retrying the operation</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The client is not authenticated or authorized to perform the requested operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>The input failed to satisfy the constraints specified by the service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface AssociateQAppWithUserInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The ID of the Amazon Q App to associate with the user.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * <p>The category object to be created.</p>
 * @public
 */
export interface BatchCreateCategoryInputCategory {
  /**
   * <p>The unique identifier to be associated with a category. If you don't include a value, the
   *       category is automatically assigned a unique identifier.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the category.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The color to be associated with a category. The color must be a hexadecimal value of
   *       either 3 or 6 digits.</p>
   * @public
   */
  color?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateCategoryInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The list of category objects to be created</p>
   * @public
   */
  categories: BatchCreateCategoryInputCategory[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCategoryInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The list of IDs of the categories to be deleted.</p>
   * @public
   */
  categories: string[] | undefined;
}

/**
 * <p>A label that web experience users associate with a library item. Web experience users use
 *       Categories to tag and filter library items.</p>
 * @public
 */
export interface CategoryInput {
  /**
   * <p>The unique identifier of the category.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the category.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The color of the category, represented as a hexadecimal value of either 3 or 6
   *       digits.</p>
   * @public
   */
  color?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCategoryInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The list of categories to be updated with their new values.</p>
   * @public
   */
  categories: CategoryInput[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * <p>A record created when a user submits a form card.</p>
 * @public
 */
export interface Submission {
  /**
   * <p>The data submitted by the user.</p>
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * <p>The unique identifier of the submission.</p>
   * @public
   */
  submissionId?: string | undefined;

  /**
   * <p>The date and time when the card is submitted.</p>
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * <p>The current status and value of a card in an active Amazon Q App session.</p>
 * @public
 */
export interface CardStatus {
  /**
   * <p>The current state of the card.</p>
   * @public
   */
  currentState: ExecutionStatus | undefined;

  /**
   * <p>The current value or result associated with the card.</p>
   * @public
   */
  currentValue: string | undefined;

  /**
   * <p>A list of previous submissions, if the card is a form card.</p>
   * @public
   */
  submissions?: Submission[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SubmissionMutationKind = {
  add: "add",
  delete: "delete",
  edit: "edit",
} as const;

/**
 * @public
 */
export type SubmissionMutationKind = (typeof SubmissionMutationKind)[keyof typeof SubmissionMutationKind];

/**
 * <p>Represents an action performed on a submission.</p>
 * @public
 */
export interface SubmissionMutation {
  /**
   * <p>The unique identifier of the submission.</p>
   * @public
   */
  submissionId: string | undefined;

  /**
   * <p>The operation that is performed on a submission.</p>
   * @public
   */
  mutationType: SubmissionMutationKind | undefined;
}

/**
 * <p>The value or result associated with a card in a Amazon Q App session.</p>
 * @public
 */
export interface CardValue {
  /**
   * <p>The unique identifier of the card.</p>
   * @public
   */
  cardId: string | undefined;

  /**
   * <p>The value or result associated with the card.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The structure that describes how the current form card value is mutated. Only applies for
   *       form cards when multiple responses are allowed.</p>
   * @public
   */
  submissionMutation?: SubmissionMutation | undefined;
}

/**
 * <p>A category used to classify and filter library items for Amazon Q Apps.</p>
 * @public
 */
export interface Category {
  /**
   * <p>The unique identifier of the category.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The title or name of the category.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The color of the category</p>
   * @public
   */
  color?: string | undefined;

  /**
   * <p>The number of published Amazon Q Apps associated with a category</p>
   * @public
   */
  appCount?: number | undefined;
}

/**
 * <p>The requested operation could not be completed because the content exceeds the maximum
 *       allowed size.</p>
 * @public
 */
export class ContentTooLargeException extends __BaseException {
  readonly name: "ContentTooLargeException" = "ContentTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContentTooLargeException, __BaseException>) {
    super({
      name: "ContentTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContentTooLargeException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const Sender = {
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;

/**
 * @public
 */
export type Sender = (typeof Sender)[keyof typeof Sender];

/**
 * <p>A message in a conversation, used as input for generating an Amazon Q App definition.</p>
 * @public
 */
export interface ConversationMessage {
  /**
   * <p>The text content of the conversation message.</p>
   * @public
   */
  body: string | undefined;

  /**
   * <p>The type of the conversation message.</p>
   * @public
   */
  type: Sender | undefined;
}

/**
 * @public
 */
export interface CreateLibraryItemInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q App to publish to the library.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The version of the Amazon Q App to publish to the library.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The categories to associate with the library item for easier discovery.</p>
   * @public
   */
  categories: string[] | undefined;
}

/**
 * @public
 */
export interface CreateLibraryItemOutput {
  /**
   * <p>The unique identifier of the new library item.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The status of the new library item, such as "Published".</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The date and time the library item was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who created the library item.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the library item was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user who last updated the library item.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The number of ratings the library item has received from users.</p>
   * @public
   */
  ratingCount: number | undefined;

  /**
   * <p>Indicates whether the library item has been verified.</p>
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentScope = {
  APPLICATION: "APPLICATION",
  SESSION: "SESSION",
} as const;

/**
 * @public
 */
export type DocumentScope = (typeof DocumentScope)[keyof typeof DocumentScope];

/**
 * @public
 */
export interface CreatePresignedUrlInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the card the file is associated with.</p>
   * @public
   */
  cardId: string | undefined;

  /**
   * <p>The unique identifier of the Q App the file is associated with.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The Base64-encoded SHA-256 digest of the contents of the file to be uploaded.</p>
   * @public
   */
  fileContentsSha256: string | undefined;

  /**
   * <p>The name of the file to be uploaded.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>Whether the file is associated with a Q App definition or a specific Q App
   *       session.</p>
   * @public
   */
  scope: DocumentScope | undefined;

  /**
   * <p>The unique identifier of the Q App session the file is associated with, if
   *       applicable.</p>
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedUrlOutput {
  /**
   * <p>The unique identifier assigned to the file to be uploaded.</p>
   * @public
   */
  fileId: string | undefined;

  /**
   * <p>The URL for a presigned S3 POST operation used to upload a file.</p>
   * @public
   */
  presignedUrl: string | undefined;

  /**
   * <p>The form fields to include in the presigned S3 POST operation used to upload a
   *       file.</p>
   * @public
   */
  presignedUrlFields: Record<string, string> | undefined;

  /**
   * <p>The date and time that the presigned URL will expire in ISO 8601 format.</p>
   * @public
   */
  presignedUrlExpiration: Date | undefined;
}

/**
 * @public
 */
export interface CreateQAppOutput {
  /**
   * <p>The unique identifier of the new Q App.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new Q App.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The title of the new Q App.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the new Q App.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The initial prompt displayed when the Q App is started.</p>
   * @public
   */
  initialPrompt?: string | undefined;

  /**
   * <p>The version of the new Q App.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The status of the new Q App, such as "Created".</p>
   * @public
   */
  status: AppStatus | undefined;

  /**
   * <p>The date and time the Q App was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who created the Q App.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the Q App was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The user who last updated the Q App.</p>
   * @public
   */
  updatedBy: string | undefined;

  /**
   * <p>The capabilities required to run the Q App, such as file upload or third-party
   *       integrations.</p>
   * @public
   */
  requiredCapabilities?: AppRequiredCapability[] | undefined;
}

/**
 * @public
 */
export interface DeleteLibraryItemInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the library item to delete.</p>
   * @public
   */
  libraryItemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQAppInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App to delete.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface DescribeQAppPermissionsInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q App for which to retrieve permissions.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  OWNER: "owner",
  USER: "user",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * <p>The principal for which the permission applies.</p>
 * @public
 */
export interface PrincipalOutput {
  /**
   * <p>The unique identifier of the user.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The type of the user.</p>
   * @public
   */
  userType?: UserType | undefined;

  /**
   * <p>The email address associated with the user.</p>
   * @public
   */
  email?: string | undefined;
}

/**
 * <p>The permission granted to the Amazon Q App.</p>
 * @public
 */
export interface PermissionOutput {
  /**
   * <p>The action associated with the permission.</p>
   * @public
   */
  action: Action | undefined;

  /**
   * <p>The principal user to which the permission applies.</p>
   * @public
   */
  principal: PrincipalOutput | undefined;
}

/**
 * @public
 */
export interface DescribeQAppPermissionsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q App for which permissions are
   *       returned.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q App for which permissions are returned.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The list of permissions granted for the Amazon Q App.</p>
   * @public
   */
  permissions?: PermissionOutput[] | undefined;
}

/**
 * @public
 */
export interface DisassociateLibraryItemReviewInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the library item to remove the review from.</p>
   * @public
   */
  libraryItemId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQAppFromUserInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App to disassociate from the user.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface ExportQAppSessionDataInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App data collection session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ExportQAppSessionDataOutput {
  /**
   * <p>The link where the exported Q App session data can be downloaded from.</p>
   * @public
   */
  csvFileLink: string | undefined;

  /**
   * <p>The date and time when the link for the exported Q App session data expires.</p>
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Q App data collection session.</p>
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * @public
 */
export interface GetLibraryItemInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the library item to retrieve.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q App associated with the library item.</p>
   * @public
   */
  appId?: string | undefined;
}

/**
 * @public
 */
export interface GetLibraryItemOutput {
  /**
   * <p>The unique identifier of the library item.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The unique identifier of the Q App associated with the library item.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The version of the Q App associated with the library item.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The categories associated with the library item for discovery.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>The status of the library item, such as "Published".</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The date and time the library item was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who created the library item.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the library item was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user who last updated the library item.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The number of ratings the library item has received from users.</p>
   * @public
   */
  ratingCount: number | undefined;

  /**
   * <p>Whether the current user has rated the library item.</p>
   * @public
   */
  isRatedByUser?: boolean | undefined;

  /**
   * <p>The number of users who have associated the Q App with their account.</p>
   * @public
   */
  userCount?: number | undefined;

  /**
   * <p>Indicates whether the library item has been verified.</p>
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQAppInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App to retrieve.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The version of the Q App.</p>
   * @public
   */
  appVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App session to retrieve.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionOutput {
  /**
   * <p>The unique identifier of the Q App session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Q App session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The name of the Q App session.</p>
   * @public
   */
  sessionName?: string | undefined;

  /**
   * <p>The version of the Q App used for the session.</p>
   * @public
   */
  appVersion?: number | undefined;

  /**
   * <p>The latest published version of the Q App used for the session.</p>
   * @public
   */
  latestPublishedAppVersion?: number | undefined;

  /**
   * <p>The current status of the Q App session.</p>
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * <p>The current status for each card in the Q App session.</p>
   * @public
   */
  cardStatus: Record<string, CardStatus> | undefined;

  /**
   * <p>Indicates whether the current user is the owner of the Q App data collection
   *       session.</p>
   * @public
   */
  userIsHost?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionMetadataInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>The sharing configuration of an Amazon Q App data collection session.</p>
 * @public
 */
export interface SessionSharingConfiguration {
  /**
   * <p>Indicates whether an Q App session is shareable with other users.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Indicates whether an Q App session can accept responses from users.</p>
   * @public
   */
  acceptResponses?: boolean | undefined;

  /**
   * <p>Indicates whether collected responses for an Q App session are revealed for all
   *       users.</p>
   * @public
   */
  revealCards?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionMetadataOutput {
  /**
   * <p>The unique identifier of the Q App session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Q App session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The name of the Q App session.</p>
   * @public
   */
  sessionName?: string | undefined;

  /**
   * <p>The sharing configuration of the Q App data collection session.</p>
   * @public
   */
  sharingConfiguration: SessionSharingConfiguration | undefined;

  /**
   * <p>Indicates whether the current user is the owner of the Q App session.</p>
   * @public
   */
  sessionOwner?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportDocumentInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the card the file is associated with.</p>
   * @public
   */
  cardId: string | undefined;

  /**
   * <p>The unique identifier of the Q App the file is associated with.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The base64-encoded contents of the file to upload.</p>
   * @public
   */
  fileContentsBase64: string | undefined;

  /**
   * <p>The name of the file being uploaded.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>Whether the file is associated with a Q App definition or a specific Q App
   *       session.</p>
   * @public
   */
  scope: DocumentScope | undefined;

  /**
   * <p>The unique identifier of the Q App session the file is associated with, if
   *       applicable.</p>
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface ImportDocumentOutput {
  /**
   * <p>The unique identifier assigned to the uploaded file.</p>
   * @public
   */
  fileId?: string | undefined;
}

/**
 * <p>A library item is a snapshot of an Amazon Q App that can be published so the users in their
 *       Amazon Q Apps library can discover it, clone it, and run it.</p>
 * @public
 */
export interface LibraryItemMember {
  /**
   * <p>The unique identifier of the library item.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The unique identifier of the Q App associated with the library item.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The version of the Q App associated with the library item.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The categories associated with the library item.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>The status of the library item.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The date and time the library item was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who created the library item.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the library item was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user who last updated the library item.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The number of ratings the library item has received.</p>
   * @public
   */
  ratingCount: number | undefined;

  /**
   * <p>Whether the current user has rated the library item.</p>
   * @public
   */
  isRatedByUser?: boolean | undefined;

  /**
   * <p>The number of users who have the associated Q App.</p>
   * @public
   */
  userCount?: number | undefined;

  /**
   * <p>Indicates whether the library item has been verified.</p>
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const LibraryItemStatus = {
  DISABLED: "DISABLED",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type LibraryItemStatus = (typeof LibraryItemStatus)[keyof typeof LibraryItemStatus];

/**
 * @public
 */
export interface ListCategoriesInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;
}

/**
 * @public
 */
export interface ListCategoriesOutput {
  /**
   * <p>The categories of a Amazon Q Business application environment instance.</p>
   * @public
   */
  categories?: Category[] | undefined;
}

/**
 * @public
 */
export interface ListLibraryItemsInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The maximum number of library items to return in the response.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional category to filter the library items by.</p>
   * @public
   */
  categoryId?: string | undefined;
}

/**
 * @public
 */
export interface ListLibraryItemsOutput {
  /**
   * <p>The list of library items meeting the request criteria.</p>
   * @public
   */
  libraryItems?: LibraryItemMember[] | undefined;

  /**
   * <p>The token to use to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQAppsInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The maximum number of Q Apps to return in the response.</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An Amazon Q App associated with a user, either owned by the user or favorited.</p>
 * @public
 */
export interface UserAppItem {
  /**
   * <p>The unique identifier of the Q App.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Q App.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The title of the Q App.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the Q App.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time the user's association with the Q App was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A flag indicating whether the user can edit the Q App.</p>
   * @public
   */
  canEdit?: boolean | undefined;

  /**
   * <p>The status of the user's association with the Q App.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>Indicates whether the Q App has been verified.</p>
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface ListQAppsOutput {
  /**
   * <p>The list of Amazon Q Apps meeting the request criteria.</p>
   * @public
   */
  apps: UserAppItem[] | undefined;

  /**
   * <p>The token to use to request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQAppSessionDataInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App data collection session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>A user of an Amazon Q App.</p>
 * @public
 */
export interface User {
  /**
   * <p>The unique identifier of a user.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>The response collected for a Amazon Q App session. This container represents a single
 *       response to a Q App session.</p>
 * @public
 */
export interface QAppSessionData {
  /**
   * <p>The card Id associated with the response submitted for a Q App session.</p>
   * @public
   */
  cardId: string | undefined;

  /**
   * <p>The response submitted for a Q App session.</p>
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * <p>The user who submitted the response for a Q App session.</p>
   * @public
   */
  user: User | undefined;

  /**
   * <p>The unique identifier of the submission.</p>
   * @public
   */
  submissionId?: string | undefined;

  /**
   * <p>The date and time when the session data is submitted.</p>
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListQAppSessionDataOutput {
  /**
   * <p>The unique identifier of the Q App data collection session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Q App data collection session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The collected responses of a Q App session.</p>
   * @public
   */
  sessionData?: QAppSessionData[] | undefined;

  /**
   * <p> The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags should be listed.</p>
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags that are assigned to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The permission to grant or revoke for a Amazon Q App.</p>
 * @public
 */
export interface PermissionInput {
  /**
   * <p>The action associated with the permission.</p>
   * @public
   */
  action: Action | undefined;

  /**
   * <p>The principal user to which the permission applies.</p>
   * @public
   */
  principal: string | undefined;
}

/**
 * <p>The input options for generating an Q App definition.</p>
 * @public
 */
export type PredictQAppInputOptions =
  | PredictQAppInputOptions.ConversationMember
  | PredictQAppInputOptions.ProblemStatementMember
  | PredictQAppInputOptions.$UnknownMember;

/**
 * @public
 */
export namespace PredictQAppInputOptions {
  /**
   * <p>A conversation to use as input for generating the Q App definition.</p>
   * @public
   */
  export interface ConversationMember {
    conversation: ConversationMessage[];
    problemStatement?: never;
    $unknown?: never;
  }

  /**
   * <p>A problem statement to use as input for generating the Q App definition.</p>
   * @public
   */
  export interface ProblemStatementMember {
    conversation?: never;
    problemStatement: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversation?: never;
    problemStatement?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    conversation: (value: ConversationMessage[]) => T;
    problemStatement: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PredictQAppInputOptions, visitor: Visitor<T>): T => {
    if (value.conversation !== undefined) return visitor.conversation(value.conversation);
    if (value.problemStatement !== undefined) return visitor.problemStatement(value.problemStatement);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PredictQAppInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The input to generate the Q App definition from, either a conversation or problem
   *       statement.</p>
   * @public
   */
  options?: PredictQAppInputOptions | undefined;
}

/**
 * @public
 */
export interface StartQAppSessionInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App to start a session for.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The version of the Q App to use for the session.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>Optional initial input values to provide for the Q App session.</p>
   * @public
   */
  initialValues?: CardValue[] | undefined;

  /**
   * <p>The unique identifier of the a Q App session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Optional tags to associate with the new Q App session.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartQAppSessionOutput {
  /**
   * <p>The unique identifier of the new or retrieved Q App session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new Q App session.</p>
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * @public
 */
export interface StopQAppSessionInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App session to stop.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>The tags to associate with the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to disassociate the tag from.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>The keys of the tags to disassociate from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateLibraryItemInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the library item to update.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The new status to set for the library item, such as "Published" or "Hidden".</p>
   * @public
   */
  status?: LibraryItemStatus | undefined;

  /**
   * <p>The new categories to associate with the library item.</p>
   * @public
   */
  categories?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateLibraryItemOutput {
  /**
   * <p>The unique identifier of the updated library item.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The unique identifier of the Q App associated with the library item.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The version of the Q App associated with the library item.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The categories associated with the updated library item.</p>
   * @public
   */
  categories: Category[] | undefined;

  /**
   * <p>The new status of the updated library item.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The date and time the library item was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who originally created the library item.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the library item was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The user who last updated the library item.</p>
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * <p>The number of ratings the library item has received.</p>
   * @public
   */
  ratingCount: number | undefined;

  /**
   * <p>Whether the current user has rated the library item.</p>
   * @public
   */
  isRatedByUser?: boolean | undefined;

  /**
   * <p>The number of users who have the associated Q App.</p>
   * @public
   */
  userCount?: number | undefined;

  /**
   * <p>Indicates whether the library item has been verified.</p>
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLibraryItemMetadataInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the updated library item.</p>
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * <p>The verification status of the library item</p>
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateQAppOutput {
  /**
   * <p>The unique identifier of the updated Q App.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated Q App.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The new title of the updated Q App.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The new description of the updated Q App.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The initial prompt for the updated Q App.</p>
   * @public
   */
  initialPrompt?: string | undefined;

  /**
   * <p>The new version of the updated Q App.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The status of the updated Q App.</p>
   * @public
   */
  status: AppStatus | undefined;

  /**
   * <p>The date and time the Q App was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who originally created the Q App.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the Q App was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The user who last updated the Q App.</p>
   * @public
   */
  updatedBy: string | undefined;

  /**
   * <p>The capabilities required for the updated Q App.</p>
   * @public
   */
  requiredCapabilities?: AppRequiredCapability[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppPermissionsInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q App for which permissions are being updated.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The list of permissions to grant for the Amazon Q App.</p>
   * @public
   */
  grantPermissions?: PermissionInput[] | undefined;

  /**
   * <p>The list of permissions to revoke for the Amazon Q App.</p>
   * @public
   */
  revokePermissions?: PermissionInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppPermissionsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q App for which permissions were
   *       updated.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q App for which permissions were updated.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The updated list of permissions for the Amazon Q App.</p>
   * @public
   */
  permissions?: PermissionOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App session to provide input for.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The input values to provide for the current state of the Q App session.</p>
   * @public
   */
  values?: CardValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionOutput {
  /**
   * <p>The unique identifier of the updated Q App session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated Q App session.</p>
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionMetadataInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App session to update configuration for.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The new name for the Q App session.</p>
   * @public
   */
  sessionName?: string | undefined;

  /**
   * <p>The new sharing configuration for the Q App data collection session.</p>
   * @public
   */
  sharingConfiguration: SessionSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionMetadataOutput {
  /**
   * <p>The unique identifier of the updated Q App session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated Q App session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The new name of the updated Q App session.</p>
   * @public
   */
  sessionName?: string | undefined;

  /**
   * <p>The new sharing configuration of the updated Q App data collection session.</p>
   * @public
   */
  sharingConfiguration: SessionSharingConfiguration | undefined;
}

/**
 * <p>The filter criteria used on responses based on document attributes or metadata
 *       fields.</p>
 * @public
 */
export interface AttributeFilter {
  /**
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   * @public
   */
  andAllFilters?: AttributeFilter[] | undefined;

  /**
   * <p> Performs a logical <code>OR</code> operation on all supplied filters. </p>
   * @public
   */
  orAllFilters?: AttributeFilter[] | undefined;

  /**
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters. </p>
   * @public
   */
  notFilter?: AttributeFilter | undefined;

  /**
   * <p>Performs an <i>equals</i> operation on two document attributes or metadata
   *       fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>, <code>longValue</code>,
   *         <code>stringListValue</code> and <code>stringValue</code>.</p>
   * @public
   */
  equalsTo?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains all the specified document attributes
   *       or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>stringListValue</code>.</p>
   * @public
   */
  containsAll?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains any of the specified document
   *       attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>stringListValue</code>.</p>
   * @public
   */
  containsAny?: DocumentAttribute | undefined;

  /**
   * <p>Performs a <i>greater than</i> operation on two document attributes or
   *       metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code> and
   *       <code>longValue</code>.</p>
   * @public
   */
  greaterThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a <i>greater than or equals</i> operation on two document
   *       attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code> and <code>longValue</code>.
   *     </p>
   * @public
   */
  greaterThanOrEquals?: DocumentAttribute | undefined;

  /**
   * <p>Performs a <i>less than</i> operation on two document attributes or metadata
   *       fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code> and
   *       <code>longValue</code>.</p>
   * @public
   */
  lessThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a <i>less than or equals</i> operation on two document attributes
   *       or metadata fields.Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value type</a>: <code>dateValue</code> and <code>longValue</code>.
   *     </p>
   * @public
   */
  lessThanOrEquals?: DocumentAttribute | undefined;
}

/**
 * <p>A card in a Amazon Q App that generates a response based on the Amazon Q Business service.</p>
 * @public
 */
export interface QQueryCard {
  /**
   * <p>The unique identifier of the query card. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The title or label of the query card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Any dependencies or requirements for the query card.</p>
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The prompt or instructions displayed for the query card.</p>
   * @public
   */
  prompt: string | undefined;

  /**
   * <p>The source or type of output generated by the query card.</p>
   * @public
   */
  outputSource: CardOutputSource | undefined;

  /**
   * <p>The Amazon Q Business filters applied in this query card when resolving data sources</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * <p>Any dependencies for the query card, where the dependencies are references to the
   *       collected responses.</p>
   * @public
   */
  memoryReferences?: string[] | undefined;
}

/**
 * <p>The input shape for defining a query card in an Amazon Q App.</p>
 * @public
 */
export interface QQueryCardInput {
  /**
   * <p>The title or label of the query card.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the query card.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of the card.</p>
   * @public
   */
  type: CardType | undefined;

  /**
   * <p>The prompt or instructions displayed for the query card.</p>
   * @public
   */
  prompt: string | undefined;

  /**
   * <p>The source or type of output to generate for the query card.</p>
   * @public
   */
  outputSource?: CardOutputSource | undefined;

  /**
   * <p>Turns on filtering of responses based on document attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;
}

/**
 * <p>A card representing a component or step in an Amazon Q App's flow.</p>
 * @public
 */
export type Card =
  | Card.FileUploadMember
  | Card.FormInputMember
  | Card.QPluginMember
  | Card.QQueryMember
  | Card.TextInputMember
  | Card.$UnknownMember;

/**
 * @public
 */
export namespace Card {
  /**
   * <p>A container for the properties of the text input card.</p>
   * @public
   */
  export interface TextInputMember {
    textInput: TextInputCard;
    qQuery?: never;
    qPlugin?: never;
    fileUpload?: never;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the query card.</p>
   * @public
   */
  export interface QQueryMember {
    textInput?: never;
    qQuery: QQueryCard;
    qPlugin?: never;
    fileUpload?: never;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the plugin card.</p>
   * @public
   */
  export interface QPluginMember {
    textInput?: never;
    qQuery?: never;
    qPlugin: QPluginCard;
    fileUpload?: never;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the file upload card.</p>
   * @public
   */
  export interface FileUploadMember {
    textInput?: never;
    qQuery?: never;
    qPlugin?: never;
    fileUpload: FileUploadCard;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the form input card.</p>
   * @public
   */
  export interface FormInputMember {
    textInput?: never;
    qQuery?: never;
    qPlugin?: never;
    fileUpload?: never;
    formInput: FormInputCard;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textInput?: never;
    qQuery?: never;
    qPlugin?: never;
    fileUpload?: never;
    formInput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    textInput: (value: TextInputCard) => T;
    qQuery: (value: QQueryCard) => T;
    qPlugin: (value: QPluginCard) => T;
    fileUpload: (value: FileUploadCard) => T;
    formInput: (value: FormInputCard) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Card, visitor: Visitor<T>): T => {
    if (value.textInput !== undefined) return visitor.textInput(value.textInput);
    if (value.qQuery !== undefined) return visitor.qQuery(value.qQuery);
    if (value.qPlugin !== undefined) return visitor.qPlugin(value.qPlugin);
    if (value.fileUpload !== undefined) return visitor.fileUpload(value.fileUpload);
    if (value.formInput !== undefined) return visitor.formInput(value.formInput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The properties defining an input card in an Amazon Q App.</p>
 * @public
 */
export type CardInput =
  | CardInput.FileUploadMember
  | CardInput.FormInputMember
  | CardInput.QPluginMember
  | CardInput.QQueryMember
  | CardInput.TextInputMember
  | CardInput.$UnknownMember;

/**
 * @public
 */
export namespace CardInput {
  /**
   * <p>A container for the properties of the text input card.</p>
   * @public
   */
  export interface TextInputMember {
    textInput: TextInputCardInput;
    qQuery?: never;
    qPlugin?: never;
    fileUpload?: never;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the query input card.</p>
   * @public
   */
  export interface QQueryMember {
    textInput?: never;
    qQuery: QQueryCardInput;
    qPlugin?: never;
    fileUpload?: never;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the plugin input card.</p>
   * @public
   */
  export interface QPluginMember {
    textInput?: never;
    qQuery?: never;
    qPlugin: QPluginCardInput;
    fileUpload?: never;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the file upload input card.</p>
   * @public
   */
  export interface FileUploadMember {
    textInput?: never;
    qQuery?: never;
    qPlugin?: never;
    fileUpload: FileUploadCardInput;
    formInput?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for the properties of the form input card.</p>
   * @public
   */
  export interface FormInputMember {
    textInput?: never;
    qQuery?: never;
    qPlugin?: never;
    fileUpload?: never;
    formInput: FormInputCardInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textInput?: never;
    qQuery?: never;
    qPlugin?: never;
    fileUpload?: never;
    formInput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    textInput: (value: TextInputCardInput) => T;
    qQuery: (value: QQueryCardInput) => T;
    qPlugin: (value: QPluginCardInput) => T;
    fileUpload: (value: FileUploadCardInput) => T;
    formInput: (value: FormInputCardInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CardInput, visitor: Visitor<T>): T => {
    if (value.textInput !== undefined) return visitor.textInput(value.textInput);
    if (value.qQuery !== undefined) return visitor.qQuery(value.qQuery);
    if (value.qPlugin !== undefined) return visitor.qPlugin(value.qPlugin);
    if (value.fileUpload !== undefined) return visitor.fileUpload(value.fileUpload);
    if (value.formInput !== undefined) return visitor.formInput(value.formInput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The definition of the Q App, specifying the cards and flow.</p>
 * @public
 */
export interface AppDefinition {
  /**
   * <p>The version of the app definition schema or specification.</p>
   * @public
   */
  appDefinitionVersion: string | undefined;

  /**
   * <p>The cards that make up the Q App, such as text input, file upload, or query cards.</p>
   * @public
   */
  cards: Card[] | undefined;

  /**
   * <p>A flag indicating whether the Q App's definition can be edited by the user.</p>
   * @public
   */
  canEdit?: boolean | undefined;
}

/**
 * <p>The input for defining an Q App.</p>
 * @public
 */
export interface AppDefinitionInput {
  /**
   * <p>The cards that make up the Q App definition.</p>
   * @public
   */
  cards: CardInput[] | undefined;

  /**
   * <p>The initial prompt displayed when the Q App is started.</p>
   * @public
   */
  initialPrompt?: string | undefined;
}

/**
 * @public
 */
export interface CreateQAppInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The title of the new Q App.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the new Q App.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The definition of the new Q App, specifying the cards and flow.</p>
   * @public
   */
  appDefinition: AppDefinitionInput | undefined;

  /**
   * <p>Optional tags to associate with the new Q App.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetQAppOutput {
  /**
   * <p>The unique identifier of the Q App.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Q App.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The title of the Q App.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the Q App.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The initial prompt displayed when the Q App is started.</p>
   * @public
   */
  initialPrompt?: string | undefined;

  /**
   * <p>The version of the Q App.</p>
   * @public
   */
  appVersion: number | undefined;

  /**
   * <p>The status of the Q App.</p>
   * @public
   */
  status: AppStatus | undefined;

  /**
   * <p>The date and time the Q App was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The user who created the Q App.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time the Q App was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The user who last updated the Q App.</p>
   * @public
   */
  updatedBy: string | undefined;

  /**
   * <p>The capabilities required to run the Q App, such as file upload or third-party
   *       integrations.</p>
   * @public
   */
  requiredCapabilities?: AppRequiredCapability[] | undefined;

  /**
   * <p>The full definition of the Q App, specifying the cards and flow.</p>
   * @public
   */
  appDefinition: AppDefinition | undefined;
}

/**
 * <p>The definition of an Amazon Q App generated based on input such as a conversation or problem
 *       statement.</p>
 * @public
 */
export interface PredictAppDefinition {
  /**
   * <p>The title of the generated Q App definition.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the generated Q App definition.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The definition specifying the cards and flow of the generated Q App.</p>
   * @public
   */
  appDefinition: AppDefinitionInput | undefined;
}

/**
 * @public
 */
export interface UpdateQAppInput {
  /**
   * <p>The unique identifier of the Amazon Q Business application environment instance.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique identifier of the Q App to update.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The new title for the Q App.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The new description for the Q App.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The new definition specifying the cards and flow for the Q App.</p>
   * @public
   */
  appDefinition?: AppDefinitionInput | undefined;
}

/**
 * @public
 */
export interface PredictQAppOutput {
  /**
   * <p>The generated Q App definition.</p>
   * @public
   */
  app: PredictAppDefinition | undefined;

  /**
   * <p>The problem statement extracted from the input conversation, if provided.</p>
   * @public
   */
  problemStatement: string | undefined;
}
