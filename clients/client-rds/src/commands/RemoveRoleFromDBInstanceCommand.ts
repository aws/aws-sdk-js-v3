// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveRoleFromDBInstanceMessage } from "../models/models_1";
import { RemoveRoleFromDBInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates an Amazon Web Services Identity and Access Management (IAM) role from a DB instance.
 *
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
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link DBInstanceRoleNotFoundFault} (client fault)
 *
 * The specified `RoleArn` value doesn't match the specified feature for the DB instance.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @public
 */
export class RemoveRoleFromDBInstanceCommand extends command<RemoveRoleFromDBInstanceCommandInput, RemoveRoleFromDBInstanceCommandOutput>(
  _ep0,
  _mw0,
  "RemoveRoleFromDBInstance",
  RemoveRoleFromDBInstance$
) {
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
