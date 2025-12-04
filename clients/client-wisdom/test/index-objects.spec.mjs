import {
  AssistantStatus,
  AssistantType,
  AssociationType,
  ContentStatus,
  CreateAssistantAssociationCommand,
  CreateAssistantCommand,
  CreateContentCommand,
  CreateKnowledgeBaseCommand,
  CreateQuickResponseCommand,
  CreateSessionCommand,
  DeleteAssistantAssociationCommand,
  DeleteAssistantCommand,
  DeleteContentCommand,
  DeleteImportJobCommand,
  DeleteKnowledgeBaseCommand,
  DeleteQuickResponseCommand,
  ExternalSource,
  FilterField,
  FilterOperator,
  GetAssistantAssociationCommand,
  GetAssistantCommand,
  GetContentCommand,
  GetContentSummaryCommand,
  GetImportJobCommand,
  GetKnowledgeBaseCommand,
  GetQuickResponseCommand,
  GetRecommendationsCommand,
  GetSessionCommand,
  ImportJobStatus,
  ImportJobType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  ListAssistantAssociationsCommand,
  ListAssistantsCommand,
  ListContentsCommand,
  ListImportJobsCommand,
  ListKnowledgeBasesCommand,
  ListQuickResponsesCommand,
  ListTagsForResourceCommand,
  NotifyRecommendationsReceivedCommand,
  Order,
  Priority,
  QueryAssistantCommand,
  QuickResponseFilterOperator,
  QuickResponseQueryOperator,
  QuickResponseStatus,
  RecommendationSourceType,
  RecommendationTriggerType,
  RecommendationType,
  RelevanceLevel,
  RemoveKnowledgeBaseTemplateUriCommand,
  SearchContentCommand,
  SearchQuickResponsesCommand,
  SearchSessionsCommand,
  StartContentUploadCommand,
  StartImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateContentCommand,
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateQuickResponseCommand,
  Wisdom,
  WisdomClient,
  WisdomServiceException,
  paginateListAssistantAssociations,
  paginateListAssistants,
  paginateListContents,
  paginateListImportJobs,
  paginateListKnowledgeBases,
  paginateListQuickResponses,
  paginateQueryAssistant,
  paginateSearchContent,
  paginateSearchQuickResponses,
  paginateSearchSessions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WisdomClient === "function");
assert(typeof Wisdom === "function");
// commands
assert(typeof CreateAssistantCommand === "function");
assert(typeof CreateAssistantAssociationCommand === "function");
assert(typeof CreateContentCommand === "function");
assert(typeof CreateKnowledgeBaseCommand === "function");
assert(typeof CreateQuickResponseCommand === "function");
assert(typeof CreateSessionCommand === "function");
assert(typeof DeleteAssistantCommand === "function");
assert(typeof DeleteAssistantAssociationCommand === "function");
assert(typeof DeleteContentCommand === "function");
assert(typeof DeleteImportJobCommand === "function");
assert(typeof DeleteKnowledgeBaseCommand === "function");
assert(typeof DeleteQuickResponseCommand === "function");
assert(typeof GetAssistantCommand === "function");
assert(typeof GetAssistantAssociationCommand === "function");
assert(typeof GetContentCommand === "function");
assert(typeof GetContentSummaryCommand === "function");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetKnowledgeBaseCommand === "function");
assert(typeof GetQuickResponseCommand === "function");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof ListAssistantAssociationsCommand === "function");
assert(typeof ListAssistantsCommand === "function");
assert(typeof ListContentsCommand === "function");
assert(typeof ListImportJobsCommand === "function");
assert(typeof ListKnowledgeBasesCommand === "function");
assert(typeof ListQuickResponsesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof NotifyRecommendationsReceivedCommand === "function");
assert(typeof QueryAssistantCommand === "function");
assert(typeof RemoveKnowledgeBaseTemplateUriCommand === "function");
assert(typeof SearchContentCommand === "function");
assert(typeof SearchQuickResponsesCommand === "function");
assert(typeof SearchSessionsCommand === "function");
assert(typeof StartContentUploadCommand === "function");
assert(typeof StartImportJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateContentCommand === "function");
assert(typeof UpdateKnowledgeBaseTemplateUriCommand === "function");
assert(typeof UpdateQuickResponseCommand === "function");
// enums
assert(typeof AssistantStatus === "object");
assert(typeof AssistantType === "object");
assert(typeof AssociationType === "object");
assert(typeof ContentStatus === "object");
assert(typeof ExternalSource === "object");
assert(typeof FilterField === "object");
assert(typeof FilterOperator === "object");
assert(typeof ImportJobStatus === "object");
assert(typeof ImportJobType === "object");
assert(typeof KnowledgeBaseStatus === "object");
assert(typeof KnowledgeBaseType === "object");
assert(typeof Order === "object");
assert(typeof Priority === "object");
assert(typeof QuickResponseFilterOperator === "object");
assert(typeof QuickResponseQueryOperator === "object");
assert(typeof QuickResponseStatus === "object");
assert(typeof RecommendationSourceType === "object");
assert(typeof RecommendationTriggerType === "object");
assert(typeof RecommendationType === "object");
assert(typeof RelevanceLevel === "object");
// errors
assert(WisdomServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssistantAssociations === "function");
assert(typeof paginateListAssistants === "function");
assert(typeof paginateListContents === "function");
assert(typeof paginateListImportJobs === "function");
assert(typeof paginateListKnowledgeBases === "function");
assert(typeof paginateListQuickResponses === "function");
assert(typeof paginateQueryAssistant === "function");
assert(typeof paginateSearchContent === "function");
assert(typeof paginateSearchQuickResponses === "function");
assert(typeof paginateSearchSessions === "function");
console.log(`Wisdom index test passed.`);
