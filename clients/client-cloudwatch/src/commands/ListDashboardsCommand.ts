// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDashboardsInput, ListDashboardsOutput } from "../models/models_0";
import { ListDashboards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDashboardsCommand}.
 */
export interface ListDashboardsCommandInput extends ListDashboardsInput {}
/**
 * @public
 *
 * The output of {@link ListDashboardsCommand}.
 */
export interface ListDashboardsCommandOutput extends ListDashboardsOutput, __MetadataBearer {}

/**
 * Returns a list of the dashboards for your account. If you include `DashboardNamePrefix`, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed.
 *
 * `ListDashboards` returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call `ListDashboards` again and include the value you received for `NextToken` in the first call, to receive the next 1000 results.
 *
 * You might have recently enabled an [opt-in Region (Region that is disabled by default)](https://docs.aws.amazon.com/glossary/latest/reference/glos-chap.html#optinregion) for your account. In that Region, `ListDashboards` can return an access denied error for up to 24 hours after you enable the Region. This delay occurs while dashboard data propagates. The error does not indicate a problem with your permissions. Because dashboards are global, you can call `ListDashboards` in any other enabled Region, or retry after propagation completes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListDashboardsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListDashboardsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // ListDashboardsInput
 *   DashboardNamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * // { // ListDashboardsOutput
 * //   DashboardEntries: [ // DashboardEntries
 * //     { // DashboardEntry
 * //       DashboardName: "STRING_VALUE",
 * //       DashboardArn: "STRING_VALUE",
 * //       LastModified: new Date("TIMESTAMP"),
 * //       Size: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDashboardsCommandInput - {@link ListDashboardsCommandInput}
 * @returns {@link ListDashboardsCommandOutput}
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *
 * Request processing has failed due to some unknown error, exception, or failure.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class ListDashboardsCommand extends command<ListDashboardsCommandInput, ListDashboardsCommandOutput>(
  _ep0,
  _mw0,
  "ListDashboards",
  ListDashboards$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDashboardsInput;
      output: ListDashboardsOutput;
    };
    sdk: {
      input: ListDashboardsCommandInput;
      output: ListDashboardsCommandOutput;
    };
  };
}
