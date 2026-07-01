// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAutonomousDatabaseInput, DeleteAutonomousDatabaseOutput } from "../models/models_0";
import { DeleteAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAutonomousDatabaseCommand}.
 */
export interface DeleteAutonomousDatabaseCommandInput extends DeleteAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link DeleteAutonomousDatabaseCommand}.
 */
export interface DeleteAutonomousDatabaseCommandOutput extends DeleteAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteAutonomousDatabaseInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutonomousDatabaseCommandInput - {@link DeleteAutonomousDatabaseCommandInput}
 * @returns {@link DeleteAutonomousDatabaseCommandOutput}
 * @see {@link DeleteAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteAutonomousDatabaseCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class DeleteAutonomousDatabaseCommand extends command<DeleteAutonomousDatabaseCommandInput, DeleteAutonomousDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAutonomousDatabase",
  DeleteAutonomousDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutonomousDatabaseInput;
      output: {};
    };
    sdk: {
      input: DeleteAutonomousDatabaseCommandInput;
      output: DeleteAutonomousDatabaseCommandOutput;
    };
  };
}
