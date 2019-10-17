import { contentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { userAgentPlugin, UserAgentConfig } from "@aws-sdk/middleware-user-agent";
import { retryPlugin, RetryConfig } from "@aws-sdk/retry-middleware";
import { awsAuthPlugin, AwsAuthConfiguration } from "@aws-sdk/signing-middleware";
import {
  RDSDataConfiguration,
  RDSDataResolvedConfiguration,
  RDSRuntimeConfiguration
} from "./RDSDataConfiguration";
import { RegionConfiguration, EndpointsConfig, ProtocolConfig } from '@aws-sdk/config-resolver';
import { HttpOptions, MetadataBearer } from '@aws-sdk/types';
import { Client as SmithyClient } from "@aws-sdk/smithy-client";

type InputTypesUnion = any;
type OutputTypesUnion = MetadataBearer;

export class RDSDataClient extends SmithyClient<HttpOptions, InputTypesUnion, OutputTypesUnion> {
  readonly config: RDSDataResolvedConfiguration;

  constructor(configuration: RDSDataConfiguration) {
    const intermediaConfig_0 = ProtocolConfig.resolve({
      ...RDSRuntimeConfiguration,
      ...configuration
    });
    let intermediaConfig_1 = RegionConfiguration.resolve(intermediaConfig_0);
    let intermediaConfig_2 = AwsAuthConfiguration.resolve(intermediaConfig_1);
    let intermediaConfig_3 = EndpointsConfig.resolve(intermediaConfig_2);
    let intermediaConfig_4 = RetryConfig.resolve(intermediaConfig_3);
    let intermediaConfig_5 = UserAgentConfig.resolve(intermediaConfig_4);
    super(intermediaConfig_0);
    this.config = intermediaConfig_5;
    super.use(contentLengthPlugin(this.config));
    super.use(retryPlugin(this.config));
    super.use(awsAuthPlugin(this.config));
    super.use(userAgentPlugin(this.config));
  }

  destroy(): void {
    if (
      typeof this.config.httpHandler.destroy === 'function'
    ) {
      this.config.httpHandler.destroy();
    }
  }
}
