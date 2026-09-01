// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateEmailIdentityCertificateRequest,
  AssociateEmailIdentityCertificateResponse,
} from "../models/models_0";
import { AssociateEmailIdentityCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateEmailIdentityCertificateCommand}.
 */
export interface AssociateEmailIdentityCertificateCommandInput extends AssociateEmailIdentityCertificateRequest {}
/**
 * @public
 *
 * The output of {@link AssociateEmailIdentityCertificateCommand}.
 */
export interface AssociateEmailIdentityCertificateCommandOutput extends AssociateEmailIdentityCertificateResponse, __MetadataBearer {}

/**
 * <p>Associates an S/MIME certificate with an email identity. After the certificate is
 *             active, Amazon SES API v2 can add an S/MIME signature to messages that you send from the associated
 *             address when signing is enabled on the configuration set used to send the message.</p>
 *          <p>The certificate is an X.509 certificate that you manage in Certificate Manager
 *             (ACM). You identify it by its Amazon Resource Name (ARN).</p>
 *          <ul>
 *             <li>
 *                <p>If the email identity is a domain, you must specify a <code>FromAddress</code>
 *                     that belongs to that domain or one of its subdomains. The certificate applies to
 *                     messages sent from that address.</p>
 *             </li>
 *             <li>
 *                <p>If the email identity is an email address, <code>FromAddress</code> is
 *                     optional. If you specify it, it must exactly match the email identity.</p>
 *             </li>
 *          </ul>
 *          <p>When the association is created, the certificate begins provisioning and its status is
 *             <code>PROVISIONING</code>. The status changes to <code>ACTIVE</code> when the certificate
 *             is ready to use for signing. Each email address can have only one certificate
 *             association. If an association already exists for the address, this operation returns an
 *             error, unless the existing association is in the <code>DEPROVISIONING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, AssociateEmailIdentityCertificateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, AssociateEmailIdentityCertificateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // AssociateEmailIdentityCertificateRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   FromAddress: "STRING_VALUE",
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateEmailIdentityCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateEmailIdentityCertificateCommandInput - {@link AssociateEmailIdentityCertificateCommandInput}
 * @returns {@link AssociateEmailIdentityCertificateCommandOutput}
 * @see {@link AssociateEmailIdentityCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateEmailIdentityCertificateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
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
export class AssociateEmailIdentityCertificateCommand extends command<AssociateEmailIdentityCertificateCommandInput, AssociateEmailIdentityCertificateCommandOutput>(
  _ep0,
  _mw0,
  "AssociateEmailIdentityCertificate",
  AssociateEmailIdentityCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEmailIdentityCertificateRequest;
      output: {};
    };
    sdk: {
      input: AssociateEmailIdentityCertificateCommandInput;
      output: AssociateEmailIdentityCertificateCommandOutput;
    };
  };
}
