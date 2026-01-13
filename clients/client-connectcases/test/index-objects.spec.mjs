import {
  AccessDeniedException,
  AccessDeniedException$,
  AuditEvent$,
  AuditEventField$,
  AuditEventFieldValueUnion$,
  AuditEventPerformedBy$,
  AuditEventType,
  BasicLayout$,
  BatchGetCaseRule$,
  BatchGetCaseRuleCommand,
  BatchGetCaseRuleRequest$,
  BatchGetCaseRuleResponse$,
  BatchGetField$,
  BatchGetFieldCommand,
  BatchGetFieldRequest$,
  BatchGetFieldResponse$,
  BatchPutFieldOptions$,
  BatchPutFieldOptionsCommand,
  BatchPutFieldOptionsRequest$,
  BatchPutFieldOptionsResponse$,
  BooleanCondition$,
  BooleanOperands$,
  CaseEventIncludedData$,
  CaseFilter$,
  CaseRuleDetails$,
  CaseRuleError$,
  CaseRuleIdentifier$,
  CaseRuleSummary$,
  CaseSummary$,
  CommentBodyTextType,
  CommentContent$,
  CommentFilter$,
  ConflictException,
  ConflictException$,
  ConnectCaseContent$,
  ConnectCaseFilter$,
  ConnectCaseInputContent$,
  ConnectCases,
  ConnectCasesClient,
  ConnectCasesServiceException,
  Contact$,
  ContactContent$,
  ContactFilter$,
  CreateCase$,
  CreateCaseCommand,
  CreateCaseRequest$,
  CreateCaseResponse$,
  CreateCaseRule$,
  CreateCaseRuleCommand,
  CreateCaseRuleRequest$,
  CreateCaseRuleResponse$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainRequest$,
  CreateDomainResponse$,
  CreateField$,
  CreateFieldCommand,
  CreateFieldRequest$,
  CreateFieldResponse$,
  CreateLayout$,
  CreateLayoutCommand,
  CreateLayoutRequest$,
  CreateLayoutResponse$,
  CreateRelatedItem$,
  CreateRelatedItemCommand,
  CreateRelatedItemRequest$,
  CreateRelatedItemResponse$,
  CreateTemplate$,
  CreateTemplateCommand,
  CreateTemplateRequest$,
  CreateTemplateResponse$,
  CustomContent$,
  CustomFieldsFilter$,
  CustomFilter$,
  CustomInputContent$,
  DeleteCase$,
  DeleteCaseCommand,
  DeleteCaseRequest$,
  DeleteCaseResponse$,
  DeleteCaseRule$,
  DeleteCaseRuleCommand,
  DeleteCaseRuleRequest$,
  DeleteCaseRuleResponse$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainRequest$,
  DeleteDomainResponse$,
  DeleteField$,
  DeleteFieldCommand,
  DeleteFieldRequest$,
  DeleteFieldResponse$,
  DeleteLayout$,
  DeleteLayoutCommand,
  DeleteLayoutRequest$,
  DeleteLayoutResponse$,
  DeleteRelatedItem$,
  DeleteRelatedItemCommand,
  DeleteRelatedItemRequest$,
  DeleteRelatedItemResponse$,
  DeleteTemplate$,
  DeleteTemplateCommand,
  DeleteTemplateRequest$,
  DeleteTemplateResponse$,
  DomainStatus,
  DomainSummary$,
  EmptyFieldValue$,
  EmptyOperandValue$,
  EventBridgeConfiguration$,
  EventIncludedData$,
  FieldError$,
  FieldFilter$,
  FieldGroup$,
  FieldIdentifier$,
  FieldItem$,
  FieldNamespace,
  FieldOption$,
  FieldOptionError$,
  FieldOptionsCaseRule$,
  FieldSummary$,
  FieldType,
  FieldValue$,
  FieldValueUnion$,
  FileContent$,
  FileFilter$,
  GetCase$,
  GetCaseAuditEvents$,
  GetCaseAuditEventsCommand,
  GetCaseAuditEventsRequest$,
  GetCaseAuditEventsResponse$,
  GetCaseCommand,
  GetCaseEventConfiguration$,
  GetCaseEventConfigurationCommand,
  GetCaseEventConfigurationRequest$,
  GetCaseEventConfigurationResponse$,
  GetCaseRequest$,
  GetCaseResponse$,
  GetCaseRuleResponse$,
  GetDomain$,
  GetDomainCommand,
  GetDomainRequest$,
  GetDomainResponse$,
  GetFieldResponse$,
  GetLayout$,
  GetLayoutCommand,
  GetLayoutRequest$,
  GetLayoutResponse$,
  GetTemplate$,
  GetTemplateCommand,
  GetTemplateRequest$,
  GetTemplateResponse$,
  HiddenCaseRule$,
  InternalServerException,
  InternalServerException$,
  LayoutConfiguration$,
  LayoutContent$,
  LayoutSections$,
  LayoutSummary$,
  ListCaseRules$,
  ListCaseRulesCommand,
  ListCaseRulesRequest$,
  ListCaseRulesResponse$,
  ListCasesForContact$,
  ListCasesForContactCommand,
  ListCasesForContactRequest$,
  ListCasesForContactResponse$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResponse$,
  ListFieldOptions$,
  ListFieldOptionsCommand,
  ListFieldOptionsRequest$,
  ListFieldOptionsResponse$,
  ListFields$,
  ListFieldsCommand,
  ListFieldsRequest$,
  ListFieldsResponse$,
  ListLayouts$,
  ListLayoutsCommand,
  ListLayoutsRequest$,
  ListLayoutsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTemplates$,
  ListTemplatesCommand,
  ListTemplatesRequest$,
  ListTemplatesResponse$,
  OperandOne$,
  OperandTwo$,
  Order,
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
  ParentChildFieldOptionsMapping$,
  PutCaseEventConfiguration$,
  PutCaseEventConfigurationCommand,
  PutCaseEventConfigurationRequest$,
  PutCaseEventConfigurationResponse$,
  RelatedItemContent$,
  RelatedItemEventIncludedData$,
  RelatedItemInputContent$,
  RelatedItemType,
  RelatedItemTypeFilter$,
  RequiredCaseRule$,
  RequiredField$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleType,
  SearchAllRelatedItems$,
  SearchAllRelatedItemsCommand,
  SearchAllRelatedItemsRequest$,
  SearchAllRelatedItemsResponse$,
  SearchAllRelatedItemsResponseItem$,
  SearchAllRelatedItemsSort$,
  SearchAllRelatedItemsSortProperty,
  SearchCases$,
  SearchCasesCommand,
  SearchCasesRequest$,
  SearchCasesResponse$,
  SearchCasesResponseItem$,
  SearchRelatedItems$,
  SearchRelatedItemsCommand,
  SearchRelatedItemsRequest$,
  SearchRelatedItemsResponse$,
  SearchRelatedItemsResponseItem$,
  Section$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SlaConfiguration$,
  SlaContent$,
  SlaFilter$,
  SlaInputConfiguration$,
  SlaInputContent$,
  SlaStatus,
  SlaType,
  Sort$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TemplateRule$,
  TemplateStatus,
  TemplateSummary$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateCase$,
  UpdateCaseCommand,
  UpdateCaseRequest$,
  UpdateCaseResponse$,
  UpdateCaseRule$,
  UpdateCaseRuleCommand,
  UpdateCaseRuleRequest$,
  UpdateCaseRuleResponse$,
  UpdateField$,
  UpdateFieldCommand,
  UpdateFieldRequest$,
  UpdateFieldResponse$,
  UpdateLayout$,
  UpdateLayoutCommand,
  UpdateLayoutRequest$,
  UpdateLayoutResponse$,
  UpdateTemplate$,
  UpdateTemplateCommand,
  UpdateTemplateRequest$,
  UpdateTemplateResponse$,
  UserUnion$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCasesClient === "function");
assert(typeof ConnectCases === "function");
// commands
assert(typeof BatchGetCaseRuleCommand === "function");
assert(typeof BatchGetCaseRule$ === "object");
assert(typeof BatchGetFieldCommand === "function");
assert(typeof BatchGetField$ === "object");
assert(typeof BatchPutFieldOptionsCommand === "function");
assert(typeof BatchPutFieldOptions$ === "object");
assert(typeof CreateCaseCommand === "function");
assert(typeof CreateCase$ === "object");
assert(typeof CreateCaseRuleCommand === "function");
assert(typeof CreateCaseRule$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateFieldCommand === "function");
assert(typeof CreateField$ === "object");
assert(typeof CreateLayoutCommand === "function");
assert(typeof CreateLayout$ === "object");
assert(typeof CreateRelatedItemCommand === "function");
assert(typeof CreateRelatedItem$ === "object");
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateTemplate$ === "object");
assert(typeof DeleteCaseCommand === "function");
assert(typeof DeleteCase$ === "object");
assert(typeof DeleteCaseRuleCommand === "function");
assert(typeof DeleteCaseRule$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteFieldCommand === "function");
assert(typeof DeleteField$ === "object");
assert(typeof DeleteLayoutCommand === "function");
assert(typeof DeleteLayout$ === "object");
assert(typeof DeleteRelatedItemCommand === "function");
assert(typeof DeleteRelatedItem$ === "object");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteTemplate$ === "object");
assert(typeof GetCaseCommand === "function");
assert(typeof GetCase$ === "object");
assert(typeof GetCaseAuditEventsCommand === "function");
assert(typeof GetCaseAuditEvents$ === "object");
assert(typeof GetCaseEventConfigurationCommand === "function");
assert(typeof GetCaseEventConfiguration$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetLayoutCommand === "function");
assert(typeof GetLayout$ === "object");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplate$ === "object");
assert(typeof ListCaseRulesCommand === "function");
assert(typeof ListCaseRules$ === "object");
assert(typeof ListCasesForContactCommand === "function");
assert(typeof ListCasesForContact$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListFieldOptionsCommand === "function");
assert(typeof ListFieldOptions$ === "object");
assert(typeof ListFieldsCommand === "function");
assert(typeof ListFields$ === "object");
assert(typeof ListLayoutsCommand === "function");
assert(typeof ListLayouts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplates$ === "object");
assert(typeof PutCaseEventConfigurationCommand === "function");
assert(typeof PutCaseEventConfiguration$ === "object");
assert(typeof SearchAllRelatedItemsCommand === "function");
assert(typeof SearchAllRelatedItems$ === "object");
assert(typeof SearchCasesCommand === "function");
assert(typeof SearchCases$ === "object");
assert(typeof SearchRelatedItemsCommand === "function");
assert(typeof SearchRelatedItems$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCaseCommand === "function");
assert(typeof UpdateCase$ === "object");
assert(typeof UpdateCaseRuleCommand === "function");
assert(typeof UpdateCaseRule$ === "object");
assert(typeof UpdateFieldCommand === "function");
assert(typeof UpdateField$ === "object");
assert(typeof UpdateLayoutCommand === "function");
assert(typeof UpdateLayout$ === "object");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateTemplate$ === "object");
// structural schemas
assert(typeof AuditEvent$ === "object");
assert(typeof AuditEventField$ === "object");
assert(typeof AuditEventFieldValueUnion$ === "object");
assert(typeof AuditEventPerformedBy$ === "object");
assert(typeof BasicLayout$ === "object");
assert(typeof BatchGetCaseRuleRequest$ === "object");
assert(typeof BatchGetCaseRuleResponse$ === "object");
assert(typeof BatchGetFieldRequest$ === "object");
assert(typeof BatchGetFieldResponse$ === "object");
assert(typeof BatchPutFieldOptionsRequest$ === "object");
assert(typeof BatchPutFieldOptionsResponse$ === "object");
assert(typeof BooleanCondition$ === "object");
assert(typeof BooleanOperands$ === "object");
assert(typeof CaseEventIncludedData$ === "object");
assert(typeof CaseFilter$ === "object");
assert(typeof CaseRuleDetails$ === "object");
assert(typeof CaseRuleError$ === "object");
assert(typeof CaseRuleIdentifier$ === "object");
assert(typeof CaseRuleSummary$ === "object");
assert(typeof CaseSummary$ === "object");
assert(typeof CommentContent$ === "object");
assert(typeof CommentFilter$ === "object");
assert(typeof ConnectCaseContent$ === "object");
assert(typeof ConnectCaseFilter$ === "object");
assert(typeof ConnectCaseInputContent$ === "object");
assert(typeof Contact$ === "object");
assert(typeof ContactContent$ === "object");
assert(typeof ContactFilter$ === "object");
assert(typeof CreateCaseRequest$ === "object");
assert(typeof CreateCaseResponse$ === "object");
assert(typeof CreateCaseRuleRequest$ === "object");
assert(typeof CreateCaseRuleResponse$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResponse$ === "object");
assert(typeof CreateFieldRequest$ === "object");
assert(typeof CreateFieldResponse$ === "object");
assert(typeof CreateLayoutRequest$ === "object");
assert(typeof CreateLayoutResponse$ === "object");
assert(typeof CreateRelatedItemRequest$ === "object");
assert(typeof CreateRelatedItemResponse$ === "object");
assert(typeof CreateTemplateRequest$ === "object");
assert(typeof CreateTemplateResponse$ === "object");
assert(typeof CustomContent$ === "object");
assert(typeof CustomFieldsFilter$ === "object");
assert(typeof CustomFilter$ === "object");
assert(typeof CustomInputContent$ === "object");
assert(typeof DeleteCaseRequest$ === "object");
assert(typeof DeleteCaseResponse$ === "object");
assert(typeof DeleteCaseRuleRequest$ === "object");
assert(typeof DeleteCaseRuleResponse$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResponse$ === "object");
assert(typeof DeleteFieldRequest$ === "object");
assert(typeof DeleteFieldResponse$ === "object");
assert(typeof DeleteLayoutRequest$ === "object");
assert(typeof DeleteLayoutResponse$ === "object");
assert(typeof DeleteRelatedItemRequest$ === "object");
assert(typeof DeleteRelatedItemResponse$ === "object");
assert(typeof DeleteTemplateRequest$ === "object");
assert(typeof DeleteTemplateResponse$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof EmptyFieldValue$ === "object");
assert(typeof EmptyOperandValue$ === "object");
assert(typeof EventBridgeConfiguration$ === "object");
assert(typeof EventIncludedData$ === "object");
assert(typeof FieldError$ === "object");
assert(typeof FieldFilter$ === "object");
assert(typeof FieldGroup$ === "object");
assert(typeof FieldIdentifier$ === "object");
assert(typeof FieldItem$ === "object");
assert(typeof FieldOption$ === "object");
assert(typeof FieldOptionError$ === "object");
assert(typeof FieldOptionsCaseRule$ === "object");
assert(typeof FieldSummary$ === "object");
assert(typeof FieldValue$ === "object");
assert(typeof FieldValueUnion$ === "object");
assert(typeof FileContent$ === "object");
assert(typeof FileFilter$ === "object");
assert(typeof GetCaseAuditEventsRequest$ === "object");
assert(typeof GetCaseAuditEventsResponse$ === "object");
assert(typeof GetCaseEventConfigurationRequest$ === "object");
assert(typeof GetCaseEventConfigurationResponse$ === "object");
assert(typeof GetCaseRequest$ === "object");
assert(typeof GetCaseResponse$ === "object");
assert(typeof GetCaseRuleResponse$ === "object");
assert(typeof GetDomainRequest$ === "object");
assert(typeof GetDomainResponse$ === "object");
assert(typeof GetFieldResponse$ === "object");
assert(typeof GetLayoutRequest$ === "object");
assert(typeof GetLayoutResponse$ === "object");
assert(typeof GetTemplateRequest$ === "object");
assert(typeof GetTemplateResponse$ === "object");
assert(typeof HiddenCaseRule$ === "object");
assert(typeof LayoutConfiguration$ === "object");
assert(typeof LayoutContent$ === "object");
assert(typeof LayoutSections$ === "object");
assert(typeof LayoutSummary$ === "object");
assert(typeof ListCaseRulesRequest$ === "object");
assert(typeof ListCaseRulesResponse$ === "object");
assert(typeof ListCasesForContactRequest$ === "object");
assert(typeof ListCasesForContactResponse$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResponse$ === "object");
assert(typeof ListFieldOptionsRequest$ === "object");
assert(typeof ListFieldOptionsResponse$ === "object");
assert(typeof ListFieldsRequest$ === "object");
assert(typeof ListFieldsResponse$ === "object");
assert(typeof ListLayoutsRequest$ === "object");
assert(typeof ListLayoutsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTemplatesRequest$ === "object");
assert(typeof ListTemplatesResponse$ === "object");
assert(typeof OperandOne$ === "object");
assert(typeof OperandTwo$ === "object");
assert(typeof ParentChildFieldOptionsMapping$ === "object");
assert(typeof PutCaseEventConfigurationRequest$ === "object");
assert(typeof PutCaseEventConfigurationResponse$ === "object");
assert(typeof RelatedItemContent$ === "object");
assert(typeof RelatedItemEventIncludedData$ === "object");
assert(typeof RelatedItemInputContent$ === "object");
assert(typeof RelatedItemTypeFilter$ === "object");
assert(typeof RequiredCaseRule$ === "object");
assert(typeof RequiredField$ === "object");
assert(typeof SearchAllRelatedItemsRequest$ === "object");
assert(typeof SearchAllRelatedItemsResponse$ === "object");
assert(typeof SearchAllRelatedItemsResponseItem$ === "object");
assert(typeof SearchAllRelatedItemsSort$ === "object");
assert(typeof SearchCasesRequest$ === "object");
assert(typeof SearchCasesResponse$ === "object");
assert(typeof SearchCasesResponseItem$ === "object");
assert(typeof SearchRelatedItemsRequest$ === "object");
assert(typeof SearchRelatedItemsResponse$ === "object");
assert(typeof SearchRelatedItemsResponseItem$ === "object");
assert(typeof Section$ === "object");
assert(typeof SlaConfiguration$ === "object");
assert(typeof SlaContent$ === "object");
assert(typeof SlaFilter$ === "object");
assert(typeof SlaInputConfiguration$ === "object");
assert(typeof SlaInputContent$ === "object");
assert(typeof Sort$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TemplateRule$ === "object");
assert(typeof TemplateSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateCaseRequest$ === "object");
assert(typeof UpdateCaseResponse$ === "object");
assert(typeof UpdateCaseRuleRequest$ === "object");
assert(typeof UpdateCaseRuleResponse$ === "object");
assert(typeof UpdateFieldRequest$ === "object");
assert(typeof UpdateFieldResponse$ === "object");
assert(typeof UpdateLayoutRequest$ === "object");
assert(typeof UpdateLayoutResponse$ === "object");
assert(typeof UpdateTemplateRequest$ === "object");
assert(typeof UpdateTemplateResponse$ === "object");
assert(typeof UserUnion$ === "object");
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
assert(AccessDeniedException.prototype instanceof ConnectCasesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ConnectCasesServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ConnectCasesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectCasesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectCasesServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectCasesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ConnectCasesServiceException);
assert(typeof ValidationException$ === "object");
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
