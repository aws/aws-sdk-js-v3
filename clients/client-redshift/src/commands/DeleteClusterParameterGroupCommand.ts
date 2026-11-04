// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteClusterParameterGroupMessage } from "../models/models_0";
import { DeleteClusterParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a specified Amazon Redshift parameter group.
 *
 * > **Note:** You cannot delete a parameter group if it is associated with a cluster.
 *
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
 *
 * The parameter group name does not refer to an existing parameter group.
 *
 * @throws {@link InvalidClusterParameterGroupStateFault} (client fault)
 *
 * The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class DeleteClusterParameterGroupCommand extends command<DeleteClusterParameterGroupCommandInput, DeleteClusterParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteClusterParameterGroup",
  DeleteClusterParameterGroup$
) {
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
