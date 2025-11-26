import {
  AuthenticationStrategy,
  BrokerState,
  BrokerStorageType,
  ChangeType,
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
  ListBrokersCommand,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListTagsCommand,
  ListUsersCommand,
  Mq,
  MqClient,
  MqServiceException,
  PromoteCommand,
  PromoteMode,
  RebootBrokerCommand,
  SanitizationWarningReason,
  UpdateBrokerCommand,
  UpdateConfigurationCommand,
  UpdateUserCommand,
  paginateListBrokers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MqClient === "function")
assert(typeof Mq === "function")
// commands
assert(typeof CreateBrokerCommand === "function")
assert(typeof CreateConfigurationCommand === "function")
assert(typeof CreateTagsCommand === "function")
assert(typeof CreateUserCommand === "function")
assert(typeof DeleteBrokerCommand === "function")
assert(typeof DeleteConfigurationCommand === "function")
assert(typeof DeleteTagsCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DescribeBrokerCommand === "function")
assert(typeof DescribeBrokerEngineTypesCommand === "function")
assert(typeof DescribeBrokerInstanceOptionsCommand === "function")
assert(typeof DescribeConfigurationCommand === "function")
assert(typeof DescribeConfigurationRevisionCommand === "function")
assert(typeof DescribeUserCommand === "function")
assert(typeof ListBrokersCommand === "function")
assert(typeof ListConfigurationRevisionsCommand === "function")
assert(typeof ListConfigurationsCommand === "function")
assert(typeof ListTagsCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof PromoteCommand === "function")
assert(typeof RebootBrokerCommand === "function")
assert(typeof UpdateBrokerCommand === "function")
assert(typeof UpdateConfigurationCommand === "function")
assert(typeof UpdateUserCommand === "function")
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
assert(MqServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListBrokers === "function")
console.log(`Mq index test passed.`);
