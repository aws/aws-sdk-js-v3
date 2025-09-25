// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetApnsVoipSandboxChannelRequest, GetApnsVoipSandboxChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApnsVoipSandboxChannel } from "../schemas/schemas_3_VoipSandboxChannel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApnsVoipSandboxChannelCommand}.
 */
export interface GetApnsVoipSandboxChannelCommandInput extends GetApnsVoipSandboxChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetApnsVoipSandboxChannelCommand}.
 */
export interface GetApnsVoipSandboxChannelCommandOutput extends GetApnsVoipSandboxChannelResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetApnsVoipSandboxChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetApnsVoipSandboxChannelResponse
 * //   APNSVoipSandboxChannelResponse: { // APNSVoipSandboxChannelResponse
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
 * @param GetApnsVoipSandboxChannelCommandInput - {@link GetApnsVoipSandboxChannelCommandInput}
 * @returns {@link GetApnsVoipSandboxChannelCommandOutput}
 * @see {@link GetApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
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
export class GetApnsVoipSandboxChannelCommand extends $Command
  .classBuilder<
    GetApnsVoipSandboxChannelCommandInput,
    GetApnsVoipSandboxChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetApnsVoipSandboxChannel", {})
  .n("PinpointClient", "GetApnsVoipSandboxChannelCommand")
  .sc(GetApnsVoipSandboxChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApnsVoipSandboxChannelRequest;
      output: GetApnsVoipSandboxChannelResponse;
    };
    sdk: {
      input: GetApnsVoipSandboxChannelCommandInput;
      output: GetApnsVoipSandboxChannelCommandOutput;
    };
  };
}
