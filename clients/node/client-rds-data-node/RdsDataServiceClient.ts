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
import { ContentLength } from "@aws-sdk/middleware-content-length";
import { UserAgent } from "@aws-sdk/middleware-user-agent";
import { Retry } from "@aws-sdk/middleware-retry";
import { AwsAuth } from "@aws-sdk/middleware-signing";
import { RDSDataRuntimeDependencies } from "./RDSDataConfiguration";
import { RDSRuntimeConfiguration } from "./runtimeConfig";
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
  UserAgent.Resolved &
  Required<RDSDataRuntimeDependencies>;

export class RdsDataService extends SmithyClient<
  __HttpOptions,
  ServiceInputTypes,
  ServiceOutputTypes
> {
  readonly config: RdsDataServiceResolvedConfig;

  constructor(configuration: RdsDataServiceConfig) {
    const _config_0 = ClientProtocol.resolveConfig({
      ...RDSRuntimeConfiguration,
      ...configuration
    });
    let _config_1 = Region.resolveConfig(_config_0);
    let _config_2 = AwsAuth.resolveConfig(_config_1);
    let _config_3 = Endpoints.resolveConfig(_config_2);
    let _config_4 = Retry.resolveConfig(_config_3);
    let _config_5 = UserAgent.resolveConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
    super.use(ContentLength.setMiddleware(this.config));
    super.use(AwsAuth.setMiddleware(this.config));
    super.use(Retry.setMiddleware(this.config));
    super.use(UserAgent.setMiddleware(this.config));
  }

  destroy(): void {}
}
