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
import { Endpoints, ClientProtocol, Region } from "@aws-sdk/config-resolver";
import { UserAgent } from "@aws-sdk/middleware-user-agent";
import { Retry } from "@aws-sdk/middleware-retry";
import { AwsAuth } from "@aws-sdk/middleware-signing";
import { RDSRuntimeConfiguration } from "./RDSDataConfiguration";
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
  Region.Input &
  AwsAuth.Input &
  Endpoints.Input &
  Retry.Input &
  UserAgent.Input;

export type RdsDataServiceResolvedConfig = SmithyResolvedConfiguration<
  __HttpOptions
> &
  Region.Resolved &
  AwsAuth.Resolved &
  Endpoints.Resolved &
  Retry.Resolved &
  UserAgent.Resolved;

export class RdsDataService extends SmithyClient<
  __HttpOptions,
  ServiceInputTypes,
  ServiceOutputTypes
> {
  readonly config: RdsDataServiceResolvedConfig;

  constructor(configuration: RdsDataServiceConfig) {
    const _config_0 = ClientProtocol.resolve({
      ...RDSRuntimeConfiguration,
      ...configuration
    });
    let _config_1 = Region.resolve(_config_0);
    let _config_2 = AwsAuth.resolve(_config_1);
    let _config_3 = Endpoints.resolve(_config_2);
    let _config_4 = Retry.resolve(_config_3);
    let _config_5 = UserAgent.resolve(_config_4);
    super(_config_5);
    this.config = _config_5;
    super.use(AwsAuth.getMiddleware(this.config));
    super.use(Retry.getMiddleware(this.config));
    super.use(UserAgent.getMiddleware(this.config));
  }

  destroy(): void {}
}
