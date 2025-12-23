import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionIdentifier$,
  AttributeValue$,
  BatchGetPolicy$,
  BatchGetPolicyCommand,
  BatchGetPolicyErrorCode,
  BatchGetPolicyErrorItem$,
  BatchGetPolicyInput$,
  BatchGetPolicyInputItem$,
  BatchGetPolicyOutput$,
  BatchGetPolicyOutputItem$,
  BatchIsAuthorized$,
  BatchIsAuthorizedCommand,
  BatchIsAuthorizedInput$,
  BatchIsAuthorizedInputItem$,
  BatchIsAuthorizedOutput$,
  BatchIsAuthorizedOutputItem$,
  BatchIsAuthorizedWithToken$,
  BatchIsAuthorizedWithTokenCommand,
  BatchIsAuthorizedWithTokenInput$,
  BatchIsAuthorizedWithTokenInputItem$,
  BatchIsAuthorizedWithTokenOutput$,
  BatchIsAuthorizedWithTokenOutputItem$,
  CedarTagValue$,
  CedarVersion,
  CognitoGroupConfiguration$,
  CognitoGroupConfigurationDetail$,
  CognitoGroupConfigurationItem$,
  CognitoUserPoolConfiguration$,
  CognitoUserPoolConfigurationDetail$,
  CognitoUserPoolConfigurationItem$,
  Configuration$,
  ConfigurationDetail$,
  ConfigurationItem$,
  ConflictException,
  ConflictException$,
  ContextDefinition$,
  CreateIdentitySource$,
  CreateIdentitySourceCommand,
  CreateIdentitySourceInput$,
  CreateIdentitySourceOutput$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyInput$,
  CreatePolicyOutput$,
  CreatePolicyStore$,
  CreatePolicyStoreCommand,
  CreatePolicyStoreInput$,
  CreatePolicyStoreOutput$,
  CreatePolicyTemplate$,
  CreatePolicyTemplateCommand,
  CreatePolicyTemplateInput$,
  CreatePolicyTemplateOutput$,
  Decision,
  DeleteIdentitySource$,
  DeleteIdentitySourceCommand,
  DeleteIdentitySourceInput$,
  DeleteIdentitySourceOutput$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyInput$,
  DeletePolicyOutput$,
  DeletePolicyStore$,
  DeletePolicyStoreCommand,
  DeletePolicyStoreInput$,
  DeletePolicyStoreOutput$,
  DeletePolicyTemplate$,
  DeletePolicyTemplateCommand,
  DeletePolicyTemplateInput$,
  DeletePolicyTemplateOutput$,
  DeletionProtection,
  DeterminingPolicyItem$,
  EntitiesDefinition$,
  EntityIdentifier$,
  EntityItem$,
  EntityReference$,
  EvaluationErrorItem$,
  GetIdentitySource$,
  GetIdentitySourceCommand,
  GetIdentitySourceInput$,
  GetIdentitySourceOutput$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyInput$,
  GetPolicyOutput$,
  GetPolicyStore$,
  GetPolicyStoreCommand,
  GetPolicyStoreInput$,
  GetPolicyStoreOutput$,
  GetPolicyTemplate$,
  GetPolicyTemplateCommand,
  GetPolicyTemplateInput$,
  GetPolicyTemplateOutput$,
  GetSchema$,
  GetSchemaCommand,
  GetSchemaInput$,
  GetSchemaOutput$,
  IdentitySourceDetails$,
  IdentitySourceFilter$,
  IdentitySourceItem$,
  IdentitySourceItemDetails$,
  InternalServerException,
  InternalServerException$,
  InvalidStateException,
  InvalidStateException$,
  IsAuthorized$,
  IsAuthorizedCommand,
  IsAuthorizedInput$,
  IsAuthorizedOutput$,
  IsAuthorizedWithToken$,
  IsAuthorizedWithTokenCommand,
  IsAuthorizedWithTokenInput$,
  IsAuthorizedWithTokenOutput$,
  ListIdentitySources$,
  ListIdentitySourcesCommand,
  ListIdentitySourcesInput$,
  ListIdentitySourcesOutput$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesInput$,
  ListPoliciesOutput$,
  ListPolicyStores$,
  ListPolicyStoresCommand,
  ListPolicyStoresInput$,
  ListPolicyStoresOutput$,
  ListPolicyTemplates$,
  ListPolicyTemplatesCommand,
  ListPolicyTemplatesInput$,
  ListPolicyTemplatesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  OpenIdConnectAccessTokenConfiguration$,
  OpenIdConnectAccessTokenConfigurationDetail$,
  OpenIdConnectAccessTokenConfigurationItem$,
  OpenIdConnectConfiguration$,
  OpenIdConnectConfigurationDetail$,
  OpenIdConnectConfigurationItem$,
  OpenIdConnectGroupConfiguration$,
  OpenIdConnectGroupConfigurationDetail$,
  OpenIdConnectGroupConfigurationItem$,
  OpenIdConnectIdentityTokenConfiguration$,
  OpenIdConnectIdentityTokenConfigurationDetail$,
  OpenIdConnectIdentityTokenConfigurationItem$,
  OpenIdConnectTokenSelection$,
  OpenIdConnectTokenSelectionDetail$,
  OpenIdConnectTokenSelectionItem$,
  OpenIdIssuer,
  paginateListIdentitySources,
  paginateListPolicies,
  paginateListPolicyStores,
  paginateListPolicyTemplates,
  PolicyDefinition$,
  PolicyDefinitionDetail$,
  PolicyDefinitionItem$,
  PolicyEffect,
  PolicyFilter$,
  PolicyItem$,
  PolicyStoreItem$,
  PolicyTemplateItem$,
  PolicyType,
  PutSchema$,
  PutSchemaCommand,
  PutSchemaInput$,
  PutSchemaOutput$,
  ResourceConflict$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  SchemaDefinition$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StaticPolicyDefinition$,
  StaticPolicyDefinitionDetail$,
  StaticPolicyDefinitionItem$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TemplateLinkedPolicyDefinition$,
  TemplateLinkedPolicyDefinitionDetail$,
  TemplateLinkedPolicyDefinitionItem$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateCognitoGroupConfiguration$,
  UpdateCognitoUserPoolConfiguration$,
  UpdateConfiguration$,
  UpdateIdentitySource$,
  UpdateIdentitySourceCommand,
  UpdateIdentitySourceInput$,
  UpdateIdentitySourceOutput$,
  UpdateOpenIdConnectAccessTokenConfiguration$,
  UpdateOpenIdConnectConfiguration$,
  UpdateOpenIdConnectGroupConfiguration$,
  UpdateOpenIdConnectIdentityTokenConfiguration$,
  UpdateOpenIdConnectTokenSelection$,
  UpdatePolicy$,
  UpdatePolicyCommand,
  UpdatePolicyDefinition$,
  UpdatePolicyInput$,
  UpdatePolicyOutput$,
  UpdatePolicyStore$,
  UpdatePolicyStoreCommand,
  UpdatePolicyStoreInput$,
  UpdatePolicyStoreOutput$,
  UpdatePolicyTemplate$,
  UpdatePolicyTemplateCommand,
  UpdatePolicyTemplateInput$,
  UpdatePolicyTemplateOutput$,
  UpdateStaticPolicyDefinition$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationMode,
  ValidationSettings$,
  VerifiedPermissions,
  VerifiedPermissionsClient,
  VerifiedPermissionsServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof VerifiedPermissionsClient === "function");
assert(typeof VerifiedPermissions === "function");
// commands
assert(typeof BatchGetPolicyCommand === "function");
assert(typeof BatchGetPolicy$ === "object");
assert(typeof BatchIsAuthorizedCommand === "function");
assert(typeof BatchIsAuthorized$ === "object");
assert(typeof BatchIsAuthorizedWithTokenCommand === "function");
assert(typeof BatchIsAuthorizedWithToken$ === "object");
assert(typeof CreateIdentitySourceCommand === "function");
assert(typeof CreateIdentitySource$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreatePolicyStoreCommand === "function");
assert(typeof CreatePolicyStore$ === "object");
assert(typeof CreatePolicyTemplateCommand === "function");
assert(typeof CreatePolicyTemplate$ === "object");
assert(typeof DeleteIdentitySourceCommand === "function");
assert(typeof DeleteIdentitySource$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeletePolicyStoreCommand === "function");
assert(typeof DeletePolicyStore$ === "object");
assert(typeof DeletePolicyTemplateCommand === "function");
assert(typeof DeletePolicyTemplate$ === "object");
assert(typeof GetIdentitySourceCommand === "function");
assert(typeof GetIdentitySource$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetPolicyStoreCommand === "function");
assert(typeof GetPolicyStore$ === "object");
assert(typeof GetPolicyTemplateCommand === "function");
assert(typeof GetPolicyTemplate$ === "object");
assert(typeof GetSchemaCommand === "function");
assert(typeof GetSchema$ === "object");
assert(typeof IsAuthorizedCommand === "function");
assert(typeof IsAuthorized$ === "object");
assert(typeof IsAuthorizedWithTokenCommand === "function");
assert(typeof IsAuthorizedWithToken$ === "object");
assert(typeof ListIdentitySourcesCommand === "function");
assert(typeof ListIdentitySources$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPolicyStoresCommand === "function");
assert(typeof ListPolicyStores$ === "object");
assert(typeof ListPolicyTemplatesCommand === "function");
assert(typeof ListPolicyTemplates$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutSchemaCommand === "function");
assert(typeof PutSchema$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIdentitySourceCommand === "function");
assert(typeof UpdateIdentitySource$ === "object");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdatePolicyStoreCommand === "function");
assert(typeof UpdatePolicyStore$ === "object");
assert(typeof UpdatePolicyTemplateCommand === "function");
assert(typeof UpdatePolicyTemplate$ === "object");
// structural schemas
assert(typeof ActionIdentifier$ === "object");
assert(typeof AttributeValue$ === "object");
assert(typeof BatchGetPolicyErrorItem$ === "object");
assert(typeof BatchGetPolicyInput$ === "object");
assert(typeof BatchGetPolicyInputItem$ === "object");
assert(typeof BatchGetPolicyOutput$ === "object");
assert(typeof BatchGetPolicyOutputItem$ === "object");
assert(typeof BatchIsAuthorizedInput$ === "object");
assert(typeof BatchIsAuthorizedInputItem$ === "object");
assert(typeof BatchIsAuthorizedOutput$ === "object");
assert(typeof BatchIsAuthorizedOutputItem$ === "object");
assert(typeof BatchIsAuthorizedWithTokenInput$ === "object");
assert(typeof BatchIsAuthorizedWithTokenInputItem$ === "object");
assert(typeof BatchIsAuthorizedWithTokenOutput$ === "object");
assert(typeof BatchIsAuthorizedWithTokenOutputItem$ === "object");
assert(typeof CedarTagValue$ === "object");
assert(typeof CognitoGroupConfiguration$ === "object");
assert(typeof CognitoGroupConfigurationDetail$ === "object");
assert(typeof CognitoGroupConfigurationItem$ === "object");
assert(typeof CognitoUserPoolConfiguration$ === "object");
assert(typeof CognitoUserPoolConfigurationDetail$ === "object");
assert(typeof CognitoUserPoolConfigurationItem$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationDetail$ === "object");
assert(typeof ConfigurationItem$ === "object");
assert(typeof ContextDefinition$ === "object");
assert(typeof CreateIdentitySourceInput$ === "object");
assert(typeof CreateIdentitySourceOutput$ === "object");
assert(typeof CreatePolicyInput$ === "object");
assert(typeof CreatePolicyOutput$ === "object");
assert(typeof CreatePolicyStoreInput$ === "object");
assert(typeof CreatePolicyStoreOutput$ === "object");
assert(typeof CreatePolicyTemplateInput$ === "object");
assert(typeof CreatePolicyTemplateOutput$ === "object");
assert(typeof DeleteIdentitySourceInput$ === "object");
assert(typeof DeleteIdentitySourceOutput$ === "object");
assert(typeof DeletePolicyInput$ === "object");
assert(typeof DeletePolicyOutput$ === "object");
assert(typeof DeletePolicyStoreInput$ === "object");
assert(typeof DeletePolicyStoreOutput$ === "object");
assert(typeof DeletePolicyTemplateInput$ === "object");
assert(typeof DeletePolicyTemplateOutput$ === "object");
assert(typeof DeterminingPolicyItem$ === "object");
assert(typeof EntitiesDefinition$ === "object");
assert(typeof EntityIdentifier$ === "object");
assert(typeof EntityItem$ === "object");
assert(typeof EntityReference$ === "object");
assert(typeof EvaluationErrorItem$ === "object");
assert(typeof GetIdentitySourceInput$ === "object");
assert(typeof GetIdentitySourceOutput$ === "object");
assert(typeof GetPolicyInput$ === "object");
assert(typeof GetPolicyOutput$ === "object");
assert(typeof GetPolicyStoreInput$ === "object");
assert(typeof GetPolicyStoreOutput$ === "object");
assert(typeof GetPolicyTemplateInput$ === "object");
assert(typeof GetPolicyTemplateOutput$ === "object");
assert(typeof GetSchemaInput$ === "object");
assert(typeof GetSchemaOutput$ === "object");
assert(typeof IdentitySourceDetails$ === "object");
assert(typeof IdentitySourceFilter$ === "object");
assert(typeof IdentitySourceItem$ === "object");
assert(typeof IdentitySourceItemDetails$ === "object");
assert(typeof IsAuthorizedInput$ === "object");
assert(typeof IsAuthorizedOutput$ === "object");
assert(typeof IsAuthorizedWithTokenInput$ === "object");
assert(typeof IsAuthorizedWithTokenOutput$ === "object");
assert(typeof ListIdentitySourcesInput$ === "object");
assert(typeof ListIdentitySourcesOutput$ === "object");
assert(typeof ListPoliciesInput$ === "object");
assert(typeof ListPoliciesOutput$ === "object");
assert(typeof ListPolicyStoresInput$ === "object");
assert(typeof ListPolicyStoresOutput$ === "object");
assert(typeof ListPolicyTemplatesInput$ === "object");
assert(typeof ListPolicyTemplatesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof OpenIdConnectAccessTokenConfiguration$ === "object");
assert(typeof OpenIdConnectAccessTokenConfigurationDetail$ === "object");
assert(typeof OpenIdConnectAccessTokenConfigurationItem$ === "object");
assert(typeof OpenIdConnectConfiguration$ === "object");
assert(typeof OpenIdConnectConfigurationDetail$ === "object");
assert(typeof OpenIdConnectConfigurationItem$ === "object");
assert(typeof OpenIdConnectGroupConfiguration$ === "object");
assert(typeof OpenIdConnectGroupConfigurationDetail$ === "object");
assert(typeof OpenIdConnectGroupConfigurationItem$ === "object");
assert(typeof OpenIdConnectIdentityTokenConfiguration$ === "object");
assert(typeof OpenIdConnectIdentityTokenConfigurationDetail$ === "object");
assert(typeof OpenIdConnectIdentityTokenConfigurationItem$ === "object");
assert(typeof OpenIdConnectTokenSelection$ === "object");
assert(typeof OpenIdConnectTokenSelectionDetail$ === "object");
assert(typeof OpenIdConnectTokenSelectionItem$ === "object");
assert(typeof PolicyDefinition$ === "object");
assert(typeof PolicyDefinitionDetail$ === "object");
assert(typeof PolicyDefinitionItem$ === "object");
assert(typeof PolicyFilter$ === "object");
assert(typeof PolicyItem$ === "object");
assert(typeof PolicyStoreItem$ === "object");
assert(typeof PolicyTemplateItem$ === "object");
assert(typeof PutSchemaInput$ === "object");
assert(typeof PutSchemaOutput$ === "object");
assert(typeof ResourceConflict$ === "object");
assert(typeof SchemaDefinition$ === "object");
assert(typeof StaticPolicyDefinition$ === "object");
assert(typeof StaticPolicyDefinitionDetail$ === "object");
assert(typeof StaticPolicyDefinitionItem$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TemplateLinkedPolicyDefinition$ === "object");
assert(typeof TemplateLinkedPolicyDefinitionDetail$ === "object");
assert(typeof TemplateLinkedPolicyDefinitionItem$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateCognitoGroupConfiguration$ === "object");
assert(typeof UpdateCognitoUserPoolConfiguration$ === "object");
assert(typeof UpdateConfiguration$ === "object");
assert(typeof UpdateIdentitySourceInput$ === "object");
assert(typeof UpdateIdentitySourceOutput$ === "object");
assert(typeof UpdateOpenIdConnectAccessTokenConfiguration$ === "object");
assert(typeof UpdateOpenIdConnectConfiguration$ === "object");
assert(typeof UpdateOpenIdConnectGroupConfiguration$ === "object");
assert(typeof UpdateOpenIdConnectIdentityTokenConfiguration$ === "object");
assert(typeof UpdateOpenIdConnectTokenSelection$ === "object");
assert(typeof UpdatePolicyDefinition$ === "object");
assert(typeof UpdatePolicyInput$ === "object");
assert(typeof UpdatePolicyOutput$ === "object");
assert(typeof UpdatePolicyStoreInput$ === "object");
assert(typeof UpdatePolicyStoreOutput$ === "object");
assert(typeof UpdatePolicyTemplateInput$ === "object");
assert(typeof UpdatePolicyTemplateOutput$ === "object");
assert(typeof UpdateStaticPolicyDefinition$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof ValidationSettings$ === "object");
// enums
assert(typeof BatchGetPolicyErrorCode === "object");
assert(typeof CedarVersion === "object");
assert(typeof Decision === "object");
assert(typeof DeletionProtection === "object");
assert(typeof OpenIdIssuer === "object");
assert(typeof PolicyEffect === "object");
assert(typeof PolicyType === "object");
assert(typeof ResourceType === "object");
assert(typeof ValidationMode === "object");
// errors
assert(AccessDeniedException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidStateException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof InvalidStateException$ === "object");
assert(ResourceNotFoundException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof VerifiedPermissionsServiceException);
assert(typeof ValidationException$ === "object");
assert(VerifiedPermissionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIdentitySources === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyStores === "function");
assert(typeof paginateListPolicyTemplates === "function");
console.log(`VerifiedPermissions index test passed.`);
