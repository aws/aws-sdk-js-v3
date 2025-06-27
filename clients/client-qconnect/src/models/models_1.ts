// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ChannelSubtype,
  Configuration,
  ContentDataDetails,
  ContentDataDetailsFilterSensitiveLog,
  ContentSummary,
  DataReference,
  Document,
  DocumentFilterSensitiveLog,
  GroupingConfiguration,
  GroupingConfigurationFilterSensitiveLog,
  IntentDetectedDataDetails,
  IntentDetectedDataDetailsFilterSensitiveLog,
  KnowledgeBaseData,
  KnowledgeBaseDataFilterSensitiveLog,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  MessageTemplateAttachment,
  MessageTemplateAttachmentFilterSensitiveLog,
  MessageTemplateAttributes,
  MessageTemplateAttributesFilterSensitiveLog,
  MessageTemplateAttributeType,
  MessageTemplateContentProvider,
  MessageTemplateContentProviderFilterSensitiveLog,
  MessageTemplateData,
  MessageTemplateDataFilterSensitiveLog,
  QueryResultType,
  RankingData,
  RecommendationTrigger,
  RecommendationTriggerFilterSensitiveLog,
  RecommendationType,
  RelevanceLevel,
  RenderingConfiguration,
  SearchExpression,
  ServerSideEncryptionConfiguration,
  SourceConfiguration,
  SourceConfigurationFilterSensitiveLog,
  SourceContentDataDetails,
  SourceContentDataDetailsFilterSensitiveLog,
  VectorIngestionConfiguration,
} from "./models_0";

import { QConnectServiceException as __BaseException } from "./QConnectServiceException";

/**
 * <p>The extended data of a message template.</p>
 * @public
 */
export interface ExtendedMessageTemplateData {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>The timestamp when the message template was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the message template data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content: MessageTemplateContentProvider | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * <p>The types of attributes contain the message template.</p>
   * @public
   */
  attributeTypes?: MessageTemplateAttributeType[] | undefined;

  /**
   * <p>The message template attachments.</p>
   * @public
   */
  attachments?: MessageTemplateAttachment[] | undefined;

  /**
   * <p>Whether the version of the message template is activated.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The version number of the message template version.</p>
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * <p>The checksum value of the message template content that is referenced by the <code>$LATEST</code> qualifier. It can be returned in <code>MessageTemplateData</code> or <code>ExtendedMessageTemplateData</code>. It’s calculated by content, language, <code>defaultAttributes</code> and <code>Attachments</code> of the message template.</p>
   * @public
   */
  messageTemplateContentSha256: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateVersionResponse {
  /**
   * <p>The message template.</p>
   * @public
   */
  messageTemplate?: ExtendedMessageTemplateData | undefined;
}

/**
 * <p>The container of quick response data.</p>
 * @public
 */
export type QuickResponseDataProvider =
  | QuickResponseDataProvider.ContentMember
  | QuickResponseDataProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseDataProvider {
  /**
   * <p>The content of the quick response.</p>
   * @public
   */
  export interface ContentMember {
    content: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    content?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QuickResponseDataProvider, visitor: Visitor<T>): T => {
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateQuickResponseRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the quick response.</p>
   * @public
   */
  content: QuickResponseDataProvider | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for a quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for a quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the knowledge base. </p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect channels this quick response applies to.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The container quick response content.</p>
 * @public
 */
export type QuickResponseContentProvider =
  | QuickResponseContentProvider.ContentMember
  | QuickResponseContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseContentProvider {
  /**
   * <p>The content of the quick response.</p>
   * @public
   */
  export interface ContentMember {
    content: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    content?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QuickResponseContentProvider, visitor: Visitor<T>): T => {
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The content of the quick response stored in different media types.</p>
 * @public
 */
export interface QuickResponseContents {
  /**
   * <p>The container quick response content.</p>
   * @public
   */
  plainText?: QuickResponseContentProvider | undefined;

  /**
   * <p>The container quick response content.</p>
   * @public
   */
  markdown?: QuickResponseContentProvider | undefined;
}

/**
 * @public
 * @enum
 */
export const QuickResponseStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type QuickResponseStatus = (typeof QuickResponseStatus)[keyof typeof QuickResponseStatus];

/**
 * <p>Information about the quick response.</p>
 * @public
 */
export interface QuickResponseData {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the quick response data.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The contents of the quick response.</p>
   * @public
   */
  contents?: QuickResponseContents | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface DeactivateMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The version number of the message template version to deactivate.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeactivateMessageTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The version number of the message template version that has been deactivated.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeleteImportJobRequest {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the import job to be deleted.</p>
   * @public
   */
  importJobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportJobResponse {}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * <p>The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {}

/**
 * @public
 */
export interface DeleteMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN.</p>
   * @public
   */
  messageTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageTemplateResponse {}

/**
 * @public
 */
export interface DeleteMessageTemplateAttachmentRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The identifier of the attachment file.</p>
   * @public
   */
  attachmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageTemplateAttachmentResponse {}

/**
 * @public
 */
export interface DeleteQuickResponseRequest {
  /**
   * <p>The knowledge base from which the quick response is deleted. The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the quick response to delete.</p>
   * @public
   */
  quickResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuickResponseResponse {}

/**
 * @public
 * @enum
 */
export const ExternalSource = {
  AMAZON_CONNECT: "AMAZON_CONNECT",
} as const;

/**
 * @public
 */
export type ExternalSource = (typeof ExternalSource)[keyof typeof ExternalSource];

/**
 * <p>The configuration information of the external data source.</p>
 * @public
 */
export interface ExternalSourceConfiguration {
  /**
   * <p>The type of the external data source.</p>
   * @public
   */
  source: ExternalSource | undefined;

  /**
   * <p>The configuration information of the external data source.</p>
   * @public
   */
  configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * <p>The identifier of the import job to retrieve.</p>
   * @public
   */
  importJobId: string | undefined;

  /**
   * <p>The identifier of the knowledge base that the import job belongs to.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportJobType = {
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;

/**
 * @public
 */
export type ImportJobType = (typeof ImportJobType)[keyof typeof ImportJobType];

/**
 * @public
 * @enum
 */
export const ImportJobStatus = {
  COMPLETE: "COMPLETE",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ImportJobStatus = (typeof ImportJobStatus)[keyof typeof ImportJobStatus];

/**
 * <p>Summary information about the import job.</p>
 * @public
 */
export interface ImportJobData {
  /**
   * <p>The identifier of the import job.</p>
   * @public
   */
  importJobId: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The type of the import job.</p>
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * <p>The status of the import job.</p>
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * <p>The download link to the resource file that is uploaded to the import job.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The link to download the information of resource data that failed to be imported.</p>
   * @public
   */
  failedRecordReport?: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The timestamp when the import job was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the import job data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The metadata fields of the imported Amazon Q in Connect resources.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The configuration information of the external data source.</p>
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * <p>The import job.</p>
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface GetMessageTemplateRequest {
  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetMessageTemplateResponse {
  /**
   * <p>The message template.</p>
   * @public
   */
  messageTemplate?: ExtendedMessageTemplateData | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseRequest {
  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * <p>Summary information about the import job.</p>
 * @public
 */
export interface ImportJobSummary {
  /**
   * <p>The identifier of the import job.</p>
   * @public
   */
  importJobId: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The type of import job.</p>
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * <p>The status of the import job.</p>
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * <p>The timestamp when the import job was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the import job was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The metadata fields of the imported Amazon Q in Connect resources.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The configuration information of the external source that the resource data are imported from.</p>
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface ListImportJobsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListImportJobsResponse {
  /**
   * <p>Summary information about the import jobs.</p>
   * @public
   */
  importJobSummaries: ImportJobSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The status of the knowledge base summary.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>Configuration information about the external data source.</p>
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>Contains details about how to ingest the documents in a data source.</p>
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * <p>Information about how to render the content.</p>
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p> <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>, <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the key to invoke Amazon Q in Connect. </p> <p>For more information about setting up a customer managed key for Amazon Q in Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * <p>Information about the knowledge bases.</p>
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplatesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * <p>The summary of the message template.</p>
 * @public
 */
export interface MessageTemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>The timestamp when the message template was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the message template data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The version number of the message template version that is activated.</p>
   * @public
   */
  activeVersionNumber?: number | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplatesResponse {
  /**
   * <p>Summary information about the message template.</p>
   * @public
   */
  messageTemplateSummaries: MessageTemplateSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplateVersionsRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary of the message template version.</p>
 * @public
 */
export interface MessageTemplateVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>Whether the version of the message template is activated.</p>
   * @public
   */
  isActive: boolean | undefined;

  /**
   * <p>The version number of the message template version.</p>
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplateVersionsResponse {
  /**
   * <p>Summary information about the versions of a message template.</p>
   * @public
   */
  messageTemplateVersionSummaries: MessageTemplateVersionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RenderMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>An object that specifies the values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the value for that variable.</p>
   * @public
   */
  attributes: MessageTemplateAttributes | undefined;
}

/**
 * @public
 */
export interface RenderMessageTemplateResponse {
  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content: MessageTemplateContentProvider | undefined;

  /**
   * <p>The attribute keys that are not resolved.</p>
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * <p>The message template attachments.</p>
   * @public
   */
  attachments?: MessageTemplateAttachment[] | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The content of the message template.</p>
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.</p>
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateResponse {
  /**
   * <p>The message template.</p>
   * @public
   */
  messageTemplate?: MessageTemplateData | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateMetadataRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateMetadataResponse {
  /**
   * <p>The message template.</p>
   * @public
   */
  messageTemplate?: MessageTemplateData | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * <p>The summary information about the quick response.</p>
 * @public
 */
export interface QuickResponseSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The resource status of the quick response.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response summary was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesResponse {
  /**
   * <p>Summary information about the quick responses.</p>
   * @public
   */
  quickResponseSummaries: QuickResponseSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated content of the quick response.</p>
   * @public
   */
  content?: QuickResponseDataProvider | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The updated grouping configuration of the quick response.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>Whether to remove the grouping configuration of the quick response.</p>
   * @public
   */
  removeGroupingConfiguration?: boolean | undefined;

  /**
   * <p>The updated description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether to remove the description from the quick response.</p>
   * @public
   */
  removeDescription?: boolean | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>Whether to remove the shortcut key of the quick response.</p>
   * @public
   */
  removeShortcutKey?: boolean | undefined;

  /**
   * <p>Whether the quick response is active. </p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriResponse {}

/**
 * @public
 */
export interface SearchContentRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * @public
 */
export interface SearchContentResponse {
  /**
   * <p>Summary information about the content.</p>
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageTemplateFilterOperator = {
  EQUALS: "EQUALS",
  PREFIX: "PREFIX",
} as const;

/**
 * @public
 */
export type MessageTemplateFilterOperator =
  (typeof MessageTemplateFilterOperator)[keyof typeof MessageTemplateFilterOperator];

/**
 * <p>The message template fields to filter the message template query results by. The following is the list of supported field names:</p> <ul> <li> <p>name</p> </li> <li> <p>description</p> </li> <li> <p>channel</p> </li> <li> <p>channelSubtype</p> </li> <li> <p>language</p> </li> <li> <p>qualifier</p> </li> <li> <p>createdTime</p> </li> <li> <p>lastModifiedTime</p> </li> <li> <p>lastModifiedBy</p> </li> <li> <p>groupingConfiguration.criteria</p> </li> <li> <p>groupingConfiguration.values</p> </li> </ul>
 * @public
 */
export interface MessageTemplateFilterField {
  /**
   * <p>The name of the attribute field to filter the message templates by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of attribute field to filter the message template by.</p>
   * @public
   */
  values?: string[] | undefined;

  /**
   * <p>The operator to use for filtering.</p>
   * @public
   */
  operator: MessageTemplateFilterOperator | undefined;

  /**
   * <p>Whether to treat null value as a match for the attribute field.</p>
   * @public
   */
  includeNoExistence?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * <p>The message template fields to order the message template query results by. The following is the list of supported field names:</p> <ul> <li> <p>name</p> </li> <li> <p>description</p> </li> <li> <p>channel</p> </li> <li> <p>channelSubtype</p> </li> <li> <p>language</p> </li> <li> <p>qualifier</p> </li> <li> <p>createdTime</p> </li> <li> <p>lastModifiedTime</p> </li> <li> <p>lastModifiedBy</p> </li> <li> <p>groupingConfiguration.criteria</p> </li> <li> <p>groupingConfiguration.values</p> </li> </ul>
 * @public
 */
export interface MessageTemplateOrderField {
  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The order at which the message templates are sorted by.</p>
   * @public
   */
  order?: Order | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageTemplateQueryOperator = {
  CONTAINS: "CONTAINS",
  CONTAINS_AND_PREFIX: "CONTAINS_AND_PREFIX",
} as const;

/**
 * @public
 */
export type MessageTemplateQueryOperator =
  (typeof MessageTemplateQueryOperator)[keyof typeof MessageTemplateQueryOperator];

/**
 * @public
 * @enum
 */
export const Priority = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type Priority = (typeof Priority)[keyof typeof Priority];

/**
 * <p>The message template fields to query message templates by. The following is the list of supported field names:</p> <ul> <li> <p>name</p> </li> <li> <p>description</p> </li> </ul>
 * @public
 */
export interface MessageTemplateQueryField {
  /**
   * <p>The name of the attribute to query the message templates by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of the attribute to query the message templates by.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for matching attribute field values in the query.</p>
   * @public
   */
  operator: MessageTemplateQueryOperator | undefined;

  /**
   * <p>Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.</p>
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * <p>The importance of the attribute field when calculating query result relevancy scores. The value set for this parameter affects the ordering of search results.</p>
   * @public
   */
  priority?: Priority | undefined;
}

/**
 * <p>The search expression of the message template.</p>
 * @public
 */
export interface MessageTemplateSearchExpression {
  /**
   * <p>The message template query expressions.</p>
   * @public
   */
  queries?: MessageTemplateQueryField[] | undefined;

  /**
   * <p>The configuration of filtering rules applied to message template query results.</p>
   * @public
   */
  filters?: MessageTemplateFilterField[] | undefined;

  /**
   * <p>The message template attribute fields on which the query results are ordered.</p>
   * @public
   */
  orderOnField?: MessageTemplateOrderField | undefined;
}

/**
 * @public
 */
export interface SearchMessageTemplatesRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression for querying the message template.</p>
   * @public
   */
  searchExpression: MessageTemplateSearchExpression | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The result of message template search.</p>
 * @public
 */
export interface MessageTemplateSearchResultData {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * <p>The identifier of the message template.</p>
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the message template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The channel subtype this message template applies to.</p>
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * <p>The timestamp when the message template was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the message template data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template data.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>Whether the version of the message template is activated.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The version number of the message template version.</p>
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * <p>The description of the message template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the grouping of Amazon Q in Connect users.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>, <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>, <code>zh_CN</code>, <code>zh_TW</code> </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchMessageTemplatesResponse {
  /**
   * <p>The results of the message template search.</p>
   * @public
   */
  results: MessageTemplateSearchResultData[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuickResponseFilterOperator = {
  EQUALS: "EQUALS",
  PREFIX: "PREFIX",
} as const;

/**
 * @public
 */
export type QuickResponseFilterOperator =
  (typeof QuickResponseFilterOperator)[keyof typeof QuickResponseFilterOperator];

/**
 * <p>The quick response fields to filter the quick response query results by.</p> <p>The following is the list of supported field names.</p> <ul> <li> <p>name</p> </li> <li> <p>description</p> </li> <li> <p>shortcutKey</p> </li> <li> <p>isActive</p> </li> <li> <p>channels</p> </li> <li> <p>language</p> </li> <li> <p>contentType</p> </li> <li> <p>createdTime</p> </li> <li> <p>lastModifiedTime</p> </li> <li> <p>lastModifiedBy</p> </li> <li> <p>groupingConfiguration.criteria</p> </li> <li> <p>groupingConfiguration.values</p> </li> </ul>
 * @public
 */
export interface QuickResponseFilterField {
  /**
   * <p>The name of the attribute field to filter the quick responses by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of attribute field to filter the quick response by.</p>
   * @public
   */
  values?: string[] | undefined;

  /**
   * <p>The operator to use for filtering.</p>
   * @public
   */
  operator: QuickResponseFilterOperator | undefined;

  /**
   * <p>Whether to treat null value as a match for the attribute field.</p>
   * @public
   */
  includeNoExistence?: boolean | undefined;
}

/**
 * <p>The quick response fields to order the quick response query results by.</p> <p>The following is the list of supported field names.</p> <ul> <li> <p>name</p> </li> <li> <p>description</p> </li> <li> <p>shortcutKey</p> </li> <li> <p>isActive</p> </li> <li> <p>channels</p> </li> <li> <p>language</p> </li> <li> <p>contentType</p> </li> <li> <p>createdTime</p> </li> <li> <p>lastModifiedTime</p> </li> <li> <p>lastModifiedBy</p> </li> <li> <p>groupingConfiguration.criteria</p> </li> <li> <p>groupingConfiguration.values</p> </li> </ul>
 * @public
 */
export interface QuickResponseOrderField {
  /**
   * <p>The name of the attribute to order the quick response query results by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The order at which the quick responses are sorted by.</p>
   * @public
   */
  order?: Order | undefined;
}

/**
 * @public
 * @enum
 */
export const QuickResponseQueryOperator = {
  CONTAINS: "CONTAINS",
  CONTAINS_AND_PREFIX: "CONTAINS_AND_PREFIX",
} as const;

/**
 * @public
 */
export type QuickResponseQueryOperator = (typeof QuickResponseQueryOperator)[keyof typeof QuickResponseQueryOperator];

/**
 * <p>The quick response fields to query quick responses by.</p> <p>The following is the list of supported field names.</p> <ul> <li> <p>content</p> </li> <li> <p>name</p> </li> <li> <p>description</p> </li> <li> <p>shortcutKey</p> </li> </ul>
 * @public
 */
export interface QuickResponseQueryField {
  /**
   * <p>The name of the attribute to query the quick responses by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of the attribute to query the quick responses by.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for matching attribute field values in the query.</p>
   * @public
   */
  operator: QuickResponseQueryOperator | undefined;

  /**
   * <p>Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.</p>
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * <p>The importance of the attribute field when calculating query result relevancy scores. The value set for this parameter affects the ordering of search results.</p>
   * @public
   */
  priority?: Priority | undefined;
}

/**
 * <p>Information about the import job.</p>
 * @public
 */
export interface QuickResponseSearchExpression {
  /**
   * <p>The quick response query expressions.</p>
   * @public
   */
  queries?: QuickResponseQueryField[] | undefined;

  /**
   * <p>The configuration of filtering rules applied to quick response query results.</p>
   * @public
   */
  filters?: QuickResponseFilterField[] | undefined;

  /**
   * <p>The quick response attribute fields on which the query results are ordered.</p>
   * @public
   */
  orderOnField?: QuickResponseOrderField | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesRequest {
  /**
   * <p>The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression for querying the quick response.</p>
   * @public
   */
  searchExpression: QuickResponseSearchExpression | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html#user-defined-attributes">user-defined Amazon Connect contact attributes</a> to be resolved when search results are returned.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * <p>The result of quick response search.</p>
 * @public
 */
export interface QuickResponseSearchResultData {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p> <ul> <li> <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p> </li> <li> <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p> </li> </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The resource status of the quick response.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The contents of the quick response.</p>
   * @public
   */
  contents: QuickResponseContents | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response search result data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive: boolean | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response search result data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The user defined contact attributes that are not resolved when the search result is returned.</p>
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * <p>The user defined contact attributes that are resolved when the search result is returned.</p>
   * @public
   */
  attributesInterpolated?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesResponse {
  /**
   * <p>The results of the quick response search.</p>
   * @public
   */
  results: QuickResponseSearchResultData[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartContentUploadRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of content to upload.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The expected expiration time of the generated presigned URL, specified in minutes.</p>
   * @public
   */
  presignedUrlTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface StartContentUploadResponse {
  /**
   * <p>The identifier of the upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The URL of the upload.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The headers to include in the upload.</p>
   * @public
   */
  headersToInclude: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImportJobRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p> <ul> <li> <p>For importing Amazon Q in Connect quick responses, this should be a <code>QUICK_RESPONSES</code> type knowledge base.</p> </li> </ul>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of the import job.</p> <ul> <li> <p>For importing quick response resource, set the value to <code>QUICK_RESPONSES</code>.</p> </li> </ul>
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata fields of the imported Amazon Q in Connect resources.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The configuration information of the external source that the resource data are imported from.</p>
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartImportJobResponse {
  /**
   * <p>The import job.</p>
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The template URI to update.</p>
   * @public
   */
  templateUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * <p>The knowledge base to update.</p>
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Amazon Q in Connect throws this exception if you have too many tags in your tag set.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The specified resource name.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Details about the data.</p>
 * @public
 */
export type DataDetails =
  | DataDetails.ContentDataMember
  | DataDetails.GenerativeChunkDataMember
  | DataDetails.GenerativeDataMember
  | DataDetails.IntentDetectedDataMember
  | DataDetails.SourceContentDataMember
  | DataDetails.$UnknownMember;

/**
 * @public
 */
export namespace DataDetails {
  /**
   * <p>Details about the content data.</p>
   * @public
   */
  export interface ContentDataMember {
    contentData: ContentDataDetails;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p> Details about the generative data.</p>
   * @public
   */
  export interface GenerativeDataMember {
    contentData?: never;
    generativeData: GenerativeDataDetails;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the intent data.</p>
   * @public
   */
  export interface IntentDetectedDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData: IntentDetectedDataDetails;
    sourceContentData?: never;
    generativeChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the content data.</p>
   * @public
   */
  export interface SourceContentDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData: SourceContentDataDetails;
    generativeChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the generative chunk data.</p>
   * @public
   */
  export interface GenerativeChunkDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData: GenerativeChunkDataDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentData: (value: ContentDataDetails) => T;
    generativeData: (value: GenerativeDataDetails) => T;
    intentDetectedData: (value: IntentDetectedDataDetails) => T;
    sourceContentData: (value: SourceContentDataDetails) => T;
    generativeChunkData: (value: GenerativeChunkDataDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataDetails, visitor: Visitor<T>): T => {
    if (value.contentData !== undefined) return visitor.contentData(value.contentData);
    if (value.generativeData !== undefined) return visitor.generativeData(value.generativeData);
    if (value.intentDetectedData !== undefined) return visitor.intentDetectedData(value.intentDetectedData);
    if (value.sourceContentData !== undefined) return visitor.sourceContentData(value.sourceContentData);
    if (value.generativeChunkData !== undefined) return visitor.generativeChunkData(value.generativeChunkData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Summary of the data.</p>
 * @public
 */
export interface DataSummary {
  /**
   * <p>Reference information about the content.</p>
   * @public
   */
  reference: DataReference | undefined;

  /**
   * <p>Details about the data.</p>
   * @public
   */
  details: DataDetails | undefined;
}

/**
 * <p>Details about the generative chunk data.</p>
 * @public
 */
export interface GenerativeChunkDataDetails {
  /**
   * <p>A chunk of the LLM response.</p>
   * @public
   */
  completion?: string | undefined;

  /**
   * <p>The references used to generate the LLM response.</p>
   * @public
   */
  references?: DataSummary[] | undefined;

  /**
   * <p>The token for the next set of chunks. Use the value returned in the previous response in the next request to retrieve the next set of chunks.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * <p>Details about generative data.</p>
 * @public
 */
export interface GenerativeDataDetails {
  /**
   * <p>The LLM response.</p>
   * @public
   */
  completion: string | undefined;

  /**
   * <p>The references used to generative the LLM response.</p>
   * @public
   */
  references: DataSummary[] | undefined;

  /**
   * <p>Details about the generative content ranking data.</p>
   * @public
   */
  rankingData: RankingData | undefined;
}

/**
 * <p>Information about the recommendation.</p>
 * @public
 */
export interface RecommendationData {
  /**
   * <p>The identifier of the recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>The recommended document.</p>
   * @public
   */
  document?: Document | undefined;

  /**
   * <p>The relevance score of the recommendation.</p>
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * <p>The relevance level of the recommendation.</p>
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;

  /**
   * <p>The type of recommendation.</p>
   * @public
   */
  type?: RecommendationType | undefined;

  /**
   * <p> Summary of the recommended content.</p>
   * @public
   */
  data?: DataSummary | undefined;
}

/**
 * <p>Information about the result.</p>
 * @public
 */
export interface ResultData {
  /**
   * <p>The identifier of the result data.</p>
   * @public
   */
  resultId: string | undefined;

  /**
   * <p>The document.</p>
   * @public
   */
  document?: Document | undefined;

  /**
   * <p>The relevance score of the results.</p>
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * <p> Summary of the recommended content.</p>
   * @public
   */
  data?: DataSummary | undefined;

  /**
   * <p>The type of the query result.</p>
   * @public
   */
  type?: QueryResultType | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * <p>The recommendations.</p>
   * @public
   */
  recommendations: RecommendationData[] | undefined;

  /**
   * <p>The triggers corresponding to recommendations.</p>
   * @public
   */
  triggers?: RecommendationTrigger[] | undefined;
}

/**
 * @public
 */
export interface QueryAssistantResponse {
  /**
   * <p>The results of the query.</p>
   * @public
   */
  results: ResultData[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @internal
 */
export const ExtendedMessageTemplateDataFilterSensitiveLog = (obj: ExtendedMessageTemplateData): any => ({
  ...obj,
  ...(obj.content && { content: MessageTemplateContentProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.defaultAttributes && {
    defaultAttributes: MessageTemplateAttributesFilterSensitiveLog(obj.defaultAttributes),
  }),
  ...(obj.attachments && {
    attachments: obj.attachments.map((item) => MessageTemplateAttachmentFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateMessageTemplateVersionResponseFilterSensitiveLog = (
  obj: CreateMessageTemplateVersionResponse
): any => ({
  ...obj,
  ...(obj.messageTemplate && { messageTemplate: ExtendedMessageTemplateDataFilterSensitiveLog(obj.messageTemplate) }),
});

/**
 * @internal
 */
export const QuickResponseDataProviderFilterSensitiveLog = (obj: QuickResponseDataProvider): any => {
  if (obj.content !== undefined) return { content: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateQuickResponseRequestFilterSensitiveLog = (obj: CreateQuickResponseRequest): any => ({
  ...obj,
  ...(obj.content && { content: QuickResponseDataProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QuickResponseContentProviderFilterSensitiveLog = (obj: QuickResponseContentProvider): any => {
  if (obj.content !== undefined) return { content: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const QuickResponseContentsFilterSensitiveLog = (obj: QuickResponseContents): any => ({
  ...obj,
  ...(obj.plainText && { plainText: QuickResponseContentProviderFilterSensitiveLog(obj.plainText) }),
  ...(obj.markdown && { markdown: QuickResponseContentProviderFilterSensitiveLog(obj.markdown) }),
});

/**
 * @internal
 */
export const QuickResponseDataFilterSensitiveLog = (obj: QuickResponseData): any => ({
  ...obj,
  ...(obj.contents && { contents: QuickResponseContentsFilterSensitiveLog(obj.contents) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateQuickResponseResponseFilterSensitiveLog = (obj: CreateQuickResponseResponse): any => ({
  ...obj,
  ...(obj.quickResponse && { quickResponse: QuickResponseDataFilterSensitiveLog(obj.quickResponse) }),
});

/**
 * @internal
 */
export const ImportJobDataFilterSensitiveLog = (obj: ImportJobData): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
  ...(obj.failedRecordReport && { failedRecordReport: SENSITIVE_STRING }),
  ...(obj.externalSourceConfiguration && { externalSourceConfiguration: obj.externalSourceConfiguration }),
});

/**
 * @internal
 */
export const GetImportJobResponseFilterSensitiveLog = (obj: GetImportJobResponse): any => ({
  ...obj,
  ...(obj.importJob && { importJob: ImportJobDataFilterSensitiveLog(obj.importJob) }),
});

/**
 * @internal
 */
export const GetKnowledgeBaseResponseFilterSensitiveLog = (obj: GetKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseDataFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const GetMessageTemplateResponseFilterSensitiveLog = (obj: GetMessageTemplateResponse): any => ({
  ...obj,
  ...(obj.messageTemplate && { messageTemplate: ExtendedMessageTemplateDataFilterSensitiveLog(obj.messageTemplate) }),
});

/**
 * @internal
 */
export const GetQuickResponseResponseFilterSensitiveLog = (obj: GetQuickResponseResponse): any => ({
  ...obj,
  ...(obj.quickResponse && { quickResponse: QuickResponseDataFilterSensitiveLog(obj.quickResponse) }),
});

/**
 * @internal
 */
export const KnowledgeBaseSummaryFilterSensitiveLog = (obj: KnowledgeBaseSummary): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const ListKnowledgeBasesResponseFilterSensitiveLog = (obj: ListKnowledgeBasesResponse): any => ({
  ...obj,
  ...(obj.knowledgeBaseSummaries && {
    knowledgeBaseSummaries: obj.knowledgeBaseSummaries.map((item) => KnowledgeBaseSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RenderMessageTemplateRequestFilterSensitiveLog = (obj: RenderMessageTemplateRequest): any => ({
  ...obj,
  ...(obj.attributes && { attributes: MessageTemplateAttributesFilterSensitiveLog(obj.attributes) }),
});

/**
 * @internal
 */
export const RenderMessageTemplateResponseFilterSensitiveLog = (obj: RenderMessageTemplateResponse): any => ({
  ...obj,
  ...(obj.content && { content: MessageTemplateContentProviderFilterSensitiveLog(obj.content) }),
  ...(obj.attributesNotInterpolated && { attributesNotInterpolated: SENSITIVE_STRING }),
  ...(obj.attachments && {
    attachments: obj.attachments.map((item) => MessageTemplateAttachmentFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateMessageTemplateRequestFilterSensitiveLog = (obj: UpdateMessageTemplateRequest): any => ({
  ...obj,
  ...(obj.content && { content: MessageTemplateContentProviderFilterSensitiveLog(obj.content) }),
  ...(obj.defaultAttributes && {
    defaultAttributes: MessageTemplateAttributesFilterSensitiveLog(obj.defaultAttributes),
  }),
});

/**
 * @internal
 */
export const UpdateMessageTemplateResponseFilterSensitiveLog = (obj: UpdateMessageTemplateResponse): any => ({
  ...obj,
  ...(obj.messageTemplate && { messageTemplate: MessageTemplateDataFilterSensitiveLog(obj.messageTemplate) }),
});

/**
 * @internal
 */
export const UpdateMessageTemplateMetadataRequestFilterSensitiveLog = (
  obj: UpdateMessageTemplateMetadataRequest
): any => ({
  ...obj,
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateMessageTemplateMetadataResponseFilterSensitiveLog = (
  obj: UpdateMessageTemplateMetadataResponse
): any => ({
  ...obj,
  ...(obj.messageTemplate && { messageTemplate: MessageTemplateDataFilterSensitiveLog(obj.messageTemplate) }),
});

/**
 * @internal
 */
export const QuickResponseSummaryFilterSensitiveLog = (obj: QuickResponseSummary): any => ({
  ...obj,
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListQuickResponsesResponseFilterSensitiveLog = (obj: ListQuickResponsesResponse): any => ({
  ...obj,
  ...(obj.quickResponseSummaries && {
    quickResponseSummaries: obj.quickResponseSummaries.map((item) => QuickResponseSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateQuickResponseRequestFilterSensitiveLog = (obj: UpdateQuickResponseRequest): any => ({
  ...obj,
  ...(obj.content && { content: QuickResponseDataProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateQuickResponseResponseFilterSensitiveLog = (obj: UpdateQuickResponseResponse): any => ({
  ...obj,
  ...(obj.quickResponse && { quickResponse: QuickResponseDataFilterSensitiveLog(obj.quickResponse) }),
});

/**
 * @internal
 */
export const MessageTemplateSearchResultDataFilterSensitiveLog = (obj: MessageTemplateSearchResultData): any => ({
  ...obj,
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
});

/**
 * @internal
 */
export const SearchMessageTemplatesResponseFilterSensitiveLog = (obj: SearchMessageTemplatesResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => MessageTemplateSearchResultDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchQuickResponsesRequestFilterSensitiveLog = (obj: SearchQuickResponsesRequest): any => ({
  ...obj,
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QuickResponseSearchResultDataFilterSensitiveLog = (obj: QuickResponseSearchResultData): any => ({
  ...obj,
  ...(obj.contents && { contents: QuickResponseContentsFilterSensitiveLog(obj.contents) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
  ...(obj.attributesNotInterpolated && { attributesNotInterpolated: SENSITIVE_STRING }),
  ...(obj.attributesInterpolated && { attributesInterpolated: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchQuickResponsesResponseFilterSensitiveLog = (obj: SearchQuickResponsesResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => QuickResponseSearchResultDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartContentUploadResponseFilterSensitiveLog = (obj: StartContentUploadResponse): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartImportJobResponseFilterSensitiveLog = (obj: StartImportJobResponse): any => ({
  ...obj,
  ...(obj.importJob && { importJob: ImportJobDataFilterSensitiveLog(obj.importJob) }),
});

/**
 * @internal
 */
export const UpdateKnowledgeBaseTemplateUriResponseFilterSensitiveLog = (
  obj: UpdateKnowledgeBaseTemplateUriResponse
): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseDataFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const DataDetailsFilterSensitiveLog = (obj: DataDetails): any => {
  if (obj.contentData !== undefined) return { contentData: ContentDataDetailsFilterSensitiveLog(obj.contentData) };
  if (obj.generativeData !== undefined)
    return { generativeData: GenerativeDataDetailsFilterSensitiveLog(obj.generativeData) };
  if (obj.intentDetectedData !== undefined)
    return { intentDetectedData: IntentDetectedDataDetailsFilterSensitiveLog(obj.intentDetectedData) };
  if (obj.sourceContentData !== undefined)
    return { sourceContentData: SourceContentDataDetailsFilterSensitiveLog(obj.sourceContentData) };
  if (obj.generativeChunkData !== undefined)
    return { generativeChunkData: GenerativeChunkDataDetailsFilterSensitiveLog(obj.generativeChunkData) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const DataSummaryFilterSensitiveLog = (obj: DataSummary): any => ({
  ...obj,
  ...(obj.reference && { reference: obj.reference }),
  ...(obj.details && { details: DataDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const GenerativeChunkDataDetailsFilterSensitiveLog = (obj: GenerativeChunkDataDetails): any => ({
  ...obj,
  ...(obj.completion && { completion: SENSITIVE_STRING }),
  ...(obj.references && { references: obj.references.map((item) => DataSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GenerativeDataDetailsFilterSensitiveLog = (obj: GenerativeDataDetails): any => ({
  ...obj,
  ...(obj.completion && { completion: SENSITIVE_STRING }),
  ...(obj.references && { references: obj.references.map((item) => DataSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RecommendationDataFilterSensitiveLog = (obj: RecommendationData): any => ({
  ...obj,
  ...(obj.document && { document: DocumentFilterSensitiveLog(obj.document) }),
  ...(obj.data && { data: DataSummaryFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const ResultDataFilterSensitiveLog = (obj: ResultData): any => ({
  ...obj,
  ...(obj.document && { document: DocumentFilterSensitiveLog(obj.document) }),
  ...(obj.data && { data: DataSummaryFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const GetRecommendationsResponseFilterSensitiveLog = (obj: GetRecommendationsResponse): any => ({
  ...obj,
  ...(obj.recommendations && {
    recommendations: obj.recommendations.map((item) => RecommendationDataFilterSensitiveLog(item)),
  }),
  ...(obj.triggers && { triggers: obj.triggers.map((item) => RecommendationTriggerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const QueryAssistantResponseFilterSensitiveLog = (obj: QueryAssistantResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => ResultDataFilterSensitiveLog(item)) }),
});
