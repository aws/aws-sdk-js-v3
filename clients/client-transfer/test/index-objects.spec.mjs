import {
  AgreementStatusType,
  As2Transport,
  CertificateStatusType,
  CertificateType,
  CertificateUsageType,
  CompressionEnum,
  ConnectorEgressType,
  ConnectorStatus,
  CreateAccessCommand,
  CreateAgreementCommand,
  CreateConnectorCommand,
  CreateProfileCommand,
  CreateServerCommand,
  CreateUserCommand,
  CreateWebAppCommand,
  CreateWorkflowCommand,
  CustomStepStatus,
  DeleteAccessCommand,
  DeleteAgreementCommand,
  DeleteCertificateCommand,
  DeleteConnectorCommand,
  DeleteHostKeyCommand,
  DeleteProfileCommand,
  DeleteServerCommand,
  DeleteSshPublicKeyCommand,
  DeleteUserCommand,
  DeleteWebAppCommand,
  DeleteWebAppCustomizationCommand,
  DeleteWorkflowCommand,
  DescribeAccessCommand,
  DescribeAgreementCommand,
  DescribeCertificateCommand,
  DescribeConnectorCommand,
  DescribeExecutionCommand,
  DescribeHostKeyCommand,
  DescribeProfileCommand,
  DescribeSecurityPolicyCommand,
  DescribeServerCommand,
  DescribeUserCommand,
  DescribeWebAppCommand,
  DescribeWebAppCustomizationCommand,
  DescribeWorkflowCommand,
  DirectoryListingOptimization,
  Domain,
  EncryptionAlg,
  EncryptionType,
  EndpointType,
  EnforceMessageSigningType,
  ExecutionErrorType,
  ExecutionStatus,
  HomeDirectoryType,
  IdentityProviderType,
  ImportCertificateCommand,
  ImportHostKeyCommand,
  ImportSshPublicKeyCommand,
  IpAddressType,
  ListAccessesCommand,
  ListAgreementsCommand,
  ListCertificatesCommand,
  ListConnectorsCommand,
  ListExecutionsCommand,
  ListFileTransferResultsCommand,
  ListHostKeysCommand,
  ListProfilesCommand,
  ListSecurityPoliciesCommand,
  ListServersCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  ListWebAppsCommand,
  ListWorkflowsCommand,
  MapType,
  MdnResponse,
  MdnSigningAlg,
  OverwriteExisting,
  PreserveContentType,
  PreserveFilenameType,
  ProfileType,
  Protocol,
  SecurityPolicyProtocol,
  SecurityPolicyResourceType,
  SendWorkflowStepStateCommand,
  SetStatOption,
  SftpAuthenticationMethods,
  SigningAlg,
  StartDirectoryListingCommand,
  StartFileTransferCommand,
  StartRemoteDeleteCommand,
  StartRemoteMoveCommand,
  StartServerCommand,
  State,
  StopServerCommand,
  TagResourceCommand,
  TestConnectionCommand,
  TestIdentityProviderCommand,
  TlsSessionResumptionMode,
  Transfer,
  TransferClient,
  TransferServiceException,
  TransferTableStatus,
  UntagResourceCommand,
  UpdateAccessCommand,
  UpdateAgreementCommand,
  UpdateCertificateCommand,
  UpdateConnectorCommand,
  UpdateHostKeyCommand,
  UpdateProfileCommand,
  UpdateServerCommand,
  UpdateUserCommand,
  UpdateWebAppCommand,
  UpdateWebAppCustomizationCommand,
  WebAppEndpointPolicy,
  WebAppEndpointType,
  WorkflowStepType,
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
  waitForServerOffline,
  waitForServerOnline,
  waitUntilServerOffline,
  waitUntilServerOnline,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TransferClient === "function");
assert(typeof Transfer === "function");
// commands
assert(typeof CreateAccessCommand === "function");
assert(typeof CreateAgreementCommand === "function");
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateServerCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateWebAppCommand === "function");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof DeleteAccessCommand === "function");
assert(typeof DeleteAgreementCommand === "function");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteHostKeyCommand === "function");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteServerCommand === "function");
assert(typeof DeleteSshPublicKeyCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteWebAppCommand === "function");
assert(typeof DeleteWebAppCustomizationCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DescribeAccessCommand === "function");
assert(typeof DescribeAgreementCommand === "function");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeConnectorCommand === "function");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeHostKeyCommand === "function");
assert(typeof DescribeProfileCommand === "function");
assert(typeof DescribeSecurityPolicyCommand === "function");
assert(typeof DescribeServerCommand === "function");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeWebAppCommand === "function");
assert(typeof DescribeWebAppCustomizationCommand === "function");
assert(typeof DescribeWorkflowCommand === "function");
assert(typeof ImportCertificateCommand === "function");
assert(typeof ImportHostKeyCommand === "function");
assert(typeof ImportSshPublicKeyCommand === "function");
assert(typeof ListAccessesCommand === "function");
assert(typeof ListAgreementsCommand === "function");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListFileTransferResultsCommand === "function");
assert(typeof ListHostKeysCommand === "function");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListSecurityPoliciesCommand === "function");
assert(typeof ListServersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof ListWebAppsCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof SendWorkflowStepStateCommand === "function");
assert(typeof StartDirectoryListingCommand === "function");
assert(typeof StartFileTransferCommand === "function");
assert(typeof StartRemoteDeleteCommand === "function");
assert(typeof StartRemoteMoveCommand === "function");
assert(typeof StartServerCommand === "function");
assert(typeof StopServerCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestConnectionCommand === "function");
assert(typeof TestIdentityProviderCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccessCommand === "function");
assert(typeof UpdateAgreementCommand === "function");
assert(typeof UpdateCertificateCommand === "function");
assert(typeof UpdateConnectorCommand === "function");
assert(typeof UpdateHostKeyCommand === "function");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateServerCommand === "function");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateWebAppCommand === "function");
assert(typeof UpdateWebAppCustomizationCommand === "function");
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
