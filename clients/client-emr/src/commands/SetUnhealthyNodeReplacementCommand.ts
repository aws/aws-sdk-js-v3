// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetUnhealthyNodeReplacementInput } from "../models/models_0";
import { de_SetUnhealthyNodeReplacementCommand, se_SetUnhealthyNodeReplacementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetUnhealthyNodeReplacementCommand}.
 */
export interface SetUnhealthyNodeReplacementCommandInput extends SetUnhealthyNodeReplacementInput {}
/**
 * @public
 *
 * The output of {@link SetUnhealthyNodeReplacementCommand}.
 */
export interface SetUnhealthyNodeReplacementCommandOutput extends __MetadataBearer {}

/**
 * <p>Specify whether to enable unhealthy node replacement, which lets Amazon EMR gracefully
 *          replace core nodes on a cluster if any nodes become unhealthy. For example, a node becomes
 *          unhealthy if disk usage is above 90%. If unhealthy node replacement is on and <code>TerminationProtected</code> are off,
 *          Amazon EMR immediately terminates the unhealthy core nodes. To use unhealthy node replacement
 *          and retain unhealthy core nodes, use  to turn on
 *          termination protection. In such cases, Amazon EMR adds
 *          the unhealthy nodes to a denylist, reducing job interruptions and failures.</p>
 *          <p>If unhealthy node replacement is on, Amazon EMR
 *          notifies YARN and other applications on the cluster to stop scheduling tasks
 *          with these nodes, moves the data, and then terminates the nodes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-node-replacement.html">graceful
 *          node replacement</a> in the <i>Amazon EMR Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetUnhealthyNodeReplacementCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetUnhealthyNodeReplacementCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // SetUnhealthyNodeReplacementInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 *   UnhealthyNodeReplacement: true || false, // required
 * };
 * const command = new SetUnhealthyNodeReplacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetUnhealthyNodeReplacementCommandInput - {@link SetUnhealthyNodeReplacementCommandInput}
 * @returns {@link SetUnhealthyNodeReplacementCommandOutput}
 * @see {@link SetUnhealthyNodeReplacementCommandInput} for command's `input` shape.
 * @see {@link SetUnhealthyNodeReplacementCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class SetUnhealthyNodeReplacementCommand extends $Command
  .classBuilder<
    SetUnhealthyNodeReplacementCommandInput,
    SetUnhealthyNodeReplacementCommandOutput,
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
  .s("ElasticMapReduce", "SetUnhealthyNodeReplacement", {})
  .n("EMRClient", "SetUnhealthyNodeReplacementCommand")
  .f(void 0, void 0)
  .ser(se_SetUnhealthyNodeReplacementCommand)
  .de(de_SetUnhealthyNodeReplacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUnhealthyNodeReplacementInput;
      output: {};
    };
    sdk: {
      input: SetUnhealthyNodeReplacementCommandInput;
      output: SetUnhealthyNodeReplacementCommandOutput;
    };
  };
}
