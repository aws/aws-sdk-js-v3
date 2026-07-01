// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetVisibleToAllUsersInput } from "../models/models_0";
import { SetVisibleToAllUsers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetVisibleToAllUsersCommand}.
 */
export interface SetVisibleToAllUsersCommandInput extends SetVisibleToAllUsersInput {}
/**
 * @public
 *
 * The output of {@link SetVisibleToAllUsersCommand}.
 */
export interface SetVisibleToAllUsersCommandOutput extends __MetadataBearer {}

/**
 * <important>
 *             <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be
 *             visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-IAM.html">Identity and Access
 *                Management for Amazon EMR</a>. </p>
 *          </important>
 *          <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an Amazon EMR
 *          cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM
 *          principal that created the cluster and the Amazon Web Services account root user can perform
 *             Amazon EMR actions on the cluster, regardless of IAM permissions
 *          policies attached to other IAM principals.</p>
 *          <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_IAM_emr-with-IAM.html#security_set_visible_to_all_users">Understanding the Amazon EMR Cluster VisibleToAllUsers Setting</a> in the
 *                <i>Amazon EMR Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetVisibleToAllUsersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetVisibleToAllUsersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // SetVisibleToAllUsersInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 *   VisibleToAllUsers: true || false, // required
 * };
 * const command = new SetVisibleToAllUsersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetVisibleToAllUsersCommandInput - {@link SetVisibleToAllUsersCommandInput}
 * @returns {@link SetVisibleToAllUsersCommandOutput}
 * @see {@link SetVisibleToAllUsersCommandInput} for command's `input` shape.
 * @see {@link SetVisibleToAllUsersCommandOutput} for command's `response` shape.
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
export class SetVisibleToAllUsersCommand extends command<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput>(
  _ep0,
  _mw0,
  "SetVisibleToAllUsers",
  SetVisibleToAllUsers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetVisibleToAllUsersInput;
      output: {};
    };
    sdk: {
      input: SetVisibleToAllUsersCommandInput;
      output: SetVisibleToAllUsersCommandOutput;
    };
  };
}
