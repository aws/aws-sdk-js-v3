// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEmailIdentityRequest, GetEmailIdentityResponse } from "../models/models_0";
import { de_GetEmailIdentityCommand, se_GetEmailIdentityCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEmailIdentityCommand}.
 */
export interface GetEmailIdentityCommandInput extends GetEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailIdentityCommand}.
 */
export interface GetEmailIdentityCommandOutput extends GetEmailIdentityResponse, __MetadataBearer {}

/**
 * <p>Provides information about a specific identity, including the identity's verification
 *             status, sending authorization policies, its DKIM authentication status, and its custom
 *             Mail-From settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetEmailIdentityRequest
 *   EmailIdentity: "STRING_VALUE", // required
 * };
 * const command = new GetEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailIdentityResponse
 * //   IdentityType: "EMAIL_ADDRESS" || "DOMAIN" || "MANAGED_DOMAIN",
 * //   FeedbackForwardingStatus: true || false,
 * //   VerifiedForSendingStatus: true || false,
 * //   DkimAttributes: { // DkimAttributes
 * //     SigningEnabled: true || false,
 * //     Status: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE" || "NOT_STARTED",
 * //     Tokens: [ // DnsTokenList
 * //       "STRING_VALUE",
 * //     ],
 * //     SigningAttributesOrigin: "AWS_SES" || "EXTERNAL",
 * //     NextSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 * //     CurrentSigningKeyLength: "RSA_1024_BIT" || "RSA_2048_BIT",
 * //     LastKeyGenerationTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   MailFromAttributes: { // MailFromAttributes
 * //     MailFromDomain: "STRING_VALUE", // required
 * //     MailFromDomainStatus: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE", // required
 * //     BehaviorOnMxFailure: "USE_DEFAULT_VALUE" || "REJECT_MESSAGE", // required
 * //   },
 * //   Policies: { // PolicyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   VerificationStatus: "PENDING" || "SUCCESS" || "FAILED" || "TEMPORARY_FAILURE" || "NOT_STARTED",
 * //   VerificationInfo: { // VerificationInfo
 * //     LastCheckedTimestamp: new Date("TIMESTAMP"),
 * //     LastSuccessTimestamp: new Date("TIMESTAMP"),
 * //     ErrorType: "SERVICE_ERROR" || "DNS_SERVER_ERROR" || "HOST_NOT_FOUND" || "TYPE_NOT_FOUND" || "INVALID_VALUE",
 * //     SOARecord: { // SOARecord
 * //       PrimaryNameServer: "STRING_VALUE",
 * //       AdminEmail: "STRING_VALUE",
 * //       SerialNumber: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEmailIdentityCommandInput - {@link GetEmailIdentityCommandInput}
 * @returns {@link GetEmailIdentityCommandOutput}
 * @see {@link GetEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityCommandOutput} for command's `response` shape.
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
export class GetEmailIdentityCommand extends $Command
  .classBuilder<
    GetEmailIdentityCommandInput,
    GetEmailIdentityCommandOutput,
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
  .s("SimpleEmailService_v2", "GetEmailIdentity", {})
  .n("SESv2Client", "GetEmailIdentityCommand")
  .f(void 0, void 0)
  .ser(se_GetEmailIdentityCommand)
  .de(de_GetEmailIdentityCommand)
  .build() {}
