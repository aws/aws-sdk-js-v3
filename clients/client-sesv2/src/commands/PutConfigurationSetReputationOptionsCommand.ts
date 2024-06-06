// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsResponse,
} from "../models/models_0";
import {
  de_PutConfigurationSetReputationOptionsCommand,
  se_PutConfigurationSetReputationOptionsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetReputationOptionsCommand}.
 */
export interface PutConfigurationSetReputationOptionsCommandInput extends PutConfigurationSetReputationOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetReputationOptionsCommand}.
 */
export interface PutConfigurationSetReputationOptionsCommandOutput
  extends PutConfigurationSetReputationOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using a
 *             particular configuration set in a specific Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetReputationOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetReputationOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutConfigurationSetReputationOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   ReputationMetricsEnabled: true || false,
 * };
 * const command = new PutConfigurationSetReputationOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetReputationOptionsCommandInput - {@link PutConfigurationSetReputationOptionsCommandInput}
 * @returns {@link PutConfigurationSetReputationOptionsCommandOutput}
 * @see {@link PutConfigurationSetReputationOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetReputationOptionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutConfigurationSetReputationOptionsCommand extends $Command
  .classBuilder<
    PutConfigurationSetReputationOptionsCommandInput,
    PutConfigurationSetReputationOptionsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "PutConfigurationSetReputationOptions", {})
  .n("SESv2Client", "PutConfigurationSetReputationOptionsCommand")
  .f(void 0, void 0)
  .ser(se_PutConfigurationSetReputationOptionsCommand)
  .de(de_PutConfigurationSetReputationOptionsCommand)
  .build() {}
