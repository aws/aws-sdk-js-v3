// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeliverabilityTestReportRequest, CreateDeliverabilityTestReportResponse } from "../models/models_0";
import { CreateDeliverabilityTestReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateDeliverabilityTestReportCommandOutput extends CreateDeliverabilityTestReportResponse, __MetadataBearer {}

/**
 * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the `GetDeliverabilityTestReport` operation to view the results of the test.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
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
 *     },
 *     Raw: { // RawMessage
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     Template: { // Template
 *       TemplateArn: "STRING_VALUE",
 *       TemplateData: "STRING_VALUE",
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
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link AccountSuspendedException} (client fault)
 *
 * The message can't be sent because the account's ability to send email has been permanently restricted.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * The resource is being modified by another operation or thread.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * There are too many instances of the specified resource type.
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *
 * The message can't be sent because the sending domain isn't verified.
 *
 * @throws {@link MessageRejected} (client fault)
 *
 * The message can't be sent because it contains invalid content.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link SendingPausedException} (client fault)
 *
 * The message can't be sent because the account's ability to send email is currently paused.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link PinpointEmailServiceException}
 *
 * Base exception class for all service exceptions from PinpointEmail service.
 *
 * @public
 */
export class CreateDeliverabilityTestReportCommand extends command<CreateDeliverabilityTestReportCommandInput, CreateDeliverabilityTestReportCommandOutput>(
  _ep0,
  _mw0,
  "CreateDeliverabilityTestReport",
  CreateDeliverabilityTestReport$
) {
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
