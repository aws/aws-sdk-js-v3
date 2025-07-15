// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChannelInput, GetChannelOutput, GetChannelOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetChannelCommand, se_GetChannelCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Displays information about a channel in a private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, GetChannelCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, GetChannelCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
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
export class GetChannelCommand extends $Command
  .classBuilder<
    GetChannelCommandInput,
    GetChannelCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RepostSpace", "GetChannel", {})
  .n("RepostspaceClient", "GetChannelCommand")
  .f(void 0, GetChannelOutputFilterSensitiveLog)
  .ser(se_GetChannelCommand)
  .de(de_GetChannelCommand)
  .build() {
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
