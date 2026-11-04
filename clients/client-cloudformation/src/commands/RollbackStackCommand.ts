// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RollbackStackInput, RollbackStackOutput } from "../models/models_0";
import { RollbackStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RollbackStackCommand}.
 */
export interface RollbackStackCommandInput extends RollbackStackInput {}
/**
 * @public
 *
 * The output of {@link RollbackStackCommand}.
 */
export interface RollbackStackCommandOutput extends RollbackStackOutput, __MetadataBearer {}

/**
 * When specifying `RollbackStack`, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the DescribeStacks operation.
 *
 * Rolls back the specified stack to the last known stable state from `CREATE_FAILED` or `UPDATE_FAILED` stack statuses.
 *
 * This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a `*_COMPLETE`. This includes the following stack statuses.
 *
 * - `CREATE_COMPLETE`
 * - `UPDATE_COMPLETE`
 * - `UPDATE_ROLLBACK_COMPLETE`
 * - `IMPORT_COMPLETE`
 * - `IMPORT_ROLLBACK_COMPLETE`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RollbackStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RollbackStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // RollbackStackInput
 *   StackName: "STRING_VALUE", // required
 *   RoleARN: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   RetainExceptOnCreate: true || false,
 *   DeploymentConfig: { // DeploymentConfig
 *     Mode: "STANDARD" || "EXPRESS",
 *     DisableRollback: true || false,
 *   },
 * };
 * const command = new RollbackStackCommand(input);
 * const response = await client.send(command);
 * // { // RollbackStackOutput
 * //   StackId: "STRING_VALUE",
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RollbackStackCommandInput - {@link RollbackStackCommandInput}
 * @returns {@link RollbackStackCommandOutput}
 * @see {@link RollbackStackCommandInput} for command's `input` shape.
 * @see {@link RollbackStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *
 * A client request token already exists.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class RollbackStackCommand extends command<RollbackStackCommandInput, RollbackStackCommandOutput>(
  _ep0,
  _mw0,
  "RollbackStack",
  RollbackStack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackStackInput;
      output: RollbackStackOutput;
    };
    sdk: {
      input: RollbackStackCommandInput;
      output: RollbackStackCommandOutput;
    };
  };
}
