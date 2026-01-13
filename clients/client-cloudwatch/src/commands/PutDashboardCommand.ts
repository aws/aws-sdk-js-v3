// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutDashboardInput, PutDashboardOutput } from "../models/models_0";
import { PutDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDashboardCommand}.
 */
export interface PutDashboardCommandInput extends PutDashboardInput {}
/**
 * @public
 *
 * The output of {@link PutDashboardCommand}.
 */
export interface PutDashboardCommandOutput extends PutDashboardOutput, __MetadataBearer {}

/**
 * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard.
 *             If you update a dashboard, the entire contents are replaced with what you specify
 *             here.</p>
 *          <p>All dashboards in your account are global, not region-specific.</p>
 *          <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an
 *             existing dashboard. To copy an existing dashboard using the console, you can load the
 *             dashboard and then use the View/edit source command in the Actions menu to display the
 *             JSON block for that dashboard. Another way to copy a dashboard is to use
 *                 <code>GetDashboard</code>, and then use the data returned within
 *                 <code>DashboardBody</code> as the template for the new dashboard when you call
 *                 <code>PutDashboard</code>.</p>
 *          <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to
 *             add a text widget at the top of the dashboard with a message that the dashboard was
 *             created by script and should not be changed in the console. This message could also
 *             point console users to the location of the <code>DashboardBody</code> script or the
 *             CloudFormation template used to create the dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutDashboardInput
 *   DashboardName: "STRING_VALUE", // required
 *   DashboardBody: "STRING_VALUE", // required
 * };
 * const command = new PutDashboardCommand(input);
 * const response = await client.send(command);
 * // { // PutDashboardOutput
 * //   DashboardValidationMessages: [ // DashboardValidationMessages
 * //     { // DashboardValidationMessage
 * //       DataPath: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutDashboardCommandInput - {@link PutDashboardCommandInput}
 * @returns {@link PutDashboardCommandOutput}
 * @see {@link PutDashboardCommandInput} for command's `input` shape.
 * @see {@link PutDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link DashboardInvalidInputError} (client fault)
 *  <p>Some part of the dashboard data is invalid.</p>
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class PutDashboardCommand extends $Command
  .classBuilder<
    PutDashboardCommandInput,
    PutDashboardCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "PutDashboard", {})
  .n("CloudWatchClient", "PutDashboardCommand")
  .sc(PutDashboard$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDashboardInput;
      output: PutDashboardOutput;
    };
    sdk: {
      input: PutDashboardCommandInput;
      output: PutDashboardCommandOutput;
    };
  };
}
