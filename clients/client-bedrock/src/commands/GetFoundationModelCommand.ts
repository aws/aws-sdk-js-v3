// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFoundationModelRequest, GetFoundationModelResponse } from "../models/models_1";
import { GetFoundationModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFoundationModelCommand}.
 */
export interface GetFoundationModelCommandInput extends GetFoundationModelRequest {}
/**
 * @public
 *
 * The output of {@link GetFoundationModelCommand}.
 */
export interface GetFoundationModelCommandOutput extends GetFoundationModelResponse, __MetadataBearer {}

/**
 * <p>Get details about a Amazon Bedrock foundation model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetFoundationModelCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetFoundationModelCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetFoundationModelRequest
 *   modelIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetFoundationModelCommand(input);
 * const response = await client.send(command);
 * // { // GetFoundationModelResponse
 * //   modelDetails: { // FoundationModelDetails
 * //     modelArn: "STRING_VALUE", // required
 * //     modelId: "STRING_VALUE", // required
 * //     modelName: "STRING_VALUE",
 * //     providerName: "STRING_VALUE",
 * //     inputModalities: [ // ModelModalityList
 * //       "TEXT" || "IMAGE" || "EMBEDDING",
 * //     ],
 * //     outputModalities: [
 * //       "TEXT" || "IMAGE" || "EMBEDDING",
 * //     ],
 * //     responseStreamingSupported: true || false,
 * //     customizationsSupported: [ // ModelCustomizationList
 * //       "FINE_TUNING" || "CONTINUED_PRE_TRAINING" || "DISTILLATION",
 * //     ],
 * //     inferenceTypesSupported: [ // InferenceTypeList
 * //       "ON_DEMAND" || "PROVISIONED",
 * //     ],
 * //     modelLifecycle: { // FoundationModelLifecycle
 * //       status: "ACTIVE" || "LEGACY", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFoundationModelCommandInput - {@link GetFoundationModelCommandInput}
 * @returns {@link GetFoundationModelCommandOutput}
 * @see {@link GetFoundationModelCommandInput} for command's `input` shape.
 * @see {@link GetFoundationModelCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class GetFoundationModelCommand extends $Command
  .classBuilder<
    GetFoundationModelCommandInput,
    GetFoundationModelCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "GetFoundationModel", {})
  .n("BedrockClient", "GetFoundationModelCommand")
  .sc(GetFoundationModel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFoundationModelRequest;
      output: GetFoundationModelResponse;
    };
    sdk: {
      input: GetFoundationModelCommandInput;
      output: GetFoundationModelCommandOutput;
    };
  };
}
