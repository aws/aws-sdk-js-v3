// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQueryDefinitionsRequest, DescribeQueryDefinitionsResponse } from "../models/models_0";
import { DescribeQueryDefinitions } from "../schemas/schemas_10_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQueryDefinitionsCommand}.
 */
export interface DescribeQueryDefinitionsCommandInput extends DescribeQueryDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueryDefinitionsCommand}.
 */
export interface DescribeQueryDefinitionsCommandOutput extends DescribeQueryDefinitionsResponse, __MetadataBearer {}

/**
 * <p>This operation returns a paginated list of your saved CloudWatch Logs Insights query
 *       definitions. You can retrieve query definitions from the current account or from a source
 *       account that is linked to the current account.</p>
 *          <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to
 *       only the query definitions that have names that start with a certain string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeQueryDefinitionsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeQueryDefinitionsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeQueryDefinitionsRequest
 *   queryLanguage: "CWLI" || "SQL" || "PPL",
 *   queryDefinitionNamePrefix: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeQueryDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueryDefinitionsResponse
 * //   queryDefinitions: [ // QueryDefinitionList
 * //     { // QueryDefinition
 * //       queryLanguage: "CWLI" || "SQL" || "PPL",
 * //       queryDefinitionId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       queryString: "STRING_VALUE",
 * //       lastModified: Number("long"),
 * //       logGroupNames: [ // LogGroupNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeQueryDefinitionsCommandInput - {@link DescribeQueryDefinitionsCommandInput}
 * @returns {@link DescribeQueryDefinitionsCommandOutput}
 * @see {@link DescribeQueryDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeQueryDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeQueryDefinitionsCommand extends $Command
  .classBuilder<
    DescribeQueryDefinitionsCommandInput,
    DescribeQueryDefinitionsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeQueryDefinitions", {})
  .n("CloudWatchLogsClient", "DescribeQueryDefinitionsCommand")
  .sc(DescribeQueryDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueryDefinitionsRequest;
      output: DescribeQueryDefinitionsResponse;
    };
    sdk: {
      input: DescribeQueryDefinitionsCommandInput;
      output: DescribeQueryDefinitionsCommandOutput;
    };
  };
}
