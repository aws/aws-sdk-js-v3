// smithy-typescript generated code
import type {
  AIAgentType,
  AIPromptType,
  ChannelSubtype,
  ExternalSource,
  ImportJobStatus,
  ImportJobType,
  InteractionMode,
  KnowledgeBaseSearchType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  MessageTemplateAttributeType,
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
  ReturnReason,
  SpanStatus,
  SpanType,
} from "./enums";
import type {
  CaseSummarizationChunkDataDetails,
  Configuration,
  ContentDataDetails,
  ContentSummary,
  DataReference,
  Document,
  EmailOverviewChunkDataDetails,
  EmailResponseChunkDataDetails,
  FilterAttribute,
  GroupingConfiguration,
  IntentDetectedDataDetails,
  KnowledgeBaseData,
  KnowledgeSource,
  MessageTemplateAttachment,
  MessageTemplateAttributes,
  MessageTemplateContentProvider,
  MessageTemplateData,
  MessageTemplateSourceConfiguration,
  MessageTemplateSourceConfigurationSummary,
  NotesChunkDataDetails,
  NotesDataDetails,
  ProactiveRecommendationDataDetails,
  RankingData,
  RecommendationTrigger,
  RenderingConfiguration,
  SearchExpression,
  ServerSideEncryptionConfiguration,
  SourceConfiguration,
  SourceContentDataDetails,
  SpanGuardrailAssessment,
  SpanReasoningValue,
  SpanTextValue,
  SpanToolUseValue,
  SuggestedMessageDataDetails,
  VectorIngestionConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface CreateMessageTemplateAttachmentResponse {
  /**
   * The message template attachment.
   *
   * @public
   */
  attachment?: MessageTemplateAttachment | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateVersionRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The checksum value of the message template content that is referenced by the `$LATEST` qualifier. It can be returned in `MessageTemplateData` or `ExtendedMessageTemplateData`. It’s calculated by content, language, `defaultAttributes` and `Attachments` of the message template. If not supplied, the message template version will be created based on the message template content that is referenced by the `$LATEST` qualifier by default.
   *
   * @public
   */
  messageTemplateContentSha256?: string | undefined;
}

/**
 * The extended data of a message template.
 *
 * @public
 */
export interface ExtendedMessageTemplateData {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The channel of the message template.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The channel subtype this message template applies to.
   *
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * The timestamp when the message template was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the message template data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the message template data.
   *
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * The content of the message template.
   *
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * The description of the message template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The source configuration summary of the message template.
   *
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

  /**
   * The configuration information of the grouping of Amazon Q in Connect users.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;

  /**
   * The types of attributes contain the message template.
   *
   * @public
   */
  attributeTypes?: MessageTemplateAttributeType[] | undefined;

  /**
   * The message template attachments.
   *
   * @public
   */
  attachments?: MessageTemplateAttachment[] | undefined;

  /**
   * Whether the version of the message template is activated.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The version number of the message template version.
   *
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * The checksum value of the message template content that is referenced by the `$LATEST` qualifier. It can be returned in `MessageTemplateData` or `ExtendedMessageTemplateData`. It’s calculated by content, language, `defaultAttributes` and `Attachments` of the message template.
   *
   * @public
   */
  messageTemplateContentSha256: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMessageTemplateVersionResponse {
  /**
   * The message template.
   *
   * @public
   */
  messageTemplate?: ExtendedMessageTemplateData | undefined;
}

/**
 * The container of quick response data.
 *
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
   * The content of the quick response.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateQuickResponseRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The content of the quick response.
   *
   * @public
   */
  content: QuickResponseDataProvider | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for a quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for a quick response written in richtext.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The configuration information of the user groups that the quick response is accessible to.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Connect Customer channels this quick response applies to.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](http://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The container quick response content.
 *
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
   * The content of the quick response.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The content of the quick response stored in different media types.
 *
 * @public
 */
export interface QuickResponseContents {
  /**
   * The container quick response content.
   *
   * @public
   */
  plainText?: QuickResponseContentProvider | undefined;

  /**
   * The container quick response content.
   *
   * @public
   */
  markdown?: QuickResponseContentProvider | undefined;
}

/**
 * Information about the quick response.
 *
 * @public
 */
export interface QuickResponseData {
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   *
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The status of the quick response data.
   *
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * The timestamp when the quick response was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the quick response data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The contents of the quick response.
   *
   * @public
   */
  contents?: QuickResponseContents | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration information of the user groups that the quick response is accessible to.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the quick response data.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Connect Customer contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseResponse {
  /**
   * The quick response.
   *
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface DeactivateMessageTemplateRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The version number of the message template version to deactivate.
   *
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeactivateMessageTemplateResponse {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The version number of the message template version that has been deactivated.
   *
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface DeleteImportJobRequest {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the import job to be deleted.
   *
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
   * The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN.
   *
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
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The identifier of the attachment file.
   *
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
   * The knowledge base from which the quick response is deleted. The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the quick response to delete.
   *
   * @public
   */
  quickResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuickResponseResponse {}

/**
 * The configuration information of the external data source.
 *
 * @public
 */
export interface ExternalSourceConfiguration {
  /**
   * The type of the external data source.
   *
   * @public
   */
  source: ExternalSource | undefined;

  /**
   * The configuration information of the external data source.
   *
   * @public
   */
  configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * The identifier of the import job to retrieve.
   *
   * @public
   */
  importJobId: string | undefined;

  /**
   * The identifier of the knowledge base that the import job belongs to.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * Summary information about the import job.
 *
 * @public
 */
export interface ImportJobData {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  importJobId: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The type of the import job.
   *
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * The download link to the resource file that is uploaded to the import job.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The link to download the information of resource data that failed to be imported.
   *
   * @public
   */
  failedRecordReport?: string | undefined;

  /**
   * The expiration time of the URL as an epoch timestamp.
   *
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * The timestamp when the import job was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the import job data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The metadata fields of the imported Amazon Q in Connect resources.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The configuration information of the external data source.
   *
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * The import job.
   *
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * The knowledge base.
   *
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface GetMessageTemplateRequest {
  /**
   * The identifier of the message template. Can be either the ID or the ARN.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetMessageTemplateResponse {
  /**
   * The message template.
   *
   * @public
   */
  messageTemplate?: ExtendedMessageTemplateData | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseRequest {
  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseResponse {
  /**
   * The quick response.
   *
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * Summary information about the import job.
 *
 * @public
 */
export interface ImportJobSummary {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  importJobId: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The type of import job.
   *
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * The timestamp when the import job was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the import job was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The metadata fields of the imported Amazon Q in Connect resources.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The configuration information of the external source that the resource data are imported from.
   *
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface ListImportJobsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListImportJobsResponse {
  /**
   * Summary information about the import jobs.
   *
   * @public
   */
  importJobSummaries: ImportJobSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of knowledge base.
   *
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * The status of the knowledge base summary.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * Configuration information about the external data source.
   *
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Contains details about how to ingest the documents in a data source.
   *
   * @public
   */
  vectorIngestionConfiguration?: VectorIngestionConfiguration | undefined;

  /**
   * Information about how to render the content.
   *
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt`, and `kms:GenerateDataKey*` permissions to the IAM identity using the key to invoke Amazon Q in Connect.
   *
   * For more information about setting up a customer managed key for Amazon Q in Connect, see [Enable Amazon Q in Connect for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The description of the knowledge base.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * Information about the knowledge bases.
   *
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplatesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * The summary of the message template.
 *
 * @public
 */
export interface MessageTemplateSummary {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The channel this message template applies to.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The channel subtype this message template applies to.
   *
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * The timestamp when the message template was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the message template data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the message template data.
   *
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * The container of message template source configuration.
   *
   * @public
   */
  sourceConfiguration?: MessageTemplateSourceConfiguration | undefined;

  /**
   * The version number of the message template version that is activated.
   *
   * @public
   */
  activeVersionNumber?: number | undefined;

  /**
   * The description of the message template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplatesResponse {
  /**
   * Summary information about the message template.
   *
   * @public
   */
  messageTemplateSummaries: MessageTemplateSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplateVersionsRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary of the message template version.
 *
 * @public
 */
export interface MessageTemplateVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The channel of the message template.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The channel subtype this message template applies to.
   *
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * Whether the version of the message template is activated.
   *
   * @public
   */
  isActive: boolean | undefined;

  /**
   * The version number of the message template version.
   *
   * @public
   */
  versionNumber: number | undefined;
}

/**
 * @public
 */
export interface ListMessageTemplateVersionsResponse {
  /**
   * Summary information about the versions of a message template.
   *
   * @public
   */
  messageTemplateVersionSummaries: MessageTemplateVersionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RenderMessageTemplateRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * An object that specifies the values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the value for that variable.
   *
   * @public
   */
  attributes: MessageTemplateAttributes | undefined;
}

/**
 * @public
 */
export interface RenderMessageTemplateResponse {
  /**
   * The content of the message template.
   *
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * The source configuration of the message template.
   *
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

  /**
   * The attribute keys that are not resolved.
   *
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * The message template attachments.
   *
   * @public
   */
  attachments?: MessageTemplateAttachment[] | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The content of the message template.
   *
   * @public
   */
  content?: MessageTemplateContentProvider | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The source configuration of the message template. Only set this argument for WHATSAPP channel subtype.
   *
   * @public
   */
  sourceConfiguration?: MessageTemplateSourceConfiguration | undefined;

  /**
   * An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
   *
   * @public
   */
  defaultAttributes?: MessageTemplateAttributes | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateResponse {
  /**
   * The message template.
   *
   * @public
   */
  messageTemplate?: MessageTemplateData | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateMetadataRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the message template. Can be either the ID or the ARN. It cannot contain any qualifier.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the message template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration information of the grouping of Amazon Q in Connect users.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMessageTemplateMetadataResponse {
  /**
   * The message template.
   *
   * @public
   */
  messageTemplate?: MessageTemplateData | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * The summary information about the quick response.
 *
 * @public
 */
export interface QuickResponseSummary {
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   *
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The resource status of the quick response.
   *
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * The timestamp when the quick response was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the quick response summary was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the quick response data.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Connect Customer contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesResponse {
  /**
   * Summary information about the quick responses.
   *
   * @public
   */
  quickResponseSummaries: QuickResponseSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated content of the quick response.
   *
   * @public
   */
  content?: QuickResponseDataProvider | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The updated grouping configuration of the quick response.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * Whether to remove the grouping configuration of the quick response.
   *
   * @public
   */
  removeGroupingConfiguration?: boolean | undefined;

  /**
   * The updated description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether to remove the description from the quick response.
   *
   * @public
   */
  removeDescription?: boolean | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * Whether to remove the shortcut key of the quick response.
   *
   * @public
   */
  removeShortcutKey?: boolean | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Connect Customer contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseResponse {
  /**
   * The quick response.
   *
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The search expression to filter results.
   *
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * @public
 */
export interface SearchContentResponse {
  /**
   * Summary information about the content.
   *
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The message template fields to filter the message template query results by. The following is the list of supported field names:
 *
 * - name
 * - description
 * - channel
 * - channelSubtype
 * - language
 * - qualifier
 * - createdTime
 * - lastModifiedTime
 * - lastModifiedBy
 * - groupingConfiguration.criteria
 * - groupingConfiguration.values
 *
 * @public
 */
export interface MessageTemplateFilterField {
  /**
   * The name of the attribute field to filter the message templates by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values of attribute field to filter the message template by.
   *
   * @public
   */
  values?: string[] | undefined;

  /**
   * The operator to use for filtering.
   *
   * @public
   */
  operator: MessageTemplateFilterOperator | undefined;

  /**
   * Whether to treat null value as a match for the attribute field.
   *
   * @public
   */
  includeNoExistence?: boolean | undefined;
}

/**
 * The message template fields to order the message template query results by. The following is the list of supported field names:
 *
 * - name
 * - description
 * - channel
 * - channelSubtype
 * - language
 * - qualifier
 * - createdTime
 * - lastModifiedTime
 * - lastModifiedBy
 * - groupingConfiguration.criteria
 * - groupingConfiguration.values
 *
 * @public
 */
export interface MessageTemplateOrderField {
  /**
   * The name of the message template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The order at which the message templates are sorted by.
   *
   * @public
   */
  order?: Order | undefined;
}

/**
 * The message template fields to query message templates by. The following is the list of supported field names:
 *
 * - name
 * - description
 *
 * @public
 */
export interface MessageTemplateQueryField {
  /**
   * The name of the attribute to query the message templates by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values of the attribute to query the message templates by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for matching attribute field values in the query.
   *
   * @public
   */
  operator: MessageTemplateQueryOperator | undefined;

  /**
   * Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.
   *
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * The importance of the attribute field when calculating query result relevancy scores. The value set for this parameter affects the ordering of search results.
   *
   * @public
   */
  priority?: Priority | undefined;
}

/**
 * The search expression of the message template.
 *
 * @public
 */
export interface MessageTemplateSearchExpression {
  /**
   * The message template query expressions.
   *
   * @public
   */
  queries?: MessageTemplateQueryField[] | undefined;

  /**
   * The configuration of filtering rules applied to message template query results.
   *
   * @public
   */
  filters?: MessageTemplateFilterField[] | undefined;

  /**
   * The message template attribute fields on which the query results are ordered.
   *
   * @public
   */
  orderOnField?: MessageTemplateOrderField | undefined;
}

/**
 * @public
 */
export interface SearchMessageTemplatesRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The search expression for querying the message template.
   *
   * @public
   */
  searchExpression: MessageTemplateSearchExpression | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The result of message template search.
 *
 * @public
 */
export interface MessageTemplateSearchResultData {
  /**
   * The Amazon Resource Name (ARN) of the message template.
   *
   * @public
   */
  messageTemplateArn: string | undefined;

  /**
   * The identifier of the message template.
   *
   * @public
   */
  messageTemplateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the message template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The channel of the message template.
   *
   * @public
   */
  channel?: string | undefined;

  /**
   * The channel subtype this message template applies to.
   *
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;

  /**
   * The timestamp when the message template was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the message template data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the message template data.
   *
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * Whether the version of the message template is activated.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The version number of the message template version.
   *
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * The description of the message template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The source configuration summary of the message template.
   *
   * @public
   */
  sourceConfigurationSummary?: MessageTemplateSourceConfigurationSummary | undefined;

  /**
   * The configuration information of the grouping of Amazon Q in Connect users.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchMessageTemplatesResponse {
  /**
   * The results of the message template search.
   *
   * @public
   */
  results: MessageTemplateSearchResultData[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The quick response fields to filter the quick response query results by.
 *
 * The following is the list of supported field names.
 *
 * - name
 * - description
 * - shortcutKey
 * - isActive
 * - channels
 * - language
 * - contentType
 * - createdTime
 * - lastModifiedTime
 * - lastModifiedBy
 * - groupingConfiguration.criteria
 * - groupingConfiguration.values
 *
 * @public
 */
export interface QuickResponseFilterField {
  /**
   * The name of the attribute field to filter the quick responses by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values of attribute field to filter the quick response by.
   *
   * @public
   */
  values?: string[] | undefined;

  /**
   * The operator to use for filtering.
   *
   * @public
   */
  operator: QuickResponseFilterOperator | undefined;

  /**
   * Whether to treat null value as a match for the attribute field.
   *
   * @public
   */
  includeNoExistence?: boolean | undefined;
}

/**
 * The quick response fields to order the quick response query results by.
 *
 * The following is the list of supported field names.
 *
 * - name
 * - description
 * - shortcutKey
 * - isActive
 * - channels
 * - language
 * - contentType
 * - createdTime
 * - lastModifiedTime
 * - lastModifiedBy
 * - groupingConfiguration.criteria
 * - groupingConfiguration.values
 *
 * @public
 */
export interface QuickResponseOrderField {
  /**
   * The name of the attribute to order the quick response query results by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The order at which the quick responses are sorted by.
   *
   * @public
   */
  order?: Order | undefined;
}

/**
 * The quick response fields to query quick responses by.
 *
 * The following is the list of supported field names.
 *
 * - content
 * - name
 * - description
 * - shortcutKey
 *
 * @public
 */
export interface QuickResponseQueryField {
  /**
   * The name of the attribute to query the quick responses by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values of the attribute to query the quick responses by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for matching attribute field values in the query.
   *
   * @public
   */
  operator: QuickResponseQueryOperator | undefined;

  /**
   * Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.
   *
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * The importance of the attribute field when calculating query result relevancy scores. The value set for this parameter affects the ordering of search results.
   *
   * @public
   */
  priority?: Priority | undefined;
}

/**
 * Information about the import job.
 *
 * @public
 */
export interface QuickResponseSearchExpression {
  /**
   * The quick response query expressions.
   *
   * @public
   */
  queries?: QuickResponseQueryField[] | undefined;

  /**
   * The configuration of filtering rules applied to quick response query results.
   *
   * @public
   */
  filters?: QuickResponseFilterField[] | undefined;

  /**
   * The quick response attribute fields on which the query results are ordered.
   *
   * @public
   */
  orderOnField?: QuickResponseOrderField | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesRequest {
  /**
   * The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The search expression for querying the quick response.
   *
   * @public
   */
  searchExpression: QuickResponseSearchExpression | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The [user-defined Connect Customer contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html#user-defined-attributes) to be resolved when search results are returned.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * The result of quick response search.
 *
 * @public
 */
export interface QuickResponseSearchResultData {
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   *
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The resource status of the quick response.
   *
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * The contents of the quick response.
   *
   * @public
   */
  contents: QuickResponseContents | undefined;

  /**
   * The timestamp when the quick response was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the quick response search result data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive: boolean | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration information of the user groups that the quick response is accessible to.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the quick response search result data.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The Connect Customer contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The user defined contact attributes that are not resolved when the search result is returned.
   *
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * The user defined contact attributes that are resolved when the search result is returned.
   *
   * @public
   */
  attributesInterpolated?: string[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesResponse {
  /**
   * The results of the quick response search.
   *
   * @public
   */
  results: QuickResponseSearchResultData[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartContentUploadRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The type of content to upload.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The expected expiration time of the generated presigned URL, specified in minutes.
   *
   * @public
   */
  presignedUrlTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface StartContentUploadResponse {
  /**
   * The identifier of the upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The URL of the upload.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The expiration time of the URL as an epoch timestamp.
   *
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * The headers to include in the upload.
   *
   * @public
   */
  headersToInclude: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImportJobRequest {
  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * - For importing Amazon Q in Connect quick responses, this should be a `QUICK_RESPONSES` type knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The type of the import job.
   *
   * - For importing quick response resource, set the value to `QUICK_RESPONSES`.
   *
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The metadata fields of the imported Amazon Q in Connect resources.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The configuration information of the external source that the resource data are imported from.
   *
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartImportJobResponse {
  /**
   * The import job.
   *
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The template URI to update.
   *
   * @public
   */
  templateUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * The knowledge base to update.
   *
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys.
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
 * Message content value - can be text, tool invocation, tool result, or reasoning
 *
 * @public
 */
export type SpanMessageValue =
  | SpanMessageValue.ReasoningMember
  | SpanMessageValue.TextMember
  | SpanMessageValue.ToolResultMember
  | SpanMessageValue.ToolUseMember
  | SpanMessageValue.$UnknownMember;

/**
 * @public
 */
export namespace SpanMessageValue {
  /**
   * Text message content
   *
   * @public
   */
  export interface TextMember {
    text: SpanTextValue;
    toolUse?: never;
    toolResult?: never;
    reasoning?: never;
    $unknown?: never;
  }

  /**
   * Tool invocation message content
   *
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: SpanToolUseValue;
    toolResult?: never;
    reasoning?: never;
    $unknown?: never;
  }

  /**
   * Tool result message content
   *
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolUse?: never;
    toolResult: SpanToolResultValue;
    reasoning?: never;
    $unknown?: never;
  }

  /**
   * Model reasoning and it's internal decision making process
   *
   * @public
   */
  export interface ReasoningMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoning: SpanReasoningValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoning?: never;
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
    reasoning: (value: SpanReasoningValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Tool result message content
 *
 * @public
 */
export interface SpanToolResultValue {
  /**
   * Relates this result back to the tool invocation
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The tool results
   *
   * @public
   */
  values: SpanMessageValue[] | undefined;

  /**
   * The tool invocation error if failed
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * Configuration for filtering content during retrieval operations.
 *
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
   * Filter configuration that requires all conditions to be met.
   *
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
   * Filter configuration for exact equality matching.
   *
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
   * Filter configuration for greater than comparison.
   *
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
   * Filter configuration for greater than or equal comparison.
   *
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
   * Filter configuration for membership in a set of values.
   *
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
   * Filter configuration for less than comparison.
   *
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
   * Filter configuration for less than or equal comparison.
   *
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
   * Filter configuration for checking if a list contains a value.
   *
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
   * Filter configuration for inequality matching.
   *
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
   * Filter configuration for exclusion from a set of values.
   *
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
   * Filter configuration where any condition can be met.
   *
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
   * Filter configuration for prefix matching.
   *
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
   * Filter configuration for substring matching.
   *
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
 * A message in the conversation history with participant role and content values
 *
 * @public
 */
export interface SpanMessage {
  /**
   * Unique message identifier
   *
   * @public
   */
  messageId: string | undefined;

  /**
   * Message source role
   *
   * @public
   */
  participant: Participant | undefined;

  /**
   * Message timestamp
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * Message content values (text, tool use, tool result, reasoning)
   *
   * @public
   */
  values: SpanMessageValue[] | undefined;
}

/**
 * Configuration for content retrieval operations.
 *
 * @public
 */
export interface RetrievalConfiguration {
  /**
   * The knowledge source configuration for content retrieval.
   *
   * @public
   */
  knowledgeSource: KnowledgeSource | undefined;

  /**
   * The filter configuration for content retrieval.
   *
   * @public
   */
  filter?: RetrievalFilterConfiguration | undefined;

  /**
   * The number of results to retrieve.
   *
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * Override setting for the knowledge base search type during retrieval.
   *
   * @public
   */
  overrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * The identifier of the Amazon Q in Connect assistant for content retrieval.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The configuration for the content retrieval operation.
   *
   * @public
   */
  retrievalConfiguration: RetrievalConfiguration | undefined;

  /**
   * The query for content retrieval.
   *
   * @public
   */
  retrievalQuery: string | undefined;
}

/**
 * Details about the data.
 *
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
  | DataDetails.ProactiveRecommendationDataMember
  | DataDetails.SourceContentDataMember
  | DataDetails.SuggestedMessageDataMember
  | DataDetails.$UnknownMember;

/**
 * @public
 */
export namespace DataDetails {
  /**
   * Details about the content data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about the generative data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about the intent data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about the content data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about the generative chunk data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Streaming chunk data for email response generation containing partial response content.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Streaming chunk data for email overview containing partial overview content.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Streaming chunk data for email generative answers containing partial knowledge-based response content.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about case summarization chunk data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about suggested message data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about notes data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about notes chunk data.
   *
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
    proactiveRecommendationData?: never;
    $unknown?: never;
  }

  /**
   * Details about a proactive recommendation, including the token used to retrieve its chunked response with `GetNextMessage`.
   *
   * @public
   */
  export interface ProactiveRecommendationDataMember {
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
    proactiveRecommendationData: ProactiveRecommendationDataDetails;
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
    proactiveRecommendationData?: never;
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
    proactiveRecommendationData: (value: ProactiveRecommendationDataDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Summary of the data.
 *
 * @public
 */
export interface DataSummary {
  /**
   * Reference information about the content.
   *
   * @public
   */
  reference: DataReference | undefined;

  /**
   * Details about the data.
   *
   * @public
   */
  details: DataDetails | undefined;
}

/**
 * Details of streaming chunk data for email generative answers including completion text and references.
 *
 * @public
 */
export interface EmailGenerativeAnswerChunkDataDetails {
  /**
   * The partial or complete text content of the generative answer response.
   *
   * @public
   */
  completion?: string | undefined;

  /**
   * Source references and citations from knowledge base articles used to generate the answer.
   *
   * @public
   */
  references?: DataSummary[] | undefined;

  /**
   * Token for retrieving the next chunk of streaming response data, if available.
   *
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * Details about the generative chunk data.
 *
 * @public
 */
export interface GenerativeChunkDataDetails {
  /**
   * A chunk of the LLM response.
   *
   * @public
   */
  completion?: string | undefined;

  /**
   * The references used to generate the LLM response.
   *
   * @public
   */
  references?: DataSummary[] | undefined;

  /**
   * The token for the next set of chunks. Use the value returned in the previous response in the next request to retrieve the next set of chunks.
   *
   * @public
   */
  nextChunkToken?: string | undefined;
}

/**
 * Details about generative data.
 *
 * @public
 */
export interface GenerativeDataDetails {
  /**
   * The LLM response.
   *
   * @public
   */
  completion: string | undefined;

  /**
   * The references used to generative the LLM response.
   *
   * @public
   */
  references: DataSummary[] | undefined;

  /**
   * Details about the generative content ranking data.
   *
   * @public
   */
  rankingData: RankingData | undefined;
}

/**
 * Information about the recommendation.
 *
 * @public
 */
export interface RecommendationData {
  /**
   * The identifier of the recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * The recommended document.
   *
   * @public
   */
  document?: Document | undefined;

  /**
   * The relevance score of the recommendation.
   *
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * The relevance level of the recommendation.
   *
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;

  /**
   * The type of recommendation.
   *
   * @public
   */
  type?: RecommendationType | undefined;

  /**
   * Summary of the recommended content.
   *
   * @public
   */
  data?: DataSummary | undefined;
}

/**
 * Information about the result.
 *
 * @public
 */
export interface ResultData {
  /**
   * The identifier of the result data.
   *
   * @public
   */
  resultId: string | undefined;

  /**
   * The document.
   *
   * @public
   */
  document?: Document | undefined;

  /**
   * The relevance score of the results.
   *
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * Summary of the recommended content.
   *
   * @public
   */
  data?: DataSummary | undefined;

  /**
   * The type of the query result.
   *
   * @public
   */
  type?: QueryResultType | undefined;
}

/**
 * Contextual attributes capturing operation details, LLM configuration, usage metrics, and conversation data
 *
 * @public
 */
export interface SpanAttributes {
  /**
   * Action being performed
   *
   * @public
   */
  operationName?: string | undefined;

  /**
   * Model provider identifier (e.g., aws.bedrock)
   *
   * @public
   */
  providerName?: string | undefined;

  /**
   * Error classification if span failed (e.g., throttle, timeout)
   *
   * @public
   */
  errorType?: string | undefined;

  /**
   * Amazon Connect agent ID
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * Amazon Connect instance ARN
   *
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * Amazon Connect contact identifier
   *
   * @public
   */
  contactId?: string | undefined;

  /**
   * Amazon Connect contact identifier
   *
   * @public
   */
  initialContactId?: string | undefined;

  /**
   * Session name
   *
   * @public
   */
  sessionName?: string | undefined;

  /**
   * AI agent ARN
   *
   * @public
   */
  aiAgentArn?: string | undefined;

  /**
   * AI agent type
   *
   * @public
   */
  aiAgentType?: AIAgentType | undefined;

  /**
   * AI agent name
   *
   * @public
   */
  aiAgentName?: string | undefined;

  /**
   * AI agent identifier
   *
   * @public
   */
  aiAgentId?: string | undefined;

  /**
   * AI agent version number
   *
   * @public
   */
  aiAgentVersion?: number | undefined;

  /**
   * Entity that invoked the AI agent
   *
   * @public
   */
  aiAgentInvoker?: string | undefined;

  /**
   * AI agent orchestrator use case
   *
   * @public
   */
  aiAgentOrchestratorUseCase?: string | undefined;

  /**
   * How the orchestrator engaged the collaborator agent. Present on spans that invoke a collaborator agent.
   *
   * @public
   */
  interactionMode?: InteractionMode | undefined;

  /**
   * Identifier of the collaborator agent being invoked. For first-party collaborators this is the Amazon Connect AI agent ID; for third-party collaborators this is the external application ID.
   *
   * @public
   */
  targetAgentId?: string | undefined;

  /**
   * Reason a sub-agent returned control to the calling agent. Present on return_to_agent spans.
   *
   * @public
   */
  returnReason?: ReturnReason | undefined;

  /**
   * LLM model ID for request (e.g., anthropic.claude-3-sonnet)
   *
   * @public
   */
  requestModel?: string | undefined;

  /**
   * Maximum tokens configured for generation
   *
   * @public
   */
  requestMaxTokens?: number | undefined;

  /**
   * Sampling temperature for generation
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * Top-p sampling parameter for generation
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * Actual model used for response (usually matches requestModel)
   *
   * @public
   */
  responseModel?: string | undefined;

  /**
   * Generation termination reasons (e.g., stop, max_tokens)
   *
   * @public
   */
  responseFinishReasons?: string[] | undefined;

  /**
   * Number of input tokens in prompt
   *
   * @public
   */
  usageInputTokens?: number | undefined;

  /**
   * Number of output tokens in response
   *
   * @public
   */
  usageOutputTokens?: number | undefined;

  /**
   * Total tokens consumed (input + output)
   *
   * @public
   */
  usageTotalTokens?: number | undefined;

  /**
   * Number of input tokens that were retrieved from cache
   *
   * @public
   */
  cacheReadInputTokens?: number | undefined;

  /**
   * Number of input tokens that were written to cache in this request
   *
   * @public
   */
  cacheWriteInputTokens?: number | undefined;

  /**
   * Input message collection sent to LLM
   *
   * @public
   */
  inputMessages?: SpanMessage[] | undefined;

  /**
   * Output message collection received from LLM
   *
   * @public
   */
  outputMessages?: SpanMessage[] | undefined;

  /**
   * System prompt instructions
   *
   * @public
   */
  systemInstructions?: SpanMessageValue[] | undefined;

  /**
   * AI prompt ARN
   *
   * @public
   */
  promptArn?: string | undefined;

  /**
   * AI prompt identifier
   *
   * @public
   */
  promptId?: string | undefined;

  /**
   * AI prompt type
   *
   * @public
   */
  promptType?: AIPromptType | undefined;

  /**
   * AI prompt name
   *
   * @public
   */
  promptName?: string | undefined;

  /**
   * AI prompt version number
   *
   * @public
   */
  promptVersion?: number | undefined;

  /**
   * Time to first token in milliseconds, measured from when Amazon Bedrock was invoked to when the first token was returned
   *
   * @public
   */
  timeToFirstTokenMs?: number | undefined;

  /**
   * Guardrail assessments for the inference span. Absent on other span types and when no AI Guardrail is attached to the AI Agent.
   *
   * @public
   */
  guardrailAssessments?: SpanGuardrailAssessment[] | undefined;
}

/**
 * A span represents a unit of work during AI agent execution, capturing timing, status, and contextual attributes.
 *
 * @public
 */
export interface Span {
  /**
   * Unique span identifier
   *
   * @public
   */
  spanId: string | undefined;

  /**
   * UUID of the Connect AI Assistant resource
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * UUID of the Connect AI Session resource
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Parent span identifier for hierarchy. Null for root spans.
   *
   * @public
   */
  parentSpanId?: string | undefined;

  /**
   * Service-defined operation name
   *
   * @public
   */
  spanName: string | undefined;

  /**
   * Operation relationship type
   *
   * @public
   */
  spanType: SpanType | undefined;

  /**
   * Operation start time in milliseconds since epoch
   *
   * @public
   */
  startTimestamp: Date | undefined;

  /**
   * Operation end time in milliseconds since epoch
   *
   * @public
   */
  endTimestamp: Date | undefined;

  /**
   * Span completion status
   *
   * @public
   */
  status: SpanStatus | undefined;

  /**
   * Human-readable error description when status is ERROR or TIMEOUT
   *
   * @public
   */
  statusDescription?: string | undefined;

  /**
   * The service request ID that initiated the operation
   *
   * @public
   */
  requestId: string | undefined;

  /**
   * The origin request identifier for end-to-end tracing.
   *
   * @public
   */
  originRequestId?: string | undefined;

  /**
   * Span-specific contextual attributes
   *
   * @public
   */
  attributes: SpanAttributes | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * The recommendations.
   *
   * @public
   */
  recommendations: RecommendationData[] | undefined;

  /**
   * The triggers corresponding to recommendations.
   *
   * @public
   */
  triggers?: RecommendationTrigger[] | undefined;
}

/**
 * @public
 */
export interface QueryAssistantResponse {
  /**
   * The results of the query.
   *
   * @public
   */
  results: ResultData[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpansResponse {
  /**
   * Array of span objects for the session
   *
   * @public
   */
  spans: Span[] | undefined;

  /**
   * Pagination token for retrieving additional results
   *
   * @public
   */
  nextToken?: string | undefined;
}
