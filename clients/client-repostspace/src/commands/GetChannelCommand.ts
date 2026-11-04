// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChannelInput, GetChannelOutput } from "../models/models_0";
import { GetChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChannelCommand}.
 */
export interface GetChannelCommandInput extends GetChannelInput {}
/**
 * @public
 *
 * The output of {@link GetChannelCommand}.
 */
export interface GetChannelCommandOutput extends GetChannelOutput, __MetadataBearer {}

/**
 * Displays information about a channel in a private re:Post.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, GetChannelCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, GetChannelCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // GetChannelInput
 *   spaceId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 * };
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelOutput
 * //   spaceId: "STRING_VALUE", // required
 * //   channelId: "STRING_VALUE", // required
 * //   channelName: "STRING_VALUE", // required
 * //   channelDescription: "STRING_VALUE",
 * //   createDateTime: new Date("TIMESTAMP"), // required
 * //   deleteDateTime: new Date("TIMESTAMP"),
 * //   channelRoles: { // ChannelRoles
 * //     "<keys>": [ // ChannelRoleList
 * //       "ASKER" || "EXPERT" || "MODERATOR" || "SUPPORTREQUESTOR",
 * //     ],
 * //   },
 * //   channelStatus: "CREATED" || "CREATING" || "CREATE_FAILED" || "DELETED" || "DELETING" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param GetChannelCommandInput - {@link GetChannelCommandInput}
 * @returns {@link GetChannelCommandOutput}
 * @see {@link GetChannelCommandInput} for command's `input` shape.
 * @see {@link GetChannelCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
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
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link RepostspaceServiceException}
 *
 * Base exception class for all service exceptions from Repostspace service.
 *
 * @example GetChannel
 * ```javascript
 * //
 * const input = {
 *   channelId: "WS1234567890abcdefghijkl",
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelDescription: "Useful channel description",
 *   channelId: "WS1234567890abcdefghijkl",
 *   channelName: "My First Channel",
 *   channelRoles: {
 *     12345678-1234-1234-1234-1234567890ab: [
 *       "ASKER"
 *     ]
 *   },
 *   channelStatus: "CREATED",
 *   createDateTime: "2025-02-13T18:49:13.713Z",
 *   spaceId: "SP1234567890abcdefghijkl"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetChannelCommand extends command<GetChannelCommandInput, GetChannelCommandOutput>(
  _ep0,
  _mw0,
  "GetChannel",
  GetChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelInput;
      output: GetChannelOutput;
    };
    sdk: {
      input: GetChannelCommandInput;
      output: GetChannelCommandOutput;
    };
  };
}
