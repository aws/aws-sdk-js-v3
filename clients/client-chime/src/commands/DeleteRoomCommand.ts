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
 * Deletes a chat room in an Amazon Chime Enterprise account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // DeleteRoomRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
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
