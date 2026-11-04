// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddRoleToDBInstanceMessage } from "../models/models_0";
import { AddRoleToDBInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Associates an Amazon Web Services Identity and Access Management (IAM) role with a DB instance.
 *
 * > **Note:** To add a role to a DB instance, the status of the DB instance must be `available`.
 *
 * This command doesn't apply to RDS Custom.
 *
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
 *
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @throws {@link DBInstanceRoleAlreadyExistsFault} (client fault)
 *
 * The specified `RoleArn` or `FeatureName` value is already associated with the DB instance.
 *
 * @throws {@link DBInstanceRoleQuotaExceededFault} (client fault)
 *
 * You can't associate any more Amazon Web Services Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
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
export class AddRoleToDBInstanceCommand extends command<AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput>(
  _ep0,
  _mw0,
  "AddRoleToDBInstance",
  AddRoleToDBInstance$
) {
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
