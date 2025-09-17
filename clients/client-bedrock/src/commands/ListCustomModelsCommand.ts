// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCustomModelsRequest, ListCustomModelsResponse } from "../models/models_0";
import { de_ListCustomModelsCommand, se_ListCustomModelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomModelsCommand}.
 */
export interface ListCustomModelsCommandInput extends ListCustomModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomModelsCommand}.
 */
export interface ListCustomModelsCommandOutput extends ListCustomModelsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the custom models that you have created with the <code>CreateModelCustomizationJob</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListCustomModelsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListCustomModelsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListCustomModelsRequest
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   nameContains: "STRING_VALUE",
 *   baseModelArnEquals: "STRING_VALUE",
 *   foundationModelArnEquals: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 *   isOwned: true || false,
 *   modelStatus: "Active" || "Creating" || "Failed",
 * };
 * const command = new ListCustomModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomModelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelSummaries: [ // CustomModelSummaryList
 * //     { // CustomModelSummary
 * //       modelArn: "STRING_VALUE", // required
 * //       modelName: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       baseModelArn: "STRING_VALUE", // required
 * //       baseModelName: "STRING_VALUE", // required
 * //       customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING" || "DISTILLATION" || "IMPORTED",
 * //       ownerAccountId: "STRING_VALUE",
 * //       modelStatus: "Active" || "Creating" || "Failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCustomModelsCommandInput - {@link ListCustomModelsCommandInput}
 * @returns {@link ListCustomModelsCommandOutput}
 * @see {@link ListCustomModelsCommandInput} for command's `input` shape.
 * @see {@link ListCustomModelsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListCustomModelsCommand extends $Command
  .classBuilder<
    ListCustomModelsCommandInput,
    ListCustomModelsCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "ListCustomModels", {})
  .n("BedrockClient", "ListCustomModelsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomModelsCommand)
  .de(de_ListCustomModelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomModelsRequest;
      output: ListCustomModelsResponse;
    };
    sdk: {
      input: ListCustomModelsCommandInput;
      output: ListCustomModelsCommandOutput;
    };
  };
}
