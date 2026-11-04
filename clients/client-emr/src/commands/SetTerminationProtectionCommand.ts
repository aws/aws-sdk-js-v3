// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetTerminationProtectionInput } from "../models/models_0";
import { SetTerminationProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * SetTerminationProtection locks a cluster (job flow) so the Amazon EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling `SetTerminationProtection` on a cluster is similar to calling the Amazon EC2 `DisableAPITermination` API on all Amazon EC2 instances in a cluster.
 *
 * `SetTerminationProtection` is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.
 *
 * To terminate a cluster that has been locked by setting `SetTerminationProtection` to `true`, you must first unlock the job flow by a subsequent call to `SetTerminationProtection` in which you set the value to `false`.
 *
 * For more information, see [Managing Cluster Termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html) in the *Amazon EMR Management Guide*.
 *
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
 *
 * Indicates that an error occurred while processing the request and that the request was not completed.
 *
 * @throws {@link EMRServiceException}
 *
 * Base exception class for all service exceptions from EMR service.
 *
 * @public
 */
export class SetTerminationProtectionCommand extends command<SetTerminationProtectionCommandInput, SetTerminationProtectionCommandOutput>(
  _ep0,
  _mw0,
  "SetTerminationProtection",
  SetTerminationProtection$
) {
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
