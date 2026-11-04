// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDashboardRequest, GetDashboardResponse } from "../models/models_0";
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
export interface GetDashboardCommandInput extends GetDashboardRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardCommand}.
 */
export interface GetDashboardCommandOutput extends GetDashboardResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Returns the specified dashboard.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetDashboardCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetDashboardCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
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
 *
 * This exception is thrown when the specified resource is not found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
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
      input: GetDashboardRequest;
      output: GetDashboardResponse;
    };
    sdk: {
      input: GetDashboardCommandInput;
      output: GetDashboardCommandOutput;
    };
  };
}
