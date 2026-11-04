// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfiguredTableInput, DeleteConfiguredTableOutput } from "../models/models_0";
import { DeleteConfiguredTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableCommand}.
 */
export interface DeleteConfiguredTableCommandInput extends DeleteConfiguredTableInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableCommand}.
 */
export interface DeleteConfiguredTableCommandOutput extends DeleteConfiguredTableOutput, __MetadataBearer {}

/**
 * Deletes a configured table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableCommandInput - {@link DeleteConfiguredTableCommandInput}
 * @returns {@link DeleteConfiguredTableCommandOutput}
 * @see {@link DeleteConfiguredTableCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class DeleteConfiguredTableCommand extends command<DeleteConfiguredTableCommandInput, DeleteConfiguredTableCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfiguredTable",
  DeleteConfiguredTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredTableInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredTableCommandInput;
      output: DeleteConfiguredTableCommandOutput;
    };
  };
}
