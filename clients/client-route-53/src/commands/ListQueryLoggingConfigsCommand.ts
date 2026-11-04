// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQueryLoggingConfigsRequest, ListQueryLoggingConfigsResponse } from "../models/models_0";
import { ListQueryLoggingConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the configurations for DNS query logging that are associated with the current Amazon Web Services account or the configuration that is associated with a specified hosted zone.
 *
 * For more information about DNS query logs, see [CreateQueryLoggingConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html). Additional information, including the format of DNS query logs, appears in [Logging DNS Queries](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html) in the *Amazon Route 53 Developer Guide*.
 *
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
 *
 * The input is not valid.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *
 * The value that you specified to get the second or subsequent page of results is invalid.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class ListQueryLoggingConfigsCommand extends command<ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListQueryLoggingConfigs",
  ListQueryLoggingConfigs$
) {
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
