// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVoiceChannelRequest, DeleteVoiceChannelResponse } from "../models/models_0";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteVoiceChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceChannelCommand}.
 */
export interface DeleteVoiceChannelCommandInput extends DeleteVoiceChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceChannelCommand}.
 */
export interface DeleteVoiceChannelCommandOutput extends DeleteVoiceChannelResponse, __MetadataBearer {}

/**
 * <p>Disables the voice channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteVoiceChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVoiceChannelResponse
 * //   VoiceChannelResponse: { // VoiceChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVoiceChannelCommandInput - {@link DeleteVoiceChannelCommandInput}
 * @returns {@link DeleteVoiceChannelCommandOutput}
 * @see {@link DeleteVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class DeleteVoiceChannelCommand extends $Command
  .classBuilder<
    DeleteVoiceChannelCommandInput,
    DeleteVoiceChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "DeleteVoiceChannel", {})
  .n("PinpointClient", "DeleteVoiceChannelCommand")
  .sc(DeleteVoiceChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceChannelRequest;
      output: DeleteVoiceChannelResponse;
    };
    sdk: {
      input: DeleteVoiceChannelCommandInput;
      output: DeleteVoiceChannelCommandOutput;
    };
  };
}
