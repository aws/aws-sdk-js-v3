// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountSendingAttributesRequest, PutAccountSendingAttributesResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_PutAccountSendingAttributesCommand,
  se_PutAccountSendingAttributesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSendingAttributesCommand}.
 */
export interface PutAccountSendingAttributesCommandInput extends PutAccountSendingAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSendingAttributesCommand}.
 */
export interface PutAccountSendingAttributesCommandOutput
  extends PutAccountSendingAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable the ability of your account to send email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutAccountSendingAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutAccountSendingAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // PutAccountSendingAttributesRequest
 *   SendingEnabled: true || false,
 * };
 * const command = new PutAccountSendingAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountSendingAttributesCommandInput - {@link PutAccountSendingAttributesCommandInput}
 * @returns {@link PutAccountSendingAttributesCommandOutput}
 * @see {@link PutAccountSendingAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountSendingAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class PutAccountSendingAttributesCommand extends $Command
  .classBuilder<
    PutAccountSendingAttributesCommandInput,
    PutAccountSendingAttributesCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPinpointEmailService", "PutAccountSendingAttributes", {})
  .n("PinpointEmailClient", "PutAccountSendingAttributesCommand")
  .f(void 0, void 0)
  .ser(se_PutAccountSendingAttributesCommand)
  .de(de_PutAccountSendingAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSendingAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutAccountSendingAttributesCommandInput;
      output: PutAccountSendingAttributesCommandOutput;
    };
  };
}
