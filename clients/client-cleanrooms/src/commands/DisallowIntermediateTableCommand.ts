// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisallowIntermediateTableInput, DisallowIntermediateTableOutput } from "../models/models_1";
import { DisallowIntermediateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisallowIntermediateTableCommand}.
 */
export interface DisallowIntermediateTableCommandInput extends DisallowIntermediateTableInput {}
/**
 * @public
 *
 * The output of {@link DisallowIntermediateTableCommand}.
 */
export interface DisallowIntermediateTableCommandOutput extends DisallowIntermediateTableOutput, __MetadataBearer {}

/**
 * Marks an intermediate table as invalid when it references the caller's base table. The data provider (base table owner) calls this operation, not the intermediate table owner. By default, the operation also marks all descendant intermediate tables as invalid.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DisallowIntermediateTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DisallowIntermediateTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DisallowIntermediateTableInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableName: "STRING_VALUE", // required
 *   includeDescendants: true || false,
 * };
 * const command = new DisallowIntermediateTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisallowIntermediateTableCommandInput - {@link DisallowIntermediateTableCommandInput}
 * @returns {@link DisallowIntermediateTableCommandOutput}
 * @see {@link DisallowIntermediateTableCommandInput} for command's `input` shape.
 * @see {@link DisallowIntermediateTableCommandOutput} for command's `response` shape.
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
export class DisallowIntermediateTableCommand extends command<DisallowIntermediateTableCommandInput, DisallowIntermediateTableCommandOutput>(
  _ep0,
  _mw0,
  "DisallowIntermediateTable",
  DisallowIntermediateTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisallowIntermediateTableInput;
      output: {};
    };
    sdk: {
      input: DisallowIntermediateTableCommandInput;
      output: DisallowIntermediateTableCommandOutput;
    };
  };
}
