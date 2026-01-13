// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateVoiceChannelRequest, UpdateVoiceChannelResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateVoiceChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVoiceChannelCommand}.
 */
export interface UpdateVoiceChannelCommandInput extends UpdateVoiceChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceChannelCommand}.
 */
export interface UpdateVoiceChannelCommandOutput extends UpdateVoiceChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the voice channel for an application or updates the status and settings of the voice channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateVoiceChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   VoiceChannelRequest: { // VoiceChannelRequest
 *     Enabled: true || false,
 *   },
 * };
 * const command = new UpdateVoiceChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceChannelResponse
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
 * @param UpdateVoiceChannelCommandInput - {@link UpdateVoiceChannelCommandInput}
 * @returns {@link UpdateVoiceChannelCommandOutput}
 * @see {@link UpdateVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceChannelCommandOutput} for command's `response` shape.
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
export class UpdateVoiceChannelCommand extends $Command
  .classBuilder<
    UpdateVoiceChannelCommandInput,
    UpdateVoiceChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateVoiceChannel", {})
  .n("PinpointClient", "UpdateVoiceChannelCommand")
  .sc(UpdateVoiceChannel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVoiceChannelRequest;
      output: UpdateVoiceChannelResponse;
    };
    sdk: {
      input: UpdateVoiceChannelCommandInput;
      output: UpdateVoiceChannelCommandOutput;
    };
  };
}
