// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDBClusterParameterGroupMessage } from "../models/models_0";
import { DeleteDBClusterParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterParameterGroupCommand}.
 */
export interface DeleteDBClusterParameterGroupCommandInput extends DeleteDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterParameterGroupCommand}.
 */
export interface DeleteDBClusterParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
 *
 * For more information on Amazon Aurora, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBClusterParameterGroupCommandInput - {@link DeleteDBClusterParameterGroupCommandInput}
 * @returns {@link DeleteDBClusterParameterGroupCommandOutput}
 * @see {@link DeleteDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * `DBParameterGroupName` doesn't refer to an existing DB parameter group.
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *
 * The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To delete a DB cluster parameter group
 * ```javascript
 * // The following example deletes the specified DB cluster parameter group.
 * const input = {
 *   DBClusterParameterGroupName: "mydbclusterparametergroup"
 * };
 * const command = new DeleteDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBClusterParameterGroupCommand extends command<DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDBClusterParameterGroup",
  DeleteDBClusterParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterParameterGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteDBClusterParameterGroupCommandInput;
      output: DeleteDBClusterParameterGroupCommandOutput;
    };
  };
}
