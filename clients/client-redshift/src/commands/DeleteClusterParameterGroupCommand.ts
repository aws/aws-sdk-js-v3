// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClusterParameterGroupMessage } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterParameterGroupCommand}.
 */
export interface DeleteClusterParameterGroupCommandInput extends DeleteClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteClusterParameterGroupCommand}.
 */
export interface DeleteClusterParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specified Amazon Redshift parameter group.</p>
 *          <note>
 *             <p>You cannot delete a parameter group if it is associated with a
 *                 cluster.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteClusterParameterGroupMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterParameterGroupCommandInput - {@link DeleteClusterParameterGroupCommandInput}
 * @returns {@link DeleteClusterParameterGroupCommandOutput}
 * @see {@link DeleteClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link InvalidClusterParameterGroupStateFault} (client fault)
 *  <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteClusterParameterGroupCommand extends $Command
  .classBuilder<
    DeleteClusterParameterGroupCommandInput,
    DeleteClusterParameterGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteClusterParameterGroup", {})
  .n("RedshiftClient", "DeleteClusterParameterGroupCommand")
  .sc(DeleteClusterParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterParameterGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteClusterParameterGroupCommandInput;
      output: DeleteClusterParameterGroupCommandOutput;
    };
  };
}
