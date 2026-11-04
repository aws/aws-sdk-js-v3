// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  Action,
  AppRequiredCapability,
  AppStatus,
  CardOutputSource,
  CardType,
  DocumentScope,
  ExecutionStatus,
  InputCardComputeMode,
  LibraryItemStatus,
  PluginType,
  Sender,
  SubmissionMutationKind,
  UserType,
} from "./enums";

/**
 * A card in an Amazon Q App that allows the user to upload a file.
 *
 * @public
 */
export interface FileUploadCard {
  /**
   * The unique identifier of the file upload card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The title of the file upload card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Any dependencies or requirements for the file upload card.
   *
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The name of the file being uploaded.
   *
   * @public
   */
  filename?: string | undefined;

  /**
   * The unique identifier of the file associated with the card.
   *
   * @public
   */
  fileId?: string | undefined;

  /**
   * A flag indicating if the user can override the default file for the upload card.
   *
   * @public
   */
  allowOverride?: boolean | undefined;
}

/**
 * The metadata of the form input card.
 *
 * @public
 */
export interface FormInputCardMetadata {
  /**
   * The JSON schema that defines the shape of the response data.
   *
   * @public
   */
  schema: __DocumentType | undefined;
}

/**
 * A card in an Amazon Q App that allows the user to submit a response.
 *
 * @public
 */
export interface FormInputCard {
  /**
   * The unique identifier of the form input card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The title of the form input card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Any dependencies or requirements for the form input card.
   *
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The metadata that defines the form input card data.
   *
   * @public
   */
  metadata: FormInputCardMetadata | undefined;

  /**
   * The compute mode of the form input card. This property determines whether individual participants of a data collection session can submit multiple response or one response. A compute mode of `append` shall allow participants to submit the same form multiple times with different values. A compute mode of `replace`code&gt; shall overwrite the current value for each participant.
   *
   * @public
   */
  computeMode?: InputCardComputeMode | undefined;
}

/**
 * A card in an Q App that integrates with a third-party plugin or service.
 *
 * @public
 */
export interface QPluginCard {
  /**
   * The unique identifier of the plugin card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The title or label of the plugin card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Any dependencies or requirements for the plugin card.
   *
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The prompt or instructions displayed for the plugin card.
   *
   * @public
   */
  prompt: string | undefined;

  /**
   * The type or category of the plugin used by the card.
   *
   * @public
   */
  pluginType: PluginType | undefined;

  /**
   * The unique identifier of the plugin used by the card.
   *
   * @public
   */
  pluginId: string | undefined;

  /**
   * The action identifier of the action to be performed by the plugin card.
   *
   * @public
   */
  actionIdentifier?: string | undefined;
}

/**
 * The value of a document attribute. You can only provide one value for a document attribute.
 *
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
   * A string.
   *
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
   * A list of strings.
   *
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
   * A long integer value.
   *
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
   * A date expressed as an ISO 8601 string.
   *
   * It's important for the time zone to be included in the *ISO 8601 date-time* format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    stringListValue: (value: string[]) => T;
    longValue: (value: number) => T;
    dateValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A document attribute or metadata field.
 *
 * @public
 */
export interface DocumentAttribute {
  /**
   * The identifier for the attribute.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  value: DocumentAttributeValue | undefined;
}

/**
 * A card in an Amazon Q App that allows the user to input text.
 *
 * @public
 */
export interface TextInputCard {
  /**
   * The unique identifier of the text input card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The title or label of the text input card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Any dependencies or requirements for the text input card.
   *
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The placeholder text to display in the text input field.
   *
   * @public
   */
  placeholder?: string | undefined;

  /**
   * The default value to pre-populate in the text input field.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * Represents a file upload card. It can optionally receive a `filename` and `fileId` to set a default file. If not received, the user must provide the file when the Q App runs.
 *
 * @public
 */
export interface FileUploadCardInput {
  /**
   * The title or label of the file upload card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the file upload card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The default filename to use for the file upload card.
   *
   * @public
   */
  filename?: string | undefined;

  /**
   * The identifier of a pre-uploaded file associated with the card.
   *
   * @public
   */
  fileId?: string | undefined;

  /**
   * A flag indicating if the user can override the default file for the upload card.
   *
   * @public
   */
  allowOverride?: boolean | undefined;
}

/**
 * Represents a form input card for an Amazon Q App.
 *
 * @public
 */
export interface FormInputCardInput {
  /**
   * The title or label of the form input card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the form input card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The metadata that defines the form input card data.
   *
   * @public
   */
  metadata: FormInputCardMetadata | undefined;

  /**
   * The compute mode of the form input card. This property determines whether individual participants of a data collection session can submit multiple response or one response. A compute mode of `append` shall allow participants to submit the same form multiple times with different values. A compute mode of `replace`code&gt; shall overwrite the current value for each participant.
   *
   * @public
   */
  computeMode?: InputCardComputeMode | undefined;
}

/**
 * The input shape for defining a plugin card in an Amazon Q App.
 *
 * @public
 */
export interface QPluginCardInput {
  /**
   * The title or label of the plugin card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the plugin card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The prompt or instructions displayed for the plugin card.
   *
   * @public
   */
  prompt: string | undefined;

  /**
   * The unique identifier of the plugin used by the card.
   *
   * @public
   */
  pluginId: string | undefined;

  /**
   * The action identifier of the action to be performed by the plugin card.
   *
   * @public
   */
  actionIdentifier?: string | undefined;
}

/**
 * The input shape for defining a text input card in an Amazon Q App.
 *
 * @public
 */
export interface TextInputCardInput {
  /**
   * The title or label of the text input card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the text input card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The placeholder text to display in the text input field.
   *
   * @public
   */
  placeholder?: string | undefined;

  /**
   * The default value to pre-populate in the text input field.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLibraryItemReviewInput {
  /**
   * The unique identifier for the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the library item to associate the review with.
   *
   * @public
   */
  libraryItemId: string | undefined;
}

/**
 * @public
 */
export interface AssociateQAppWithUserInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The ID of the Amazon Q App to associate with the user.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * The category object to be created.
 *
 * @public
 */
export interface BatchCreateCategoryInputCategory {
  /**
   * The unique identifier to be associated with a category. If you don't include a value, the category is automatically assigned a unique identifier.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the category.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The color to be associated with a category. The color must be a hexadecimal value of either 3 or 6 digits.
   *
   * @public
   */
  color?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateCategoryInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The list of category objects to be created
   *
   * @public
   */
  categories: BatchCreateCategoryInputCategory[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteCategoryInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The list of IDs of the categories to be deleted.
   *
   * @public
   */
  categories: string[] | undefined;
}

/**
 * A label that web experience users associate with a library item. Web experience users use Categories to tag and filter library items.
 *
 * @public
 */
export interface CategoryInput {
  /**
   * The unique identifier of the category.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the category.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The color of the category, represented as a hexadecimal value of either 3 or 6 digits.
   *
   * @public
   */
  color?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateCategoryInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The list of categories to be updated with their new values.
   *
   * @public
   */
  categories: CategoryInput[] | undefined;
}

/**
 * A record created when a user submits a form card.
 *
 * @public
 */
export interface Submission {
  /**
   * The data submitted by the user.
   *
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * The unique identifier of the submission.
   *
   * @public
   */
  submissionId?: string | undefined;

  /**
   * The date and time when the card is submitted.
   *
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * The current status and value of a card in an active Amazon Q App session.
 *
 * @public
 */
export interface CardStatus {
  /**
   * The current state of the card.
   *
   * @public
   */
  currentState: ExecutionStatus | undefined;

  /**
   * The current value or result associated with the card.
   *
   * @public
   */
  currentValue: string | undefined;

  /**
   * A list of previous submissions, if the card is a form card.
   *
   * @public
   */
  submissions?: Submission[] | undefined;
}

/**
 * Represents an action performed on a submission.
 *
 * @public
 */
export interface SubmissionMutation {
  /**
   * The unique identifier of the submission.
   *
   * @public
   */
  submissionId: string | undefined;

  /**
   * The operation that is performed on a submission.
   *
   * @public
   */
  mutationType: SubmissionMutationKind | undefined;
}

/**
 * The value or result associated with a card in a Amazon Q App session.
 *
 * @public
 */
export interface CardValue {
  /**
   * The unique identifier of the card.
   *
   * @public
   */
  cardId: string | undefined;

  /**
   * The value or result associated with the card.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The structure that describes how the current form card value is mutated. Only applies for form cards when multiple responses are allowed.
   *
   * @public
   */
  submissionMutation?: SubmissionMutation | undefined;
}

/**
 * A category used to classify and filter library items for Amazon Q Apps.
 *
 * @public
 */
export interface Category {
  /**
   * The unique identifier of the category.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The title or name of the category.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The color of the category
   *
   * @public
   */
  color?: string | undefined;

  /**
   * The number of published Amazon Q Apps associated with a category
   *
   * @public
   */
  appCount?: number | undefined;
}

/**
 * A message in a conversation, used as input for generating an Amazon Q App definition.
 *
 * @public
 */
export interface ConversationMessage {
  /**
   * The text content of the conversation message.
   *
   * @public
   */
  body: string | undefined;

  /**
   * The type of the conversation message.
   *
   * @public
   */
  type: Sender | undefined;
}

/**
 * @public
 */
export interface CreateLibraryItemInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Amazon Q App to publish to the library.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The version of the Amazon Q App to publish to the library.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The categories to associate with the library item for easier discovery.
   *
   * @public
   */
  categories: string[] | undefined;
}

/**
 * @public
 */
export interface CreateLibraryItemOutput {
  /**
   * The unique identifier of the new library item.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The status of the new library item, such as "Published".
   *
   * @public
   */
  status: string | undefined;

  /**
   * The date and time the library item was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who created the library item.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the library item was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who last updated the library item.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The number of ratings the library item has received from users.
   *
   * @public
   */
  ratingCount: number | undefined;

  /**
   * Indicates whether the library item has been verified.
   *
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface CreatePresignedUrlInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the card the file is associated with.
   *
   * @public
   */
  cardId: string | undefined;

  /**
   * The unique identifier of the Q App the file is associated with.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The Base64-encoded SHA-256 digest of the contents of the file to be uploaded.
   *
   * @public
   */
  fileContentsSha256: string | undefined;

  /**
   * The name of the file to be uploaded.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * Whether the file is associated with a Q App definition or a specific Q App session.
   *
   * @public
   */
  scope: DocumentScope | undefined;

  /**
   * The unique identifier of the Q App session the file is associated with, if applicable.
   *
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedUrlOutput {
  /**
   * The unique identifier assigned to the file to be uploaded.
   *
   * @public
   */
  fileId: string | undefined;

  /**
   * The URL for a presigned S3 POST operation used to upload a file.
   *
   * @public
   */
  presignedUrl: string | undefined;

  /**
   * The form fields to include in the presigned S3 POST operation used to upload a file.
   *
   * @public
   */
  presignedUrlFields: Record<string, string> | undefined;

  /**
   * The date and time that the presigned URL will expire in ISO 8601 format.
   *
   * @public
   */
  presignedUrlExpiration: Date | undefined;
}

/**
 * @public
 */
export interface CreateQAppOutput {
  /**
   * The unique identifier of the new Q App.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new Q App.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The title of the new Q App.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the new Q App.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The initial prompt displayed when the Q App is started.
   *
   * @public
   */
  initialPrompt?: string | undefined;

  /**
   * The version of the new Q App.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The status of the new Q App, such as "Created".
   *
   * @public
   */
  status: AppStatus | undefined;

  /**
   * The date and time the Q App was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who created the Q App.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the Q App was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The user who last updated the Q App.
   *
   * @public
   */
  updatedBy: string | undefined;

  /**
   * The capabilities required to run the Q App, such as file upload or third-party integrations.
   *
   * @public
   */
  requiredCapabilities?: AppRequiredCapability[] | undefined;
}

/**
 * @public
 */
export interface DeleteLibraryItemInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the library item to delete.
   *
   * @public
   */
  libraryItemId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQAppInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App to delete.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface DescribeQAppPermissionsInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Amazon Q App for which to retrieve permissions.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * The principal for which the permission applies.
 *
 * @public
 */
export interface PrincipalOutput {
  /**
   * The unique identifier of the user.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The type of the user.
   *
   * @public
   */
  userType?: UserType | undefined;

  /**
   * The email address associated with the user.
   *
   * @public
   */
  email?: string | undefined;
}

/**
 * The permission granted to the Amazon Q App.
 *
 * @public
 */
export interface PermissionOutput {
  /**
   * The action associated with the permission.
   *
   * @public
   */
  action: Action | undefined;

  /**
   * The principal user to which the permission applies.
   *
   * @public
   */
  principal: PrincipalOutput | undefined;
}

/**
 * @public
 */
export interface DescribeQAppPermissionsOutput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q App for which permissions are returned.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The unique identifier of the Amazon Q App for which permissions are returned.
   *
   * @public
   */
  appId?: string | undefined;

  /**
   * The list of permissions granted for the Amazon Q App.
   *
   * @public
   */
  permissions?: PermissionOutput[] | undefined;
}

/**
 * @public
 */
export interface DisassociateLibraryItemReviewInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the library item to remove the review from.
   *
   * @public
   */
  libraryItemId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQAppFromUserInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App to disassociate from the user.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface ExportQAppSessionDataInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App data collection session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ExportQAppSessionDataOutput {
  /**
   * The link where the exported Q App session data can be downloaded from.
   *
   * @public
   */
  csvFileLink: string | undefined;

  /**
   * The date and time when the link for the exported Q App session data expires.
   *
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Q App data collection session.
   *
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * @public
 */
export interface GetLibraryItemInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the library item to retrieve.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The unique identifier of the Amazon Q App associated with the library item.
   *
   * @public
   */
  appId?: string | undefined;
}

/**
 * @public
 */
export interface GetLibraryItemOutput {
  /**
   * The unique identifier of the library item.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The unique identifier of the Q App associated with the library item.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The version of the Q App associated with the library item.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The categories associated with the library item for discovery.
   *
   * @public
   */
  categories: Category[] | undefined;

  /**
   * The status of the library item, such as "Published".
   *
   * @public
   */
  status: string | undefined;

  /**
   * The date and time the library item was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who created the library item.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the library item was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who last updated the library item.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The number of ratings the library item has received from users.
   *
   * @public
   */
  ratingCount: number | undefined;

  /**
   * Whether the current user has rated the library item.
   *
   * @public
   */
  isRatedByUser?: boolean | undefined;

  /**
   * The number of users who have associated the Q App with their account.
   *
   * @public
   */
  userCount?: number | undefined;

  /**
   * Indicates whether the library item has been verified.
   *
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQAppInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App to retrieve.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The version of the Q App.
   *
   * @public
   */
  appVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App session to retrieve.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionOutput {
  /**
   * The unique identifier of the Q App session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Q App session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The name of the Q App session.
   *
   * @public
   */
  sessionName?: string | undefined;

  /**
   * The version of the Q App used for the session.
   *
   * @public
   */
  appVersion?: number | undefined;

  /**
   * The latest published version of the Q App used for the session.
   *
   * @public
   */
  latestPublishedAppVersion?: number | undefined;

  /**
   * The current status of the Q App session.
   *
   * @public
   */
  status: ExecutionStatus | undefined;

  /**
   * The current status for each card in the Q App session.
   *
   * @public
   */
  cardStatus: Record<string, CardStatus> | undefined;

  /**
   * Indicates whether the current user is the owner of the Q App data collection session.
   *
   * @public
   */
  userIsHost?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionMetadataInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * The sharing configuration of an Amazon Q App data collection session.
 *
 * @public
 */
export interface SessionSharingConfiguration {
  /**
   * Indicates whether an Q App session is shareable with other users.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Indicates whether an Q App session can accept responses from users.
   *
   * @public
   */
  acceptResponses?: boolean | undefined;

  /**
   * Indicates whether collected responses for an Q App session are revealed for all users.
   *
   * @public
   */
  revealCards?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQAppSessionMetadataOutput {
  /**
   * The unique identifier of the Q App session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Q App session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The name of the Q App session.
   *
   * @public
   */
  sessionName?: string | undefined;

  /**
   * The sharing configuration of the Q App data collection session.
   *
   * @public
   */
  sharingConfiguration: SessionSharingConfiguration | undefined;

  /**
   * Indicates whether the current user is the owner of the Q App session.
   *
   * @public
   */
  sessionOwner?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportDocumentInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the card the file is associated with.
   *
   * @public
   */
  cardId: string | undefined;

  /**
   * The unique identifier of the Q App the file is associated with.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The base64-encoded contents of the file to upload.
   *
   * @public
   */
  fileContentsBase64: string | undefined;

  /**
   * The name of the file being uploaded.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * Whether the file is associated with a Q App definition or a specific Q App session.
   *
   * @public
   */
  scope: DocumentScope | undefined;

  /**
   * The unique identifier of the Q App session the file is associated with, if applicable.
   *
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface ImportDocumentOutput {
  /**
   * The unique identifier assigned to the uploaded file.
   *
   * @public
   */
  fileId?: string | undefined;
}

/**
 * A library item is a snapshot of an Amazon Q App that can be published so the users in their Amazon Q Apps library can discover it, clone it, and run it.
 *
 * @public
 */
export interface LibraryItemMember {
  /**
   * The unique identifier of the library item.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The unique identifier of the Q App associated with the library item.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The version of the Q App associated with the library item.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The categories associated with the library item.
   *
   * @public
   */
  categories: Category[] | undefined;

  /**
   * The status of the library item.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The date and time the library item was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who created the library item.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the library item was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who last updated the library item.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The number of ratings the library item has received.
   *
   * @public
   */
  ratingCount: number | undefined;

  /**
   * Whether the current user has rated the library item.
   *
   * @public
   */
  isRatedByUser?: boolean | undefined;

  /**
   * The number of users who have the associated Q App.
   *
   * @public
   */
  userCount?: number | undefined;

  /**
   * Indicates whether the library item has been verified.
   *
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface ListCategoriesInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;
}

/**
 * @public
 */
export interface ListCategoriesOutput {
  /**
   * The categories of a Amazon Q Business application environment instance.
   *
   * @public
   */
  categories?: Category[] | undefined;
}

/**
 * @public
 */
export interface ListLibraryItemsInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The maximum number of library items to return in the response.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional category to filter the library items by.
   *
   * @public
   */
  categoryId?: string | undefined;
}

/**
 * @public
 */
export interface ListLibraryItemsOutput {
  /**
   * The list of library items meeting the request criteria.
   *
   * @public
   */
  libraryItems?: LibraryItemMember[] | undefined;

  /**
   * The token to use to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQAppsInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The maximum number of Q Apps to return in the response.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An Amazon Q App associated with a user, either owned by the user or favorited.
 *
 * @public
 */
export interface UserAppItem {
  /**
   * The unique identifier of the Q App.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Q App.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The title of the Q App.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the Q App.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time the user's association with the Q App was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * A flag indicating whether the user can edit the Q App.
   *
   * @public
   */
  canEdit?: boolean | undefined;

  /**
   * The status of the user's association with the Q App.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Indicates whether the Q App has been verified.
   *
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface ListQAppsOutput {
  /**
   * The list of Amazon Q Apps meeting the request criteria.
   *
   * @public
   */
  apps: UserAppItem[] | undefined;

  /**
   * The token to use to request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQAppSessionDataInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App data collection session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * A user of an Amazon Q App.
 *
 * @public
 */
export interface User {
  /**
   * The unique identifier of a user.
   *
   * @public
   */
  userId?: string | undefined;
}

/**
 * The response collected for a Amazon Q App session. This container represents a single response to a Q App session.
 *
 * @public
 */
export interface QAppSessionData {
  /**
   * The card Id associated with the response submitted for a Q App session.
   *
   * @public
   */
  cardId: string | undefined;

  /**
   * The response submitted for a Q App session.
   *
   * @public
   */
  value?: __DocumentType | undefined;

  /**
   * The user who submitted the response for a Q App session.
   *
   * @public
   */
  user: User | undefined;

  /**
   * The unique identifier of the submission.
   *
   * @public
   */
  submissionId?: string | undefined;

  /**
   * The date and time when the session data is submitted.
   *
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListQAppSessionDataOutput {
  /**
   * The unique identifier of the Q App data collection session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Q App data collection session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The collected responses of a Q App session.
   *
   * @public
   */
  sessionData?: QAppSessionData[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags should be listed.
   *
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags that are assigned to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The permission to grant or revoke for a Amazon Q App.
 *
 * @public
 */
export interface PermissionInput {
  /**
   * The action associated with the permission.
   *
   * @public
   */
  action: Action | undefined;

  /**
   * The principal user to which the permission applies.
   *
   * @public
   */
  principal: string | undefined;
}

/**
 * The input options for generating an Q App definition.
 *
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
   * A conversation to use as input for generating the Q App definition.
   *
   * @public
   */
  export interface ConversationMember {
    conversation: ConversationMessage[];
    problemStatement?: never;
    $unknown?: never;
  }

  /**
   * A problem statement to use as input for generating the Q App definition.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversation: (value: ConversationMessage[]) => T;
    problemStatement: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PredictQAppInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The input to generate the Q App definition from, either a conversation or problem statement.
   *
   * @public
   */
  options?: PredictQAppInputOptions | undefined;
}

/**
 * @public
 */
export interface StartQAppSessionInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App to start a session for.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The version of the Q App to use for the session.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * Optional initial input values to provide for the Q App session.
   *
   * @public
   */
  initialValues?: CardValue[] | undefined;

  /**
   * The unique identifier of the a Q App session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * Optional tags to associate with the new Q App session.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartQAppSessionOutput {
  /**
   * The unique identifier of the new or retrieved Q App session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new Q App session.
   *
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * @public
 */
export interface StopQAppSessionInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App session to stop.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * The tags to associate with the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource to disassociate the tag from.
   *
   * @public
   */
  resourceARN: string | undefined;

  /**
   * The keys of the tags to disassociate from the resource.
   *
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
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the library item to update.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The new status to set for the library item, such as "Published" or "Hidden".
   *
   * @public
   */
  status?: LibraryItemStatus | undefined;

  /**
   * The new categories to associate with the library item.
   *
   * @public
   */
  categories?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateLibraryItemOutput {
  /**
   * The unique identifier of the updated library item.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The unique identifier of the Q App associated with the library item.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The version of the Q App associated with the library item.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The categories associated with the updated library item.
   *
   * @public
   */
  categories: Category[] | undefined;

  /**
   * The new status of the updated library item.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The date and time the library item was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who originally created the library item.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the library item was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The user who last updated the library item.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * The number of ratings the library item has received.
   *
   * @public
   */
  ratingCount: number | undefined;

  /**
   * Whether the current user has rated the library item.
   *
   * @public
   */
  isRatedByUser?: boolean | undefined;

  /**
   * The number of users who have the associated Q App.
   *
   * @public
   */
  userCount?: number | undefined;

  /**
   * Indicates whether the library item has been verified.
   *
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLibraryItemMetadataInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the updated library item.
   *
   * @public
   */
  libraryItemId: string | undefined;

  /**
   * The verification status of the library item
   *
   * @public
   */
  isVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateQAppOutput {
  /**
   * The unique identifier of the updated Q App.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated Q App.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The new title of the updated Q App.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The new description of the updated Q App.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The initial prompt for the updated Q App.
   *
   * @public
   */
  initialPrompt?: string | undefined;

  /**
   * The new version of the updated Q App.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The status of the updated Q App.
   *
   * @public
   */
  status: AppStatus | undefined;

  /**
   * The date and time the Q App was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who originally created the Q App.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the Q App was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The user who last updated the Q App.
   *
   * @public
   */
  updatedBy: string | undefined;

  /**
   * The capabilities required for the updated Q App.
   *
   * @public
   */
  requiredCapabilities?: AppRequiredCapability[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppPermissionsInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Amazon Q App for which permissions are being updated.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The list of permissions to grant for the Amazon Q App.
   *
   * @public
   */
  grantPermissions?: PermissionInput[] | undefined;

  /**
   * The list of permissions to revoke for the Amazon Q App.
   *
   * @public
   */
  revokePermissions?: PermissionInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppPermissionsOutput {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q App for which permissions were updated.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The unique identifier of the Amazon Q App for which permissions were updated.
   *
   * @public
   */
  appId?: string | undefined;

  /**
   * The updated list of permissions for the Amazon Q App.
   *
   * @public
   */
  permissions?: PermissionOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App session to provide input for.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The input values to provide for the current state of the Q App session.
   *
   * @public
   */
  values?: CardValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionOutput {
  /**
   * The unique identifier of the updated Q App session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated Q App session.
   *
   * @public
   */
  sessionArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionMetadataInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App session to update configuration for.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The new name for the Q App session.
   *
   * @public
   */
  sessionName?: string | undefined;

  /**
   * The new sharing configuration for the Q App data collection session.
   *
   * @public
   */
  sharingConfiguration: SessionSharingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateQAppSessionMetadataOutput {
  /**
   * The unique identifier of the updated Q App session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated Q App session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The new name of the updated Q App session.
   *
   * @public
   */
  sessionName?: string | undefined;

  /**
   * The new sharing configuration of the updated Q App data collection session.
   *
   * @public
   */
  sharingConfiguration: SessionSharingConfiguration | undefined;
}

/**
 * The filter criteria used on responses based on document attributes or metadata fields.
 *
 * @public
 */
export interface AttributeFilter {
  /**
   * Performs a logical `AND` operation on all supplied filters.
   *
   * @public
   */
  andAllFilters?: AttributeFilter[] | undefined;

  /**
   * Performs a logical `OR` operation on all supplied filters.
   *
   * @public
   */
  orAllFilters?: AttributeFilter[] | undefined;

  /**
   * Performs a logical `NOT` operation on all supplied filters.
   *
   * @public
   */
  notFilter?: AttributeFilter | undefined;

  /**
   * Performs an *equals* operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue`, `longValue`, `stringListValue` and `stringValue`.
   *
   * @public
   */
  equalsTo?: DocumentAttribute | undefined;

  /**
   * Returns `true` when a document contains all the specified document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `stringListValue`.
   *
   * @public
   */
  containsAll?: DocumentAttribute | undefined;

  /**
   * Returns `true` when a document contains any of the specified document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `stringListValue`.
   *
   * @public
   */
  containsAny?: DocumentAttribute | undefined;

  /**
   * Performs a *greater than* operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  greaterThan?: DocumentAttribute | undefined;

  /**
   * Performs a *greater than or equals* operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  greaterThanOrEquals?: DocumentAttribute | undefined;

  /**
   * Performs a *less than* operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  lessThan?: DocumentAttribute | undefined;

  /**
   * Performs a *less than or equals* operation on two document attributes or metadata fields.Supported for the following [document attribute value type](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  lessThanOrEquals?: DocumentAttribute | undefined;
}

/**
 * A card in a Amazon Q App that generates a response based on the Amazon Q Business service.
 *
 * @public
 */
export interface QQueryCard {
  /**
   * The unique identifier of the query card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The title or label of the query card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * Any dependencies or requirements for the query card.
   *
   * @public
   */
  dependencies: string[] | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The prompt or instructions displayed for the query card.
   *
   * @public
   */
  prompt: string | undefined;

  /**
   * The source or type of output generated by the query card.
   *
   * @public
   */
  outputSource: CardOutputSource | undefined;

  /**
   * The Amazon Q Business filters applied in this query card when resolving data sources
   *
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * Any dependencies for the query card, where the dependencies are references to the collected responses.
   *
   * @public
   */
  memoryReferences?: string[] | undefined;
}

/**
 * The input shape for defining a query card in an Amazon Q App.
 *
 * @public
 */
export interface QQueryCardInput {
  /**
   * The title or label of the query card.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the query card.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of the card.
   *
   * @public
   */
  type: CardType | undefined;

  /**
   * The prompt or instructions displayed for the query card.
   *
   * @public
   */
  prompt: string | undefined;

  /**
   * The source or type of output to generate for the query card.
   *
   * @public
   */
  outputSource?: CardOutputSource | undefined;

  /**
   * Turns on filtering of responses based on document attributes or metadata fields.
   *
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;
}

/**
 * A card representing a component or step in an Amazon Q App's flow.
 *
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
   * A container for the properties of the text input card.
   *
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
   * A container for the properties of the query card.
   *
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
   * A container for the properties of the plugin card.
   *
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
   * A container for the properties of the file upload card.
   *
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
   * A container for the properties of the form input card.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textInput: (value: TextInputCard) => T;
    qQuery: (value: QQueryCard) => T;
    qPlugin: (value: QPluginCard) => T;
    fileUpload: (value: FileUploadCard) => T;
    formInput: (value: FormInputCard) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The properties defining an input card in an Amazon Q App.
 *
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
   * A container for the properties of the text input card.
   *
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
   * A container for the properties of the query input card.
   *
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
   * A container for the properties of the plugin input card.
   *
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
   * A container for the properties of the file upload input card.
   *
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
   * A container for the properties of the form input card.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textInput: (value: TextInputCardInput) => T;
    qQuery: (value: QQueryCardInput) => T;
    qPlugin: (value: QPluginCardInput) => T;
    fileUpload: (value: FileUploadCardInput) => T;
    formInput: (value: FormInputCardInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The definition of the Q App, specifying the cards and flow.
 *
 * @public
 */
export interface AppDefinition {
  /**
   * The version of the app definition schema or specification.
   *
   * @public
   */
  appDefinitionVersion: string | undefined;

  /**
   * The cards that make up the Q App, such as text input, file upload, or query cards.
   *
   * @public
   */
  cards: Card[] | undefined;

  /**
   * A flag indicating whether the Q App's definition can be edited by the user.
   *
   * @public
   */
  canEdit?: boolean | undefined;
}

/**
 * The input for defining an Q App.
 *
 * @public
 */
export interface AppDefinitionInput {
  /**
   * The cards that make up the Q App definition.
   *
   * @public
   */
  cards: CardInput[] | undefined;

  /**
   * The initial prompt displayed when the Q App is started.
   *
   * @public
   */
  initialPrompt?: string | undefined;
}

/**
 * @public
 */
export interface CreateQAppInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The title of the new Q App.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the new Q App.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The definition of the new Q App, specifying the cards and flow.
   *
   * @public
   */
  appDefinition: AppDefinitionInput | undefined;

  /**
   * Optional tags to associate with the new Q App.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetQAppOutput {
  /**
   * The unique identifier of the Q App.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Q App.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The title of the Q App.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the Q App.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The initial prompt displayed when the Q App is started.
   *
   * @public
   */
  initialPrompt?: string | undefined;

  /**
   * The version of the Q App.
   *
   * @public
   */
  appVersion: number | undefined;

  /**
   * The status of the Q App.
   *
   * @public
   */
  status: AppStatus | undefined;

  /**
   * The date and time the Q App was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The user who created the Q App.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The date and time the Q App was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The user who last updated the Q App.
   *
   * @public
   */
  updatedBy: string | undefined;

  /**
   * The capabilities required to run the Q App, such as file upload or third-party integrations.
   *
   * @public
   */
  requiredCapabilities?: AppRequiredCapability[] | undefined;

  /**
   * The full definition of the Q App, specifying the cards and flow.
   *
   * @public
   */
  appDefinition: AppDefinition | undefined;
}

/**
 * The definition of an Amazon Q App generated based on input such as a conversation or problem statement.
 *
 * @public
 */
export interface PredictAppDefinition {
  /**
   * The title of the generated Q App definition.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the generated Q App definition.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The definition specifying the cards and flow of the generated Q App.
   *
   * @public
   */
  appDefinition: AppDefinitionInput | undefined;
}

/**
 * @public
 */
export interface UpdateQAppInput {
  /**
   * The unique identifier of the Amazon Q Business application environment instance.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique identifier of the Q App to update.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The new title for the Q App.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The new description for the Q App.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The new definition specifying the cards and flow for the Q App.
   *
   * @public
   */
  appDefinition?: AppDefinitionInput | undefined;
}

/**
 * @public
 */
export interface PredictQAppOutput {
  /**
   * The generated Q App definition.
   *
   * @public
   */
  app: PredictAppDefinition | undefined;

  /**
   * The problem statement extracted from the input conversation, if provided.
   *
   * @public
   */
  problemStatement: string | undefined;
}
