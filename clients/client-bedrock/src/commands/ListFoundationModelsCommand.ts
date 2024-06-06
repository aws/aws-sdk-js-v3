// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFoundationModelsRequest, ListFoundationModelsResponse } from "../models/models_0";
import { de_ListFoundationModelsCommand, se_ListFoundationModelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFoundationModelsCommand}.
 */
export interface ListFoundationModelsCommandInput extends ListFoundationModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListFoundationModelsCommand}.
 */
export interface ListFoundationModelsCommandOutput extends ListFoundationModelsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon Bedrock foundation models that you can use. You can filter the results with the request parameters. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Foundation models</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListFoundationModelsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListFoundationModelsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // ListFoundationModelsRequest
 *   byProvider: "STRING_VALUE",
 *   byCustomizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING",
 *   byOutputModality: "TEXT" || "IMAGE" || "EMBEDDING",
 *   byInferenceType: "ON_DEMAND" || "PROVISIONED",
 * };
 * const command = new ListFoundationModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListFoundationModelsResponse
 * //   modelSummaries: [ // FoundationModelSummaryList
 * //     { // FoundationModelSummary
 * //       modelArn: "STRING_VALUE", // required
 * //       modelId: "STRING_VALUE", // required
 * //       modelName: "STRING_VALUE",
 * //       providerName: "STRING_VALUE",
 * //       inputModalities: [ // ModelModalityList
 * //         "TEXT" || "IMAGE" || "EMBEDDING",
 * //       ],
 * //       outputModalities: [
 * //         "TEXT" || "IMAGE" || "EMBEDDING",
 * //       ],
 * //       responseStreamingSupported: true || false,
 * //       customizationsSupported: [ // ModelCustomizationList
 * //         "FINE_TUNING" || "CONTINUED_PRE_TRAINING",
 * //       ],
 * //       inferenceTypesSupported: [ // InferenceTypeList
 * //         "ON_DEMAND" || "PROVISIONED",
 * //       ],
 * //       modelLifecycle: { // FoundationModelLifecycle
 * //         status: "ACTIVE" || "LEGACY", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFoundationModelsCommandInput - {@link ListFoundationModelsCommandInput}
 * @returns {@link ListFoundationModelsCommandOutput}
 * @see {@link ListFoundationModelsCommandInput} for command's `input` shape.
 * @see {@link ListFoundationModelsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class ListFoundationModelsCommand extends $Command
  .classBuilder<
    ListFoundationModelsCommandInput,
    ListFoundationModelsCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "ListFoundationModels", {})
  .n("BedrockClient", "ListFoundationModelsCommand")
  .f(void 0, void 0)
  .ser(se_ListFoundationModelsCommand)
  .de(de_ListFoundationModelsCommand)
  .build() {}
