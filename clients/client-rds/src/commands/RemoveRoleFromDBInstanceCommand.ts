// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveRoleFromDBInstanceMessage } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveRoleFromDBInstance } from "../schemas/schemas_63_RemoveRoleFromDBInstance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveRoleFromDBInstanceCommand}.
 */
export interface RemoveRoleFromDBInstanceCommandInput extends RemoveRoleFromDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link RemoveRoleFromDBInstanceCommand}.
 */
export interface RemoveRoleFromDBInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveRoleFromDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveRoleFromDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RemoveRoleFromDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE", // required
 * };
 * const command = new RemoveRoleFromDBInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveRoleFromDBInstanceCommandInput - {@link RemoveRoleFromDBInstanceCommandInput}
 * @returns {@link RemoveRoleFromDBInstanceCommandOutput}
 * @see {@link RemoveRoleFromDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBInstanceRoleNotFoundFault} (client fault)
 *  <p>The specified <code>RoleArn</code> value doesn't match the specified feature for
 *             the DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class RemoveRoleFromDBInstanceCommand extends $Command
  .classBuilder<
    RemoveRoleFromDBInstanceCommandInput,
    RemoveRoleFromDBInstanceCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "RemoveRoleFromDBInstance", {})
  .n("RDSClient", "RemoveRoleFromDBInstanceCommand")
  .sc(RemoveRoleFromDBInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveRoleFromDBInstanceMessage;
      output: {};
    };
    sdk: {
      input: RemoveRoleFromDBInstanceCommandInput;
      output: RemoveRoleFromDBInstanceCommandOutput;
    };
  };
}
