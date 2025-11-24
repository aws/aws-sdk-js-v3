// smithy-typescript generated code
import {
  ChannelSubtype,
  ImportJobType,
  MessageTemplateFilterOperator,
  MessageTemplateQueryOperator,
  Order,
  Priority,
  QueryResultType,
  QuickResponseFilterOperator,
  QuickResponseQueryOperator,
  QuickResponseStatus,
  RecommendationType,
  RelevanceLevel,
} from "./enums";

import {
  ContentDataDetails,
  ContentSummary,
  DataReference,
  Document,
  EmailOverviewChunkDataDetails,
  EmailResponseChunkDataDetails,
  ExternalSourceConfiguration,
  GroupingConfiguration,
  ImportJobData,
  IntentDetectedDataDetails,
  KnowledgeBaseData,
  MessageTemplateAttachment,
  MessageTemplateAttributes,
  MessageTemplateContentProvider,
  MessageTemplateData,
  MessageTemplateSourceConfiguration,
  MessageTemplateSourceConfigurationSummary,
  QuickResponseContents,
  QuickResponseData,
  QuickResponseDataProvider,
  RankingData,
  RecommendationTrigger,
  SearchExpression,
  SourceContentDataDetails,
} from "./models_0";

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
 * <p>Details about the data.</p>
 * @public
 */
export type DataDetails =
  | DataDetails.ContentDataMember
  | DataDetails.EmailGenerativeAnswerChunkDataMember
  | DataDetails.EmailOverviewChunkDataMember
  | DataDetails.EmailResponseChunkDataMember
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
    emailResponseChunkData?: never;
    emailOverviewChunkData?: never;
    emailGenerativeAnswerChunkData?: never;
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
