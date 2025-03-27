// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutConfigurationSetArchivingOptionsRequest,
  PutConfigurationSetArchivingOptionsResponse,
} from "../models/models_0";
import {
  de_PutConfigurationSetArchivingOptionsCommand,
  se_PutConfigurationSetArchivingOptionsCommand,
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
 * The input for {@link PutConfigurationSetArchivingOptionsCommand}.
 */
export interface PutConfigurationSetArchivingOptionsCommandInput extends PutConfigurationSetArchivingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetArchivingOptionsCommand}.
 */
export interface PutConfigurationSetArchivingOptionsCommandOutput
  extends PutConfigurationSetArchivingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Associate the configuration set with a MailManager archive. When you send email using the
 *         <code>SendEmail</code> or <code>SendBulkEmail</code> operations the message as it will be given
 *         to the receiving SMTP server will be archived, along with the recipient information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetArchivingOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetArchivingOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutConfigurationSetArchivingOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   ArchiveArn: "STRING_VALUE",
 * };
 * const command = new PutConfigurationSetArchivingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetArchivingOptionsCommandInput - {@link PutConfigurationSetArchivingOptionsCommandInput}
 * @returns {@link PutConfigurationSetArchivingOptionsCommandOutput}
 * @see {@link PutConfigurationSetArchivingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetArchivingOptionsCommandOutput} for command's `response` shape.
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
 * @example Used to associate an MailManager archive with a ConfigurationSet.
 * ```javascript
 * // This example associates an archive arn with a configuration set.
 * const input = {
 *   ArchiveArn: "arn:aws:ses:us-west-2:123456789012:mailmanager-archive/a-abcdefghijklmnopqrstuvwxyz",
 *   ConfigurationSetName: "sample-configuration-name"
 * };
 * const command = new PutConfigurationSetArchivingOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutConfigurationSetArchivingOptionsCommand extends $Command
  .classBuilder<
    PutConfigurationSetArchivingOptionsCommandInput,
    PutConfigurationSetArchivingOptionsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "PutConfigurationSetArchivingOptions", {})
  .n("SESv2Client", "PutConfigurationSetArchivingOptionsCommand")
  .f(void 0, void 0)
  .ser(se_PutConfigurationSetArchivingOptionsCommand)
  .de(de_PutConfigurationSetArchivingOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetArchivingOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetArchivingOptionsCommandInput;
      output: PutConfigurationSetArchivingOptionsCommandOutput;
    };
  };
}
