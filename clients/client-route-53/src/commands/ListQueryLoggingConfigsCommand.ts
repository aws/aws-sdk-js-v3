// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueryLoggingConfigsRequest, ListQueryLoggingConfigsResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListQueryLoggingConfigs } from "../schemas/schemas_15_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueryLoggingConfigsCommand}.
 */
export interface ListQueryLoggingConfigsCommandInput extends ListQueryLoggingConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListQueryLoggingConfigsCommand}.
 */
export interface ListQueryLoggingConfigsCommandOutput extends ListQueryLoggingConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the configurations for DNS query logging that are associated with the current
 * 				Amazon Web Services account or the configuration that is associated with a specified
 * 			hosted zone.</p>
 *          <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>. Additional information, including the format of
 * 			DNS query logs, appears in <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in
 * 			the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListQueryLoggingConfigsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListQueryLoggingConfigsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListQueryLoggingConfigsRequest
 *   HostedZoneId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQueryLoggingConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueryLoggingConfigsResponse
 * //   QueryLoggingConfigs: [ // QueryLoggingConfigs // required
 * //     { // QueryLoggingConfig
 * //       Id: "STRING_VALUE", // required
 * //       HostedZoneId: "STRING_VALUE", // required
 * //       CloudWatchLogsLogGroupArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueryLoggingConfigsCommandInput - {@link ListQueryLoggingConfigsCommandInput}
 * @returns {@link ListQueryLoggingConfigsCommandOutput}
 * @see {@link ListQueryLoggingConfigsCommandInput} for command's `input` shape.
 * @see {@link ListQueryLoggingConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The value that you specified to get the second or subsequent page of results is
 * 			invalid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListQueryLoggingConfigsCommand extends $Command
  .classBuilder<
    ListQueryLoggingConfigsCommandInput,
    ListQueryLoggingConfigsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "ListQueryLoggingConfigs", {})
  .n("Route53Client", "ListQueryLoggingConfigsCommand")
  .sc(ListQueryLoggingConfigs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueryLoggingConfigsRequest;
      output: ListQueryLoggingConfigsResponse;
    };
    sdk: {
      input: ListQueryLoggingConfigsCommandInput;
      output: ListQueryLoggingConfigsCommandOutput;
    };
  };
}
