// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSyslogConfigurationsRequest, ListSyslogConfigurationsResponse } from "../models/models_0";
import { ListSyslogConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSyslogConfigurationsCommand}.
 */
export interface ListSyslogConfigurationsCommandInput extends ListSyslogConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSyslogConfigurationsCommand}.
 */
export interface ListSyslogConfigurationsCommandOutput extends ListSyslogConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of syslog configurations. You can optionally filter the results by log
 *       group or VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListSyslogConfigurationsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListSyslogConfigurationsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListSyslogConfigurationsRequest
 *   logGroupIdentifier: "STRING_VALUE",
 *   vpcEndpointId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSyslogConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSyslogConfigurationsResponse
 * //   syslogConfigurations: [ // SyslogConfigurations
 * //     { // SyslogConfiguration
 * //       logGroupArn: "STRING_VALUE",
 * //       sourceType: "VPCE",
 * //       vpcEndpointId: "STRING_VALUE",
 * //       createdAt: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSyslogConfigurationsCommandInput - {@link ListSyslogConfigurationsCommandInput}
 * @returns {@link ListSyslogConfigurationsCommandOutput}
 * @see {@link ListSyslogConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSyslogConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class ListSyslogConfigurationsCommand extends $Command
  .classBuilder<
    ListSyslogConfigurationsCommandInput,
    ListSyslogConfigurationsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListSyslogConfigurations", {})
  .n("CloudWatchLogsClient", "ListSyslogConfigurationsCommand")
  .sc(ListSyslogConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSyslogConfigurationsRequest;
      output: ListSyslogConfigurationsResponse;
    };
    sdk: {
      input: ListSyslogConfigurationsCommandInput;
      output: ListSyslogConfigurationsCommandOutput;
    };
  };
}
