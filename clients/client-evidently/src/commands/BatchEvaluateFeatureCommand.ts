// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import type { BatchEvaluateFeatureRequest, BatchEvaluateFeatureResponse } from "../models/models_0";
import { BatchEvaluateFeature$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchEvaluateFeatureCommand}.
 */
export interface BatchEvaluateFeatureCommandInput extends BatchEvaluateFeatureRequest {}
/**
 * @public
 *
 * The output of {@link BatchEvaluateFeatureCommand}.
 */
export interface BatchEvaluateFeatureCommandOutput extends BatchEvaluateFeatureResponse, __MetadataBearer {}

/**
 * <p>This operation assigns feature variation to user sessions. For each user session, you pass
 *       in an <code>entityID</code> that represents the user. Evidently then checks the evaluation
 *       rules and assigns the variation.</p>
 *          <p>The first rules that are evaluated are the override rules. If the user's
 *         <code>entityID</code> matches an override rule, the user is served the variation specified
 *       by that rule.</p>
 *          <p>Next, if there is a launch of the feature, the user might be assigned to a variation in
 *       the launch. The chance of this depends on the percentage of users that are allocated to that
 *       launch. If the user is enrolled in the launch, the variation they are served depends on the
 *       allocation of the various feature variations used for the launch.</p>
 *          <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature,  the user might
 *       be assigned to a variation in the experiment. The chance of this
 *       depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment,
 *       the variation they are served depends on the allocation of the various feature variations used for the experiment. </p>
 *          <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, BatchEvaluateFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, BatchEvaluateFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // BatchEvaluateFeatureRequest
 *   project: "STRING_VALUE", // required
 *   requests: [ // EvaluationRequestsList // required
 *     { // EvaluationRequest
 *       feature: "STRING_VALUE", // required
 *       entityId: "STRING_VALUE", // required
 *       evaluationContext: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchEvaluateFeatureCommand(input);
 * const response = await client.send(command);
 * // { // BatchEvaluateFeatureResponse
 * //   results: [ // EvaluationResultsList
 * //     { // EvaluationResult
 * //       project: "STRING_VALUE",
 * //       feature: "STRING_VALUE", // required
 * //       variation: "STRING_VALUE",
 * //       value: { // VariableValue Union: only one key present
 * //         boolValue: true || false,
 * //         stringValue: "STRING_VALUE",
 * //         longValue: Number("long"),
 * //         doubleValue: Number("double"),
 * //       },
 * //       entityId: "STRING_VALUE", // required
 * //       reason: "STRING_VALUE",
 * //       details: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchEvaluateFeatureCommandInput - {@link BatchEvaluateFeatureCommandInput}
 * @returns {@link BatchEvaluateFeatureCommandOutput}
 * @see {@link BatchEvaluateFeatureCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateFeatureCommandOutput} for command's `response` shape.
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
export class BatchEvaluateFeatureCommand extends $Command
  .classBuilder<
    BatchEvaluateFeatureCommandInput,
    BatchEvaluateFeatureCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "BatchEvaluateFeature", {})
  .n("EvidentlyClient", "BatchEvaluateFeatureCommand")
  .sc(BatchEvaluateFeature$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchEvaluateFeatureRequest;
      output: BatchEvaluateFeatureResponse;
    };
    sdk: {
      input: BatchEvaluateFeatureCommandInput;
      output: BatchEvaluateFeatureCommandOutput;
    };
  };
}
