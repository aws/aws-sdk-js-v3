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
import { ListProblemsRequest, ListProblemsResponse } from "../models/models_0";
import { de_ListProblemsCommand, se_ListProblemsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProblemsCommand}.
 */
export interface ListProblemsCommandInput extends ListProblemsRequest {}
/**
 * @public
 *
 * The output of {@link ListProblemsCommand}.
 */
export interface ListProblemsCommandOutput extends ListProblemsResponse, __MetadataBearer {}

/**
 * <p>Lists the problems with your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListProblemsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListProblemsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListProblemsRequest
 *   AccountId: "STRING_VALUE",
 *   ResourceGroupName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ComponentName: "STRING_VALUE",
 *   Visibility: "IGNORED" || "VISIBLE",
 * };
 * const command = new ListProblemsCommand(input);
 * const response = await client.send(command);
 * // { // ListProblemsResponse
 * //   ProblemList: [ // ProblemList
 * //     { // Problem
 * //       Id: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       ShortName: "STRING_VALUE",
 * //       Insights: "STRING_VALUE",
 * //       Status: "IGNORE" || "RESOLVED" || "PENDING" || "RECURRING" || "RECOVERING",
 * //       AffectedResource: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       SeverityLevel: "Informative" || "Low" || "Medium" || "High",
 * //       AccountId: "STRING_VALUE",
 * //       ResourceGroupName: "STRING_VALUE",
 * //       Feedback: { // Feedback
 * //         "<keys>": "NOT_SPECIFIED" || "USEFUL" || "NOT_USEFUL",
 * //       },
 * //       RecurringCount: Number("long"),
 * //       LastRecurrenceTime: new Date("TIMESTAMP"),
 * //       Visibility: "IGNORED" || "VISIBLE",
 * //       ResolutionMethod: "MANUAL" || "AUTOMATIC" || "UNRESOLVED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ResourceGroupName: "STRING_VALUE",
 * //   AccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProblemsCommandInput - {@link ListProblemsCommandInput}
 * @returns {@link ListProblemsCommandOutput}
 * @see {@link ListProblemsCommandInput} for command's `input` shape.
 * @see {@link ListProblemsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListProblemsCommand extends $Command
  .classBuilder<
    ListProblemsCommandInput,
    ListProblemsCommandOutput,
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
  .s("EC2WindowsBarleyService", "ListProblems", {})
  .n("ApplicationInsightsClient", "ListProblemsCommand")
  .f(void 0, void 0)
  .ser(se_ListProblemsCommand)
  .de(de_ListProblemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProblemsRequest;
      output: ListProblemsResponse;
    };
    sdk: {
      input: ListProblemsCommandInput;
      output: ListProblemsCommandOutput;
    };
  };
}
