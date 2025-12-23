// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeNetworkInsightsAccessScopeAnalysesRequest,
  DescribeNetworkInsightsAccessScopeAnalysesResult,
} from "../models/models_4";
import { DescribeNetworkInsightsAccessScopeAnalyses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesCommandInput extends DescribeNetworkInsightsAccessScopeAnalysesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesCommandOutput extends DescribeNetworkInsightsAccessScopeAnalysesResult, __MetadataBearer {}

/**
 * <p>Describes the specified Network Access Scope analyses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAccessScopeAnalysesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAccessScopeAnalysesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsAccessScopeAnalysesRequest
 *   NetworkInsightsAccessScopeAnalysisIds: [ // NetworkInsightsAccessScopeAnalysisIdList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInsightsAccessScopeId: "STRING_VALUE",
 *   AnalysisStartTimeBegin: new Date("TIMESTAMP"),
 *   AnalysisStartTimeEnd: new Date("TIMESTAMP"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsAccessScopeAnalysesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsAccessScopeAnalysesResult
 * //   NetworkInsightsAccessScopeAnalyses: [ // NetworkInsightsAccessScopeAnalysisList
 * //     { // NetworkInsightsAccessScopeAnalysis
 * //       NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeAnalysisArn: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //       Status: "running" || "succeeded" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //       WarningMessage: "STRING_VALUE",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       FindingsFound: "true" || "false" || "unknown",
 * //       AnalyzedEniCount: Number("int"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsAccessScopeAnalysesCommandInput - {@link DescribeNetworkInsightsAccessScopeAnalysesCommandInput}
 * @returns {@link DescribeNetworkInsightsAccessScopeAnalysesCommandOutput}
 * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeNetworkInsightsAccessScopeAnalysesCommand extends $Command
  .classBuilder<
    DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeNetworkInsightsAccessScopeAnalyses", {})
  .n("EC2Client", "DescribeNetworkInsightsAccessScopeAnalysesCommand")
  .sc(DescribeNetworkInsightsAccessScopeAnalyses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkInsightsAccessScopeAnalysesRequest;
      output: DescribeNetworkInsightsAccessScopeAnalysesResult;
    };
    sdk: {
      input: DescribeNetworkInsightsAccessScopeAnalysesCommandInput;
      output: DescribeNetworkInsightsAccessScopeAnalysesCommandOutput;
    };
  };
}
