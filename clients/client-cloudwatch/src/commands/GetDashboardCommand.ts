// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDashboardInput, GetDashboardOutput } from "../models/models_0";
import { de_GetDashboardCommand, se_GetDashboardCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Displays the details of the dashboard that you specify.</p>
 *          <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data
 *             returned within <code>DashboardBody</code> as the template for the new dashboard when
 *             you call <code>PutDashboard</code> to create the copy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
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
 *  <p>The specified dashboard does not exist.</p>
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
export class GetDashboardCommand extends $Command
  .classBuilder<
    GetDashboardCommandInput,
    GetDashboardCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "GetDashboard", {})
  .n("CloudWatchClient", "GetDashboardCommand")
  .f(void 0, void 0)
  .ser(se_GetDashboardCommand)
  .de(de_GetDashboardCommand)
  .build() {
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
