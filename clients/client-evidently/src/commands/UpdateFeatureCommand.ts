// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import type { UpdateFeatureRequest, UpdateFeatureResponse } from "../models/models_0";
import { UpdateFeature$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFeatureCommand}.
 */
export interface UpdateFeatureCommandInput extends UpdateFeatureRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFeatureCommand}.
 */
export interface UpdateFeatureCommandOutput extends UpdateFeatureResponse, __MetadataBearer {}

/**
 * <p>Updates an existing feature.</p>
 *          <p>You can't use this operation to update the tags of an existing feature. Instead, use
 *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // UpdateFeatureRequest
 *   project: "STRING_VALUE", // required
 *   feature: "STRING_VALUE", // required
 *   evaluationStrategy: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   addOrUpdateVariations: [ // VariationConfigsList
 *     { // VariationConfig
 *       name: "STRING_VALUE", // required
 *       value: { // VariableValue Union: only one key present
 *         boolValue: true || false,
 *         stringValue: "STRING_VALUE",
 *         longValue: Number("long"),
 *         doubleValue: Number("double"),
 *       },
 *     },
 *   ],
 *   removeVariations: [ // VariationNameList
 *     "STRING_VALUE",
 *   ],
 *   defaultVariation: "STRING_VALUE",
 *   entityOverrides: { // EntityOverrideMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateFeatureCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFeatureResponse
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
 * @param UpdateFeatureCommandInput - {@link UpdateFeatureCommandInput}
 * @returns {@link UpdateFeatureCommandOutput}
 * @see {@link UpdateFeatureCommandInput} for command's `input` shape.
 * @see {@link UpdateFeatureCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class UpdateFeatureCommand extends $Command
  .classBuilder<
    UpdateFeatureCommandInput,
    UpdateFeatureCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "UpdateFeature", {})
  .n("EvidentlyClient", "UpdateFeatureCommand")
  .sc(UpdateFeature$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFeatureRequest;
      output: UpdateFeatureResponse;
    };
    sdk: {
      input: UpdateFeatureCommandInput;
      output: UpdateFeatureCommandOutput;
    };
  };
}
