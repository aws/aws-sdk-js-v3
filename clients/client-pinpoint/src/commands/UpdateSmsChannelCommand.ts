// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSmsChannelRequest, UpdateSmsChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateSmsChannel } from "../schemas/schemas_13_SmsChannel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSmsChannelCommand}.
 */
export interface UpdateSmsChannelCommandInput extends UpdateSmsChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSmsChannelCommand}.
 */
export interface UpdateSmsChannelCommandOutput extends UpdateSmsChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateSmsChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SMSChannelRequest: { // SMSChannelRequest
 *     Enabled: true || false,
 *     SenderId: "STRING_VALUE",
 *     ShortCode: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSmsChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSmsChannelResponse
 * //   SMSChannelResponse: { // SMSChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     PromotionalMessagesPerSecond: Number("int"),
 * //     SenderId: "STRING_VALUE",
 * //     ShortCode: "STRING_VALUE",
 * //     TransactionalMessagesPerSecond: Number("int"),
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSmsChannelCommandInput - {@link UpdateSmsChannelCommandInput}
 * @returns {@link UpdateSmsChannelCommandOutput}
 * @see {@link UpdateSmsChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSmsChannelCommandOutput} for command's `response` shape.
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
export class UpdateSmsChannelCommand extends $Command
  .classBuilder<
    UpdateSmsChannelCommandInput,
    UpdateSmsChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateSmsChannel", {})
  .n("PinpointClient", "UpdateSmsChannelCommand")
  .sc(UpdateSmsChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSmsChannelRequest;
      output: UpdateSmsChannelResponse;
    };
    sdk: {
      input: UpdateSmsChannelCommandInput;
      output: UpdateSmsChannelCommandOutput;
    };
  };
}
