// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SetKeepJobFlowAliveWhenNoStepsInput } from "../models/models_0";
import { SetKeepJobFlowAliveWhenNoSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetKeepJobFlowAliveWhenNoStepsCommand}.
 */
export interface SetKeepJobFlowAliveWhenNoStepsCommandInput extends SetKeepJobFlowAliveWhenNoStepsInput {}
/**
 * @public
 *
 * The output of {@link SetKeepJobFlowAliveWhenNoStepsCommand}.
 */
export interface SetKeepJobFlowAliveWhenNoStepsCommandOutput extends __MetadataBearer {}

/**
 * <p>You can use the <code>SetKeepJobFlowAliveWhenNoSteps</code> to configure a cluster (job flow) to terminate after the step execution, i.e., all your
 *          steps are executed. If you want a transient cluster that shuts down after the last of the current executing steps are completed,
 *          you can configure <code>SetKeepJobFlowAliveWhenNoSteps</code> to false. If you want a long running cluster, configure <code>SetKeepJobFlowAliveWhenNoSteps</code> to true.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetKeepJobFlowAliveWhenNoStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetKeepJobFlowAliveWhenNoStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // SetKeepJobFlowAliveWhenNoStepsInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 *   KeepJobFlowAliveWhenNoSteps: true || false, // required
 * };
 * const command = new SetKeepJobFlowAliveWhenNoStepsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetKeepJobFlowAliveWhenNoStepsCommandInput - {@link SetKeepJobFlowAliveWhenNoStepsCommandInput}
 * @returns {@link SetKeepJobFlowAliveWhenNoStepsCommandOutput}
 * @see {@link SetKeepJobFlowAliveWhenNoStepsCommandInput} for command's `input` shape.
 * @see {@link SetKeepJobFlowAliveWhenNoStepsCommandOutput} for command's `response` shape.
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
export class SetKeepJobFlowAliveWhenNoStepsCommand extends $Command
  .classBuilder<
    SetKeepJobFlowAliveWhenNoStepsCommandInput,
    SetKeepJobFlowAliveWhenNoStepsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "SetKeepJobFlowAliveWhenNoSteps", {})
  .n("EMRClient", "SetKeepJobFlowAliveWhenNoStepsCommand")
  .sc(SetKeepJobFlowAliveWhenNoSteps$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetKeepJobFlowAliveWhenNoStepsInput;
      output: {};
    };
    sdk: {
      input: SetKeepJobFlowAliveWhenNoStepsCommandInput;
      output: SetKeepJobFlowAliveWhenNoStepsCommandOutput;
    };
  };
}
