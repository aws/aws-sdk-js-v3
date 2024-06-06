// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCreateCaseOptionsRequest, DescribeCreateCaseOptionsResponse } from "../models/models_0";
import { de_DescribeCreateCaseOptionsCommand, se_DescribeCreateCaseOptionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCreateCaseOptionsCommand}.
 */
export interface DescribeCreateCaseOptionsCommandInput extends DescribeCreateCaseOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCreateCaseOptionsCommand}.
 */
export interface DescribeCreateCaseOptionsCommandOutput extends DescribeCreateCaseOptionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of CreateCaseOption types along with the
 *         corresponding supported hours and language availability. You can specify the <code>language</code>
 *             <code>categoryCode</code>,
 *         <code>issueType</code> and <code>serviceCode</code> used to retrieve the CreateCaseOptions.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeCreateCaseOptionsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCreateCaseOptionsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeCreateCaseOptionsRequest
 *   issueType: "STRING_VALUE", // required
 *   serviceCode: "STRING_VALUE", // required
 *   language: "STRING_VALUE", // required
 *   categoryCode: "STRING_VALUE", // required
 * };
 * const command = new DescribeCreateCaseOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCreateCaseOptionsResponse
 * //   languageAvailability: "STRING_VALUE",
 * //   communicationTypes: [ // CommunicationTypeOptionsList
 * //     { // CommunicationTypeOptions
 * //       type: "STRING_VALUE",
 * //       supportedHours: [ // SupportedHoursList
 * //         { // SupportedHour
 * //           startTime: "STRING_VALUE",
 * //           endTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       datesWithoutSupport: [ // DatesWithoutSupportList
 * //         { // DateInterval
 * //           startDateTime: "STRING_VALUE",
 * //           endDateTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCreateCaseOptionsCommandInput - {@link DescribeCreateCaseOptionsCommandInput}
 * @returns {@link DescribeCreateCaseOptionsCommandOutput}
 * @see {@link DescribeCreateCaseOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeCreateCaseOptionsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *         You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *         </p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 * @public
 */
export class DescribeCreateCaseOptionsCommand extends $Command
  .classBuilder<
    DescribeCreateCaseOptionsCommandInput,
    DescribeCreateCaseOptionsCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSupport_20130415", "DescribeCreateCaseOptions", {})
  .n("SupportClient", "DescribeCreateCaseOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCreateCaseOptionsCommand)
  .de(de_DescribeCreateCaseOptionsCommand)
  .build() {}
