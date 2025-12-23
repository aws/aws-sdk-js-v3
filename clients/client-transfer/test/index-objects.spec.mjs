import {
  AccessDeniedException,
  AccessDeniedException$,
  AgreementStatusType,
  As2ConnectorConfig$,
  As2Transport,
  CertificateStatusType,
  CertificateType,
  CertificateUsageType,
  CompressionEnum,
  ConflictException,
  ConflictException$,
  ConnectorEgressConfig$,
  ConnectorEgressType,
  ConnectorFileTransferResult$,
  ConnectorStatus,
  ConnectorVpcLatticeEgressConfig$,
  CopyStepDetails$,
  CreateAccess$,
  CreateAccessCommand,
  CreateAccessRequest$,
  CreateAccessResponse$,
  CreateAgreement$,
  CreateAgreementCommand,
  CreateAgreementRequest$,
  CreateAgreementResponse$,
  CreateConnector$,
  CreateConnectorCommand,
  CreateConnectorRequest$,
  CreateConnectorResponse$,
  CreateProfile$,
  CreateProfileCommand,
  CreateProfileRequest$,
  CreateProfileResponse$,
  CreateServer$,
  CreateServerCommand,
  CreateServerRequest$,
  CreateServerResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  CreateWebApp$,
  CreateWebAppCommand,
  CreateWebAppRequest$,
  CreateWebAppResponse$,
  CreateWorkflow$,
  CreateWorkflowCommand,
  CreateWorkflowRequest$,
  CreateWorkflowResponse$,
  CustomDirectoriesType$,
  CustomStepDetails$,
  CustomStepStatus,
  DecryptStepDetails$,
  DeleteAccess$,
  DeleteAccessCommand,
  DeleteAccessRequest$,
  DeleteAgreement$,
  DeleteAgreementCommand,
  DeleteAgreementRequest$,
  DeleteCertificate$,
  DeleteCertificateCommand,
  DeleteCertificateRequest$,
  DeleteConnector$,
  DeleteConnectorCommand,
  DeleteConnectorRequest$,
  DeleteHostKey$,
  DeleteHostKeyCommand,
  DeleteHostKeyRequest$,
  DeleteProfile$,
  DeleteProfileCommand,
  DeleteProfileRequest$,
  DeleteServer$,
  DeleteServerCommand,
  DeleteServerRequest$,
  DeleteSshPublicKey$,
  DeleteSshPublicKeyCommand,
  DeleteSshPublicKeyRequest$,
  DeleteStepDetails$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteWebApp$,
  DeleteWebAppCommand,
  DeleteWebAppCustomization$,
  DeleteWebAppCustomizationCommand,
  DeleteWebAppCustomizationRequest$,
  DeleteWebAppRequest$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowRequest$,
  DescribeAccess$,
  DescribeAccessCommand,
  DescribeAccessRequest$,
  DescribeAccessResponse$,
  DescribeAgreement$,
  DescribeAgreementCommand,
  DescribeAgreementRequest$,
  DescribeAgreementResponse$,
  DescribeCertificate$,
  DescribeCertificateCommand,
  DescribeCertificateRequest$,
  DescribeCertificateResponse$,
  DescribeConnector$,
  DescribeConnectorCommand,
  DescribeConnectorRequest$,
  DescribeConnectorResponse$,
  DescribedAccess$,
  DescribedAgreement$,
  DescribedCertificate$,
  DescribedConnector$,
  DescribedConnectorEgressConfig$,
  DescribedConnectorVpcLatticeEgressConfig$,
  DescribedExecution$,
  DescribedHostKey$,
  DescribedIdentityCenterConfig$,
  DescribedProfile$,
  DescribedSecurityPolicy$,
  DescribedServer$,
  DescribedUser$,
  DescribedWebApp$,
  DescribedWebAppCustomization$,
  DescribedWebAppEndpointDetails$,
  DescribedWebAppIdentityProviderDetails$,
  DescribedWebAppVpcConfig$,
  DescribedWorkflow$,
  DescribeExecution$,
  DescribeExecutionCommand,
  DescribeExecutionRequest$,
  DescribeExecutionResponse$,
  DescribeHostKey$,
  DescribeHostKeyCommand,
  DescribeHostKeyRequest$,
  DescribeHostKeyResponse$,
  DescribeProfile$,
  DescribeProfileCommand,
  DescribeProfileRequest$,
  DescribeProfileResponse$,
  DescribeSecurityPolicy$,
  DescribeSecurityPolicyCommand,
  DescribeSecurityPolicyRequest$,
  DescribeSecurityPolicyResponse$,
  DescribeServer$,
  DescribeServerCommand,
  DescribeServerRequest$,
  DescribeServerResponse$,
  DescribeUser$,
  DescribeUserCommand,
  DescribeUserRequest$,
  DescribeUserResponse$,
  DescribeWebApp$,
  DescribeWebAppCommand,
  DescribeWebAppCustomization$,
  DescribeWebAppCustomizationCommand,
  DescribeWebAppCustomizationRequest$,
  DescribeWebAppCustomizationResponse$,
  DescribeWebAppRequest$,
  DescribeWebAppResponse$,
  DescribeWorkflow$,
  DescribeWorkflowCommand,
  DescribeWorkflowRequest$,
  DescribeWorkflowResponse$,
  DirectoryListingOptimization,
  Domain,
  EfsFileLocation$,
  EncryptionAlg,
  EncryptionType,
  EndpointDetails$,
  EndpointType,
  EnforceMessageSigningType,
  ExecutionError$,
  ExecutionErrorType,
  ExecutionResults$,
  ExecutionStatus,
  ExecutionStepResult$,
  FileLocation$,
  HomeDirectoryMapEntry$,
  HomeDirectoryType,
  IdentityCenterConfig$,
  IdentityProviderDetails$,
  IdentityProviderType,
  ImportCertificate$,
  ImportCertificateCommand,
  ImportCertificateRequest$,
  ImportCertificateResponse$,
  ImportHostKey$,
  ImportHostKeyCommand,
  ImportHostKeyRequest$,
  ImportHostKeyResponse$,
  ImportSshPublicKey$,
  ImportSshPublicKeyCommand,
  ImportSshPublicKeyRequest$,
  ImportSshPublicKeyResponse$,
  InputFileLocation$,
  InternalServiceError,
  InternalServiceError$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidRequestException,
  InvalidRequestException$,
  IpAddressType,
  ListAccesses$,
  ListAccessesCommand,
  ListAccessesRequest$,
  ListAccessesResponse$,
  ListAgreements$,
  ListAgreementsCommand,
  ListAgreementsRequest$,
  ListAgreementsResponse$,
  ListCertificates$,
  ListCertificatesCommand,
  ListCertificatesRequest$,
  ListCertificatesResponse$,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsRequest$,
  ListConnectorsResponse$,
  ListedAccess$,
  ListedAgreement$,
  ListedCertificate$,
  ListedConnector$,
  ListedExecution$,
  ListedHostKey$,
  ListedProfile$,
  ListedServer$,
  ListedUser$,
  ListedWebApp$,
  ListedWorkflow$,
  ListExecutions$,
  ListExecutionsCommand,
  ListExecutionsRequest$,
  ListExecutionsResponse$,
  ListFileTransferResults$,
  ListFileTransferResultsCommand,
  ListFileTransferResultsRequest$,
  ListFileTransferResultsResponse$,
  ListHostKeys$,
  ListHostKeysCommand,
  ListHostKeysRequest$,
  ListHostKeysResponse$,
  ListProfiles$,
  ListProfilesCommand,
  ListProfilesRequest$,
  ListProfilesResponse$,
  ListSecurityPolicies$,
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesRequest$,
  ListSecurityPoliciesResponse$,
  ListServers$,
  ListServersCommand,
  ListServersRequest$,
  ListServersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  ListWebApps$,
  ListWebAppsCommand,
  ListWebAppsRequest$,
  ListWebAppsResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  LoggingConfiguration$,
  MapType,
  MdnResponse,
  MdnSigningAlg,
  OverwriteExisting,
  paginateListAccesses,
  paginateListAgreements,
  paginateListCertificates,
  paginateListConnectors,
  paginateListExecutions,
  paginateListFileTransferResults,
  paginateListProfiles,
  paginateListSecurityPolicies,
  paginateListServers,
  paginateListTagsForResource,
  paginateListUsers,
  paginateListWebApps,
  paginateListWorkflows,
  PosixProfile$,
  PreserveContentType,
  PreserveFilenameType,
  ProfileType,
  Protocol,
  ProtocolDetails$,
  ResourceExistsException,
  ResourceExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3FileLocation$,
  S3InputFileLocation$,
  S3StorageOptions$,
  S3Tag$,
  SecurityPolicyProtocol,
  SecurityPolicyResourceType,
  SendWorkflowStepState$,
  SendWorkflowStepStateCommand,
  SendWorkflowStepStateRequest$,
  SendWorkflowStepStateResponse$,
  ServiceMetadata$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SetStatOption,
  SftpAuthenticationMethods,
  SftpConnectorConfig$,
  SftpConnectorConnectionDetails$,
  SigningAlg,
  SshPublicKey$,
  StartDirectoryListing$,
  StartDirectoryListingCommand,
  StartDirectoryListingRequest$,
  StartDirectoryListingResponse$,
  StartFileTransfer$,
  StartFileTransferCommand,
  StartFileTransferRequest$,
  StartFileTransferResponse$,
  StartRemoteDelete$,
  StartRemoteDeleteCommand,
  StartRemoteDeleteRequest$,
  StartRemoteDeleteResponse$,
  StartRemoteMove$,
  StartRemoteMoveCommand,
  StartRemoteMoveRequest$,
  StartRemoteMoveResponse$,
  StartServer$,
  StartServerCommand,
  StartServerRequest$,
  State,
  StopServer$,
  StopServerCommand,
  StopServerRequest$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagStepDetails$,
  TestConnection$,
  TestConnectionCommand,
  TestConnectionRequest$,
  TestConnectionResponse$,
  TestIdentityProvider$,
  TestIdentityProviderCommand,
  TestIdentityProviderRequest$,
  TestIdentityProviderResponse$,
  ThrottlingException,
  ThrottlingException$,
  TlsSessionResumptionMode,
  Transfer,
  TransferClient,
  TransferServiceException,
  TransferTableStatus,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAccess$,
  UpdateAccessCommand,
  UpdateAccessRequest$,
  UpdateAccessResponse$,
  UpdateAgreement$,
  UpdateAgreementCommand,
  UpdateAgreementRequest$,
  UpdateAgreementResponse$,
  UpdateCertificate$,
  UpdateCertificateCommand,
  UpdateCertificateRequest$,
  UpdateCertificateResponse$,
  UpdateConnector$,
  UpdateConnectorCommand,
  UpdateConnectorEgressConfig$,
  UpdateConnectorRequest$,
  UpdateConnectorResponse$,
  UpdateConnectorVpcLatticeEgressConfig$,
  UpdateHostKey$,
  UpdateHostKeyCommand,
  UpdateHostKeyRequest$,
  UpdateHostKeyResponse$,
  UpdateProfile$,
  UpdateProfileCommand,
  UpdateProfileRequest$,
  UpdateProfileResponse$,
  UpdateServer$,
  UpdateServerCommand,
  UpdateServerRequest$,
  UpdateServerResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  UpdateWebApp$,
  UpdateWebAppCommand,
  UpdateWebAppCustomization$,
  UpdateWebAppCustomizationCommand,
  UpdateWebAppCustomizationRequest$,
  UpdateWebAppCustomizationResponse$,
  UpdateWebAppEndpointDetails$,
  UpdateWebAppIdentityCenterConfig$,
  UpdateWebAppIdentityProviderDetails$,
  UpdateWebAppRequest$,
  UpdateWebAppResponse$,
  UpdateWebAppVpcConfig$,
  UserDetails$,
  waitForServerOffline,
  waitForServerOnline,
  waitUntilServerOffline,
  waitUntilServerOnline,
  WebAppEndpointDetails$,
  WebAppEndpointPolicy,
  WebAppEndpointType,
  WebAppIdentityProviderDetails$,
  WebAppUnits$,
  WebAppVpcConfig$,
  WorkflowDetail$,
  WorkflowDetails$,
  WorkflowStep$,
  WorkflowStepType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TransferClient === "function");
assert(typeof Transfer === "function");
// commands
assert(typeof CreateAccessCommand === "function");
assert(typeof CreateAccess$ === "object");
assert(typeof CreateAgreementCommand === "function");
assert(typeof CreateAgreement$ === "object");
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateConnector$ === "object");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateProfile$ === "object");
assert(typeof CreateServerCommand === "function");
assert(typeof CreateServer$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof CreateWebAppCommand === "function");
assert(typeof CreateWebApp$ === "object");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflow$ === "object");
assert(typeof DeleteAccessCommand === "function");
assert(typeof DeleteAccess$ === "object");
assert(typeof DeleteAgreementCommand === "function");
assert(typeof DeleteAgreement$ === "object");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificate$ === "object");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteConnector$ === "object");
assert(typeof DeleteHostKeyCommand === "function");
assert(typeof DeleteHostKey$ === "object");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfile$ === "object");
assert(typeof DeleteServerCommand === "function");
assert(typeof DeleteServer$ === "object");
assert(typeof DeleteSshPublicKeyCommand === "function");
assert(typeof DeleteSshPublicKey$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeleteWebAppCommand === "function");
assert(typeof DeleteWebApp$ === "object");
assert(typeof DeleteWebAppCustomizationCommand === "function");
assert(typeof DeleteWebAppCustomization$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof DescribeAccessCommand === "function");
assert(typeof DescribeAccess$ === "object");
assert(typeof DescribeAgreementCommand === "function");
assert(typeof DescribeAgreement$ === "object");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeCertificate$ === "object");
assert(typeof DescribeConnectorCommand === "function");
assert(typeof DescribeConnector$ === "object");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeExecution$ === "object");
assert(typeof DescribeHostKeyCommand === "function");
assert(typeof DescribeHostKey$ === "object");
assert(typeof DescribeProfileCommand === "function");
assert(typeof DescribeProfile$ === "object");
assert(typeof DescribeSecurityPolicyCommand === "function");
assert(typeof DescribeSecurityPolicy$ === "object");
assert(typeof DescribeServerCommand === "function");
assert(typeof DescribeServer$ === "object");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeUser$ === "object");
assert(typeof DescribeWebAppCommand === "function");
assert(typeof DescribeWebApp$ === "object");
assert(typeof DescribeWebAppCustomizationCommand === "function");
assert(typeof DescribeWebAppCustomization$ === "object");
assert(typeof DescribeWorkflowCommand === "function");
assert(typeof DescribeWorkflow$ === "object");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ImportCertificate$ === "object");
assert(typeof ImportHostKeyCommand === "function");
assert(typeof ImportHostKey$ === "object");
assert(typeof ImportSshPublicKeyCommand === "function");
assert(typeof ImportSshPublicKey$ === "object");
assert(typeof ListAccessesCommand === "function");
assert(typeof ListAccesses$ === "object");
assert(typeof ListAgreementsCommand === "function");
assert(typeof ListAgreements$ === "object");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListCertificates$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExecutions$ === "object");
assert(typeof ListFileTransferResultsCommand === "function");
assert(typeof ListFileTransferResults$ === "object");
assert(typeof ListHostKeysCommand === "function");
assert(typeof ListHostKeys$ === "object");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListProfiles$ === "object");
assert(typeof ListSecurityPoliciesCommand === "function");
assert(typeof ListSecurityPolicies$ === "object");
assert(typeof ListServersCommand === "function");
assert(typeof ListServers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof ListWebAppsCommand === "function");
assert(typeof ListWebApps$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof SendWorkflowStepStateCommand === "function");
assert(typeof SendWorkflowStepState$ === "object");
assert(typeof StartDirectoryListingCommand === "function");
assert(typeof StartDirectoryListing$ === "object");
assert(typeof StartFileTransferCommand === "function");
assert(typeof StartFileTransfer$ === "object");
assert(typeof StartRemoteDeleteCommand === "function");
assert(typeof StartRemoteDelete$ === "object");
assert(typeof StartRemoteMoveCommand === "function");
assert(typeof StartRemoteMove$ === "object");
assert(typeof StartServerCommand === "function");
assert(typeof StartServer$ === "object");
assert(typeof StopServerCommand === "function");
assert(typeof StopServer$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestConnectionCommand === "function");
assert(typeof TestConnection$ === "object");
assert(typeof TestIdentityProviderCommand === "function");
assert(typeof TestIdentityProvider$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessCommand === "function");
assert(typeof UpdateAccess$ === "object");
assert(typeof UpdateAgreementCommand === "function");
assert(typeof UpdateAgreement$ === "object");
assert(typeof UpdateCertificateCommand === "function");
assert(typeof UpdateCertificate$ === "object");
assert(typeof UpdateConnectorCommand === "function");
assert(typeof UpdateConnector$ === "object");
assert(typeof UpdateHostKeyCommand === "function");
assert(typeof UpdateHostKey$ === "object");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateProfile$ === "object");
assert(typeof UpdateServerCommand === "function");
assert(typeof UpdateServer$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
assert(typeof UpdateWebAppCommand === "function");
assert(typeof UpdateWebApp$ === "object");
assert(typeof UpdateWebAppCustomizationCommand === "function");
assert(typeof UpdateWebAppCustomization$ === "object");
// structural schemas
assert(typeof As2ConnectorConfig$ === "object");
assert(typeof ConnectorEgressConfig$ === "object");
assert(typeof ConnectorFileTransferResult$ === "object");
assert(typeof ConnectorVpcLatticeEgressConfig$ === "object");
assert(typeof CopyStepDetails$ === "object");
assert(typeof CreateAccessRequest$ === "object");
assert(typeof CreateAccessResponse$ === "object");
assert(typeof CreateAgreementRequest$ === "object");
assert(typeof CreateAgreementResponse$ === "object");
assert(typeof CreateConnectorRequest$ === "object");
assert(typeof CreateConnectorResponse$ === "object");
assert(typeof CreateProfileRequest$ === "object");
assert(typeof CreateProfileResponse$ === "object");
assert(typeof CreateServerRequest$ === "object");
assert(typeof CreateServerResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof CreateWebAppRequest$ === "object");
assert(typeof CreateWebAppResponse$ === "object");
assert(typeof CreateWorkflowRequest$ === "object");
assert(typeof CreateWorkflowResponse$ === "object");
assert(typeof CustomDirectoriesType$ === "object");
assert(typeof CustomStepDetails$ === "object");
assert(typeof DecryptStepDetails$ === "object");
assert(typeof DeleteAccessRequest$ === "object");
assert(typeof DeleteAgreementRequest$ === "object");
assert(typeof DeleteCertificateRequest$ === "object");
assert(typeof DeleteConnectorRequest$ === "object");
assert(typeof DeleteHostKeyRequest$ === "object");
assert(typeof DeleteProfileRequest$ === "object");
assert(typeof DeleteServerRequest$ === "object");
assert(typeof DeleteSshPublicKeyRequest$ === "object");
assert(typeof DeleteStepDetails$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteWebAppCustomizationRequest$ === "object");
assert(typeof DeleteWebAppRequest$ === "object");
assert(typeof DeleteWorkflowRequest$ === "object");
assert(typeof DescribeAccessRequest$ === "object");
assert(typeof DescribeAccessResponse$ === "object");
assert(typeof DescribeAgreementRequest$ === "object");
assert(typeof DescribeAgreementResponse$ === "object");
assert(typeof DescribeCertificateRequest$ === "object");
assert(typeof DescribeCertificateResponse$ === "object");
assert(typeof DescribeConnectorRequest$ === "object");
assert(typeof DescribeConnectorResponse$ === "object");
assert(typeof DescribedAccess$ === "object");
assert(typeof DescribedAgreement$ === "object");
assert(typeof DescribedCertificate$ === "object");
assert(typeof DescribedConnector$ === "object");
assert(typeof DescribedConnectorEgressConfig$ === "object");
assert(typeof DescribedConnectorVpcLatticeEgressConfig$ === "object");
assert(typeof DescribedExecution$ === "object");
assert(typeof DescribedHostKey$ === "object");
assert(typeof DescribedIdentityCenterConfig$ === "object");
assert(typeof DescribedProfile$ === "object");
assert(typeof DescribedSecurityPolicy$ === "object");
assert(typeof DescribedServer$ === "object");
assert(typeof DescribedUser$ === "object");
assert(typeof DescribedWebApp$ === "object");
assert(typeof DescribedWebAppCustomization$ === "object");
assert(typeof DescribedWebAppEndpointDetails$ === "object");
assert(typeof DescribedWebAppIdentityProviderDetails$ === "object");
assert(typeof DescribedWebAppVpcConfig$ === "object");
assert(typeof DescribedWorkflow$ === "object");
assert(typeof DescribeExecutionRequest$ === "object");
assert(typeof DescribeExecutionResponse$ === "object");
assert(typeof DescribeHostKeyRequest$ === "object");
assert(typeof DescribeHostKeyResponse$ === "object");
assert(typeof DescribeProfileRequest$ === "object");
assert(typeof DescribeProfileResponse$ === "object");
assert(typeof DescribeSecurityPolicyRequest$ === "object");
assert(typeof DescribeSecurityPolicyResponse$ === "object");
assert(typeof DescribeServerRequest$ === "object");
assert(typeof DescribeServerResponse$ === "object");
assert(typeof DescribeUserRequest$ === "object");
assert(typeof DescribeUserResponse$ === "object");
assert(typeof DescribeWebAppCustomizationRequest$ === "object");
assert(typeof DescribeWebAppCustomizationResponse$ === "object");
assert(typeof DescribeWebAppRequest$ === "object");
assert(typeof DescribeWebAppResponse$ === "object");
assert(typeof DescribeWorkflowRequest$ === "object");
assert(typeof DescribeWorkflowResponse$ === "object");
assert(typeof EfsFileLocation$ === "object");
assert(typeof EndpointDetails$ === "object");
assert(typeof ExecutionError$ === "object");
assert(typeof ExecutionResults$ === "object");
assert(typeof ExecutionStepResult$ === "object");
assert(typeof FileLocation$ === "object");
assert(typeof HomeDirectoryMapEntry$ === "object");
assert(typeof IdentityCenterConfig$ === "object");
assert(typeof IdentityProviderDetails$ === "object");
assert(typeof ImportCertificateRequest$ === "object");
assert(typeof ImportCertificateResponse$ === "object");
assert(typeof ImportHostKeyRequest$ === "object");
assert(typeof ImportHostKeyResponse$ === "object");
assert(typeof ImportSshPublicKeyRequest$ === "object");
assert(typeof ImportSshPublicKeyResponse$ === "object");
assert(typeof InputFileLocation$ === "object");
assert(typeof ListAccessesRequest$ === "object");
assert(typeof ListAccessesResponse$ === "object");
assert(typeof ListAgreementsRequest$ === "object");
assert(typeof ListAgreementsResponse$ === "object");
assert(typeof ListCertificatesRequest$ === "object");
assert(typeof ListCertificatesResponse$ === "object");
assert(typeof ListConnectorsRequest$ === "object");
assert(typeof ListConnectorsResponse$ === "object");
assert(typeof ListedAccess$ === "object");
assert(typeof ListedAgreement$ === "object");
assert(typeof ListedCertificate$ === "object");
assert(typeof ListedConnector$ === "object");
assert(typeof ListedExecution$ === "object");
assert(typeof ListedHostKey$ === "object");
assert(typeof ListedProfile$ === "object");
assert(typeof ListedServer$ === "object");
assert(typeof ListedUser$ === "object");
assert(typeof ListedWebApp$ === "object");
assert(typeof ListedWorkflow$ === "object");
assert(typeof ListExecutionsRequest$ === "object");
assert(typeof ListExecutionsResponse$ === "object");
assert(typeof ListFileTransferResultsRequest$ === "object");
assert(typeof ListFileTransferResultsResponse$ === "object");
assert(typeof ListHostKeysRequest$ === "object");
assert(typeof ListHostKeysResponse$ === "object");
assert(typeof ListProfilesRequest$ === "object");
assert(typeof ListProfilesResponse$ === "object");
assert(typeof ListSecurityPoliciesRequest$ === "object");
assert(typeof ListSecurityPoliciesResponse$ === "object");
assert(typeof ListServersRequest$ === "object");
assert(typeof ListServersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof ListWebAppsRequest$ === "object");
assert(typeof ListWebAppsResponse$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof PosixProfile$ === "object");
assert(typeof ProtocolDetails$ === "object");
assert(typeof S3FileLocation$ === "object");
assert(typeof S3InputFileLocation$ === "object");
assert(typeof S3StorageOptions$ === "object");
assert(typeof S3Tag$ === "object");
assert(typeof SendWorkflowStepStateRequest$ === "object");
assert(typeof SendWorkflowStepStateResponse$ === "object");
assert(typeof ServiceMetadata$ === "object");
assert(typeof SftpConnectorConfig$ === "object");
assert(typeof SftpConnectorConnectionDetails$ === "object");
assert(typeof SshPublicKey$ === "object");
assert(typeof StartDirectoryListingRequest$ === "object");
assert(typeof StartDirectoryListingResponse$ === "object");
assert(typeof StartFileTransferRequest$ === "object");
assert(typeof StartFileTransferResponse$ === "object");
assert(typeof StartRemoteDeleteRequest$ === "object");
assert(typeof StartRemoteDeleteResponse$ === "object");
assert(typeof StartRemoteMoveRequest$ === "object");
assert(typeof StartRemoteMoveResponse$ === "object");
assert(typeof StartServerRequest$ === "object");
assert(typeof StopServerRequest$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagStepDetails$ === "object");
assert(typeof TestConnectionRequest$ === "object");
assert(typeof TestConnectionResponse$ === "object");
assert(typeof TestIdentityProviderRequest$ === "object");
assert(typeof TestIdentityProviderResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAccessRequest$ === "object");
assert(typeof UpdateAccessResponse$ === "object");
assert(typeof UpdateAgreementRequest$ === "object");
assert(typeof UpdateAgreementResponse$ === "object");
assert(typeof UpdateCertificateRequest$ === "object");
assert(typeof UpdateCertificateResponse$ === "object");
assert(typeof UpdateConnectorEgressConfig$ === "object");
assert(typeof UpdateConnectorRequest$ === "object");
assert(typeof UpdateConnectorResponse$ === "object");
assert(typeof UpdateConnectorVpcLatticeEgressConfig$ === "object");
assert(typeof UpdateHostKeyRequest$ === "object");
assert(typeof UpdateHostKeyResponse$ === "object");
assert(typeof UpdateProfileRequest$ === "object");
assert(typeof UpdateProfileResponse$ === "object");
assert(typeof UpdateServerRequest$ === "object");
assert(typeof UpdateServerResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof UpdateWebAppCustomizationRequest$ === "object");
assert(typeof UpdateWebAppCustomizationResponse$ === "object");
assert(typeof UpdateWebAppEndpointDetails$ === "object");
assert(typeof UpdateWebAppIdentityCenterConfig$ === "object");
assert(typeof UpdateWebAppIdentityProviderDetails$ === "object");
assert(typeof UpdateWebAppRequest$ === "object");
assert(typeof UpdateWebAppResponse$ === "object");
assert(typeof UpdateWebAppVpcConfig$ === "object");
assert(typeof UserDetails$ === "object");
assert(typeof WebAppEndpointDetails$ === "object");
assert(typeof WebAppIdentityProviderDetails$ === "object");
assert(typeof WebAppUnits$ === "object");
assert(typeof WebAppVpcConfig$ === "object");
assert(typeof WorkflowDetail$ === "object");
assert(typeof WorkflowDetails$ === "object");
assert(typeof WorkflowStep$ === "object");
// enums
assert(typeof AgreementStatusType === "object");
assert(typeof As2Transport === "object");
assert(typeof CertificateStatusType === "object");
assert(typeof CertificateType === "object");
assert(typeof CertificateUsageType === "object");
assert(typeof CompressionEnum === "object");
assert(typeof ConnectorEgressType === "object");
assert(typeof ConnectorStatus === "object");
assert(typeof CustomStepStatus === "object");
assert(typeof DirectoryListingOptimization === "object");
assert(typeof Domain === "object");
assert(typeof EncryptionAlg === "object");
assert(typeof EncryptionType === "object");
assert(typeof EndpointType === "object");
assert(typeof EnforceMessageSigningType === "object");
assert(typeof ExecutionErrorType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof HomeDirectoryType === "object");
assert(typeof IdentityProviderType === "object");
assert(typeof IpAddressType === "object");
assert(typeof MapType === "object");
assert(typeof MdnResponse === "object");
assert(typeof MdnSigningAlg === "object");
assert(typeof OverwriteExisting === "object");
assert(typeof PreserveContentType === "object");
assert(typeof PreserveFilenameType === "object");
assert(typeof ProfileType === "object");
assert(typeof Protocol === "object");
assert(typeof SecurityPolicyProtocol === "object");
assert(typeof SecurityPolicyResourceType === "object");
assert(typeof SetStatOption === "object");
assert(typeof SftpAuthenticationMethods === "object");
assert(typeof SigningAlg === "object");
assert(typeof State === "object");
assert(typeof TlsSessionResumptionMode === "object");
assert(typeof TransferTableStatus === "object");
assert(typeof WebAppEndpointPolicy === "object");
assert(typeof WebAppEndpointType === "object");
assert(typeof WorkflowStepType === "object");
// errors
assert(AccessDeniedException.prototype instanceof TransferServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof TransferServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceError.prototype instanceof TransferServiceException);
assert(typeof InternalServiceError$ === "object");
assert(InvalidNextTokenException.prototype instanceof TransferServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidRequestException.prototype instanceof TransferServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceExistsException.prototype instanceof TransferServiceException);
assert(typeof ResourceExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TransferServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof TransferServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof TransferServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TransferServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForServerOffline === "function");
assert(typeof waitForServerOnline === "function");
assert(typeof waitUntilServerOffline === "function");
assert(typeof waitUntilServerOnline === "function");
// paginators
assert(typeof paginateListAccesses === "function");
assert(typeof paginateListAgreements === "function");
assert(typeof paginateListCertificates === "function");
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListFileTransferResults === "function");
assert(typeof paginateListProfiles === "function");
assert(typeof paginateListSecurityPolicies === "function");
assert(typeof paginateListServers === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateListWebApps === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`Transfer index test passed.`);
