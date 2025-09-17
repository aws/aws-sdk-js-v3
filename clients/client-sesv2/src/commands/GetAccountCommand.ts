// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountRequest, GetAccountResponse, GetAccountResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetAccountCommand, se_GetAccountCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountCommand}.
 */
export interface GetAccountCommandInput extends GetAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountCommand}.
 */
export interface GetAccountCommandOutput extends GetAccountResponse, __MetadataBearer {}

/**
 * <p>Obtain information about the email-sending status and capabilities of your Amazon SES
 *             account in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetAccountCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetAccountCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = {};
 * const command = new GetAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountResponse
 * //   DedicatedIpAutoWarmupEnabled: true || false,
 * //   EnforcementStatus: "STRING_VALUE",
 * //   ProductionAccessEnabled: true || false,
 * //   SendQuota: { // SendQuota
 * //     Max24HourSend: Number("double"),
 * //     MaxSendRate: Number("double"),
 * //     SentLast24Hours: Number("double"),
 * //   },
 * //   SendingEnabled: true || false,
 * //   SuppressionAttributes: { // SuppressionAttributes
 * //     SuppressedReasons: [ // SuppressionListReasons
 * //       "BOUNCE" || "COMPLAINT",
 * //     ],
 * //   },
 * //   Details: { // AccountDetails
 * //     MailType: "MARKETING" || "TRANSACTIONAL",
 * //     WebsiteURL: "STRING_VALUE",
 * //     ContactLanguage: "EN" || "JA",
 * //     UseCaseDescription: "STRING_VALUE",
 * //     AdditionalContactEmailAddresses: [ // AdditionalContactEmailAddresses
 * //       "STRING_VALUE",
 * //     ],
 * //     ReviewDetails: { // ReviewDetails
 * //       Status: "PENDING" || "FAILED" || "GRANTED" || "DENIED",
 * //       CaseId: "STRING_VALUE",
 * //     },
 * //   },
 * //   VdmAttributes: { // VdmAttributes
 * //     VdmEnabled: "ENABLED" || "DISABLED", // required
 * //     DashboardAttributes: { // DashboardAttributes
 * //       EngagementMetrics: "ENABLED" || "DISABLED",
 * //     },
 * //     GuardianAttributes: { // GuardianAttributes
 * //       OptimizedSharedDelivery: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountCommandInput - {@link GetAccountCommandInput}
 * @returns {@link GetAccountCommandOutput}
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
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
export class GetAccountCommand extends $Command
  .classBuilder<
    GetAccountCommandInput,
    GetAccountCommandOutput,
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
  .s("SimpleEmailService_v2", "GetAccount", {})
  .n("SESv2Client", "GetAccountCommand")
  .f(void 0, GetAccountResponseFilterSensitiveLog)
  .ser(se_GetAccountCommand)
  .de(de_GetAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountResponse;
    };
    sdk: {
      input: GetAccountCommandInput;
      output: GetAccountCommandOutput;
    };
  };
}
