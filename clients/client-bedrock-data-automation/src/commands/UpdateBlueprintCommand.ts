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
import type { UpdateBlueprintRequest, UpdateBlueprintResponse } from "../models/models_0";
import { UpdateBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandInput extends UpdateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandOutput extends UpdateBlueprintResponse, __MetadataBearer {}

/**
 * Updates an existing Amazon Bedrock Data Automation Blueprint
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, UpdateBlueprintCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, UpdateBlueprintCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // UpdateBlueprintRequest
 *   blueprintArn: "STRING_VALUE", // required
 *   schema: "STRING_VALUE", // required
 *   blueprintStage: "DEVELOPMENT" || "LIVE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBlueprintResponse
 * //   blueprint: { // Blueprint
 * //     blueprintArn: "STRING_VALUE", // required
 * //     schema: "STRING_VALUE", // required
 * //     type: "DOCUMENT" || "IMAGE" || "AUDIO" || "VIDEO", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     blueprintName: "STRING_VALUE", // required
 * //     blueprintVersion: "STRING_VALUE",
 * //     blueprintStage: "DEVELOPMENT" || "LIVE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     kmsEncryptionContext: { // KmsEncryptionContext
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     optimizationSamples: [ // BlueprintOptimizationSamples
 * //       { // BlueprintOptimizationSample
 * //         assetS3Object: { // S3Object
 * //           s3Uri: "STRING_VALUE", // required
 * //           version: "STRING_VALUE",
 * //         },
 * //         groundTruthS3Object: {
 * //           s3Uri: "STRING_VALUE", // required
 * //           version: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     optimizationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBlueprintCommandInput - {@link UpdateBlueprintCommandInput}
 * @returns {@link UpdateBlueprintCommandOutput}
 * @see {@link UpdateBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
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
export class UpdateBlueprintCommand extends $Command
  .classBuilder<
    UpdateBlueprintCommandInput,
    UpdateBlueprintCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "UpdateBlueprint", {})
  .n("BedrockDataAutomationClient", "UpdateBlueprintCommand")
  .sc(UpdateBlueprint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBlueprintRequest;
      output: UpdateBlueprintResponse;
    };
    sdk: {
      input: UpdateBlueprintCommandInput;
      output: UpdateBlueprintCommandOutput;
    };
  };
}
