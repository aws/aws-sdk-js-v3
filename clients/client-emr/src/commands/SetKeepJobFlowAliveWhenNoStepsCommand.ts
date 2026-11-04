// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetKeepJobFlowAliveWhenNoStepsInput } from "../models/models_0";
import { SetKeepJobFlowAliveWhenNoSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * You can use the `SetKeepJobFlowAliveWhenNoSteps` to configure a cluster (job flow) to terminate after the step execution, i.e., all your steps are executed. If you want a transient cluster that shuts down after the last of the current executing steps are completed, you can configure `SetKeepJobFlowAliveWhenNoSteps` to false. If you want a long running cluster, configure `SetKeepJobFlowAliveWhenNoSteps` to true.
 *
 * For more information, see [Managing Cluster Termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html) in the *Amazon EMR Management Guide*.
 *
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
 *
 * Indicates that an error occurred while processing the request and that the request was not completed.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class SetKeepJobFlowAliveWhenNoStepsCommand extends command<SetKeepJobFlowAliveWhenNoStepsCommandInput, SetKeepJobFlowAliveWhenNoStepsCommandOutput>(
  _ep0,
  _mw0,
  "SetKeepJobFlowAliveWhenNoSteps",
  SetKeepJobFlowAliveWhenNoSteps$
) {
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
