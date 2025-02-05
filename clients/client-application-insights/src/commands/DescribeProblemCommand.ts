// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProblemRequest, DescribeProblemResponse } from "../models/models_0";
import { de_DescribeProblemCommand, se_DescribeProblemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProblemCommand}.
 */
export interface DescribeProblemCommandInput extends DescribeProblemRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProblemCommand}.
 */
export interface DescribeProblemCommandOutput extends DescribeProblemResponse, __MetadataBearer {}

/**
 * <p>Describes an application problem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeProblemCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeProblemCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeProblemRequest
 *   ProblemId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeProblemCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProblemResponse
 * //   Problem: { // Problem
 * //     Id: "STRING_VALUE",
 * //     Title: "STRING_VALUE",
 * //     ShortName: "STRING_VALUE",
 * //     Insights: "STRING_VALUE",
 * //     Status: "IGNORE" || "RESOLVED" || "PENDING" || "RECURRING" || "RECOVERING",
 * //     AffectedResource: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     SeverityLevel: "Informative" || "Low" || "Medium" || "High",
 * //     AccountId: "STRING_VALUE",
 * //     ResourceGroupName: "STRING_VALUE",
 * //     Feedback: { // Feedback
 * //       "<keys>": "NOT_SPECIFIED" || "USEFUL" || "NOT_USEFUL",
 * //     },
 * //     RecurringCount: Number("long"),
 * //     LastRecurrenceTime: new Date("TIMESTAMP"),
 * //     Visibility: "IGNORED" || "VISIBLE",
 * //     ResolutionMethod: "MANUAL" || "AUTOMATIC" || "UNRESOLVED",
 * //   },
 * //   SNSNotificationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProblemCommandInput - {@link DescribeProblemCommandInput}
 * @returns {@link DescribeProblemCommandOutput}
 * @see {@link DescribeProblemCommandInput} for command's `input` shape.
 * @see {@link DescribeProblemCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 * @public
 */
export class DescribeProblemCommand extends $Command
  .classBuilder<
    DescribeProblemCommandInput,
    DescribeProblemCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "DescribeProblem", {})
  .n("ApplicationInsightsClient", "DescribeProblemCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProblemCommand)
  .de(de_DescribeProblemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProblemRequest;
      output: DescribeProblemResponse;
    };
    sdk: {
      input: DescribeProblemCommandInput;
      output: DescribeProblemCommandOutput;
    };
  };
}
