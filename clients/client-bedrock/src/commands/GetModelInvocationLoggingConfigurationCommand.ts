// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetModelInvocationLoggingConfigurationRequest,
  GetModelInvocationLoggingConfigurationResponse,
} from "../models/models_0";
import {
  de_GetModelInvocationLoggingConfigurationCommand,
  se_GetModelInvocationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelInvocationLoggingConfigurationCommand}.
 */
export interface GetModelInvocationLoggingConfigurationCommandInput
  extends GetModelInvocationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetModelInvocationLoggingConfigurationCommand}.
 */
export interface GetModelInvocationLoggingConfigurationCommandOutput
  extends GetModelInvocationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Get the current configuration values for model invocation logging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelInvocationLoggingConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelInvocationLoggingConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = {};
 * const command = new GetModelInvocationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetModelInvocationLoggingConfigurationResponse
 * //   loggingConfig: { // LoggingConfig
 * //     cloudWatchConfig: { // CloudWatchConfig
 * //       logGroupName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       largeDataDeliveryS3Config: { // S3Config
 * //         bucketName: "STRING_VALUE", // required
 * //         keyPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     s3Config: {
 * //       bucketName: "STRING_VALUE", // required
 * //       keyPrefix: "STRING_VALUE",
 * //     },
 * //     textDataDeliveryEnabled: true || false,
 * //     imageDataDeliveryEnabled: true || false,
 * //     embeddingDataDeliveryEnabled: true || false,
 * //     videoDataDeliveryEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetModelInvocationLoggingConfigurationCommandInput - {@link GetModelInvocationLoggingConfigurationCommandInput}
 * @returns {@link GetModelInvocationLoggingConfigurationCommandOutput}
 * @see {@link GetModelInvocationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetModelInvocationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class GetModelInvocationLoggingConfigurationCommand extends $Command
  .classBuilder<
    GetModelInvocationLoggingConfigurationCommandInput,
    GetModelInvocationLoggingConfigurationCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "GetModelInvocationLoggingConfiguration", {})
  .n("BedrockClient", "GetModelInvocationLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetModelInvocationLoggingConfigurationCommand)
  .de(de_GetModelInvocationLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetModelInvocationLoggingConfigurationResponse;
    };
    sdk: {
      input: GetModelInvocationLoggingConfigurationCommandInput;
      output: GetModelInvocationLoggingConfigurationCommandOutput;
    };
  };
}
