// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDashboardsInput, ListDashboardsOutput } from "../models/models_0";
import { ListDashboards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of the dashboards for your account. If you include
 *             <code>DashboardNamePrefix</code>, only those dashboards with names starting with the
 *             prefix are listed. Otherwise, all dashboards in your account are listed. </p>
 *          <p>
 *             <code>ListDashboards</code> returns up to 1000 results on one page. If there are
 *             more than 1000 dashboards, you can call <code>ListDashboards</code> again and include
 *             the value you received for <code>NextToken</code> in the first call, to receive the next
 *             1000 results.</p>
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
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class ListDashboardsCommand extends $Command
  .classBuilder<
    ListDashboardsCommandInput,
    ListDashboardsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "ListDashboards", {})
  .n("CloudWatchClient", "ListDashboardsCommand")
  .sc(ListDashboards$)
  .build() {
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
