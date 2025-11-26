// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateChannelInput, CreateChannelOutput } from "../models/models_0";
import type { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";
import { CreateChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelInput {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelOutput, __MetadataBearer {}

/**
 * <p>Creates a channel in an AWS re:Post Private private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, CreateChannelCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, CreateChannelCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // CreateChannelInput
 *   spaceId: "STRING_VALUE", // required
 *   channelName: "STRING_VALUE", // required
 *   channelDescription: "STRING_VALUE",
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelOutput
 * //   channelId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
 * @example CreateChannel
 * ```javascript
 * //
 * const input = {
 *   channelDescription: "Useful channel description",
 *   channelName: "My First Channel",
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelId: "WS1234567890abcdefghijkl"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateChannelCommand extends $Command
  .classBuilder<
    CreateChannelCommandInput,
    CreateChannelCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RepostSpace", "CreateChannel", {})
  .n("RepostspaceClient", "CreateChannelCommand")
  .sc(CreateChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelInput;
      output: CreateChannelOutput;
    };
    sdk: {
      input: CreateChannelCommandInput;
      output: CreateChannelCommandOutput;
    };
  };
}
