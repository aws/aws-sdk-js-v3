// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveRoleFromDBClusterMessage } from "../models/models_1";
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
 * Removes the asssociation of an Amazon Web Services Identity and Access Management (IAM) role from a DB cluster.
 *
 * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveRoleFromDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveRoleFromDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBClusterRoleNotFoundFault} (client fault)
 *
 * The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To disassociate an Identity and Access Management (IAM) role from a DB cluster
 * ```javascript
 * // The following example removes a role from a DB cluster.
 * const input = {
 *   DBClusterIdentifier: "mydbcluster",
 *   RoleArn: "arn:aws:iam::123456789012:role/RDSLoadFromS3"
 * };
 * const command = new RemoveRoleFromDBClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
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
