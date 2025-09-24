// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateChannelInput, UpdateChannelOutput } from "../models/models_0";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";
import { UpdateChannel } from "../schemas/schemas_1_Channel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandInput extends UpdateChannelInput {}
/**
 * @public
 *
 * The output of {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandOutput extends UpdateChannelOutput, __MetadataBearer {}

/**
 * <p>Modifies an existing channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, UpdateChannelCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, UpdateChannelCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // UpdateChannelInput
 *   spaceId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 *   channelName: "STRING_VALUE", // required
 *   channelDescription: "STRING_VALUE",
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateChannelCommandInput - {@link UpdateChannelCommandInput}
 * @returns {@link UpdateChannelCommandOutput}
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @example UpdateChannel
 * ```javascript
 * //
 * const input = {
 *   channelDescription: "Better channel description",
 *   channelId: "WS1234567890abcdefghijkl",
 *   channelName: "Better Channel",
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateChannelCommand extends $Command
  .classBuilder<
    UpdateChannelCommandInput,
    UpdateChannelCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RepostSpace", "UpdateChannel", {})
  .n("RepostspaceClient", "UpdateChannelCommand")
  .sc(UpdateChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelInput;
      output: {};
    };
    sdk: {
      input: UpdateChannelCommandInput;
      output: UpdateChannelCommandOutput;
    };
  };
}
