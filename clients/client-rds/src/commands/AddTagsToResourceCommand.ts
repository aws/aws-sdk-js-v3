// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsToResourceMessage } from "../models/models_0";
import { AddTagsToResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandInput extends AddTagsToResourceMessage {}
/**
 * @public
 *
 * The output of {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandOutput extends __MetadataBearer {}

/**
 * Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.
 *
 * For an overview on tagging your relational database resources, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) or [Tagging Amazon Aurora and Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddTagsToResourceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddTagsToResourceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // AddTagsToResourceMessage
 *   ResourceName: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToResourceCommandInput - {@link AddTagsToResourceCommandInput}
 * @returns {@link AddTagsToResourceCommandOutput}
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
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
 * @example To add tags to a resource
 * ```javascript
 * // This example adds a tag to an option group.
 * const input = {
 *   ResourceName: "arn:aws:rds:us-east-1:992648334831:og:mymysqloptiongroup",
 *   Tags: [
 *     {
 *       Key: "Staging",
 *       Value: "LocationDB"
 *     }
 *   ]
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddTagsToResourceCommand extends command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>(
  _ep0,
  _mw0,
  "AddTagsToResource",
  AddTagsToResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsToResourceMessage;
      output: {};
    };
    sdk: {
      input: AddTagsToResourceCommandInput;
      output: AddTagsToResourceCommandOutput;
    };
  };
}
