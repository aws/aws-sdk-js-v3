import { contentLengthPlugin } from "@aws-sdk/middleware-content-length";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_retry_middleware from "@aws-sdk/retry-middleware";
import { signingPlugin } from "@aws-sdk/signing-middleware";
import * as __aws_sdk_util_user_agent_node from "@aws-sdk/util-user-agent-node";
import {
  RDSDataConfiguration,
  RDSDataResolvedConfiguration,
  RDSRuntimeConfiguration
} from "./RDSDataConfiguration";
import { AwsAuthConfiguration, RegionConfiguration, RetryConfig, EndpointsConfig, ProtocolConfig } from '@aws-sdk/config-resolver';
import { version as clientVersion } from './package.json';
import { HttpOptions, MetadataBearer } from '@aws-sdk/types';
import { SmithyClient } from "@aws-sdk/smithy-client";

/**
 * To remove this when move to Smithy model
 */
const ServiceMetadata = {
  endpointPrefix: "rds-data",
  serviceId: "RDS Data"
};

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
    super.use(contentLengthPlugin(this.config.bodyLengthChecker));
    if (this.config.maxRetries > 0) {
      this.middlewareStack.add(
        __aws_sdk_retry_middleware.retryMiddleware(
          this.config.maxRetries,
          this.config.retryDecider,
          this.config.delayDecider
        ),
        {
          step: "finalizeRequest",
          priority: Infinity,
          tags: { RETRY: true }
        }
      );
    }
    super.use(signingPlugin(this.config.signer));
    this.middlewareStack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "User-Agent": __aws_sdk_util_user_agent_node.defaultUserAgent(
          ServiceMetadata.serviceId || ServiceMetadata.endpointPrefix,
          clientVersion
        )
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
