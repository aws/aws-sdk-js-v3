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
import {
  RdsDataServiceConfig,
  RdsDataServiceResolvedConfig
} from "./RdsDtataServiceConfiguration";
import {
  resolveEndpointsConfig,
  resolveClientProtocolConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  resolveUserAgentConfig,
  getUserAgentPlugin
} from "@aws-sdk/middleware-user-agent";
import { resolveRetryConfig, getRetryPlugin } from "@aws-sdk/middleware-retry";
import {
  resolveAwsAuthConfig,
  getAwsAuthPlugin
} from "@aws-sdk/middleware-signing";
import { RDSRuntimeConfiguration } from "./runtimeConfig";
import { Client as SmithyClient } from "@aws-sdk/smithy-client";
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

export class RdsDataService extends SmithyClient<
  __HttpOptions,
  ServiceInputTypes,
  ServiceOutputTypes
> {
  readonly config: RdsDataServiceResolvedConfig;

  constructor(configuration: RdsDataServiceConfig) {
    const _config_0 = resolveClientProtocolConfig({
      ...RDSRuntimeConfiguration,
      ...configuration
    });
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveAwsAuthConfig(_config_1);
    let _config_3 = resolveEndpointsConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {}
}
