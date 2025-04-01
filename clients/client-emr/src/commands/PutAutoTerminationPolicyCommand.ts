// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAutoTerminationPolicyInput, PutAutoTerminationPolicyOutput } from "../models/models_0";
import { de_PutAutoTerminationPolicyCommand, se_PutAutoTerminationPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAutoTerminationPolicyCommand}.
 */
export interface PutAutoTerminationPolicyCommandInput extends PutAutoTerminationPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutAutoTerminationPolicyCommand}.
 */
export interface PutAutoTerminationPolicyCommandOutput extends PutAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>Auto-termination is supported in Amazon EMR releases 5.30.0 and 6.1.0 and
 *             later. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-auto-termination-policy.html">Using an
 *                auto-termination policy</a>.</p>
 *          </note>
 *          <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An
 *          auto-termination policy defines the amount of idle time in seconds after which a cluster
 *          automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control
 *             cluster termination</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // PutAutoTerminationPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 *   AutoTerminationPolicy: { // AutoTerminationPolicy
 *     IdleTimeout: Number("long"),
 *   },
 * };
 * const command = new PutAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAutoTerminationPolicyCommandInput - {@link PutAutoTerminationPolicyCommandInput}
 * @returns {@link PutAutoTerminationPolicyCommandOutput}
 * @see {@link PutAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class PutAutoTerminationPolicyCommand extends $Command
  .classBuilder<
    PutAutoTerminationPolicyCommandInput,
    PutAutoTerminationPolicyCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "PutAutoTerminationPolicy", {})
  .n("EMRClient", "PutAutoTerminationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutAutoTerminationPolicyCommand)
  .de(de_PutAutoTerminationPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAutoTerminationPolicyInput;
      output: {};
    };
    sdk: {
      input: PutAutoTerminationPolicyCommandInput;
      output: PutAutoTerminationPolicyCommandOutput;
    };
  };
}
