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
import type { GetBlueprintOptimizationStatusRequest, GetBlueprintOptimizationStatusResponse } from "../models/models_0";
import { GetBlueprintOptimizationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintOptimizationStatusCommand}.
 */
export interface GetBlueprintOptimizationStatusCommandInput extends GetBlueprintOptimizationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintOptimizationStatusCommand}.
 */
export interface GetBlueprintOptimizationStatusCommandOutput extends GetBlueprintOptimizationStatusResponse, __MetadataBearer {}

/**
 * API used to get blueprint optimization status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, GetBlueprintOptimizationStatusCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, GetBlueprintOptimizationStatusCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // GetBlueprintOptimizationStatusRequest
 *   invocationArn: "STRING_VALUE", // required
 * };
 * const command = new GetBlueprintOptimizationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintOptimizationStatusResponse
 * //   status: "Created" || "InProgress" || "Success" || "ServiceError" || "ClientError",
 * //   errorType: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   outputConfiguration: { // BlueprintOptimizationOutputConfiguration
 * //     s3Object: { // S3Object
 * //       s3Uri: "STRING_VALUE", // required
 * //       version: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlueprintOptimizationStatusCommandInput - {@link GetBlueprintOptimizationStatusCommandInput}
 * @returns {@link GetBlueprintOptimizationStatusCommandOutput}
 * @see {@link GetBlueprintOptimizationStatusCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintOptimizationStatusCommandOutput} for command's `response` shape.
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
export class GetBlueprintOptimizationStatusCommand extends $Command
  .classBuilder<
    GetBlueprintOptimizationStatusCommandInput,
    GetBlueprintOptimizationStatusCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "GetBlueprintOptimizationStatus", {})
  .n("BedrockDataAutomationClient", "GetBlueprintOptimizationStatusCommand")
  .sc(GetBlueprintOptimizationStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintOptimizationStatusRequest;
      output: GetBlueprintOptimizationStatusResponse;
    };
    sdk: {
      input: GetBlueprintOptimizationStatusCommandInput;
      output: GetBlueprintOptimizationStatusCommandOutput;
    };
  };
}
