// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutModelInvocationLoggingConfigurationRequest,
  PutModelInvocationLoggingConfigurationResponse,
} from "../models/models_1";
import { PutModelInvocationLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutModelInvocationLoggingConfigurationCommand}.
 */
export interface PutModelInvocationLoggingConfigurationCommandInput extends PutModelInvocationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutModelInvocationLoggingConfigurationCommand}.
 */
export interface PutModelInvocationLoggingConfigurationCommandOutput extends PutModelInvocationLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Set the configuration values for model invocation logging.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutModelInvocationLoggingConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutModelInvocationLoggingConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutModelInvocationLoggingConfigurationRequest
 *   loggingConfig: { // LoggingConfig
 *     cloudWatchConfig: { // CloudWatchConfig
 *       logGroupName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       largeDataDeliveryS3Config: { // S3Config
 *         bucketName: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *     s3Config: {
 *       bucketName: "STRING_VALUE", // required
 *       keyPrefix: "STRING_VALUE",
 *     },
 *     textDataDeliveryEnabled: true || false,
 *     imageDataDeliveryEnabled: true || false,
 *     embeddingDataDeliveryEnabled: true || false,
 *     videoDataDeliveryEnabled: true || false,
 *     audioDataDeliveryEnabled: true || false,
 *   },
 * };
 * const command = new PutModelInvocationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutModelInvocationLoggingConfigurationCommandInput - {@link PutModelInvocationLoggingConfigurationCommandInput}
 * @returns {@link PutModelInvocationLoggingConfigurationCommandOutput}
 * @see {@link PutModelInvocationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutModelInvocationLoggingConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class PutModelInvocationLoggingConfigurationCommand extends command<PutModelInvocationLoggingConfigurationCommandInput, PutModelInvocationLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutModelInvocationLoggingConfiguration",
  PutModelInvocationLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutModelInvocationLoggingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutModelInvocationLoggingConfigurationCommandInput;
      output: PutModelInvocationLoggingConfigurationCommandOutput;
    };
  };
}
