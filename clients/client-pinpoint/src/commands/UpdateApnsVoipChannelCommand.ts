// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApnsVoipChannelRequest, UpdateApnsVoipChannelResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApnsVoipChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApnsVoipChannelCommand}.
 */
export interface UpdateApnsVoipChannelCommandInput extends UpdateApnsVoipChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApnsVoipChannelCommand}.
 */
export interface UpdateApnsVoipChannelCommandOutput extends UpdateApnsVoipChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateApnsVoipChannelRequest
 *   APNSVoipChannelRequest: { // APNSVoipChannelRequest
 *     BundleId: "STRING_VALUE",
 *     Certificate: "STRING_VALUE",
 *     DefaultAuthenticationMethod: "STRING_VALUE",
 *     Enabled: true || false,
 *     PrivateKey: "STRING_VALUE",
 *     TeamId: "STRING_VALUE",
 *     TokenKey: "STRING_VALUE",
 *     TokenKeyId: "STRING_VALUE",
 *   },
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new UpdateApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApnsVoipChannelResponse
 * //   APNSVoipChannelResponse: { // APNSVoipChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     DefaultAuthenticationMethod: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     HasTokenKey: true || false,
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
 * @param UpdateApnsVoipChannelCommandInput - {@link UpdateApnsVoipChannelCommandInput}
 * @returns {@link UpdateApnsVoipChannelCommandOutput}
 * @see {@link UpdateApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsVoipChannelCommandOutput} for command's `response` shape.
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
export class UpdateApnsVoipChannelCommand extends $Command
  .classBuilder<
    UpdateApnsVoipChannelCommandInput,
    UpdateApnsVoipChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateApnsVoipChannel", {})
  .n("PinpointClient", "UpdateApnsVoipChannelCommand")
  .sc(UpdateApnsVoipChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApnsVoipChannelRequest;
      output: UpdateApnsVoipChannelResponse;
    };
    sdk: {
      input: UpdateApnsVoipChannelCommandInput;
      output: UpdateApnsVoipChannelCommandOutput;
    };
  };
}
