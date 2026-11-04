// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSyslogConfigurationsRequest, ListSyslogConfigurationsResponse } from "../models/models_0";
import { ListSyslogConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of syslog configurations. You can optionally filter the results by log group or VPC endpoint.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class ListSyslogConfigurationsCommand extends command<ListSyslogConfigurationsCommandInput, ListSyslogConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListSyslogConfigurations",
  ListSyslogConfigurations$
) {
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
