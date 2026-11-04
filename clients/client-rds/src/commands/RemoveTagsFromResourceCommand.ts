// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveTagsFromResourceMessage } from "../models/models_1";
import { RemoveTagsFromResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveTagsFromResourceCommand}.
 */
export interface RemoveTagsFromResourceCommandInput extends RemoveTagsFromResourceMessage {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromResourceCommand}.
 */
export interface RemoveTagsFromResourceCommandOutput extends __MetadataBearer {}

/**
 * Removes metadata tags from an Amazon RDS resource.
 *
 * For an overview on tagging an Amazon RDS resource, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveTagsFromResourceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveTagsFromResourceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RemoveTagsFromResourceMessage
 *   ResourceName: "STRING_VALUE", // required
 *   TagKeys: [ // KeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsFromResourceCommandInput - {@link RemoveTagsFromResourceCommandInput}
 * @returns {@link RemoveTagsFromResourceCommandOutput}
 * @see {@link RemoveTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentNotFoundFault} (client fault)
 *
 * `BlueGreenDeploymentIdentifier` doesn't refer to an existing blue/green deployment.
 *
 * @throws {@link DBCapacityReservationNotFoundFault} (client fault)
 *
 * `DBCapacityReservationIdentifier` doesn't refer to an existing DB capacity reservation.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *
 * The DB proxy endpoint doesn't exist.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *
 * The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *
 * The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @throws {@link DBShardGroupNotFoundFault} (client fault)
 *
 * The specified DB shard group name wasn't found.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *
 * `DBSnapshotIdentifier` doesn't refer to an existing DB snapshot.
 *
 * @throws {@link DBSnapshotTenantDatabaseNotFoundFault} (client fault)
 *
 * The specified snapshot tenant database wasn't found.
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *
 * The specified integration could not be found.
 *
 * @throws {@link InvalidDBClusterEndpointStateFault} (client fault)
 *
 * The requested operation can't be performed on the endpoint while the endpoint is in this state.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
 *
 * @throws {@link TenantDatabaseNotFoundFault} (client fault)
 *
 * The specified tenant database wasn't found in the DB instance.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To remove tags from a resource
 * ```javascript
 * // The following example removes tags from a resource.
 * const input = {
 *   ResourceName: "arn:aws:rds:us-east-1:123456789012:db:mydbinstance",
 *   TagKeys: [
 *     "Name",
 *     "Environment"
 *   ]
 * };
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveTagsFromResourceCommand extends command<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput>(
  _ep0,
  _mw0,
  "RemoveTagsFromResource",
  RemoveTagsFromResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsFromResourceMessage;
      output: {};
    };
    sdk: {
      input: RemoveTagsFromResourceCommandInput;
      output: RemoveTagsFromResourceCommandOutput;
    };
  };
}
