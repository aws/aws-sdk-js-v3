import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessGrant$,
  AccessGrantPermission,
  AccessGrantPrincipal$,
  AccessGrantPrincipalAttribute$,
  AccessGrantPrincipalType,
  AccessGrantSummary$,
  AccessGrantType,
  AccessProfile$,
  AccessProfileSummary$,
  AccessProfileType,
  Alert$,
  AlertCondition$,
  AlertEvaluation$,
  AlertFilterCriteria$,
  AlertRuleQuery$,
  AlertSortField,
  AlertSortOrder,
  AlertState,
  AlertStateData$,
  AlertStateInfo$,
  AlertSummary$,
  ApiKeyCredential$,
  AssumeStatus,
  AuthType,
  AwsCredentials$,
  CloudWatchOmni,
  CloudWatchOmniClient,
  CloudWatchOmniServiceException,
  Comparator,
  ConflictException,
  ConflictException$,
  ContributorSummary$,
  CreateAccessGrant$,
  CreateAccessGrantCommand,
  CreateAccessGrantInput$,
  CreateAccessGrantOutput$,
  CreateAccessProfile$,
  CreateAccessProfileCommand,
  CreateAccessProfileInput$,
  CreateAccessProfileOutput$,
  CreateAlert$,
  CreateAlertCommand,
  CreateAlertInput$,
  CreateAlertOutput$,
  CreateDomain$,
  CreateDomainAccessGrantForOrganization$,
  CreateDomainAccessGrantForOrganizationCommand,
  CreateDomainAccessGrantForOrganizationInput$,
  CreateDomainAccessGrantForOrganizationOutput$,
  CreateDomainCommand,
  CreateDomainForOrganization$,
  CreateDomainForOrganizationCommand,
  CreateDomainForOrganizationInput$,
  CreateDomainForOrganizationOutput$,
  CreateDomainInput$,
  CreateDomainOutput$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationInput$,
  CreateIntegrationOutput$,
  CreateOmniDashboard$,
  CreateOmniDashboardCommand,
  CreateOmniDashboardInput$,
  CreateOmniDashboardOutput$,
  CreateOneTimeDeepLinkCode$,
  CreateOneTimeDeepLinkCodeCommand,
  CreateOneTimeDeepLinkCodeInput$,
  CreateOneTimeDeepLinkCodeOutput$,
  CreateSpace$,
  CreateSpaceCommand,
  CreateSpaceInput$,
  CreateSpaceOutput$,
  CreateView$,
  CreateViewCommand,
  CreateViewRequest$,
  CreateViewResponse$,
  DeleteAccessGrant$,
  DeleteAccessGrantCommand,
  DeleteAccessGrantInput$,
  DeleteAccessGrantOutput$,
  DeleteAccessProfile$,
  DeleteAccessProfileCommand,
  DeleteAccessProfileInput$,
  DeleteAccessProfileOutput$,
  DeleteAlert$,
  DeleteAlertCommand,
  DeleteAlertInput$,
  DeleteAlertOutput$,
  DeleteDomain$,
  DeleteDomainAccessGrantForOrganization$,
  DeleteDomainAccessGrantForOrganizationCommand,
  DeleteDomainAccessGrantForOrganizationInput$,
  DeleteDomainAccessGrantForOrganizationOutput$,
  DeleteDomainCommand,
  DeleteDomainForOrganization$,
  DeleteDomainForOrganizationCommand,
  DeleteDomainForOrganizationInput$,
  DeleteDomainForOrganizationOutput$,
  DeleteDomainInput$,
  DeleteDomainOutput$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationInput$,
  DeleteIntegrationOutput$,
  DeleteOmniDashboard$,
  DeleteOmniDashboardCommand,
  DeleteOmniDashboardInput$,
  DeleteOmniDashboardOutput$,
  DeleteSpace$,
  DeleteSpaceCommand,
  DeleteSpaceInput$,
  DeleteSpaceOutput$,
  DeleteView$,
  DeleteViewCommand,
  DeleteViewRequest$,
  DeleteViewResponse$,
  Domain$,
  DomainStatus,
  DomainSummary$,
  Edge$,
  EdgeFilters$,
  EdgeProperties$,
  EdgeTrafficStats$,
  EdgeType,
  EncryptionConfiguration$,
  EncryptionStrategy,
  Field$,
  GetAccessGrant$,
  GetAccessGrantCommand,
  GetAccessGrantInput$,
  GetAccessGrantOutput$,
  GetAccessProfile$,
  GetAccessProfileCommand,
  GetAccessProfileInput$,
  GetAccessProfileOutput$,
  GetAlert$,
  GetAlertCommand,
  GetAlertInput$,
  GetAlertOutput$,
  GetContextGraph$,
  GetContextGraphCommand,
  GetContextGraphInput$,
  GetContextGraphOutput$,
  GetDomain$,
  GetDomainAccessGrantForOrganization$,
  GetDomainAccessGrantForOrganizationCommand,
  GetDomainAccessGrantForOrganizationInput$,
  GetDomainAccessGrantForOrganizationOutput$,
  GetDomainCommand,
  GetDomainForOrganization$,
  GetDomainForOrganizationCommand,
  GetDomainForOrganizationInput$,
  GetDomainForOrganizationOutput$,
  GetDomainInput$,
  GetDomainOutput$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationInput$,
  GetIntegrationOutput$,
  GetIntelligenceConfiguration$,
  GetIntelligenceConfigurationCommand,
  GetIntelligenceConfigurationInput$,
  GetIntelligenceConfigurationOutput$,
  GetOmniDashboard$,
  GetOmniDashboardCommand,
  GetOmniDashboardInput$,
  GetOmniDashboardOutput$,
  GetSpace$,
  GetSpaceCommand,
  GetSpaceCredentialsForOrganization$,
  GetSpaceCredentialsForOrganizationCommand,
  GetSpaceCredentialsForOrganizationInput$,
  GetSpaceCredentialsForOrganizationOutput$,
  GetSpaceInput$,
  GetSpaceOutput$,
  GetTelemetryQueryResults$,
  GetTelemetryQueryResultsCommand,
  GetTelemetryQueryResultsRequest$,
  GetTelemetryQueryResultsResponse$,
  GetView$,
  GetViewCommand,
  GetViewRequest$,
  GetViewResponse$,
  IdentityCenterConfiguration$,
  IdentityProvider,
  IdentityProviderConfiguration$,
  Integration$,
  IntegrationCredential$,
  IntegrationIdentifier$,
  IntegrationStatus,
  IntegrationType,
  InternalServerException,
  InternalServerException$,
  KeyFilter$,
  ListAccessGrants$,
  ListAccessGrantsCommand,
  ListAccessGrantsInput$,
  ListAccessGrantsOutput$,
  ListAccessProfiles$,
  ListAccessProfilesCommand,
  ListAccessProfilesInput$,
  ListAccessProfilesOutput$,
  ListAlerts$,
  ListAlertsCommand,
  ListAlertsInput$,
  ListAlertsOutput$,
  ListDomainAccessGrantsForOrganization$,
  ListDomainAccessGrantsForOrganizationCommand,
  ListDomainAccessGrantsForOrganizationInput$,
  ListDomainAccessGrantsForOrganizationOutput$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsInput$,
  ListDomainsOutput$,
  ListIntegrations$,
  ListIntegrationsCommand,
  ListIntegrationsInput$,
  ListIntegrationsOutput$,
  ListOmniDashboards$,
  ListOmniDashboardsCommand,
  ListOmniDashboardsInput$,
  ListOmniDashboardsOutput$,
  ListSpaces$,
  ListSpacesCommand,
  ListSpacesForOrganization$,
  ListSpacesForOrganizationCommand,
  ListSpacesForOrganizationInput$,
  ListSpacesForOrganizationOutput$,
  ListSpacesInput$,
  ListSpacesOutput$,
  ListTelemetryFields$,
  ListTelemetryFieldsCommand,
  ListTelemetryFieldsRequest$,
  ListTelemetryFieldsResponse$,
  ListTelemetryQuerySessions$,
  ListTelemetryQuerySessionsCommand,
  ListTelemetryQuerySessionsRequest$,
  ListTelemetryQuerySessionsResponse$,
  ListViews$,
  ListViewsCommand,
  ListViewsRequest$,
  ListViewsResponse$,
  LogMetadata$,
  Metadata$,
  MetricMetadata$,
  MetricSemantics$,
  NoData$,
  Node$,
  NodeCategory,
  NodeFilters$,
  NodeProperties$,
  NodeSemantics$,
  NodeType,
  NotificationRule$,
  NotificationStatus,
  NotificationTarget$,
  NotificationTargetType,
  NotificationTrigger$,
  OAuthClientCredential$,
  OAuthCodeCredential$,
  OmniDashboard$,
  OmniDashboardSummary$,
  OrganizationAccessGrant$,
  OrganizationAccessGrantPrincipal$,
  OrganizationAccessGrantSummary$,
  OrganizationCredentialType,
  OrganizationDomain$,
  OrganizationGrantPermission,
  OrganizationGrantPrincipalType,
  paginateGetContextGraph,
  paginateGetTelemetryQueryResults,
  paginateListAccessGrants,
  paginateListAccessProfiles,
  paginateListAlerts,
  paginateListDomainAccessGrantsForOrganization,
  paginateListDomains,
  paginateListIntegrations,
  paginateListOmniDashboards,
  paginateListSpaces,
  paginateListSpacesForOrganization,
  paginateListTelemetryFields,
  paginateListTelemetryQuerySessions,
  paginateListViews,
  paginateSearchPrincipals,
  PartialResults$,
  PrincipalSearchResult$,
  PrincipalType,
  PutIntelligenceConfiguration$,
  PutIntelligenceConfigurationCommand,
  PutIntelligenceConfigurationInput$,
  PutIntelligenceConfigurationOutput$,
  QueryLanguage,
  QueryStatistics$,
  QueryStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceScope$,
  RowScope$,
  RowScopeOperator,
  Rule$,
  Scope,
  ScopedActions$,
  SearchPrincipals$,
  SearchPrincipalsCommand,
  SearchPrincipalsInput$,
  SearchPrincipalsOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionSummary$,
  Signal,
  SignalType,
  Source,
  Space$,
  SpaceCredentialRequestContext$,
  SpaceStatus,
  SpaceSummary$,
  StartTelemetryQuery$,
  StartTelemetryQueryCommand,
  StartTelemetryQueryRequest$,
  StartTelemetryQueryResponse$,
  StartTelemetryQuerySession$,
  StartTelemetryQuerySessionCommand,
  StartTelemetryQuerySessionRequest$,
  StartTelemetryQuerySessionResponse$,
  StopTelemetryQuery$,
  StopTelemetryQueryCommand,
  StopTelemetryQueryRequest$,
  StopTelemetryQueryResponse$,
  StopTelemetryQuerySession$,
  StopTelemetryQuerySessionCommand,
  StopTelemetryQuerySessionRequest$,
  StopTelemetryQuerySessionResponse$,
  TelemetryRule$,
  TelemetryType,
  ThresholdMode,
  ThrottlingException,
  ThrottlingException$,
  TraceMetadata$,
  UpdateAccessProfile$,
  UpdateAccessProfileCommand,
  UpdateAccessProfileInput$,
  UpdateAccessProfileOutput$,
  UpdateAlert$,
  UpdateAlertCommand,
  UpdateAlertInput$,
  UpdateAlertOutput$,
  UpdateDomain$,
  UpdateDomainCommand,
  UpdateDomainForOrganization$,
  UpdateDomainForOrganizationCommand,
  UpdateDomainForOrganizationInput$,
  UpdateDomainForOrganizationOutput$,
  UpdateDomainInput$,
  UpdateDomainOutput$,
  UpdateIntegration$,
  UpdateIntegrationCommand,
  UpdateIntegrationInput$,
  UpdateIntegrationOutput$,
  UpdateOmniDashboard$,
  UpdateOmniDashboardCommand,
  UpdateOmniDashboardInput$,
  UpdateOmniDashboardOutput$,
  UpdateSpace$,
  UpdateSpaceCommand,
  UpdateSpaceInput$,
  UpdateSpaceOutput$,
  UpdateView$,
  UpdateViewCommand,
  UpdateViewRequest$,
  UpdateViewResponse$,
  ValidationException,
  ValidationException$,
  ViewSummary$,
  ViewType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudWatchOmniClient === "function");
assert(typeof CloudWatchOmni === "function");
// commands
assert(typeof CreateAccessGrantCommand === "function");
assert(typeof CreateAccessGrant$ === "object");
assert(typeof CreateAccessProfileCommand === "function");
assert(typeof CreateAccessProfile$ === "object");
assert(typeof CreateAlertCommand === "function");
assert(typeof CreateAlert$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateDomainAccessGrantForOrganizationCommand === "function");
assert(typeof CreateDomainAccessGrantForOrganization$ === "object");
assert(typeof CreateDomainForOrganizationCommand === "function");
assert(typeof CreateDomainForOrganization$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateOmniDashboardCommand === "function");
assert(typeof CreateOmniDashboard$ === "object");
assert(typeof CreateOneTimeDeepLinkCodeCommand === "function");
assert(typeof CreateOneTimeDeepLinkCode$ === "object");
assert(typeof CreateSpaceCommand === "function");
assert(typeof CreateSpace$ === "object");
assert(typeof CreateViewCommand === "function");
assert(typeof CreateView$ === "object");
assert(typeof DeleteAccessGrantCommand === "function");
assert(typeof DeleteAccessGrant$ === "object");
assert(typeof DeleteAccessProfileCommand === "function");
assert(typeof DeleteAccessProfile$ === "object");
assert(typeof DeleteAlertCommand === "function");
assert(typeof DeleteAlert$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteDomainAccessGrantForOrganizationCommand === "function");
assert(typeof DeleteDomainAccessGrantForOrganization$ === "object");
assert(typeof DeleteDomainForOrganizationCommand === "function");
assert(typeof DeleteDomainForOrganization$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteOmniDashboardCommand === "function");
assert(typeof DeleteOmniDashboard$ === "object");
assert(typeof DeleteSpaceCommand === "function");
assert(typeof DeleteSpace$ === "object");
assert(typeof DeleteViewCommand === "function");
assert(typeof DeleteView$ === "object");
assert(typeof GetAccessGrantCommand === "function");
assert(typeof GetAccessGrant$ === "object");
assert(typeof GetAccessProfileCommand === "function");
assert(typeof GetAccessProfile$ === "object");
assert(typeof GetAlertCommand === "function");
assert(typeof GetAlert$ === "object");
assert(typeof GetContextGraphCommand === "function");
assert(typeof GetContextGraph$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetDomainAccessGrantForOrganizationCommand === "function");
assert(typeof GetDomainAccessGrantForOrganization$ === "object");
assert(typeof GetDomainForOrganizationCommand === "function");
assert(typeof GetDomainForOrganization$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetIntelligenceConfigurationCommand === "function");
assert(typeof GetIntelligenceConfiguration$ === "object");
assert(typeof GetOmniDashboardCommand === "function");
assert(typeof GetOmniDashboard$ === "object");
assert(typeof GetSpaceCommand === "function");
assert(typeof GetSpace$ === "object");
assert(typeof GetSpaceCredentialsForOrganizationCommand === "function");
assert(typeof GetSpaceCredentialsForOrganization$ === "object");
assert(typeof GetTelemetryQueryResultsCommand === "function");
assert(typeof GetTelemetryQueryResults$ === "object");
assert(typeof GetViewCommand === "function");
assert(typeof GetView$ === "object");
assert(typeof ListAccessGrantsCommand === "function");
assert(typeof ListAccessGrants$ === "object");
assert(typeof ListAccessProfilesCommand === "function");
assert(typeof ListAccessProfiles$ === "object");
assert(typeof ListAlertsCommand === "function");
assert(typeof ListAlerts$ === "object");
assert(typeof ListDomainAccessGrantsForOrganizationCommand === "function");
assert(typeof ListDomainAccessGrantsForOrganization$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListIntegrations$ === "object");
assert(typeof ListOmniDashboardsCommand === "function");
assert(typeof ListOmniDashboards$ === "object");
assert(typeof ListSpacesCommand === "function");
assert(typeof ListSpaces$ === "object");
assert(typeof ListSpacesForOrganizationCommand === "function");
assert(typeof ListSpacesForOrganization$ === "object");
assert(typeof ListTelemetryFieldsCommand === "function");
assert(typeof ListTelemetryFields$ === "object");
assert(typeof ListTelemetryQuerySessionsCommand === "function");
assert(typeof ListTelemetryQuerySessions$ === "object");
assert(typeof ListViewsCommand === "function");
assert(typeof ListViews$ === "object");
assert(typeof PutIntelligenceConfigurationCommand === "function");
assert(typeof PutIntelligenceConfiguration$ === "object");
assert(typeof SearchPrincipalsCommand === "function");
assert(typeof SearchPrincipals$ === "object");
assert(typeof StartTelemetryQueryCommand === "function");
assert(typeof StartTelemetryQuery$ === "object");
assert(typeof StartTelemetryQuerySessionCommand === "function");
assert(typeof StartTelemetryQuerySession$ === "object");
assert(typeof StopTelemetryQueryCommand === "function");
assert(typeof StopTelemetryQuery$ === "object");
assert(typeof StopTelemetryQuerySessionCommand === "function");
assert(typeof StopTelemetryQuerySession$ === "object");
assert(typeof UpdateAccessProfileCommand === "function");
assert(typeof UpdateAccessProfile$ === "object");
assert(typeof UpdateAlertCommand === "function");
assert(typeof UpdateAlert$ === "object");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomain$ === "object");
assert(typeof UpdateDomainForOrganizationCommand === "function");
assert(typeof UpdateDomainForOrganization$ === "object");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegration$ === "object");
assert(typeof UpdateOmniDashboardCommand === "function");
assert(typeof UpdateOmniDashboard$ === "object");
assert(typeof UpdateSpaceCommand === "function");
assert(typeof UpdateSpace$ === "object");
assert(typeof UpdateViewCommand === "function");
assert(typeof UpdateView$ === "object");
// structural schemas
assert(typeof AccessGrant$ === "object");
assert(typeof AccessGrantPrincipal$ === "object");
assert(typeof AccessGrantPrincipalAttribute$ === "object");
assert(typeof AccessGrantSummary$ === "object");
assert(typeof AccessProfile$ === "object");
assert(typeof AccessProfileSummary$ === "object");
assert(typeof Alert$ === "object");
assert(typeof AlertCondition$ === "object");
assert(typeof AlertEvaluation$ === "object");
assert(typeof AlertFilterCriteria$ === "object");
assert(typeof AlertRuleQuery$ === "object");
assert(typeof AlertStateData$ === "object");
assert(typeof AlertStateInfo$ === "object");
assert(typeof AlertSummary$ === "object");
assert(typeof ApiKeyCredential$ === "object");
assert(typeof AwsCredentials$ === "object");
assert(typeof ContributorSummary$ === "object");
assert(typeof CreateAccessGrantInput$ === "object");
assert(typeof CreateAccessGrantOutput$ === "object");
assert(typeof CreateAccessProfileInput$ === "object");
assert(typeof CreateAccessProfileOutput$ === "object");
assert(typeof CreateAlertInput$ === "object");
assert(typeof CreateAlertOutput$ === "object");
assert(typeof CreateDomainAccessGrantForOrganizationInput$ === "object");
assert(typeof CreateDomainAccessGrantForOrganizationOutput$ === "object");
assert(typeof CreateDomainForOrganizationInput$ === "object");
assert(typeof CreateDomainForOrganizationOutput$ === "object");
assert(typeof CreateDomainInput$ === "object");
assert(typeof CreateDomainOutput$ === "object");
assert(typeof CreateIntegrationInput$ === "object");
assert(typeof CreateIntegrationOutput$ === "object");
assert(typeof CreateOmniDashboardInput$ === "object");
assert(typeof CreateOmniDashboardOutput$ === "object");
assert(typeof CreateOneTimeDeepLinkCodeInput$ === "object");
assert(typeof CreateOneTimeDeepLinkCodeOutput$ === "object");
assert(typeof CreateSpaceInput$ === "object");
assert(typeof CreateSpaceOutput$ === "object");
assert(typeof CreateViewRequest$ === "object");
assert(typeof CreateViewResponse$ === "object");
assert(typeof DeleteAccessGrantInput$ === "object");
assert(typeof DeleteAccessGrantOutput$ === "object");
assert(typeof DeleteAccessProfileInput$ === "object");
assert(typeof DeleteAccessProfileOutput$ === "object");
assert(typeof DeleteAlertInput$ === "object");
assert(typeof DeleteAlertOutput$ === "object");
assert(typeof DeleteDomainAccessGrantForOrganizationInput$ === "object");
assert(typeof DeleteDomainAccessGrantForOrganizationOutput$ === "object");
assert(typeof DeleteDomainForOrganizationInput$ === "object");
assert(typeof DeleteDomainForOrganizationOutput$ === "object");
assert(typeof DeleteDomainInput$ === "object");
assert(typeof DeleteDomainOutput$ === "object");
assert(typeof DeleteIntegrationInput$ === "object");
assert(typeof DeleteIntegrationOutput$ === "object");
assert(typeof DeleteOmniDashboardInput$ === "object");
assert(typeof DeleteOmniDashboardOutput$ === "object");
assert(typeof DeleteSpaceInput$ === "object");
assert(typeof DeleteSpaceOutput$ === "object");
assert(typeof DeleteViewRequest$ === "object");
assert(typeof DeleteViewResponse$ === "object");
assert(typeof Domain$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof Edge$ === "object");
assert(typeof EdgeFilters$ === "object");
assert(typeof EdgeProperties$ === "object");
assert(typeof EdgeTrafficStats$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof Field$ === "object");
assert(typeof GetAccessGrantInput$ === "object");
assert(typeof GetAccessGrantOutput$ === "object");
assert(typeof GetAccessProfileInput$ === "object");
assert(typeof GetAccessProfileOutput$ === "object");
assert(typeof GetAlertInput$ === "object");
assert(typeof GetAlertOutput$ === "object");
assert(typeof GetContextGraphInput$ === "object");
assert(typeof GetContextGraphOutput$ === "object");
assert(typeof GetDomainAccessGrantForOrganizationInput$ === "object");
assert(typeof GetDomainAccessGrantForOrganizationOutput$ === "object");
assert(typeof GetDomainForOrganizationInput$ === "object");
assert(typeof GetDomainForOrganizationOutput$ === "object");
assert(typeof GetDomainInput$ === "object");
assert(typeof GetDomainOutput$ === "object");
assert(typeof GetIntegrationInput$ === "object");
assert(typeof GetIntegrationOutput$ === "object");
assert(typeof GetIntelligenceConfigurationInput$ === "object");
assert(typeof GetIntelligenceConfigurationOutput$ === "object");
assert(typeof GetOmniDashboardInput$ === "object");
assert(typeof GetOmniDashboardOutput$ === "object");
assert(typeof GetSpaceCredentialsForOrganizationInput$ === "object");
assert(typeof GetSpaceCredentialsForOrganizationOutput$ === "object");
assert(typeof GetSpaceInput$ === "object");
assert(typeof GetSpaceOutput$ === "object");
assert(typeof GetTelemetryQueryResultsRequest$ === "object");
assert(typeof GetTelemetryQueryResultsResponse$ === "object");
assert(typeof GetViewRequest$ === "object");
assert(typeof GetViewResponse$ === "object");
assert(typeof IdentityCenterConfiguration$ === "object");
assert(typeof IdentityProviderConfiguration$ === "object");
assert(typeof Integration$ === "object");
assert(typeof IntegrationCredential$ === "object");
assert(typeof IntegrationIdentifier$ === "object");
assert(typeof KeyFilter$ === "object");
assert(typeof ListAccessGrantsInput$ === "object");
assert(typeof ListAccessGrantsOutput$ === "object");
assert(typeof ListAccessProfilesInput$ === "object");
assert(typeof ListAccessProfilesOutput$ === "object");
assert(typeof ListAlertsInput$ === "object");
assert(typeof ListAlertsOutput$ === "object");
assert(typeof ListDomainAccessGrantsForOrganizationInput$ === "object");
assert(typeof ListDomainAccessGrantsForOrganizationOutput$ === "object");
assert(typeof ListDomainsInput$ === "object");
assert(typeof ListDomainsOutput$ === "object");
assert(typeof ListIntegrationsInput$ === "object");
assert(typeof ListIntegrationsOutput$ === "object");
assert(typeof ListOmniDashboardsInput$ === "object");
assert(typeof ListOmniDashboardsOutput$ === "object");
assert(typeof ListSpacesForOrganizationInput$ === "object");
assert(typeof ListSpacesForOrganizationOutput$ === "object");
assert(typeof ListSpacesInput$ === "object");
assert(typeof ListSpacesOutput$ === "object");
assert(typeof ListTelemetryFieldsRequest$ === "object");
assert(typeof ListTelemetryFieldsResponse$ === "object");
assert(typeof ListTelemetryQuerySessionsRequest$ === "object");
assert(typeof ListTelemetryQuerySessionsResponse$ === "object");
assert(typeof ListViewsRequest$ === "object");
assert(typeof ListViewsResponse$ === "object");
assert(typeof LogMetadata$ === "object");
assert(typeof Metadata$ === "object");
assert(typeof MetricMetadata$ === "object");
assert(typeof MetricSemantics$ === "object");
assert(typeof NoData$ === "object");
assert(typeof Node$ === "object");
assert(typeof NodeFilters$ === "object");
assert(typeof NodeProperties$ === "object");
assert(typeof NodeSemantics$ === "object");
assert(typeof NotificationRule$ === "object");
assert(typeof NotificationTarget$ === "object");
assert(typeof NotificationTrigger$ === "object");
assert(typeof OAuthClientCredential$ === "object");
assert(typeof OAuthCodeCredential$ === "object");
assert(typeof OmniDashboard$ === "object");
assert(typeof OmniDashboardSummary$ === "object");
assert(typeof OrganizationAccessGrant$ === "object");
assert(typeof OrganizationAccessGrantPrincipal$ === "object");
assert(typeof OrganizationAccessGrantSummary$ === "object");
assert(typeof OrganizationDomain$ === "object");
assert(typeof PartialResults$ === "object");
assert(typeof PrincipalSearchResult$ === "object");
assert(typeof PutIntelligenceConfigurationInput$ === "object");
assert(typeof PutIntelligenceConfigurationOutput$ === "object");
assert(typeof QueryStatistics$ === "object");
assert(typeof ResourceScope$ === "object");
assert(typeof RowScope$ === "object");
assert(typeof Rule$ === "object");
assert(typeof ScopedActions$ === "object");
assert(typeof SearchPrincipalsInput$ === "object");
assert(typeof SearchPrincipalsOutput$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof Space$ === "object");
assert(typeof SpaceCredentialRequestContext$ === "object");
assert(typeof SpaceSummary$ === "object");
assert(typeof StartTelemetryQueryRequest$ === "object");
assert(typeof StartTelemetryQueryResponse$ === "object");
assert(typeof StartTelemetryQuerySessionRequest$ === "object");
assert(typeof StartTelemetryQuerySessionResponse$ === "object");
assert(typeof StopTelemetryQueryRequest$ === "object");
assert(typeof StopTelemetryQueryResponse$ === "object");
assert(typeof StopTelemetryQuerySessionRequest$ === "object");
assert(typeof StopTelemetryQuerySessionResponse$ === "object");
assert(typeof TelemetryRule$ === "object");
assert(typeof TraceMetadata$ === "object");
assert(typeof UpdateAccessProfileInput$ === "object");
assert(typeof UpdateAccessProfileOutput$ === "object");
assert(typeof UpdateAlertInput$ === "object");
assert(typeof UpdateAlertOutput$ === "object");
assert(typeof UpdateDomainForOrganizationInput$ === "object");
assert(typeof UpdateDomainForOrganizationOutput$ === "object");
assert(typeof UpdateDomainInput$ === "object");
assert(typeof UpdateDomainOutput$ === "object");
assert(typeof UpdateIntegrationInput$ === "object");
assert(typeof UpdateIntegrationOutput$ === "object");
assert(typeof UpdateOmniDashboardInput$ === "object");
assert(typeof UpdateOmniDashboardOutput$ === "object");
assert(typeof UpdateSpaceInput$ === "object");
assert(typeof UpdateSpaceOutput$ === "object");
assert(typeof UpdateViewRequest$ === "object");
assert(typeof UpdateViewResponse$ === "object");
assert(typeof ViewSummary$ === "object");
// enums
assert(typeof AccessGrantPermission === "object");
assert(typeof AccessGrantPrincipalType === "object");
assert(typeof AccessGrantType === "object");
assert(typeof AccessProfileType === "object");
assert(typeof AlertSortField === "object");
assert(typeof AlertSortOrder === "object");
assert(typeof AlertState === "object");
assert(typeof AssumeStatus === "object");
assert(typeof AuthType === "object");
assert(typeof Comparator === "object");
assert(typeof DomainStatus === "object");
assert(typeof EdgeType === "object");
assert(typeof EncryptionStrategy === "object");
assert(typeof IdentityProvider === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof IntegrationType === "object");
assert(typeof NodeCategory === "object");
assert(typeof NodeType === "object");
assert(typeof NotificationStatus === "object");
assert(typeof NotificationTargetType === "object");
assert(typeof OrganizationCredentialType === "object");
assert(typeof OrganizationGrantPermission === "object");
assert(typeof OrganizationGrantPrincipalType === "object");
assert(typeof PrincipalType === "object");
assert(typeof QueryLanguage === "object");
assert(typeof QueryStatus === "object");
assert(typeof RowScopeOperator === "object");
assert(typeof Scope === "object");
assert(typeof Signal === "object");
assert(typeof SignalType === "object");
assert(typeof Source === "object");
assert(typeof SpaceStatus === "object");
assert(typeof TelemetryType === "object");
assert(typeof ThresholdMode === "object");
assert(typeof ViewType === "object");
// errors
assert(AccessDeniedException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CloudWatchOmniServiceException);
assert(typeof ValidationException$ === "object");
assert(CloudWatchOmniServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetContextGraph === "function");
assert(typeof paginateGetTelemetryQueryResults === "function");
assert(typeof paginateListAccessGrants === "function");
assert(typeof paginateListAccessProfiles === "function");
assert(typeof paginateListAlerts === "function");
assert(typeof paginateListDomainAccessGrantsForOrganization === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListIntegrations === "function");
assert(typeof paginateListOmniDashboards === "function");
assert(typeof paginateListSpaces === "function");
assert(typeof paginateListSpacesForOrganization === "function");
assert(typeof paginateListTelemetryFields === "function");
assert(typeof paginateListTelemetryQuerySessions === "function");
assert(typeof paginateListViews === "function");
assert(typeof paginateSearchPrincipals === "function");
console.log(`CloudWatchOmni index test passed.`);
