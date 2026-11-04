// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddRoleToDBClusterMessage } from "../models/models_0";
import { AddRoleToDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddRoleToDBClusterCommand}.
 */
export interface AddRoleToDBClusterCommandInput extends AddRoleToDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link AddRoleToDBClusterCommand}.
 */
export interface AddRoleToDBClusterCommandOutput extends __MetadataBearer {}

/**
 * Associates an Identity and Access Management (IAM) role with a DB cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // AddRoleToDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE",
 * };
 * const command = new AddRoleToDBClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRoleToDBClusterCommandInput - {@link AddRoleToDBClusterCommandInput}
 * @returns {@link AddRoleToDBClusterCommandOutput}
 * @see {@link AddRoleToDBClusterCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBClusterRoleAlreadyExistsFault} (client fault)
 *
 * The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.
 *
 * @throws {@link DBClusterRoleQuotaExceededFault} (client fault)
 *
 * You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To associate an AWS Identity and Access Management (IAM) role with a DB cluster
 * ```javascript
 * // The following example associates a role with a DB cluster.
 * const input = {
 *   DBClusterIdentifier: "mydbcluster",
 *   RoleArn: "arn:aws:iam::123456789012:role/RDSLoadFromS3"
 * };
 * const command = new AddRoleToDBClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddRoleToDBClusterCommand extends command<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput>(
  _ep0,
  _mw0,
  "AddRoleToDBCluster",
  AddRoleToDBCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddRoleToDBClusterMessage;
      output: {};
    };
    sdk: {
      input: AddRoleToDBClusterCommandInput;
      output: AddRoleToDBClusterCommandOutput;
    };
  };
}
