// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { GetFeatureRequest, GetFeatureResponse } from "../models/models_0";
import { GetFeature } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFeatureCommand}.
 */
export interface GetFeatureCommandInput extends GetFeatureRequest {}
/**
 * @public
 *
 * The output of {@link GetFeatureCommand}.
 */
export interface GetFeatureCommandOutput extends GetFeatureResponse, __MetadataBearer {}

/**
 * <p>Returns the details about one feature. You must already know the feature name. To
 *       retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // GetFeatureRequest
 *   project: "STRING_VALUE", // required
 *   feature: "STRING_VALUE", // required
 * };
 * const command = new GetFeatureCommand(input);
 * const response = await client.send(command);
 * // { // GetFeatureResponse
 * //   feature: { // Feature
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     project: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     description: "STRING_VALUE",
 * //     evaluationStrategy: "STRING_VALUE", // required
 * //     valueType: "STRING_VALUE", // required
 * //     variations: [ // VariationsList // required
 * //       { // Variation
 * //         name: "STRING_VALUE",
 * //         value: { // VariableValue Union: only one key present
 * //           boolValue: true || false,
 * //           stringValue: "STRING_VALUE",
 * //           longValue: Number("long"),
 * //           doubleValue: Number("double"),
 * //         },
 * //       },
 * //     ],
 * //     defaultVariation: "STRING_VALUE",
 * //     evaluationRules: [ // EvaluationRulesList
 * //       { // EvaluationRule
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     entityOverrides: { // EntityOverrideMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFeatureCommandInput - {@link GetFeatureCommandInput}
 * @returns {@link GetFeatureCommandOutput}
 * @see {@link GetFeatureCommandInput} for command's `input` shape.
 * @see {@link GetFeatureCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class GetFeatureCommand extends $Command
  .classBuilder<
    GetFeatureCommandInput,
    GetFeatureCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "GetFeature", {})
  .n("EvidentlyClient", "GetFeatureCommand")
  .sc(GetFeature)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFeatureRequest;
      output: GetFeatureResponse;
    };
    sdk: {
      input: GetFeatureCommandInput;
      output: GetFeatureCommandOutput;
    };
  };
}
