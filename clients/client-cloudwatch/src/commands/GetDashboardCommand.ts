// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDashboardInput, GetDashboardOutput } from "../models/models_0";
import { GetDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDashboardCommand}.
 */
export interface GetDashboardCommandInput extends GetDashboardInput {}
/**
 * @public
 *
 * The output of {@link GetDashboardCommand}.
 */
export interface GetDashboardCommandOutput extends GetDashboardOutput, __MetadataBearer {}

/**
 * Displays the details of the dashboard that you specify.
 *
 * To copy an existing dashboard, use `GetDashboard`, and then use the data returned within `DashboardBody` as the template for the new dashboard when you call `PutDashboard` to create the copy.
 *
 * You might have recently enabled an [opt-in Region (Region that is disabled by default)](https://docs.aws.amazon.com/glossary/latest/reference/glos-chap.html#optinregion) for your account. In that Region, `GetDashboard` can return an access denied error for up to 24 hours after you enable the Region. This delay occurs while dashboard data propagates. The error does not indicate a problem with your permissions. Because dashboards are global, you can call `GetDashboard` in any other enabled Region, or retry after propagation completes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetDashboardInput
 *   DashboardName: "STRING_VALUE", // required
 * };
 * const command = new GetDashboardCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardOutput
 * //   DashboardArn: "STRING_VALUE",
 * //   DashboardBody: "STRING_VALUE",
 * //   DashboardName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDashboardCommandInput - {@link GetDashboardCommandInput}
 * @returns {@link GetDashboardCommandOutput}
 * @see {@link GetDashboardCommandInput} for command's `input` shape.
 * @see {@link GetDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link DashboardNotFoundError} (client fault)
 *
 * The specified dashboard does not exist.
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
export class GetDashboardCommand extends command<GetDashboardCommandInput, GetDashboardCommandOutput>(
  _ep0,
  _mw0,
  "GetDashboard",
  GetDashboard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDashboardInput;
      output: GetDashboardOutput;
    };
    sdk: {
      input: GetDashboardCommandInput;
      output: GetDashboardCommandOutput;
    };
  };
}
