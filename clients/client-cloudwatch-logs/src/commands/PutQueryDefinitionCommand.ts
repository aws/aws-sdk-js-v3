// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutQueryDefinitionRequest, PutQueryDefinitionResponse } from "../models/models_0";
import { PutQueryDefinition } from "../schemas/schemas_10_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutQueryDefinitionCommand}.
 */
export interface PutQueryDefinitionCommandInput extends PutQueryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link PutQueryDefinitionCommand}.
 */
export interface PutQueryDefinitionCommandOutput extends PutQueryDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a query definition for CloudWatch Logs Insights. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p>
 *          <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request.
 *       The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are
 *       changed to the values that you specify in your update operation. No current values are
 *       retained from the current query definition. For example, imagine updating a current query
 *       definition that includes log groups. If you don't specify the <code>logGroupNames</code>
 *       parameter in your update operation, the query definition changes to contain no log
 *       groups.</p>
 *          <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform
 *       this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutQueryDefinitionRequest
 *   queryLanguage: "CWLI" || "SQL" || "PPL",
 *   name: "STRING_VALUE", // required
 *   queryDefinitionId: "STRING_VALUE",
 *   logGroupNames: [ // LogGroupNames
 *     "STRING_VALUE",
 *   ],
 *   queryString: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutQueryDefinitionResponse
 * //   queryDefinitionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutQueryDefinitionCommandInput - {@link PutQueryDefinitionCommandInput}
 * @returns {@link PutQueryDefinitionCommandOutput}
 * @see {@link PutQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
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
 *
 * @public
 */
export class PutQueryDefinitionCommand extends $Command
  .classBuilder<
    PutQueryDefinitionCommandInput,
    PutQueryDefinitionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutQueryDefinition", {})
  .n("CloudWatchLogsClient", "PutQueryDefinitionCommand")
  .sc(PutQueryDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutQueryDefinitionRequest;
      output: PutQueryDefinitionResponse;
    };
    sdk: {
      input: PutQueryDefinitionCommandInput;
      output: PutQueryDefinitionCommandOutput;
    };
  };
}
