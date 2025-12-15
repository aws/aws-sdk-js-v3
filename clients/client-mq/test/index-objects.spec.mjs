import {
  ActionRequired$,
  AuthenticationStrategy,
  AvailabilityZone$,
  BadRequestException,
  BadRequestException$,
  BrokerEngineType$,
  BrokerInstance$,
  BrokerInstanceOption$,
  BrokerState,
  BrokerStorageType,
  BrokerSummary$,
  ChangeType,
  Configuration$,
  ConfigurationId$,
  ConfigurationRevision$,
  Configurations$,
  ConflictException,
  ConflictException$,
  CreateBroker$,
  CreateBrokerCommand,
  CreateBrokerRequest$,
  CreateBrokerResponse$,
  CreateConfiguration$,
  CreateConfigurationCommand,
  CreateConfigurationRequest$,
  CreateConfigurationResponse$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsRequest$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  DataReplicationCounterpart$,
  DataReplicationMetadataOutput$,
  DataReplicationMode,
  DayOfWeek,
  DeleteBroker$,
  DeleteBrokerCommand,
  DeleteBrokerRequest$,
  DeleteBrokerResponse$,
  DeleteConfiguration$,
  DeleteConfigurationCommand,
  DeleteConfigurationRequest$,
  DeleteConfigurationResponse$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsRequest$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResponse$,
  DeploymentMode,
  DescribeBroker$,
  DescribeBrokerCommand,
  DescribeBrokerEngineTypes$,
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerEngineTypesRequest$,
  DescribeBrokerEngineTypesResponse$,
  DescribeBrokerInstanceOptions$,
  DescribeBrokerInstanceOptionsCommand,
  DescribeBrokerInstanceOptionsRequest$,
  DescribeBrokerInstanceOptionsResponse$,
  DescribeBrokerRequest$,
  DescribeBrokerResponse$,
  DescribeConfiguration$,
  DescribeConfigurationCommand,
  DescribeConfigurationRequest$,
  DescribeConfigurationResponse$,
  DescribeConfigurationRevision$,
  DescribeConfigurationRevisionCommand,
  DescribeConfigurationRevisionRequest$,
  DescribeConfigurationRevisionResponse$,
  DescribeUser$,
  DescribeUserCommand,
  DescribeUserRequest$,
  DescribeUserResponse$,
  EncryptionOptions$,
  EngineType,
  EngineVersion$,
  ForbiddenException,
  ForbiddenException$,
  InternalServerErrorException,
  InternalServerErrorException$,
  LdapServerMetadataInput$,
  LdapServerMetadataOutput$,
  ListBrokers$,
  ListBrokersCommand,
  ListBrokersRequest$,
  ListBrokersResponse$,
  ListConfigurationRevisions$,
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsRequest$,
  ListConfigurationRevisionsResponse$,
  ListConfigurations$,
  ListConfigurationsCommand,
  ListConfigurationsRequest$,
  ListConfigurationsResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  Logs$,
  LogsSummary$,
  Mq,
  MqClient,
  MqServiceException,
  NotFoundException,
  NotFoundException$,
  PendingLogs$,
  Promote$,
  PromoteCommand,
  PromoteMode,
  PromoteRequest$,
  PromoteResponse$,
  RebootBroker$,
  RebootBrokerCommand,
  RebootBrokerRequest$,
  RebootBrokerResponse$,
  SanitizationWarning$,
  SanitizationWarningReason,
  UnauthorizedException,
  UnauthorizedException$,
  UpdateBroker$,
  UpdateBrokerCommand,
  UpdateBrokerRequest$,
  UpdateBrokerResponse$,
  UpdateConfiguration$,
  UpdateConfigurationCommand,
  UpdateConfigurationRequest$,
  UpdateConfigurationResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  User$,
  UserPendingChanges$,
  UserSummary$,
  WeeklyStartTime$,
  paginateListBrokers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MqClient === "function");
assert(typeof Mq === "function");
// commands
assert(typeof CreateBrokerCommand === "function");
assert(typeof CreateBroker$ === "object");
assert(typeof CreateConfigurationCommand === "function");
assert(typeof CreateConfiguration$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteBrokerCommand === "function");
assert(typeof DeleteBroker$ === "object");
assert(typeof DeleteConfigurationCommand === "function");
assert(typeof DeleteConfiguration$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeBrokerCommand === "function");
assert(typeof DescribeBroker$ === "object");
assert(typeof DescribeBrokerEngineTypesCommand === "function");
assert(typeof DescribeBrokerEngineTypes$ === "object");
assert(typeof DescribeBrokerInstanceOptionsCommand === "function");
assert(typeof DescribeBrokerInstanceOptions$ === "object");
assert(typeof DescribeConfigurationCommand === "function");
assert(typeof DescribeConfiguration$ === "object");
assert(typeof DescribeConfigurationRevisionCommand === "function");
assert(typeof DescribeConfigurationRevision$ === "object");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeUser$ === "object");
assert(typeof ListBrokersCommand === "function");
assert(typeof ListBrokers$ === "object");
assert(typeof ListConfigurationRevisionsCommand === "function");
assert(typeof ListConfigurationRevisions$ === "object");
assert(typeof ListConfigurationsCommand === "function");
assert(typeof ListConfigurations$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof PromoteCommand === "function");
assert(typeof Promote$ === "object");
assert(typeof RebootBrokerCommand === "function");
assert(typeof RebootBroker$ === "object");
assert(typeof UpdateBrokerCommand === "function");
assert(typeof UpdateBroker$ === "object");
assert(typeof UpdateConfigurationCommand === "function");
assert(typeof UpdateConfiguration$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof ActionRequired$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof BrokerEngineType$ === "object");
assert(typeof BrokerInstance$ === "object");
assert(typeof BrokerInstanceOption$ === "object");
assert(typeof BrokerSummary$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationId$ === "object");
assert(typeof ConfigurationRevision$ === "object");
assert(typeof Configurations$ === "object");
assert(typeof CreateBrokerRequest$ === "object");
assert(typeof CreateBrokerResponse$ === "object");
assert(typeof CreateConfigurationRequest$ === "object");
assert(typeof CreateConfigurationResponse$ === "object");
assert(typeof CreateTagsRequest$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof DataReplicationCounterpart$ === "object");
assert(typeof DataReplicationMetadataOutput$ === "object");
assert(typeof DeleteBrokerRequest$ === "object");
assert(typeof DeleteBrokerResponse$ === "object");
assert(typeof DeleteConfigurationRequest$ === "object");
assert(typeof DeleteConfigurationResponse$ === "object");
assert(typeof DeleteTagsRequest$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResponse$ === "object");
assert(typeof DescribeBrokerEngineTypesRequest$ === "object");
assert(typeof DescribeBrokerEngineTypesResponse$ === "object");
assert(typeof DescribeBrokerInstanceOptionsRequest$ === "object");
assert(typeof DescribeBrokerInstanceOptionsResponse$ === "object");
assert(typeof DescribeBrokerRequest$ === "object");
assert(typeof DescribeBrokerResponse$ === "object");
assert(typeof DescribeConfigurationRequest$ === "object");
assert(typeof DescribeConfigurationResponse$ === "object");
assert(typeof DescribeConfigurationRevisionRequest$ === "object");
assert(typeof DescribeConfigurationRevisionResponse$ === "object");
assert(typeof DescribeUserRequest$ === "object");
assert(typeof DescribeUserResponse$ === "object");
assert(typeof EncryptionOptions$ === "object");
assert(typeof EngineVersion$ === "object");
assert(typeof LdapServerMetadataInput$ === "object");
assert(typeof LdapServerMetadataOutput$ === "object");
assert(typeof ListBrokersRequest$ === "object");
assert(typeof ListBrokersResponse$ === "object");
assert(typeof ListConfigurationRevisionsRequest$ === "object");
assert(typeof ListConfigurationRevisionsResponse$ === "object");
assert(typeof ListConfigurationsRequest$ === "object");
assert(typeof ListConfigurationsResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof Logs$ === "object");
assert(typeof LogsSummary$ === "object");
assert(typeof PendingLogs$ === "object");
assert(typeof PromoteRequest$ === "object");
assert(typeof PromoteResponse$ === "object");
assert(typeof RebootBrokerRequest$ === "object");
assert(typeof RebootBrokerResponse$ === "object");
assert(typeof SanitizationWarning$ === "object");
assert(typeof UpdateBrokerRequest$ === "object");
assert(typeof UpdateBrokerResponse$ === "object");
assert(typeof UpdateConfigurationRequest$ === "object");
assert(typeof UpdateConfigurationResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof User$ === "object");
assert(typeof UserPendingChanges$ === "object");
assert(typeof UserSummary$ === "object");
assert(typeof WeeklyStartTime$ === "object");
// enums
assert(typeof AuthenticationStrategy === "object");
assert(typeof BrokerState === "object");
assert(typeof BrokerStorageType === "object");
assert(typeof ChangeType === "object");
assert(typeof DataReplicationMode === "object");
assert(typeof DayOfWeek === "object");
assert(typeof DeploymentMode === "object");
assert(typeof EngineType === "object");
assert(typeof PromoteMode === "object");
assert(typeof SanitizationWarningReason === "object");
// errors
assert(BadRequestException.prototype instanceof MqServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof MqServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof MqServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof MqServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof MqServiceException);
assert(typeof NotFoundException$ === "object");
assert(UnauthorizedException.prototype instanceof MqServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(MqServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBrokers === "function");
console.log(`Mq index test passed.`);
