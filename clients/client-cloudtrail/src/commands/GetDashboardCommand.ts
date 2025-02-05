// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDashboardRequest, GetDashboardResponse } from "../models/models_0";
import { de_GetDashboardCommand, se_GetDashboardCommand } from "../protocols/Aws_json1_1";

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
export interface GetDashboardCommandInput extends GetDashboardRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardCommand}.
 */
export interface GetDashboardCommandOutput extends GetDashboardResponse, __MetadataBearer {}

/**
 * <p>
 * Returns the specified dashboard.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetDashboardCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetDashboardCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudTrailClient(config);
 * const input = { // GetDashboardRequest
 *   DashboardId: "STRING_VALUE", // required
 * };
 * const command = new GetDashboardCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardResponse
 * //   DashboardArn: "STRING_VALUE",
 * //   Type: "MANAGED" || "CUSTOM",
 * //   Status: "CREATING" || "CREATED" || "UPDATING" || "UPDATED" || "DELETING",
 * //   Widgets: [ // WidgetList
 * //     { // Widget
 * //       QueryAlias: "STRING_VALUE",
 * //       QueryStatement: "STRING_VALUE",
 * //       QueryParameters: [ // QueryParameters
 * //         "STRING_VALUE",
 * //       ],
 * //       ViewProperties: { // ViewPropertiesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   RefreshSchedule: { // RefreshSchedule
 * //     Frequency: { // RefreshScheduleFrequency
 * //       Unit: "HOURS" || "DAYS",
 * //       Value: Number("int"),
 * //     },
 * //     Status: "ENABLED" || "DISABLED",
 * //     TimeOfDay: "STRING_VALUE",
 * //   },
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   LastRefreshId: "STRING_VALUE",
 * //   LastRefreshFailureReason: "STRING_VALUE",
 * //   TerminationProtectionEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetDashboardCommandInput - {@link GetDashboardCommandInput}
 * @returns {@link GetDashboardCommandOutput}
 * @see {@link GetDashboardCommandInput} for command's `input` shape.
 * @see {@link GetDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the specified resource is not found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 * @public
 */
export class GetDashboardCommand extends $Command
  .classBuilder<
    GetDashboardCommandInput,
    GetDashboardCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "GetDashboard", {})
  .n("CloudTrailClient", "GetDashboardCommand")
  .f(void 0, void 0)
  .ser(se_GetDashboardCommand)
  .de(de_GetDashboardCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDashboardRequest;
      output: GetDashboardResponse;
    };
    sdk: {
      input: GetDashboardCommandInput;
      output: GetDashboardCommandOutput;
    };
  };
}
