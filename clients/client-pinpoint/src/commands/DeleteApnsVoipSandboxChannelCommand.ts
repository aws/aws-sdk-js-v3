// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteApnsVoipSandboxChannelRequest, DeleteApnsVoipSandboxChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_DeleteApnsVoipSandboxChannelCommand,
  se_DeleteApnsVoipSandboxChannelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApnsVoipSandboxChannelCommand}.
 */
export interface DeleteApnsVoipSandboxChannelCommandInput extends DeleteApnsVoipSandboxChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApnsVoipSandboxChannelCommand}.
 */
export interface DeleteApnsVoipSandboxChannelCommandOutput
  extends DeleteApnsVoipSandboxChannelResponse,
    __MetadataBearer {}

/**
 * <p>Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteApnsVoipSandboxChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApnsVoipSandboxChannelResponse
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
 * @param DeleteApnsVoipSandboxChannelCommandInput - {@link DeleteApnsVoipSandboxChannelCommandInput}
 * @returns {@link DeleteApnsVoipSandboxChannelCommandOutput}
 * @see {@link DeleteApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
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
export class DeleteApnsVoipSandboxChannelCommand extends $Command
  .classBuilder<
    DeleteApnsVoipSandboxChannelCommandInput,
    DeleteApnsVoipSandboxChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "DeleteApnsVoipSandboxChannel", {})
  .n("PinpointClient", "DeleteApnsVoipSandboxChannelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteApnsVoipSandboxChannelCommand)
  .de(de_DeleteApnsVoipSandboxChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApnsVoipSandboxChannelRequest;
      output: DeleteApnsVoipSandboxChannelResponse;
    };
    sdk: {
      input: DeleteApnsVoipSandboxChannelCommandInput;
      output: DeleteApnsVoipSandboxChannelCommandOutput;
    };
  };
}
