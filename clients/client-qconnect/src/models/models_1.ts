// smithy-typescript generated code
import {
  AIAgentType,
  AIPromptType,
  ChannelSubtype,
  ExternalSource,
  ImportJobStatus,
  ImportJobType,
  KnowledgeBaseSearchType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  MessageTemplateFilterOperator,
  MessageTemplateQueryOperator,
  Order,
  Participant,
  Priority,
  QueryResultType,
  QuickResponseFilterOperator,
  QuickResponseQueryOperator,
  QuickResponseStatus,
  RecommendationType,
  RelevanceLevel,
  SpanStatus,
  SpanType,
} from "./enums";

import {
  type Configuration,
  type DataReference,
  type Document,
  type ExtendedMessageTemplateData,
  type GroupingConfiguration,
  type KnowledgeBaseData,
  type KnowledgeSource,
  type MessageTemplateAttributes,
  type MessageTemplateContentProvider,
  type MessageTemplateData,
  type MessageTemplateSourceConfiguration,
  type MessageTemplateSourceConfigurationSummary,
  type QuickResponseContents,
  type QuickResponseData,
  type QuickResponseDataProvider,
  type RankingData,
  type RenderingConfiguration,
  type SearchExpression,
  type ServerSideEncryptionConfiguration,
  type SourceConfiguration,
  type VectorIngestionConfiguration,
  CaseSummarizationChunkDataDetails,
  ContentDataDetails,
  ContentSummary,
  EmailOverviewChunkDataDetails,
  EmailResponseChunkDataDetails,
  FilterAttribute,
  IntentDetectedDataDetails,
  MessageTemplateAttachment,
  NotesChunkDataDetails,
  NotesDataDetails,
  RecommendationTrigger,
  SourceContentDataDetails,
  SpanTextValue,
  SpanToolUseValue,
  SuggestedMessageDataDetails,
} from "./models_0";

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
   * <p>The channel this message template applies to.</p>
   * @public
   */
  channel?: string | undefined;

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
   * <p>The container of message template source configuration.</p>
   * @public
   */
  sourceConfiguration?: MessageTemplateSourceConfiguration | undefined;

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
   * <p>The channel of the message template.</p>
   * @public
   */
  channel?: string | undefined;

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
  content?: MessageTemplateContentProvider | undefined;

  /**
   * <p>The source configuration of the message template.</p>
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

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
   * <p>The source configuration of the message template. Only set this argument for WHATSAPP channel subtype.</p>
   * @public
   */
  sourceConfiguration?: MessageTemplateSourceConfiguration | undefined;

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
   * <p>The channel of the message template.</p>
   * @public
   */
  channel?: string | undefined;

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
   * <p>The source configuration summary of the message template.</p>
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

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
 * <p>Message content value - can be text, tool invocation, or tool result</p>
 * @public
 */
export type SpanMessageValue =
  | SpanMessageValue.TextMember
  | SpanMessageValue.ToolResultMember
  | SpanMessageValue.ToolUseMember
  | SpanMessageValue.$UnknownMember;

/**
 * @public
 */
export namespace SpanMessageValue {
  /**
   * <p>Text message content</p>
   * @public
   */
  export interface TextMember {
    text: SpanTextValue;
    toolUse?: never;
    toolResult?: never;
    $unknown?: never;
  }

  /**
   * <p>Tool invocation message content</p>
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: SpanToolUseValue;
    toolResult?: never;
    $unknown?: never;
  }

  /**
   * <p>Tool result message content</p>
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolUse?: never;
    toolResult: SpanToolResultValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: SpanTextValue) => T;
    toolUse: (value: SpanToolUseValue) => T;
    toolResult: (value: SpanToolResultValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Tool result message content</p>
 * @public
 */
export interface SpanToolResultValue {
  /**
   * <p>Relates this result back to the tool invocation</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The tool results</p>
   * @public
   */
  values: SpanMessageValue[] | undefined;

  /**
   * <p>The tool invocation error if failed</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>Configuration for filtering content during retrieval operations.</p>
 * @public
 */
export type RetrievalFilterConfiguration =
  | RetrievalFilterConfiguration.AndAllMember
  | RetrievalFilterConfiguration.EqualsMember
  | RetrievalFilterConfiguration.GreaterThanMember
  | RetrievalFilterConfiguration.GreaterThanOrEqualsMember
  | RetrievalFilterConfiguration.InMember
  | RetrievalFilterConfiguration.LessThanMember
  | RetrievalFilterConfiguration.LessThanOrEqualsMember
  | RetrievalFilterConfiguration.ListContainsMember
  | RetrievalFilterConfiguration.NotEqualsMember
  | RetrievalFilterConfiguration.NotInMember
  | RetrievalFilterConfiguration.OrAllMember
  | RetrievalFilterConfiguration.StartsWithMember
  | RetrievalFilterConfiguration.StringContainsMember
  | RetrievalFilterConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RetrievalFilterConfiguration {
  /**
   * <p>Filter configuration that requires all conditions to be met.</p>
   * @public
   */
  export interface AndAllMember {
    andAll: RetrievalFilterConfiguration[];
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for exact equality matching.</p>
   * @public
   */
  export interface EqualsMember {
    andAll?: never;
    equals: FilterAttribute;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for greater than comparison.</p>
   * @public
   */
  export interface GreaterThanMember {
    andAll?: never;
    equals?: never;
    greaterThan: FilterAttribute;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for greater than or equal comparison.</p>
   * @public
   */
  export interface GreaterThanOrEqualsMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals: FilterAttribute;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for membership in a set of values.</p>
   * @public
   */
  export interface InMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in: FilterAttribute;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for less than comparison.</p>
   * @public
   */
  export interface LessThanMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan: FilterAttribute;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for less than or equal comparison.</p>
   * @public
   */
  export interface LessThanOrEqualsMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals: FilterAttribute;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for checking if a list contains a value.</p>
   * @public
   */
  export interface ListContainsMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains: FilterAttribute;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for inequality matching.</p>
   * @public
   */
  export interface NotEqualsMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals: FilterAttribute;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for exclusion from a set of values.</p>
   * @public
   */
  export interface NotInMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn: FilterAttribute;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration where any condition can be met.</p>
   * @public
   */
  export interface OrAllMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll: RetrievalFilterConfiguration[];
    startsWith?: never;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for prefix matching.</p>
   * @public
   */
  export interface StartsWithMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith: FilterAttribute;
    stringContains?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter configuration for substring matching.</p>
   * @public
   */
  export interface StringContainsMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains: FilterAttribute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    andAll?: never;
    equals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    in?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    listContains?: never;
    notEquals?: never;
    notIn?: never;
    orAll?: never;
    startsWith?: never;
    stringContains?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    andAll: (value: RetrievalFilterConfiguration[]) => T;
    equals: (value: FilterAttribute) => T;
    greaterThan: (value: FilterAttribute) => T;
    greaterThanOrEquals: (value: FilterAttribute) => T;
    in: (value: FilterAttribute) => T;
    lessThan: (value: FilterAttribute) => T;
    lessThanOrEquals: (value: FilterAttribute) => T;
    listContains: (value: FilterAttribute) => T;
    notEquals: (value: FilterAttribute) => T;
    notIn: (value: FilterAttribute) => T;
    orAll: (value: RetrievalFilterConfiguration[]) => T;
    startsWith: (value: FilterAttribute) => T;
    stringContains: (value: FilterAttribute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A message in the conversation history with participant role and content values</p>
 * @public
 */
export interface SpanMessage {
  /**
   * <p>Unique message identifier</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>Message source role</p>
   * @public
   */
  participant: Participant | undefined;

  /**
   * <p>Message timestamp</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>Message content values (text, tool use, tool result)</p>
   * @public
   */
  values: SpanMessageValue[] | undefined;
}

/**
 * <p>Configuration for content retrieval operations.</p>
 * @public
 */
export interface RetrievalConfiguration {
  /**
   * <p>The knowledge source configuration for content retrieval.</p>
   * @public
   */
  knowledgeSource: KnowledgeSource | undefined;

  /**
   * <p>The filter configuration for content retrieval.</p>
   * @public
   */
  filter?: RetrievalFilterConfiguration | undefined;

  /**
   * <p>The number of results to retrieve.</p>
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * <p>Override setting for the knowledge base search type during retrieval.</p>
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * <p>The identifier of the Amazon Q in Connect assistant for content retrieval.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The configuration for the content retrieval operation.</p>
   * @public
   */
  retrievalConfiguration: RetrievalConfiguration | undefined;

  /**
   * <p>The query for content retrieval.</p>
   * @public
   */
  retrievalQuery: string | undefined;
}

/**
 * <p>Details about the data.</p>
 * @public
 */
export type DataDetails =
  | DataDetails.CaseSummarizationChunkDataMember
  | DataDetails.ContentDataMember
  | DataDetails.EmailGenerativeAnswerChunkDataMember
  | DataDetails.EmailOverviewChunkDataMember
  | DataDetails.EmailResponseChunkDataMember
  | DataDetails.GenerativeChunkDataMember
  | DataDetails.GenerativeDataMember
  | DataDetails.IntentDetectedDataMember
  | DataDetails.NotesChunkDataMember
  | DataDetails.NotesDataMember
  | DataDetails.SourceContentDataMember
  | DataDetails.SuggestedMessageDataMember
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Streaming chunk data for email response generation containing partial response content.</p>
   * @public
   */
  export interface EmailResponseChunkDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData: EmailResponseChunkDataDetails;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Streaming chunk data for email overview containing partial overview content.</p>
   * @public
   */
  export interface EmailOverviewChunkDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData?: never;
    emailOverviewChunkData: EmailOverviewChunkDataDetails;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Streaming chunk data for email generative answers containing partial knowledge-based response content.</p>
   * @public
   */
  export interface EmailGenerativeAnswerChunkDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData: EmailGenerativeAnswerChunkDataDetails;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about case summarization chunk data.</p>
   * @public
   */
  export interface CaseSummarizationChunkDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData: CaseSummarizationChunkDataDetails;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about suggested message data.</p>
   * @public
   */
  export interface SuggestedMessageDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData: SuggestedMessageDataDetails;
    notesData?: never;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about notes data.</p>
   * @public
   */
  export interface NotesDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData: NotesDataDetails;
    notesChunkData?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about notes chunk data.</p>
   * @public
   */
  export interface NotesChunkDataMember {
    contentData?: never;
    generativeData?: never;
    intentDetectedData?: never;
    sourceContentData?: never;
    generativeChunkData?: never;
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData: NotesChunkDataDetails;
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
    caseSummarizationChunkData?: never;
    suggestedMessageData?: never;
    notesData?: never;
    notesChunkData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contentData: (value: ContentDataDetails) => T;
    generativeData: (value: GenerativeDataDetails) => T;
    intentDetectedData: (value: IntentDetectedDataDetails) => T;
    sourceContentData: (value: SourceContentDataDetails) => T;
    generativeChunkData: (value: GenerativeChunkDataDetails) => T;
    emailResponseChunkData: (value: EmailResponseChunkDataDetails) => T;
    emailOverviewChunkData: (value: EmailOverviewChunkDataDetails) => T;
    emailGenerativeAnswerChunkData: (value: EmailGenerativeAnswerChunkDataDetails) => T;
    caseSummarizationChunkData: (value: CaseSummarizationChunkDataDetails) => T;
    suggestedMessageData: (value: SuggestedMessageDataDetails) => T;
    notesData: (value: NotesDataDetails) => T;
    notesChunkData: (value: NotesChunkDataDetails) => T;
    _: (name: string, value: any) => T;
  }
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
 * <p>Details of streaming chunk data for email generative answers including completion text and references.</p>
 * @public
 */
export interface EmailGenerativeAnswerChunkDataDetails {
  /**
   * <p>The partial or complete text content of the generative answer response.</p>
   * @public
   */
  completion?: string | undefined;

  /**
   * <p>Source references and citations from knowledge base articles used to generate the answer.</p>
   * @public
   */
  references?: DataSummary[] | undefined;

  /**
   * <p>Token for retrieving the next chunk of streaming response data, if available.</p>
   * @public
   */
  nextChunkToken?: string | undefined;
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
 * <p>Contextual attributes capturing operation details, LLM configuration, usage metrics, and conversation data</p>
 * @public
 */
export interface SpanAttributes {
  /**
   * <p>Action being performed</p>
   * @public
   */
  operationName?: string | undefined;

  /**
   * <p>Model provider identifier (e.g., aws.bedrock)</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>Error classification if span failed (e.g., throttle, timeout)</p>
   * @public
   */
  errorType?: string | undefined;

  /**
   * <p>Amazon Connect agent ID</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>Amazon Connect instance ARN</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>Amazon Connect contact identifier</p>
   * @public
   */
  contactId?: string | undefined;

  /**
   * <p>Amazon Connect contact identifier</p>
   * @public
   */
  initialContactId?: string | undefined;

  /**
   * <p>Session name</p>
   * @public
   */
  sessionName?: string | undefined;

  /**
   * <p>AI agent ARN</p>
   * @public
   */
  aiAgentArn?: string | undefined;

  /**
   * <p>AI agent type</p>
   * @public
   */
  aiAgentType?: AIAgentType | undefined;

  /**
   * <p>AI agent name</p>
   * @public
   */
  aiAgentName?: string | undefined;

  /**
   * <p>AI agent identifier</p>
   * @public
   */
  aiAgentId?: string | undefined;

  /**
   * <p>AI agent version number</p>
   * @public
   */
  aiAgentVersion?: number | undefined;

  /**
   * <p>Entity that invoked the AI agent</p>
   * @public
   */
  aiAgentInvoker?: string | undefined;

  /**
   * <p>AI agent orchestrator use case</p>
   * @public
   */
  aiAgentOrchestratorUseCase?: string | undefined;

  /**
   * <p>LLM model ID for request (e.g., anthropic.claude-3-sonnet)</p>
   * @public
   */
  requestModel?: string | undefined;

  /**
   * <p>Maximum tokens configured for generation</p>
   * @public
   */
  requestMaxTokens?: number | undefined;

  /**
   * <p>Sampling temperature for generation</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>Top-p sampling parameter for generation</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>Actual model used for response (usually matches requestModel)</p>
   * @public
   */
  responseModel?: string | undefined;

  /**
   * <p>Generation termination reasons (e.g., stop, max_tokens)</p>
   * @public
   */
  responseFinishReasons?: string[] | undefined;

  /**
   * <p>Number of input tokens in prompt</p>
   * @public
   */
  usageInputTokens?: number | undefined;

  /**
   * <p>Number of output tokens in response</p>
   * @public
   */
  usageOutputTokens?: number | undefined;

  /**
   * <p>Total tokens consumed (input + output)</p>
   * @public
   */
  usageTotalTokens?: number | undefined;

  /**
   * <p>Number of input tokens that were retrieved from cache</p>
   * @public
   */
  cacheReadInputTokens?: number | undefined;

  /**
   * <p>Number of input tokens that were written to cache in this request</p>
   * @public
   */
  cacheWriteInputTokens?: number | undefined;

  /**
   * <p>Input message collection sent to LLM</p>
   * @public
   */
  inputMessages?: SpanMessage[] | undefined;

  /**
   * <p>Output message collection received from LLM</p>
   * @public
   */
  outputMessages?: SpanMessage[] | undefined;

  /**
   * <p>System prompt instructions</p>
   * @public
   */
  systemInstructions?: SpanMessageValue[] | undefined;

  /**
   * <p>AI prompt ARN</p>
   * @public
   */
  promptArn?: string | undefined;

  /**
   * <p>AI prompt identifier</p>
   * @public
   */
  promptId?: string | undefined;

  /**
   * <p>AI prompt type</p>
   * @public
   */
  promptType?: AIPromptType | undefined;

  /**
   * <p>AI prompt name</p>
   * @public
   */
  promptName?: string | undefined;

  /**
   * <p>AI prompt version number</p>
   * @public
   */
  promptVersion?: number | undefined;
}

/**
 * <p>A span represents a unit of work during AI agent execution, capturing timing, status, and contextual attributes.</p>
 * @public
 */
export interface Span {
  /**
   * <p>Unique span identifier</p>
   * @public
   */
  spanId: string | undefined;

  /**
   * <p>UUID of the Connect AI Assistant resource</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>UUID of the Connect AI Session resource</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Parent span identifier for hierarchy. Null for root spans.</p>
   * @public
   */
  parentSpanId?: string | undefined;

  /**
   * <p>Service-defined operation name</p>
   * @public
   */
  spanName: string | undefined;

  /**
   * <p>Operation relationship type</p>
   * @public
   */
  spanType: SpanType | undefined;

  /**
   * <p>Operation start time in milliseconds since epoch</p>
   * @public
   */
  startTimestamp: Date | undefined;

  /**
   * <p>Operation end time in milliseconds since epoch</p>
   * @public
   */
  endTimestamp: Date | undefined;

  /**
   * <p>Span completion status</p>
   * @public
   */
  status: SpanStatus | undefined;

  /**
   * <p>The service request ID that initiated the operation</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>Span-specific contextual attributes</p>
   * @public
   */
  attributes: SpanAttributes | undefined;
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
 * @public
 */
export interface ListSpansResponse {
  /**
   * <p>Array of span objects for the session</p>
   * @public
   */
  spans: Span[] | undefined;

  /**
   * <p>Pagination token for retrieving additional results</p>
   * @public
   */
  nextToken?: string | undefined;
}
