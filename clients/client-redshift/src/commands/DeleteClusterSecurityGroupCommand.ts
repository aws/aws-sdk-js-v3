// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClusterSecurityGroupMessage } from "../models/models_0";
import { de_DeleteClusterSecurityGroupCommand, se_DeleteClusterSecurityGroupCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterSecurityGroupCommand}.
 */
export interface DeleteClusterSecurityGroupCommandInput extends DeleteClusterSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteClusterSecurityGroupCommand}.
 */
export interface DeleteClusterSecurityGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Redshift security group.</p>
 *          <note>
 *             <p>You cannot delete a security group that is associated with any clusters. You
 *                 cannot delete the default security group.</p>
 *          </note>
 *          <p>
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSecurityGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSecurityGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteClusterSecurityGroupMessage
 *   ClusterSecurityGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterSecurityGroupCommandInput - {@link DeleteClusterSecurityGroupCommandInput}
 * @returns {@link DeleteClusterSecurityGroupCommandOutput}
 * @see {@link DeleteClusterSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *  <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteClusterSecurityGroupCommand extends $Command
  .classBuilder<
    DeleteClusterSecurityGroupCommandInput,
    DeleteClusterSecurityGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DeleteClusterSecurityGroup", {})
  .n("RedshiftClient", "DeleteClusterSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClusterSecurityGroupCommand)
  .de(de_DeleteClusterSecurityGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterSecurityGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteClusterSecurityGroupCommandInput;
      output: DeleteClusterSecurityGroupCommandOutput;
    };
  };
}
