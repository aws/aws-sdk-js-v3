// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteApnsSandboxChannelRequest, DeleteApnsSandboxChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_DeleteApnsSandboxChannelCommand, se_DeleteApnsSandboxChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApnsSandboxChannelCommand}.
 */
export interface DeleteApnsSandboxChannelCommandInput extends DeleteApnsSandboxChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApnsSandboxChannelCommand}.
 */
export interface DeleteApnsSandboxChannelCommandOutput extends DeleteApnsSandboxChannelResponse, __MetadataBearer {}

/**
 * <p>Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // DeleteApnsSandboxChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApnsSandboxChannelResponse
 * //   APNSSandboxChannelResponse: { // APNSSandboxChannelResponse
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
 * @param DeleteApnsSandboxChannelCommandInput - {@link DeleteApnsSandboxChannelCommandInput}
 * @returns {@link DeleteApnsSandboxChannelCommandOutput}
 * @see {@link DeleteApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsSandboxChannelCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteApnsSandboxChannelCommand extends $Command
  .classBuilder<
    DeleteApnsSandboxChannelCommandInput,
    DeleteApnsSandboxChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "DeleteApnsSandboxChannel", {})
  .n("PinpointClient", "DeleteApnsSandboxChannelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteApnsSandboxChannelCommand)
  .de(de_DeleteApnsSandboxChannelCommand)
  .build() {}
