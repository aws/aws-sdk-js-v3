// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIdMappingTableInput, DeleteIdMappingTableOutput } from "../models/models_0";
import { DeleteIdMappingTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIdMappingTableCommand}.
 */
export interface DeleteIdMappingTableCommandInput extends DeleteIdMappingTableInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdMappingTableCommand}.
 */
export interface DeleteIdMappingTableCommandOutput extends DeleteIdMappingTableOutput, __MetadataBearer {}

/**
 * Deletes an ID mapping table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteIdMappingTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteIdMappingTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteIdMappingTableInput
 *   idMappingTableIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdMappingTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdMappingTableCommandInput - {@link DeleteIdMappingTableCommandInput}
 * @returns {@link DeleteIdMappingTableCommandOutput}
 * @see {@link DeleteIdMappingTableCommandInput} for command's `input` shape.
 * @see {@link DeleteIdMappingTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
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
export class DeleteIdMappingTableCommand extends command<DeleteIdMappingTableCommandInput, DeleteIdMappingTableCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdMappingTable",
  DeleteIdMappingTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdMappingTableInput;
      output: {};
    };
    sdk: {
      input: DeleteIdMappingTableCommandInput;
      output: DeleteIdMappingTableCommandOutput;
    };
  };
}
