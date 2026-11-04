// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetModelInvocationLoggingConfigurationRequest,
  GetModelInvocationLoggingConfigurationResponse,
} from "../models/models_1";
import { GetModelInvocationLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetModelInvocationLoggingConfigurationCommand}.
 */
export interface GetModelInvocationLoggingConfigurationCommandInput extends GetModelInvocationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetModelInvocationLoggingConfigurationCommand}.
 */
export interface GetModelInvocationLoggingConfigurationCommandOutput extends GetModelInvocationLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Get the current configuration values for model invocation logging.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelInvocationLoggingConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelInvocationLoggingConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
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
 * //     audioDataDeliveryEnabled: true || false,
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class GetModelInvocationLoggingConfigurationCommand extends command<GetModelInvocationLoggingConfigurationCommandInput, GetModelInvocationLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetModelInvocationLoggingConfiguration",
  GetModelInvocationLoggingConfiguration$
) {
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
