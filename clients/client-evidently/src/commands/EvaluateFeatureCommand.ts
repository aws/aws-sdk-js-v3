// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { EvaluateFeatureRequest, EvaluateFeatureResponse } from "../models/models_0";
import { de_EvaluateFeatureCommand, se_EvaluateFeatureCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EvaluateFeatureCommand}.
 */
export interface EvaluateFeatureCommandInput extends EvaluateFeatureRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateFeatureCommand}.
 */
export interface EvaluateFeatureCommandOutput extends EvaluateFeatureResponse, __MetadataBearer {}

/**
 * <p>This operation assigns a feature variation to one given user session. You pass in an
 *         <code>entityID</code> that represents the user. Evidently then checks the evaluation rules
 *       and assigns the variation.</p>
 *          <p>The first rules that are evaluated are the override rules. If the user's
 *         <code>entityID</code> matches an override rule, the user is served the variation specified
 *       by that rule.</p>
 *          <p>If there is a current launch with this feature that uses segment overrides, and
 *       if the user session's <code>evaluationContext</code> matches a segment rule defined in a
 *       segment override, the configuration in the segment overrides is used. For more information
 *       about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>
 *       and
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your
 *         audience</a>.</p>
 *          <p>If there is a launch with no segment overrides, the user might be assigned to a variation in
 *       the launch. The chance of this depends on the percentage of users that are allocated to that
 *       launch. If the user is enrolled in the launch, the variation they are served depends on the
 *       allocation of the various feature variations used for the launch.</p>
 *          <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might
 *       be assigned to a variation in the experiment. The chance of this
 *       depends on the percentage of users that are allocated to that experiment.</p>
 *          <p>If the experiment uses a segment, then only
 *       user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p>
 *          <p>If the user is enrolled in the experiment,
 *       the variation they are served depends on the allocation of the various feature variations used for the experiment. </p>
 *          <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, EvaluateFeatureCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, EvaluateFeatureCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // EvaluateFeatureRequest
 *   project: "STRING_VALUE", // required
 *   feature: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   evaluationContext: "STRING_VALUE",
 * };
 * const command = new EvaluateFeatureCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateFeatureResponse
 * //   variation: "STRING_VALUE",
 * //   value: { // VariableValue Union: only one key present
 * //     boolValue: true || false,
 * //     stringValue: "STRING_VALUE",
 * //     longValue: Number("long"),
 * //     doubleValue: Number("double"),
 * //   },
 * //   reason: "STRING_VALUE",
 * //   details: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EvaluateFeatureCommandInput - {@link EvaluateFeatureCommandInput}
 * @returns {@link EvaluateFeatureCommandOutput}
 * @see {@link EvaluateFeatureCommandInput} for command's `input` shape.
 * @see {@link EvaluateFeatureCommandOutput} for command's `response` shape.
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
export class EvaluateFeatureCommand extends $Command
  .classBuilder<
    EvaluateFeatureCommandInput,
    EvaluateFeatureCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "EvaluateFeature", {})
  .n("EvidentlyClient", "EvaluateFeatureCommand")
  .f(void 0, void 0)
  .ser(se_EvaluateFeatureCommand)
  .de(de_EvaluateFeatureCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateFeatureRequest;
      output: EvaluateFeatureResponse;
    };
    sdk: {
      input: EvaluateFeatureCommandInput;
      output: EvaluateFeatureCommandOutput;
    };
  };
}
