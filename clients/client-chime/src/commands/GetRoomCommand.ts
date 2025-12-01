// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRoomRequest, GetRoomResponse } from "../models/models_0";
import { GetRoom } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRoomCommand}.
 */
export interface GetRoomCommandInput extends GetRoomRequest {}
/**
 * @public
 *
 * The output of {@link GetRoomCommand}.
 */
export interface GetRoomCommandOutput extends GetRoomResponse, __MetadataBearer {}

/**
 * <p>Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // GetRoomRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 * };
 * const command = new GetRoomCommand(input);
 * const response = await client.send(command);
 * // { // GetRoomResponse
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
 * @param GetRoomCommandInput - {@link GetRoomCommandInput}
 * @returns {@link GetRoomCommandOutput}
 * @see {@link GetRoomCommandInput} for command's `input` shape.
 * @see {@link GetRoomCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class GetRoomCommand extends $Command
  .classBuilder<
    GetRoomCommandInput,
    GetRoomCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "GetRoom", {})
  .n("ChimeClient", "GetRoomCommand")
  .sc(GetRoom)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoomRequest;
      output: GetRoomResponse;
    };
    sdk: {
      input: GetRoomCommandInput;
      output: GetRoomCommandOutput;
    };
  };
}
