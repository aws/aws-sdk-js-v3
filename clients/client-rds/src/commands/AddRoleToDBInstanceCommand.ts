// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddRoleToDBInstanceMessage } from "../models/models_0";
import { de_AddRoleToDBInstanceCommand, se_AddRoleToDBInstanceCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddRoleToDBInstanceCommand}.
 */
export interface AddRoleToDBInstanceCommandInput extends AddRoleToDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link AddRoleToDBInstanceCommand}.
 */
export interface AddRoleToDBInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.</p>
 *          <note>
 *             <p>To add a role to a DB instance, the status of the DB instance must be <code>available</code>.</p>
 *          </note>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // AddRoleToDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE", // required
 * };
 * const command = new AddRoleToDBInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddRoleToDBInstanceCommandInput - {@link AddRoleToDBInstanceCommandInput}
 * @returns {@link AddRoleToDBInstanceCommandOutput}
 * @see {@link AddRoleToDBInstanceCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBInstanceRoleAlreadyExistsFault} (client fault)
 *  <p>The specified <code>RoleArn</code> or <code>FeatureName</code> value is already associated with the DB instance.</p>
 *
 * @throws {@link DBInstanceRoleQuotaExceededFault} (client fault)
 *  <p>You can't associate any more Amazon Web Services Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To associate an AWS Identity and Access Management (IAM) role with a DB instance
 * ```javascript
 * // The following example adds the role to a DB instance named test-instance.
 * const input = {
 *   DBInstanceIdentifier: "test-instance",
 *   FeatureName: "S3_INTEGRATION",
 *   RoleArn: "arn:aws:iam::111122223333:role/rds-s3-integration-role"
 * };
 * const command = new AddRoleToDBInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddRoleToDBInstanceCommand extends $Command
  .classBuilder<
    AddRoleToDBInstanceCommandInput,
    AddRoleToDBInstanceCommandOutput,
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
  .s("AmazonRDSv19", "AddRoleToDBInstance", {})
  .n("RDSClient", "AddRoleToDBInstanceCommand")
  .f(void 0, void 0)
  .ser(se_AddRoleToDBInstanceCommand)
  .de(de_AddRoleToDBInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddRoleToDBInstanceMessage;
      output: {};
    };
    sdk: {
      input: AddRoleToDBInstanceCommandInput;
      output: AddRoleToDBInstanceCommandOutput;
    };
  };
}
