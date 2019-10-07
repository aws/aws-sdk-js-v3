import { contentLengthPlugin } from "@aws-sdk/middleware-content-length";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import { retryPlugin, RetryConfig } from "@aws-sdk/retry-middleware";
import { signingPlugin, AwsAuthConfiguration } from "@aws-sdk/signing-middleware";
import * as __aws_sdk_util_user_agent_node from "@aws-sdk/util-user-agent-node";
import {
  RDSDataConfiguration,
  RDSDataResolvedConfiguration,
  RDSRuntimeConfiguration
} from "./RDSDataConfiguration";
import { RegionConfiguration, EndpointsConfig, ProtocolConfig } from '@aws-sdk/config-resolver';
import { HttpOptions, MetadataBearer } from '@aws-sdk/types';
import { SmithyClient } from "@aws-sdk/smithy-client";

type InputTypesUnion = any;
type OutputTypesUnion = MetadataBearer;

export class RDSDataClient extends SmithyClient<HttpOptions, InputTypesUnion, OutputTypesUnion> {
  readonly config: RDSDataResolvedConfiguration;

  constructor(configuration: RDSDataConfiguration) {
    const intermediaConfig_0 = ProtocolConfig.resolve({
      ...RDSRuntimeConfiguration,
      ...configuration
    });
    super(intermediaConfig_0);
    let intermediaConfig_1 = RegionConfiguration.resolve(intermediaConfig_0);
    let intermediaConfig_2 = AwsAuthConfiguration.resolve(intermediaConfig_1);
    let intermediaConfig_3 = EndpointsConfig.resolve(intermediaConfig_2);
    let intermediaConfig_4 = RetryConfig.resolve(intermediaConfig_3);
    this.config = intermediaConfig_4;
    super.use(contentLengthPlugin(this.config));
    if (this.config.maxRetries > 0) {
      super.use(retryPlugin(this.config))
    }
    super.use(signingPlugin(this.config));
    this.middlewareStack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "User-Agent": this.config.defaultUserAgent
      }),
      {
        step: "build",
        priority: 0,
        tags: { SET_USER_AGENT: true }
      }
    );
  }

  destroy(): void {
    if (
      typeof this.config.httpHandler.destroy === 'function'
    ) {
      this.config.httpHandler.destroy();
    }
  }
}
