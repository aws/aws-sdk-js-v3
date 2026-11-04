// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutConfigurationSetArchivingOptionsRequest,
  PutConfigurationSetArchivingOptionsResponse,
} from "../models/models_0";
import { PutConfigurationSetArchivingOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutConfigurationSetArchivingOptionsCommandOutput extends PutConfigurationSetArchivingOptionsResponse, __MetadataBearer {}

/**
 * Associate the configuration set with a MailManager archive. When you send email using the `SendEmail` or `SendBulkEmail` operations the message as it will be given to the receiving SMTP server will be archived, along with the recipient information.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetArchivingOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetArchivingOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
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
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
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
export class PutConfigurationSetArchivingOptionsCommand extends command<PutConfigurationSetArchivingOptionsCommandInput, PutConfigurationSetArchivingOptionsCommandOutput>(
  _ep0,
  _mw0,
  "PutConfigurationSetArchivingOptions",
  PutConfigurationSetArchivingOptions$
) {
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
