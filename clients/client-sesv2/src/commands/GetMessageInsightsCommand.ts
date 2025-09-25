// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMessageInsightsRequest, GetMessageInsightsResponse } from "../models/models_0";
import { GetMessageInsights } from "../schemas/schemas_5_Email";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMessageInsightsCommand}.
 */
export interface GetMessageInsightsCommandInput extends GetMessageInsightsRequest {}
/**
 * @public
 *
 * The output of {@link GetMessageInsightsCommand}.
 */
export interface GetMessageInsightsCommandOutput extends GetMessageInsightsResponse, __MetadataBearer {}

/**
 * <p>Provides information about a specific message, including the from address, the
 *             subject, the recipient address, email tags, as well as events associated with the message.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetMessageInsightsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetMessageInsightsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // GetMessageInsightsRequest
 *   MessageId: "STRING_VALUE", // required
 * };
 * const command = new GetMessageInsightsCommand(input);
 * const response = await client.send(command);
 * // { // GetMessageInsightsResponse
 * //   MessageId: "STRING_VALUE",
 * //   FromEmailAddress: "STRING_VALUE",
 * //   Subject: "STRING_VALUE",
 * //   EmailTags: [ // MessageTagList
 * //     { // MessageTag
 * //       Name: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Insights: [ // EmailInsightsList
 * //     { // EmailInsights
 * //       Destination: "STRING_VALUE",
 * //       Isp: "STRING_VALUE",
 * //       Events: [ // InsightsEvents
 * //         { // InsightsEvent
 * //           Timestamp: new Date("TIMESTAMP"),
 * //           Type: "SEND" || "REJECT" || "BOUNCE" || "COMPLAINT" || "DELIVERY" || "OPEN" || "CLICK" || "RENDERING_FAILURE" || "DELIVERY_DELAY" || "SUBSCRIPTION",
 * //           Details: { // EventDetails
 * //             Bounce: { // Bounce
 * //               BounceType: "UNDETERMINED" || "TRANSIENT" || "PERMANENT",
 * //               BounceSubType: "STRING_VALUE",
 * //               DiagnosticCode: "STRING_VALUE",
 * //             },
 * //             Complaint: { // Complaint
 * //               ComplaintSubType: "STRING_VALUE",
 * //               ComplaintFeedbackType: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMessageInsightsCommandInput - {@link GetMessageInsightsCommandInput}
 * @returns {@link GetMessageInsightsCommandOutput}
 * @see {@link GetMessageInsightsCommandInput} for command's `input` shape.
 * @see {@link GetMessageInsightsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetMessageInsightsCommand extends $Command
  .classBuilder<
    GetMessageInsightsCommandInput,
    GetMessageInsightsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "GetMessageInsights", {})
  .n("SESv2Client", "GetMessageInsightsCommand")
  .sc(GetMessageInsights)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMessageInsightsRequest;
      output: GetMessageInsightsResponse;
    };
    sdk: {
      input: GetMessageInsightsCommandInput;
      output: GetMessageInsightsCommandOutput;
    };
  };
}
