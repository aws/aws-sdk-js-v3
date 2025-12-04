import {
  AuditEventType,
  BatchGetCaseRuleCommand,
  BatchGetFieldCommand,
  BatchPutFieldOptionsCommand,
  CommentBodyTextType,
  ConnectCases,
  ConnectCasesClient,
  ConnectCasesServiceException,
  CreateCaseCommand,
  CreateCaseRuleCommand,
  CreateDomainCommand,
  CreateFieldCommand,
  CreateLayoutCommand,
  CreateRelatedItemCommand,
  CreateTemplateCommand,
  DeleteCaseCommand,
  DeleteCaseRuleCommand,
  DeleteDomainCommand,
  DeleteFieldCommand,
  DeleteLayoutCommand,
  DeleteRelatedItemCommand,
  DeleteTemplateCommand,
  DomainStatus,
  FieldNamespace,
  FieldType,
  GetCaseAuditEventsCommand,
  GetCaseCommand,
  GetCaseEventConfigurationCommand,
  GetDomainCommand,
  GetLayoutCommand,
  GetTemplateCommand,
  ListCaseRulesCommand,
  ListCasesForContactCommand,
  ListDomainsCommand,
  ListFieldOptionsCommand,
  ListFieldsCommand,
  ListLayoutsCommand,
  ListTagsForResourceCommand,
  ListTemplatesCommand,
  Order,
  PutCaseEventConfigurationCommand,
  RelatedItemType,
  RuleType,
  SearchAllRelatedItemsCommand,
  SearchAllRelatedItemsSortProperty,
  SearchCasesCommand,
  SearchRelatedItemsCommand,
  SlaStatus,
  SlaType,
  TagResourceCommand,
  TemplateStatus,
  UntagResourceCommand,
  UpdateCaseCommand,
  UpdateCaseRuleCommand,
  UpdateFieldCommand,
  UpdateLayoutCommand,
  UpdateTemplateCommand,
  paginateGetCase,
  paginateGetCaseAuditEvents,
  paginateListCaseRules,
  paginateListCasesForContact,
  paginateListDomains,
  paginateListFieldOptions,
  paginateListFields,
  paginateListLayouts,
  paginateListTemplates,
  paginateSearchAllRelatedItems,
  paginateSearchCases,
  paginateSearchRelatedItems,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCasesClient === "function");
assert(typeof ConnectCases === "function");
// commands
assert(typeof BatchGetCaseRuleCommand === "function");
assert(typeof BatchGetFieldCommand === "function");
assert(typeof BatchPutFieldOptionsCommand === "function");
assert(typeof CreateCaseCommand === "function");
assert(typeof CreateCaseRuleCommand === "function");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateFieldCommand === "function");
assert(typeof CreateLayoutCommand === "function");
assert(typeof CreateRelatedItemCommand === "function");
assert(typeof CreateTemplateCommand === "function");
assert(typeof DeleteCaseCommand === "function");
assert(typeof DeleteCaseRuleCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteFieldCommand === "function");
assert(typeof DeleteLayoutCommand === "function");
assert(typeof DeleteRelatedItemCommand === "function");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof GetCaseCommand === "function");
assert(typeof GetCaseAuditEventsCommand === "function");
assert(typeof GetCaseEventConfigurationCommand === "function");
assert(typeof GetDomainCommand === "function");
assert(typeof GetLayoutCommand === "function");
assert(typeof GetTemplateCommand === "function");
assert(typeof ListCaseRulesCommand === "function");
assert(typeof ListCasesForContactCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListFieldOptionsCommand === "function");
assert(typeof ListFieldsCommand === "function");
assert(typeof ListLayoutsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTemplatesCommand === "function");
assert(typeof PutCaseEventConfigurationCommand === "function");
assert(typeof SearchAllRelatedItemsCommand === "function");
assert(typeof SearchCasesCommand === "function");
assert(typeof SearchRelatedItemsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCaseCommand === "function");
assert(typeof UpdateCaseRuleCommand === "function");
assert(typeof UpdateFieldCommand === "function");
assert(typeof UpdateLayoutCommand === "function");
assert(typeof UpdateTemplateCommand === "function");
// enums
assert(typeof AuditEventType === "object");
assert(typeof CommentBodyTextType === "object");
assert(typeof DomainStatus === "object");
assert(typeof FieldNamespace === "object");
assert(typeof FieldType === "object");
assert(typeof Order === "object");
assert(typeof RelatedItemType === "object");
assert(typeof RuleType === "object");
assert(typeof SearchAllRelatedItemsSortProperty === "object");
assert(typeof SlaStatus === "object");
assert(typeof SlaType === "object");
assert(typeof TemplateStatus === "object");
// errors
assert(ConnectCasesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetCase === "function");
assert(typeof paginateGetCaseAuditEvents === "function");
assert(typeof paginateListCaseRules === "function");
assert(typeof paginateListCasesForContact === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListFieldOptions === "function");
assert(typeof paginateListFields === "function");
assert(typeof paginateListLayouts === "function");
assert(typeof paginateListTemplates === "function");
assert(typeof paginateSearchAllRelatedItems === "function");
assert(typeof paginateSearchCases === "function");
assert(typeof paginateSearchRelatedItems === "function");
console.log(`ConnectCases index test passed.`);
