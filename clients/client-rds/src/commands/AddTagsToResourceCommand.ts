// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AddTagsToResourceMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AddTagsToResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds metadata tags to an Amazon RDS resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon RDS resources, or used in a Condition statement in an IAM policy for Amazon RDS.</p>
 *          <p>For an overview on tagging your relational database resources,
 *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a>
 *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS Resources</a>.
 *         </p>
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
 *  <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBShardGroupNotFoundFault} (client fault)
 *  <p>The specified DB shard group name wasn't found.</p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link DBSnapshotTenantDatabaseNotFoundFault} (client fault)
 *  <p>The specified snapshot tenant database wasn't found.</p>
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The specified integration could not be found.</p>
 *
 * @throws {@link InvalidDBClusterEndpointStateFault} (client fault)
 *  <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link TenantDatabaseNotFoundFault} (client fault)
 *  <p>The specified tenant database wasn't found in the DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
export class AddTagsToResourceCommand extends $Command
  .classBuilder<
    AddTagsToResourceCommandInput,
    AddTagsToResourceCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "AddTagsToResource", {})
  .n("RDSClient", "AddTagsToResourceCommand")
  .sc(AddTagsToResource$)
  .build() {
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
