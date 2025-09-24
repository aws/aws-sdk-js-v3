// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLogPatternRequest, DescribeLogPatternResponse } from "../models/models_0";
import { DescribeLogPattern } from "../schemas/schemas_4_Log";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLogPatternCommand}.
 */
export interface DescribeLogPatternCommandInput extends DescribeLogPatternRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLogPatternCommand}.
 */
export interface DescribeLogPatternCommandOutput extends DescribeLogPatternResponse, __MetadataBearer {}

/**
 * <p>Describe a specific log pattern from a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeLogPatternRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE", // required
 *   PatternName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeLogPatternCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLogPatternResponse
 * //   ResourceGroupName: "STRING_VALUE",
 * //   AccountId: "STRING_VALUE",
 * //   LogPattern: { // LogPattern
 * //     PatternSetName: "STRING_VALUE",
 * //     PatternName: "STRING_VALUE",
 * //     Pattern: "STRING_VALUE",
 * //     Rank: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLogPatternCommandInput - {@link DescribeLogPatternCommandInput}
 * @returns {@link DescribeLogPatternCommandOutput}
 * @see {@link DescribeLogPatternCommandInput} for command's `input` shape.
 * @see {@link DescribeLogPatternCommandOutput} for command's `response` shape.
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
export class DescribeLogPatternCommand extends $Command
  .classBuilder<
    DescribeLogPatternCommandInput,
    DescribeLogPatternCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "DescribeLogPattern", {})
  .n("ApplicationInsightsClient", "DescribeLogPatternCommand")
  .sc(DescribeLogPattern)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLogPatternRequest;
      output: DescribeLogPatternResponse;
    };
    sdk: {
      input: DescribeLogPatternCommandInput;
      output: DescribeLogPatternCommandOutput;
    };
  };
}
