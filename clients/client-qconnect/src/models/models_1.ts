// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ChannelSubtype,
  ContentDataDetails,
  ContentDataDetailsFilterSensitiveLog,
  ContentSummary,
  DataReference,
  Document,
  DocumentFilterSensitiveLog,
  ExternalSourceConfiguration,
  GroupingConfiguration,
  GroupingConfigurationFilterSensitiveLog,
  ImportJobData,
  ImportJobDataFilterSensitiveLog,
  ImportJobType,
  IntentDetectedDataDetails,
  IntentDetectedDataDetailsFilterSensitiveLog,
  KnowledgeBaseData,
  KnowledgeBaseDataFilterSensitiveLog,
  QueryResultType,
  QuickResponseContents,
  QuickResponseContentsFilterSensitiveLog,
  QuickResponseStatus,
  RankingData,
  RecommendationTrigger,
  RecommendationTriggerFilterSensitiveLog,
  RecommendationType,
  RelevanceLevel,
  SearchExpression,
  SourceContentDataDetails,
  SourceContentDataDetailsFilterSensitiveLog,
} from "./models_0";

import { QConnectServiceException as __BaseException } from "./QConnectServiceException";

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriResponse {}

/**
 * @public
 */
export interface SearchContentRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
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
 * <p>The message template fields to filter the message template query results by. The following
 *       is the list of supported field names:</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>channel</p>
 *             </li>
 *             <li>
 *                <p>channelSubtype</p>
 *             </li>
 *             <li>
 *                <p>language</p>
 *             </li>
 *             <li>
 *                <p>qualifier</p>
 *             </li>
 *             <li>
 *                <p>createdTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedBy</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.criteria</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.values</p>
 *             </li>
 *          </ul>
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
 * <p>The message template fields to order the message template query results by. The following
 *       is the list of supported field names:</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>channel</p>
 *             </li>
 *             <li>
 *                <p>channelSubtype</p>
 *             </li>
 *             <li>
 *                <p>language</p>
 *             </li>
 *             <li>
 *                <p>qualifier</p>
 *             </li>
 *             <li>
 *                <p>createdTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedBy</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.criteria</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.values</p>
 *             </li>
 *          </ul>
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
 * <p>The message template fields to query message templates by. The following is the list of
 *       supported field names:</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *          </ul>
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
   * <p>Whether the query expects only exact matches on the attribute field values. The results of
   *       the query will only include exact matches if this parameter is set to false.</p>
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * <p>The importance of the attribute field when calculating query result relevancy scores. The
   *       value set for this parameter affects the ordering of search results.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain
   *       the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression for querying the message template.</p>
   * @public
   */
  searchExpression: MessageTemplateSearchExpression | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
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
   * <p>The Amazon Resource Name (ARN) of the user who last updated the message template
   *       data.</p>
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
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
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
 * <p>The quick response fields to filter the quick response query results by.</p>
 *          <p>The following is the list of supported field names.</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>shortcutKey</p>
 *             </li>
 *             <li>
 *                <p>isActive</p>
 *             </li>
 *             <li>
 *                <p>channels</p>
 *             </li>
 *             <li>
 *                <p>language</p>
 *             </li>
 *             <li>
 *                <p>contentType</p>
 *             </li>
 *             <li>
 *                <p>createdTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedBy</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.criteria</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.values</p>
 *             </li>
 *          </ul>
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
 * <p>The quick response fields to order the quick response query results by.</p>
 *          <p>The following is the list of supported field names.</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>shortcutKey</p>
 *             </li>
 *             <li>
 *                <p>isActive</p>
 *             </li>
 *             <li>
 *                <p>channels</p>
 *             </li>
 *             <li>
 *                <p>language</p>
 *             </li>
 *             <li>
 *                <p>contentType</p>
 *             </li>
 *             <li>
 *                <p>createdTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedBy</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.criteria</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.values</p>
 *             </li>
 *          </ul>
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
 * <p>The quick response fields to query quick responses by.</p>
 *          <p>The following is the list of supported field names.</p>
 *          <ul>
 *             <li>
 *                <p>content</p>
 *             </li>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>shortcutKey</p>
 *             </li>
 *          </ul>
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
   * <p>Whether the query expects only exact matches on the attribute field values. The results of
   *       the query will only include exact matches if this parameter is set to false.</p>
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * <p>The importance of the attribute field when calculating query result relevancy scores. The
   *       value set for this parameter affects the ordering of search results.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html#user-defined-attributes">user-defined Amazon Connect contact attributes</a> to be resolved when search
   *       results are returned.</p>
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
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written
   *           in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response
   *           written in richtext.</p>
   *             </li>
   *          </ul>
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
   * <p>The configuration information of the user groups that the quick response is accessible
   *       to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response search
   *       result data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to.
   *       The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The user defined contact attributes that are not resolved when the search result is
   *       returned.</p>
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * <p>The user defined contact attributes that are resolved when the search result is
   *       returned.</p>
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   *          <ul>
   *             <li>
   *                <p>For importing Amazon Q in Connect quick responses, this should be a <code>QUICK_RESPONSES</code>
   *           type knowledge base.</p>
   *             </li>
   *          </ul>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of the import job.</p>
   *          <ul>
   *             <li>
   *                <p>For importing quick response resource, set the value to
   *           <code>QUICK_RESPONSES</code>.</p>
   *             </li>
   *          </ul>
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
   * <p>The configuration information of the external source that the resource data are imported
   *       from.</p>
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
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentData: (value: ContentDataDetails) => T;
    generativeData: (value: GenerativeDataDetails) => T;
    intentDetectedData: (value: IntentDetectedDataDetails) => T;
    sourceContentData: (value: SourceContentDataDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataDetails, visitor: Visitor<T>): T => {
    if (value.contentData !== undefined) return visitor.contentData(value.contentData);
    if (value.generativeData !== undefined) return visitor.generativeData(value.generativeData);
    if (value.intentDetectedData !== undefined) return visitor.intentDetectedData(value.intentDetectedData);
    if (value.sourceContentData !== undefined) return visitor.sourceContentData(value.sourceContentData);
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
