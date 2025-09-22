// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFindingsMetricsRequest, ListFindingsMetricsResponse } from "../models/models_0";
import { ListFindingsMetrics } from "../schemas/schemas_3_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsMetricsCommand}.
 */
export interface ListFindingsMetricsCommandInput extends ListFindingsMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsMetricsCommand}.
 */
export interface ListFindingsMetricsCommandOutput extends ListFindingsMetricsResponse, __MetadataBearer {}

/**
 * <p>Returns metrics about all findings in an account within a specified time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, ListFindingsMetricsCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, ListFindingsMetricsCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // import type { CodeGuruSecurityClientConfig } from "@aws-sdk/client-codeguru-security";
 * const config = {}; // type is CodeGuruSecurityClientConfig
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // ListFindingsMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListFindingsMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsMetricsResponse
 * //   findingsMetrics: [ // FindingsMetricList
 * //     { // AccountFindingsMetric
 * //       date: new Date("TIMESTAMP"),
 * //       newFindings: { // FindingMetricsValuePerSeverity
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //       closedFindings: {
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //       openFindings: {
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //       meanTimeToClose: {
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsMetricsCommandInput - {@link ListFindingsMetricsCommandInput}
 * @returns {@link ListFindingsMetricsCommandOutput}
 * @see {@link ListFindingsMetricsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsMetricsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 *
 * @public
 */
export class ListFindingsMetricsCommand extends $Command
  .classBuilder<
    ListFindingsMetricsCommandInput,
    ListFindingsMetricsCommandOutput,
    CodeGuruSecurityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruSecurityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsCodeGuruSecurity", "ListFindingsMetrics", {})
  .n("CodeGuruSecurityClient", "ListFindingsMetricsCommand")
  .sc(ListFindingsMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFindingsMetricsRequest;
      output: ListFindingsMetricsResponse;
    };
    sdk: {
      input: ListFindingsMetricsCommandInput;
      output: ListFindingsMetricsCommandOutput;
    };
  };
}
