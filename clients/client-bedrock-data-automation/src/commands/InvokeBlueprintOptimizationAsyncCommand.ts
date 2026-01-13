// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  InvokeBlueprintOptimizationAsyncRequest,
  InvokeBlueprintOptimizationAsyncResponse,
} from "../models/models_0";
import { InvokeBlueprintOptimizationAsync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeBlueprintOptimizationAsyncCommand}.
 */
export interface InvokeBlueprintOptimizationAsyncCommandInput extends InvokeBlueprintOptimizationAsyncRequest {}
/**
 * @public
 *
 * The output of {@link InvokeBlueprintOptimizationAsyncCommand}.
 */
export interface InvokeBlueprintOptimizationAsyncCommandOutput extends InvokeBlueprintOptimizationAsyncResponse, __MetadataBearer {}

/**
 * Invoke an async job to perform Blueprint Optimization
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, InvokeBlueprintOptimizationAsyncCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, InvokeBlueprintOptimizationAsyncCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // InvokeBlueprintOptimizationAsyncRequest
 *   blueprint: { // BlueprintOptimizationObject
 *     blueprintArn: "STRING_VALUE", // required
 *     stage: "DEVELOPMENT" || "LIVE",
 *   },
 *   samples: [ // BlueprintOptimizationSamples // required
 *     { // BlueprintOptimizationSample
 *       assetS3Object: { // S3Object
 *         s3Uri: "STRING_VALUE", // required
 *         version: "STRING_VALUE",
 *       },
 *       groundTruthS3Object: {
 *         s3Uri: "STRING_VALUE", // required
 *         version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   outputConfiguration: { // BlueprintOptimizationOutputConfiguration
 *     s3Object: {
 *       s3Uri: "STRING_VALUE", // required
 *       version: "STRING_VALUE",
 *     },
 *   },
 *   dataAutomationProfileArn: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new InvokeBlueprintOptimizationAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeBlueprintOptimizationAsyncResponse
 * //   invocationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeBlueprintOptimizationAsyncCommandInput - {@link InvokeBlueprintOptimizationAsyncCommandInput}
 * @returns {@link InvokeBlueprintOptimizationAsyncCommandOutput}
 * @see {@link InvokeBlueprintOptimizationAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeBlueprintOptimizationAsyncCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class InvokeBlueprintOptimizationAsyncCommand extends $Command
  .classBuilder<
    InvokeBlueprintOptimizationAsyncCommandInput,
    InvokeBlueprintOptimizationAsyncCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "InvokeBlueprintOptimizationAsync", {})
  .n("BedrockDataAutomationClient", "InvokeBlueprintOptimizationAsyncCommand")
  .sc(InvokeBlueprintOptimizationAsync$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeBlueprintOptimizationAsyncRequest;
      output: InvokeBlueprintOptimizationAsyncResponse;
    };
    sdk: {
      input: InvokeBlueprintOptimizationAsyncCommandInput;
      output: InvokeBlueprintOptimizationAsyncCommandOutput;
    };
  };
}
