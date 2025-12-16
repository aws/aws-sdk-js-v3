import {
  AccessDeniedException,
  AccessDeniedException$,
  CellOutput$,
  ConflictException,
  ConflictException$,
  CreateCell$,
  CreateCellCommand,
  CreateCellRequest$,
  CreateCellResponse$,
  CreateCrossAccountAuthorization$,
  CreateCrossAccountAuthorizationCommand,
  CreateCrossAccountAuthorizationRequest$,
  CreateCrossAccountAuthorizationResponse$,
  CreateReadinessCheck$,
  CreateReadinessCheckCommand,
  CreateReadinessCheckRequest$,
  CreateReadinessCheckResponse$,
  CreateRecoveryGroup$,
  CreateRecoveryGroupCommand,
  CreateRecoveryGroupRequest$,
  CreateRecoveryGroupResponse$,
  CreateResourceSet$,
  CreateResourceSetCommand,
  CreateResourceSetRequest$,
  CreateResourceSetResponse$,
  DNSTargetResource$,
  DeleteCell$,
  DeleteCellCommand,
  DeleteCellRequest$,
  DeleteCrossAccountAuthorization$,
  DeleteCrossAccountAuthorizationCommand,
  DeleteCrossAccountAuthorizationRequest$,
  DeleteCrossAccountAuthorizationResponse$,
  DeleteReadinessCheck$,
  DeleteReadinessCheckCommand,
  DeleteReadinessCheckRequest$,
  DeleteRecoveryGroup$,
  DeleteRecoveryGroupCommand,
  DeleteRecoveryGroupRequest$,
  DeleteResourceSet$,
  DeleteResourceSetCommand,
  DeleteResourceSetRequest$,
  GetArchitectureRecommendations$,
  GetArchitectureRecommendationsCommand,
  GetArchitectureRecommendationsRequest$,
  GetArchitectureRecommendationsResponse$,
  GetCell$,
  GetCellCommand,
  GetCellReadinessSummary$,
  GetCellReadinessSummaryCommand,
  GetCellReadinessSummaryRequest$,
  GetCellReadinessSummaryResponse$,
  GetCellRequest$,
  GetCellResponse$,
  GetReadinessCheck$,
  GetReadinessCheckCommand,
  GetReadinessCheckRequest$,
  GetReadinessCheckResourceStatus$,
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckResourceStatusRequest$,
  GetReadinessCheckResourceStatusResponse$,
  GetReadinessCheckResponse$,
  GetReadinessCheckStatus$,
  GetReadinessCheckStatusCommand,
  GetReadinessCheckStatusRequest$,
  GetReadinessCheckStatusResponse$,
  GetRecoveryGroup$,
  GetRecoveryGroupCommand,
  GetRecoveryGroupReadinessSummary$,
  GetRecoveryGroupReadinessSummaryCommand,
  GetRecoveryGroupReadinessSummaryRequest$,
  GetRecoveryGroupReadinessSummaryResponse$,
  GetRecoveryGroupRequest$,
  GetRecoveryGroupResponse$,
  GetResourceSet$,
  GetResourceSetCommand,
  GetResourceSetRequest$,
  GetResourceSetResponse$,
  InternalServerException,
  InternalServerException$,
  ListCells$,
  ListCellsCommand,
  ListCellsRequest$,
  ListCellsResponse$,
  ListCrossAccountAuthorizations$,
  ListCrossAccountAuthorizationsCommand,
  ListCrossAccountAuthorizationsRequest$,
  ListCrossAccountAuthorizationsResponse$,
  ListReadinessChecks$,
  ListReadinessChecksCommand,
  ListReadinessChecksRequest$,
  ListReadinessChecksResponse$,
  ListRecoveryGroups$,
  ListRecoveryGroupsCommand,
  ListRecoveryGroupsRequest$,
  ListRecoveryGroupsResponse$,
  ListResourceSets$,
  ListResourceSetsCommand,
  ListResourceSetsRequest$,
  ListResourceSetsResponse$,
  ListRules$,
  ListRulesCommand,
  ListRulesOutput$,
  ListRulesRequest$,
  ListRulesResponse$,
  ListTagsForResources$,
  ListTagsForResourcesCommand,
  ListTagsForResourcesRequest$,
  ListTagsForResourcesResponse$,
  Message$,
  NLBResource$,
  R53ResourceRecord$,
  Readiness,
  ReadinessCheckOutput$,
  ReadinessCheckSummary$,
  Recommendation$,
  RecoveryGroupOutput$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceResult$,
  ResourceSetOutput$,
  Route53RecoveryReadiness,
  Route53RecoveryReadinessClient,
  Route53RecoveryReadinessServiceException,
  RuleResult$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetResource$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateCell$,
  UpdateCellCommand,
  UpdateCellRequest$,
  UpdateCellResponse$,
  UpdateReadinessCheck$,
  UpdateReadinessCheckCommand,
  UpdateReadinessCheckRequest$,
  UpdateReadinessCheckResponse$,
  UpdateRecoveryGroup$,
  UpdateRecoveryGroupCommand,
  UpdateRecoveryGroupRequest$,
  UpdateRecoveryGroupResponse$,
  UpdateResourceSet$,
  UpdateResourceSetCommand,
  UpdateResourceSetRequest$,
  UpdateResourceSetResponse$,
  ValidationException,
  ValidationException$,
  paginateGetCellReadinessSummary,
  paginateGetReadinessCheckResourceStatus,
  paginateGetReadinessCheckStatus,
  paginateGetRecoveryGroupReadinessSummary,
  paginateListCells,
  paginateListCrossAccountAuthorizations,
  paginateListReadinessChecks,
  paginateListRecoveryGroups,
  paginateListResourceSets,
  paginateListRules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53RecoveryReadinessClient === "function");
assert(typeof Route53RecoveryReadiness === "function");
// commands
assert(typeof CreateCellCommand === "function");
assert(typeof CreateCell$ === "object");
assert(typeof CreateCrossAccountAuthorizationCommand === "function");
assert(typeof CreateCrossAccountAuthorization$ === "object");
assert(typeof CreateReadinessCheckCommand === "function");
assert(typeof CreateReadinessCheck$ === "object");
assert(typeof CreateRecoveryGroupCommand === "function");
assert(typeof CreateRecoveryGroup$ === "object");
assert(typeof CreateResourceSetCommand === "function");
assert(typeof CreateResourceSet$ === "object");
assert(typeof DeleteCellCommand === "function");
assert(typeof DeleteCell$ === "object");
assert(typeof DeleteCrossAccountAuthorizationCommand === "function");
assert(typeof DeleteCrossAccountAuthorization$ === "object");
assert(typeof DeleteReadinessCheckCommand === "function");
assert(typeof DeleteReadinessCheck$ === "object");
assert(typeof DeleteRecoveryGroupCommand === "function");
assert(typeof DeleteRecoveryGroup$ === "object");
assert(typeof DeleteResourceSetCommand === "function");
assert(typeof DeleteResourceSet$ === "object");
assert(typeof GetArchitectureRecommendationsCommand === "function");
assert(typeof GetArchitectureRecommendations$ === "object");
assert(typeof GetCellCommand === "function");
assert(typeof GetCell$ === "object");
assert(typeof GetCellReadinessSummaryCommand === "function");
assert(typeof GetCellReadinessSummary$ === "object");
assert(typeof GetReadinessCheckCommand === "function");
assert(typeof GetReadinessCheck$ === "object");
assert(typeof GetReadinessCheckResourceStatusCommand === "function");
assert(typeof GetReadinessCheckResourceStatus$ === "object");
assert(typeof GetReadinessCheckStatusCommand === "function");
assert(typeof GetReadinessCheckStatus$ === "object");
assert(typeof GetRecoveryGroupCommand === "function");
assert(typeof GetRecoveryGroup$ === "object");
assert(typeof GetRecoveryGroupReadinessSummaryCommand === "function");
assert(typeof GetRecoveryGroupReadinessSummary$ === "object");
assert(typeof GetResourceSetCommand === "function");
assert(typeof GetResourceSet$ === "object");
assert(typeof ListCellsCommand === "function");
assert(typeof ListCells$ === "object");
assert(typeof ListCrossAccountAuthorizationsCommand === "function");
assert(typeof ListCrossAccountAuthorizations$ === "object");
assert(typeof ListReadinessChecksCommand === "function");
assert(typeof ListReadinessChecks$ === "object");
assert(typeof ListRecoveryGroupsCommand === "function");
assert(typeof ListRecoveryGroups$ === "object");
assert(typeof ListResourceSetsCommand === "function");
assert(typeof ListResourceSets$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListTagsForResourcesCommand === "function");
assert(typeof ListTagsForResources$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCellCommand === "function");
assert(typeof UpdateCell$ === "object");
assert(typeof UpdateReadinessCheckCommand === "function");
assert(typeof UpdateReadinessCheck$ === "object");
assert(typeof UpdateRecoveryGroupCommand === "function");
assert(typeof UpdateRecoveryGroup$ === "object");
assert(typeof UpdateResourceSetCommand === "function");
assert(typeof UpdateResourceSet$ === "object");
// structural schemas
assert(typeof CellOutput$ === "object");
assert(typeof CreateCellRequest$ === "object");
assert(typeof CreateCellResponse$ === "object");
assert(typeof CreateCrossAccountAuthorizationRequest$ === "object");
assert(typeof CreateCrossAccountAuthorizationResponse$ === "object");
assert(typeof CreateReadinessCheckRequest$ === "object");
assert(typeof CreateReadinessCheckResponse$ === "object");
assert(typeof CreateRecoveryGroupRequest$ === "object");
assert(typeof CreateRecoveryGroupResponse$ === "object");
assert(typeof CreateResourceSetRequest$ === "object");
assert(typeof CreateResourceSetResponse$ === "object");
assert(typeof DeleteCellRequest$ === "object");
assert(typeof DeleteCrossAccountAuthorizationRequest$ === "object");
assert(typeof DeleteCrossAccountAuthorizationResponse$ === "object");
assert(typeof DeleteReadinessCheckRequest$ === "object");
assert(typeof DeleteRecoveryGroupRequest$ === "object");
assert(typeof DeleteResourceSetRequest$ === "object");
assert(typeof DNSTargetResource$ === "object");
assert(typeof GetArchitectureRecommendationsRequest$ === "object");
assert(typeof GetArchitectureRecommendationsResponse$ === "object");
assert(typeof GetCellReadinessSummaryRequest$ === "object");
assert(typeof GetCellReadinessSummaryResponse$ === "object");
assert(typeof GetCellRequest$ === "object");
assert(typeof GetCellResponse$ === "object");
assert(typeof GetReadinessCheckRequest$ === "object");
assert(typeof GetReadinessCheckResourceStatusRequest$ === "object");
assert(typeof GetReadinessCheckResourceStatusResponse$ === "object");
assert(typeof GetReadinessCheckResponse$ === "object");
assert(typeof GetReadinessCheckStatusRequest$ === "object");
assert(typeof GetReadinessCheckStatusResponse$ === "object");
assert(typeof GetRecoveryGroupReadinessSummaryRequest$ === "object");
assert(typeof GetRecoveryGroupReadinessSummaryResponse$ === "object");
assert(typeof GetRecoveryGroupRequest$ === "object");
assert(typeof GetRecoveryGroupResponse$ === "object");
assert(typeof GetResourceSetRequest$ === "object");
assert(typeof GetResourceSetResponse$ === "object");
assert(typeof ListCellsRequest$ === "object");
assert(typeof ListCellsResponse$ === "object");
assert(typeof ListCrossAccountAuthorizationsRequest$ === "object");
assert(typeof ListCrossAccountAuthorizationsResponse$ === "object");
assert(typeof ListReadinessChecksRequest$ === "object");
assert(typeof ListReadinessChecksResponse$ === "object");
assert(typeof ListRecoveryGroupsRequest$ === "object");
assert(typeof ListRecoveryGroupsResponse$ === "object");
assert(typeof ListResourceSetsRequest$ === "object");
assert(typeof ListResourceSetsResponse$ === "object");
assert(typeof ListRulesOutput$ === "object");
assert(typeof ListRulesRequest$ === "object");
assert(typeof ListRulesResponse$ === "object");
assert(typeof ListTagsForResourcesRequest$ === "object");
assert(typeof ListTagsForResourcesResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof NLBResource$ === "object");
assert(typeof R53ResourceRecord$ === "object");
assert(typeof ReadinessCheckOutput$ === "object");
assert(typeof ReadinessCheckSummary$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecoveryGroupOutput$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceResult$ === "object");
assert(typeof ResourceSetOutput$ === "object");
assert(typeof RuleResult$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetResource$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateCellRequest$ === "object");
assert(typeof UpdateCellResponse$ === "object");
assert(typeof UpdateReadinessCheckRequest$ === "object");
assert(typeof UpdateReadinessCheckResponse$ === "object");
assert(typeof UpdateRecoveryGroupRequest$ === "object");
assert(typeof UpdateRecoveryGroupResponse$ === "object");
assert(typeof UpdateResourceSetRequest$ === "object");
assert(typeof UpdateResourceSetResponse$ === "object");
// enums
assert(typeof Readiness === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53RecoveryReadinessServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Route53RecoveryReadinessServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof Route53RecoveryReadinessServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Route53RecoveryReadinessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof Route53RecoveryReadinessServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Route53RecoveryReadinessServiceException);
assert(typeof ValidationException$ === "object");
assert(Route53RecoveryReadinessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetCellReadinessSummary === "function");
assert(typeof paginateGetReadinessCheckResourceStatus === "function");
assert(typeof paginateGetReadinessCheckStatus === "function");
assert(typeof paginateGetRecoveryGroupReadinessSummary === "function");
assert(typeof paginateListCells === "function");
assert(typeof paginateListCrossAccountAuthorizations === "function");
assert(typeof paginateListReadinessChecks === "function");
assert(typeof paginateListRecoveryGroups === "function");
assert(typeof paginateListResourceSets === "function");
assert(typeof paginateListRules === "function");
console.log(`Route53RecoveryReadiness index test passed.`);
