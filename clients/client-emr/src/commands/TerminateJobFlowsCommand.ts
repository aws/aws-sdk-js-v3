// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateJobFlowsInput } from "../models/models_0";
import { TerminateJobFlows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateJobFlowsCommand}.
 */
export interface TerminateJobFlowsCommandInput extends TerminateJobFlowsInput {}
/**
 * @public
 *
 * The output of {@link TerminateJobFlowsCommand}.
 */
export interface TerminateJobFlowsCommandOutput extends __MetadataBearer {}

/**
 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut
 *          down, any step not yet completed is canceled and the Amazon EC2 instances on which
 *          the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p>
 *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code>
 *          is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5
 *          minutes for the cluster to completely terminate and release allocated resources, such as
 *             Amazon EC2 instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, TerminateJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, TerminateJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // TerminateJobFlowsInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TerminateJobFlowsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateJobFlowsCommandInput - {@link TerminateJobFlowsCommandInput}
 * @returns {@link TerminateJobFlowsCommandOutput}
 * @see {@link TerminateJobFlowsCommandInput} for command's `input` shape.
 * @see {@link TerminateJobFlowsCommandOutput} for command's `response` shape.
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
export class TerminateJobFlowsCommand extends command<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput>(
  _ep0,
  _mw0,
  "TerminateJobFlows",
  TerminateJobFlows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateJobFlowsInput;
      output: {};
    };
    sdk: {
      input: TerminateJobFlowsCommandInput;
      output: TerminateJobFlowsCommandOutput;
    };
  };
}
