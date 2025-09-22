// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetTerminationProtectionInput } from "../models/models_0";
import { SetTerminationProtection } from "../schemas/schemas_7_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTerminationProtectionCommand}.
 */
export interface SetTerminationProtectionCommandInput extends SetTerminationProtectionInput {}
/**
 * @public
 *
 * The output of {@link SetTerminationProtectionCommand}.
 */
export interface SetTerminationProtectionCommandOutput extends __MetadataBearer {}

/**
 * <p>SetTerminationProtection locks a cluster (job flow) so the Amazon EC2 instances
 *          in the cluster cannot be terminated by user intervention, an API call, or in the event of a
 *          job-flow error. The cluster still terminates upon successful completion of the job flow.
 *          Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the
 *             Amazon EC2
 *          <code>DisableAPITermination</code> API on all Amazon EC2 instances in a
 *          cluster.</p>
 *          <p>
 *             <code>SetTerminationProtection</code> is used to prevent accidental termination of a
 *          cluster and to ensure that in the event of an error, the instances persist so that you can
 *          recover any data stored in their ephemeral instance storage.</p>
 *          <p> To terminate a cluster that has been locked by setting
 *             <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the
 *          job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the
 *          value to <code>false</code>. </p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster
 *             Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetTerminationProtectionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetTerminationProtectionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // SetTerminationProtectionInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 *   TerminationProtected: true || false, // required
 * };
 * const command = new SetTerminationProtectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetTerminationProtectionCommandInput - {@link SetTerminationProtectionCommandInput}
 * @returns {@link SetTerminationProtectionCommandOutput}
 * @see {@link SetTerminationProtectionCommandInput} for command's `input` shape.
 * @see {@link SetTerminationProtectionCommandOutput} for command's `response` shape.
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
export class SetTerminationProtectionCommand extends $Command
  .classBuilder<
    SetTerminationProtectionCommandInput,
    SetTerminationProtectionCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "SetTerminationProtection", {})
  .n("EMRClient", "SetTerminationProtectionCommand")
  .sc(SetTerminationProtection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTerminationProtectionInput;
      output: {};
    };
    sdk: {
      input: SetTerminationProtectionCommandInput;
      output: SetTerminationProtectionCommandOutput;
    };
  };
}
