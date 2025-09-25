// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGcmChannelRequest, UpdateGcmChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateGcmChannel } from "../schemas/schemas_5_Gcm";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGcmChannelCommand}.
 */
export interface UpdateGcmChannelCommandInput extends UpdateGcmChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGcmChannelCommand}.
 */
export interface UpdateGcmChannelCommandOutput extends UpdateGcmChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateGcmChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   GCMChannelRequest: { // GCMChannelRequest
 *     ApiKey: "STRING_VALUE",
 *     DefaultAuthenticationMethod: "STRING_VALUE",
 *     Enabled: true || false,
 *     ServiceJson: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateGcmChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGcmChannelResponse
 * //   GCMChannelResponse: { // GCMChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Credential: "STRING_VALUE",
 * //     DefaultAuthenticationMethod: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     HasFcmServiceCredentials: true || false,
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
 * @param UpdateGcmChannelCommandInput - {@link UpdateGcmChannelCommandInput}
 * @returns {@link UpdateGcmChannelCommandOutput}
 * @see {@link UpdateGcmChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateGcmChannelCommandOutput} for command's `response` shape.
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
export class UpdateGcmChannelCommand extends $Command
  .classBuilder<
    UpdateGcmChannelCommandInput,
    UpdateGcmChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateGcmChannel", {})
  .n("PinpointClient", "UpdateGcmChannelCommand")
  .sc(UpdateGcmChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGcmChannelRequest;
      output: UpdateGcmChannelResponse;
    };
    sdk: {
      input: UpdateGcmChannelCommandInput;
      output: UpdateGcmChannelCommandOutput;
    };
  };
}
