// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDeliverabilityTestReportRequest, CreateDeliverabilityTestReportResponse } from "../models/models_0";
import {
  de_CreateDeliverabilityTestReportCommand,
  se_CreateDeliverabilityTestReportCommand,
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
 * The input for {@link CreateDeliverabilityTestReportCommand}.
 */
export interface CreateDeliverabilityTestReportCommandInput extends CreateDeliverabilityTestReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeliverabilityTestReportCommand}.
 */
export interface CreateDeliverabilityTestReportCommandOutput
  extends CreateDeliverabilityTestReportResponse,
    __MetadataBearer {}

/**
 * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 *             sample message that contains the content that you plan to send to your customers. Amazon SES
 *             then sends that message to special email addresses spread across several major email
 *             providers. After about 24 hours, the test is complete, and you can use the
 *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
 *             test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateDeliverabilityTestReportCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateDeliverabilityTestReportCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CreateDeliverabilityTestReportRequest
 *   ReportName: "STRING_VALUE",
 *   FromEmailAddress: "STRING_VALUE", // required
 *   Content: { // EmailContent
 *     Simple: { // Message
 *       Subject: { // Content
 *         Data: "STRING_VALUE", // required
 *         Charset: "STRING_VALUE",
 *       },
 *       Body: { // Body
 *         Text: {
 *           Data: "STRING_VALUE", // required
 *           Charset: "STRING_VALUE",
 *         },
 *         Html: {
 *           Data: "STRING_VALUE", // required
 *           Charset: "STRING_VALUE",
 *         },
 *       },
 *       Headers: [ // MessageHeaderList
 *         { // MessageHeader
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     Raw: { // RawMessage
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     Template: { // Template
 *       TemplateName: "STRING_VALUE",
 *       TemplateArn: "STRING_VALUE",
 *       TemplateContent: { // EmailTemplateContent
 *         Subject: "STRING_VALUE",
 *         Text: "STRING_VALUE",
 *         Html: "STRING_VALUE",
 *       },
 *       TemplateData: "STRING_VALUE",
 *       Headers: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeliverabilityTestReportResponse
 * //   ReportId: "STRING_VALUE", // required
 * //   DeliverabilityTestStatus: "IN_PROGRESS" || "COMPLETED", // required
 * // };
 *
 * ```
 *
 * @param CreateDeliverabilityTestReportCommandInput - {@link CreateDeliverabilityTestReportCommandInput}
 * @returns {@link CreateDeliverabilityTestReportCommandOutput}
 * @see {@link CreateDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link CreateDeliverabilityTestReportCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AccountSuspendedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p>The message can't be sent because the sending domain isn't verified.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>The message can't be sent because it contains invalid content.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link SendingPausedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class CreateDeliverabilityTestReportCommand extends $Command
  .classBuilder<
    CreateDeliverabilityTestReportCommandInput,
    CreateDeliverabilityTestReportCommandOutput,
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
  .s("SimpleEmailService_v2", "CreateDeliverabilityTestReport", {})
  .n("SESv2Client", "CreateDeliverabilityTestReportCommand")
  .f(void 0, void 0)
  .ser(se_CreateDeliverabilityTestReportCommand)
  .de(de_CreateDeliverabilityTestReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeliverabilityTestReportRequest;
      output: CreateDeliverabilityTestReportResponse;
    };
    sdk: {
      input: CreateDeliverabilityTestReportCommandInput;
      output: CreateDeliverabilityTestReportCommandOutput;
    };
  };
}
