// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutEmailIdentityDkimSigningAttributesRequest,
  PutEmailIdentityDkimSigningAttributesRequestFilterSensitiveLog,
  PutEmailIdentityDkimSigningAttributesResponse,
} from "../models/models_0";
import {
  de_PutEmailIdentityDkimSigningAttributesCommand,
  se_PutEmailIdentityDkimSigningAttributesCommand,
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
 * The input for {@link PutEmailIdentityDkimSigningAttributesCommand}.
 */
export interface PutEmailIdentityDkimSigningAttributesCommandInput
  extends PutEmailIdentityDkimSigningAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityDkimSigningAttributesCommand}.
 */
export interface PutEmailIdentityDkimSigningAttributesCommandOutput
  extends PutEmailIdentityDkimSigningAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to configure or change the DKIM authentication settings for an email domain
 *             identity. You can use this operation to do any of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Update the signing attributes for an identity that uses Bring Your Own DKIM
 *                     (BYODKIM).</p>
 *             </li>
 *             <li>
 *                <p>Update the key length that should be used for Easy DKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using no DKIM authentication to using Easy DKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using no DKIM authentication to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using Easy DKIM to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                <p>Change from using BYODKIM to using Easy DKIM.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityDkimSigningAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityDkimSigningAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutEmailIdentityDkimSigningAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   SigningAttributesOrigin: "AWS_SES" || "EXTERNAL", // required
 *   SigningAttributes: { // DkimSigningAttributes
 *     DomainSigningSelector: "STRING_VALUE",
 *     DomainSigningPrivateKey: "STRING_VALUE",
 *     NextSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 *   },
 * };
 * const command = new PutEmailIdentityDkimSigningAttributesCommand(input);
 * const response = await client.send(command);
 * // { // PutEmailIdentityDkimSigningAttributesResponse
 * //   DkimStatus: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE" || "NOT_STARTED",
 * //   DkimTokens: [ // DnsTokenList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEmailIdentityDkimSigningAttributesCommandInput - {@link PutEmailIdentityDkimSigningAttributesCommandInput}
 * @returns {@link PutEmailIdentityDkimSigningAttributesCommandOutput}
 * @see {@link PutEmailIdentityDkimSigningAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimSigningAttributesCommandOutput} for command's `response` shape.
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
export class PutEmailIdentityDkimSigningAttributesCommand extends $Command
  .classBuilder<
    PutEmailIdentityDkimSigningAttributesCommandInput,
    PutEmailIdentityDkimSigningAttributesCommandOutput,
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
  .s("SimpleEmailService_v2", "PutEmailIdentityDkimSigningAttributes", {})
  .n("SESv2Client", "PutEmailIdentityDkimSigningAttributesCommand")
  .f(PutEmailIdentityDkimSigningAttributesRequestFilterSensitiveLog, void 0)
  .ser(se_PutEmailIdentityDkimSigningAttributesCommand)
  .de(de_PutEmailIdentityDkimSigningAttributesCommand)
  .build() {}
