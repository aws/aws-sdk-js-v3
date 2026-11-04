// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRoomRequest, CreateRoomResponse } from "../models/models_0";
import { CreateRoom$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRoomCommand}.
 */
export interface CreateRoomCommandInput extends CreateRoomRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoomCommand}.
 */
export interface CreateRoomCommandOutput extends CreateRoomResponse, __MetadataBearer {}

/**
 * Creates a chat room for the specified Amazon Chime Enterprise account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // CreateRoomRequest
 *   AccountId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateRoomCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoomResponse
 * //   Room: { // Room
 * //     RoomId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     CreatedBy: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRoomCommandInput - {@link CreateRoomCommandInput}
 * @returns {@link CreateRoomCommandOutput}
 * @see {@link CreateRoomCommandInput} for command's `input` shape.
 * @see {@link CreateRoomCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateRoomCommand extends command<CreateRoomCommandInput, CreateRoomCommandOutput>(
  _ep0,
  _mw0,
  "CreateRoom",
  CreateRoom$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoomRequest;
      output: CreateRoomResponse;
    };
    sdk: {
      input: CreateRoomCommandInput;
      output: CreateRoomCommandOutput;
    };
  };
}
