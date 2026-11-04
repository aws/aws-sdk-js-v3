// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateEmailIdentityCertificateRequest,
  DisassociateEmailIdentityCertificateResponse,
} from "../models/models_0";
import { DisassociateEmailIdentityCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateEmailIdentityCertificateCommand}.
 */
export interface DisassociateEmailIdentityCertificateCommandInput extends DisassociateEmailIdentityCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateEmailIdentityCertificateCommand}.
 */
export interface DisassociateEmailIdentityCertificateCommandOutput extends DisassociateEmailIdentityCertificateResponse, __MetadataBearer {}

/**
 * Removes the association between an S/MIME certificate and an email identity. After the association is removed, Amazon SES API v2 stops adding an S/MIME signature to messages sent from that address.
 *
 * If the email identity is a domain, specify the `FromAddress` whose certificate association you want to remove.
 *
 * This operation is idempotent. If the specified email identity exists but there's no matching certificate association, the operation succeeds without making any changes. Amazon SES API v2 returns a `NotFoundException` only when the specified email identity doesn't exist.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DisassociateEmailIdentityCertificateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DisassociateEmailIdentityCertificateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // DisassociateEmailIdentityCertificateRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   FromAddress: "STRING_VALUE",
 * };
 * const command = new DisassociateEmailIdentityCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateEmailIdentityCertificateCommandInput - {@link DisassociateEmailIdentityCertificateCommandInput}
 * @returns {@link DisassociateEmailIdentityCertificateCommandOutput}
 * @see {@link DisassociateEmailIdentityCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateEmailIdentityCertificateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateEmailIdentityCertificateCommand extends command<DisassociateEmailIdentityCertificateCommandInput, DisassociateEmailIdentityCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateEmailIdentityCertificate",
  DisassociateEmailIdentityCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateEmailIdentityCertificateRequest;
      output: {};
    };
    sdk: {
      input: DisassociateEmailIdentityCertificateCommandInput;
      output: DisassociateEmailIdentityCertificateCommandOutput;
    };
  };
}
