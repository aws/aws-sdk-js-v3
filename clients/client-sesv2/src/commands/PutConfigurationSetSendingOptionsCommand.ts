// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutConfigurationSetSendingOptionsRequest,
  PutConfigurationSetSendingOptionsResponse,
} from "../models/models_1";
import { PutConfigurationSetSendingOptions } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetSendingOptionsCommand}.
 */
export interface PutConfigurationSetSendingOptionsCommandInput extends PutConfigurationSetSendingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetSendingOptionsCommand}.
 */
export interface PutConfigurationSetSendingOptionsCommandOutput
  extends PutConfigurationSetSendingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable email sending for messages that use a particular configuration set
 *             in a specific Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetSendingOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetSendingOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutConfigurationSetSendingOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   SendingEnabled: true || false,
 * };
 * const command = new PutConfigurationSetSendingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetSendingOptionsCommandInput - {@link PutConfigurationSetSendingOptionsCommandInput}
 * @returns {@link PutConfigurationSetSendingOptionsCommandOutput}
 * @see {@link PutConfigurationSetSendingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSendingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class PutConfigurationSetSendingOptionsCommand extends $Command
  .classBuilder<
    PutConfigurationSetSendingOptionsCommandInput,
    PutConfigurationSetSendingOptionsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "PutConfigurationSetSendingOptions", {})
  .n("SESv2Client", "PutConfigurationSetSendingOptionsCommand")
  .sc(PutConfigurationSetSendingOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetSendingOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetSendingOptionsCommandInput;
      output: PutConfigurationSetSendingOptionsCommandOutput;
    };
  };
}
