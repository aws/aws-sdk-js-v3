import {
  AuthenticationStrategy,
  BadRequestException,
  BrokerState,
  BrokerStorageType,
  ChangeType,
  ConflictException,
  CreateBrokerCommand,
  CreateConfigurationCommand,
  CreateTagsCommand,
  CreateUserCommand,
  DataReplicationMode,
  DayOfWeek,
  DeleteBrokerCommand,
  DeleteConfigurationCommand,
  DeleteTagsCommand,
  DeleteUserCommand,
  DeploymentMode,
  DescribeBrokerCommand,
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerInstanceOptionsCommand,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeUserCommand,
  EngineType,
  ForbiddenException,
  InternalServerErrorException,
  ListBrokersCommand,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListTagsCommand,
  ListUsersCommand,
  Mq,
  MqClient,
  MqServiceException,
  NotFoundException,
  PromoteCommand,
  PromoteMode,
  RebootBrokerCommand,
  SanitizationWarningReason,
  UnauthorizedException,
  UpdateBrokerCommand,
  UpdateConfigurationCommand,
  UpdateUserCommand,
  paginateListBrokers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MqClient === "function");
assert(typeof Mq === "function");
// commands
assert(typeof CreateBrokerCommand === "function");
assert(typeof CreateConfigurationCommand === "function");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteBrokerCommand === "function");
assert(typeof DeleteConfigurationCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeBrokerCommand === "function");
assert(typeof DescribeBrokerEngineTypesCommand === "function");
assert(typeof DescribeBrokerInstanceOptionsCommand === "function");
assert(typeof DescribeConfigurationCommand === "function");
assert(typeof DescribeConfigurationRevisionCommand === "function");
assert(typeof DescribeUserCommand === "function");
assert(typeof ListBrokersCommand === "function");
assert(typeof ListConfigurationRevisionsCommand === "function");
assert(typeof ListConfigurationsCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof PromoteCommand === "function");
assert(typeof RebootBrokerCommand === "function");
assert(typeof UpdateBrokerCommand === "function");
assert(typeof UpdateConfigurationCommand === "function");
assert(typeof UpdateUserCommand === "function");
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
assert(ConflictException.prototype instanceof MqServiceException);
assert(ForbiddenException.prototype instanceof MqServiceException);
assert(InternalServerErrorException.prototype instanceof MqServiceException);
assert(NotFoundException.prototype instanceof MqServiceException);
assert(UnauthorizedException.prototype instanceof MqServiceException);
assert(MqServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBrokers === "function");
console.log(`Mq index test passed.`);
