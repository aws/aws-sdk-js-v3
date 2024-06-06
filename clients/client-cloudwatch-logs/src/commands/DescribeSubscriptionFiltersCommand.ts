// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSubscriptionFiltersRequest, DescribeSubscriptionFiltersResponse } from "../models/models_0";
import { de_DescribeSubscriptionFiltersCommand, se_DescribeSubscriptionFiltersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubscriptionFiltersCommand}.
 */
export interface DescribeSubscriptionFiltersCommandInput extends DescribeSubscriptionFiltersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubscriptionFiltersCommand}.
 */
export interface DescribeSubscriptionFiltersCommandOutput
  extends DescribeSubscriptionFiltersResponse,
    __MetadataBearer {}

/**
 * <p>Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix.
 *       The results are ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeSubscriptionFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeSubscriptionFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeSubscriptionFiltersRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterNamePrefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeSubscriptionFiltersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubscriptionFiltersResponse
 * //   subscriptionFilters: [ // SubscriptionFilters
 * //     { // SubscriptionFilter
 * //       filterName: "STRING_VALUE",
 * //       logGroupName: "STRING_VALUE",
 * //       filterPattern: "STRING_VALUE",
 * //       destinationArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       distribution: "Random" || "ByLogStream",
 * //       creationTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSubscriptionFiltersCommandInput - {@link DescribeSubscriptionFiltersCommandInput}
 * @returns {@link DescribeSubscriptionFiltersCommandOutput}
 * @see {@link DescribeSubscriptionFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscriptionFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class DescribeSubscriptionFiltersCommand extends $Command
  .classBuilder<
    DescribeSubscriptionFiltersCommandInput,
    DescribeSubscriptionFiltersCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DescribeSubscriptionFilters", {})
  .n("CloudWatchLogsClient", "DescribeSubscriptionFiltersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSubscriptionFiltersCommand)
  .de(de_DescribeSubscriptionFiltersCommand)
  .build() {}
