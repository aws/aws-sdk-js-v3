// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveRoleFromDBClusterMessage } from "../models/models_0";
import { RemoveRoleFromDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveRoleFromDBClusterCommand}.
 */
export interface RemoveRoleFromDBClusterCommandInput extends RemoveRoleFromDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link RemoveRoleFromDBClusterCommand}.
 */
export interface RemoveRoleFromDBClusterCommandOutput extends __MetadataBearer {}

/**
 * Disassociates an Identity and Access Management (IAM) role from a DB cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RemoveRoleFromDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RemoveRoleFromDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // RemoveRoleFromDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE",
 * };
 * const command = new RemoveRoleFromDBClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveRoleFromDBClusterCommandInput - {@link RemoveRoleFromDBClusterCommandInput}
 * @returns {@link RemoveRoleFromDBClusterCommandOutput}
 * @see {@link RemoveRoleFromDBClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * *DBClusterIdentifier* does not refer to an existing DB cluster.
 *
 * @throws {@link DBClusterRoleNotFoundFault} (client fault)
 *
 * The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The DB cluster is not in a valid state.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class RemoveRoleFromDBClusterCommand extends command<RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput>(
  _ep0,
  _mw0,
  "RemoveRoleFromDBCluster",
  RemoveRoleFromDBCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveRoleFromDBClusterMessage;
      output: {};
    };
    sdk: {
      input: RemoveRoleFromDBClusterCommandInput;
      output: RemoveRoleFromDBClusterCommandOutput;
    };
  };
}
