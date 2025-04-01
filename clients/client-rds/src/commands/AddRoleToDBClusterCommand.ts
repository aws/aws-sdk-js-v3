// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddRoleToDBClusterMessage } from "../models/models_0";
import { de_AddRoleToDBClusterCommand, se_AddRoleToDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates an Identity and Access Management (IAM) role with a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
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
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterRoleAlreadyExistsFault} (client fault)
 *  <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 *
 * @throws {@link DBClusterRoleQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
export class AddRoleToDBClusterCommand extends $Command
  .classBuilder<
    AddRoleToDBClusterCommandInput,
    AddRoleToDBClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "AddRoleToDBCluster", {})
  .n("RDSClient", "AddRoleToDBClusterCommand")
  .f(void 0, void 0)
  .ser(se_AddRoleToDBClusterCommand)
  .de(de_AddRoleToDBClusterCommand)
  .build() {
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
