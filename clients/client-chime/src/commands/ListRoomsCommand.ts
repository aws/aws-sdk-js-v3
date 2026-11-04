// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRoomsRequest, ListRoomsResponse } from "../models/models_0";
import { ListRooms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRoomsCommand}.
 */
export interface ListRoomsCommandInput extends ListRoomsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoomsCommand}.
 */
export interface ListRoomsCommandOutput extends ListRoomsResponse, __MetadataBearer {}

/**
 * Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListRoomsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListRoomsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListRoomsRequest
 *   AccountId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRoomsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoomsResponse
 * //   Rooms: [ // RoomList
 * //     { // Room
 * //       RoomId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoomsCommandInput - {@link ListRoomsCommandInput}
 * @returns {@link ListRoomsCommandOutput}
 * @see {@link ListRoomsCommandInput} for command's `input` shape.
 * @see {@link ListRoomsCommandOutput} for command's `response` shape.
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
export class ListRoomsCommand extends command<ListRoomsCommandInput, ListRoomsCommandOutput>(
  _ep0,
  _mw0,
  "ListRooms",
  ListRooms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoomsRequest;
      output: ListRoomsResponse;
    };
    sdk: {
      input: ListRoomsCommandInput;
      output: ListRoomsCommandOutput;
    };
  };
}
