// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCreateCaseOptionsRequest, DescribeCreateCaseOptionsResponse } from "../models/models_0";
import { DescribeCreateCaseOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the `language` `categoryCode`, `issueType` and `serviceCode` used to retrieve the CreateCaseOptions.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeCreateCaseOptionsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCreateCaseOptionsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeCreateCaseOptionsRequest
 *   issueType: "STRING_VALUE", // required
 *   serviceCode: "STRING_VALUE", // required
 *   language: "STRING_VALUE", // required
 *   categoryCode: "STRING_VALUE", // required
 *   dryRun: true || false,
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
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was valid, but the operation wasn't performed because `dryRun` was set to `true`.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *
 * @throws {@link SupportServiceException}
 *
 * Base exception class for all service exceptions from Support service.
 *
 * @public
 */
export class DescribeCreateCaseOptionsCommand extends command<DescribeCreateCaseOptionsCommandInput, DescribeCreateCaseOptionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCreateCaseOptions",
  DescribeCreateCaseOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCreateCaseOptionsRequest;
      output: DescribeCreateCaseOptionsResponse;
    };
    sdk: {
      input: DescribeCreateCaseOptionsCommandInput;
      output: DescribeCreateCaseOptionsCommandOutput;
    };
  };
}
