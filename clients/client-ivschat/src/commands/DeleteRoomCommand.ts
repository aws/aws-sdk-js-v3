// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRoomRequest } from "../models/models_0";
import { DeleteRoom$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRoomCommand}.
 */
export interface DeleteRoomCommandInput extends DeleteRoomRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoomCommand}.
 */
export interface DeleteRoomCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified room.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DeleteRoomCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DeleteRoomCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // DeleteRoomRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoomCommandInput - {@link DeleteRoomCommandInput}
 * @returns {@link DeleteRoomCommandOutput}
 * @see {@link DeleteRoomCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link IvschatServiceException}
 *
 * Base exception class for all service exceptions from Ivschat service.
 *
 * @public
 */
export class DeleteRoomCommand extends command<DeleteRoomCommandInput, DeleteRoomCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRoom",
  DeleteRoom$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoomRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoomCommandInput;
      output: DeleteRoomCommandOutput;
    };
  };
}
