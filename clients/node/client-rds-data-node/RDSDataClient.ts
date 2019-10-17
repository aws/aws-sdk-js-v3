import {
  BatchExecuteStatementRequest,
  BatchExecuteStatementResponse,
  BeginTransactionRequest,
  BeginTransactionResponse,
  CommitTransactionRequest,
  CommitTransactionResponse,
  ExecuteSqlRequest,
  ExecuteSqlResponse,
  ExecuteStatementRequest,
  ExecuteStatementResponse,
  RollbackTransactionRequest,
  RollbackTransactionResponse
} from "./models/index";
import { EndpointsConfig, RegionConfig } from "@aws-sdk/config-resolver";
import { UserAgentConfig } from "@aws-sdk/middleware-user-agent";
import { RetryConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthConfig } from "@aws-sdk/middleware-signing";
import {
  Client as SmithyClient,
  SmithyConfiguration,
  SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import { HttpOptions as __HttpOptions } from "@aws-sdk/types";

export type ServiceInputTypes =
  | RollbackTransactionRequest
  | CommitTransactionRequest
  | ExecuteSqlRequest
  | BeginTransactionRequest
  | ExecuteStatementRequest
  | BatchExecuteStatementRequest;

export type ServiceOutputTypes =
  | RollbackTransactionResponse
  | CommitTransactionResponse
  | ExecuteSqlResponse
  | BeginTransactionResponse
  | ExecuteStatementResponse
  | BatchExecuteStatementResponse;

export type RdsDataServiceConfig = SmithyConfiguration<__HttpOptions> &
  RegionConfig.Input &
  AwsAuthConfig.Input &
  EndpointsConfig.Input &
  RetryConfig.Input &
  UserAgentConfig.Input;

export type RdsDataServiceResolvedConfig = SmithyResolvedConfiguration<
  __HttpOptions
> &
  RegionConfig.Resolved &
  AwsAuthConfig.Resolved &
  EndpointsConfig.Resolved &
  RetryConfig.Resolved &
  UserAgentConfig.Resolved;

export class RdsDataService extends SmithyClient<
  __HttpOptions,
  ServiceInputTypes,
  ServiceOutputTypes
> {
  readonly config: RdsDataServiceResolvedConfig;

  constructor(configuration: RdsDataServiceConfig) {
    let _config_0 = configuration;
    let _config_1 = RegionConfig.resolve(_config_0);
    let _config_2 = AwsAuthConfig.resolve(_config_1);
    let _config_3 = EndpointsConfig.resolve(_config_2);
    let _config_4 = RetryConfig.resolve(_config_3);
    let _config_5 = UserAgentConfig.resolve(_config_4);
    super(_config_5);
    this.config = _config_5;
    super.use(AwsAuthConfig.getMiddleware(this.config));
    super.use(RetryConfig.getMiddleware(this.config));
    super.use(UserAgentConfig.getMiddleware(this.config));
  }

  destroy(): void {}
}
