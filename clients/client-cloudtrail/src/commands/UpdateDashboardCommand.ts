// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDashboardRequest, UpdateDashboardResponse } from "../models/models_0";
import { UpdateDashboard } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandInput extends UpdateDashboardRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandOutput extends UpdateDashboardResponse, __MetadataBearer {}

/**
 * <p>
 * Updates the specified dashboard.
 * </p>
 *          <p>
 *       To set a refresh schedule, CloudTrail must be granted permissions to run the <code>StartDashboardRefresh</code> operation to refresh the dashboard on your behalf. To provide permissions, run the <code>PutResourcePolicy</code> operation to attach a resource-based policy to the dashboard. For more information,
 *       see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-dashboards">
 *          Resource-based policy example for a dashboard</a> in the <i>CloudTrail User Guide</i>.
 *    </p>
 *          <p>
 *       CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the <code>StartQuery</code> operation on your behalf. To provide permissions, run the <code>PutResourcePolicy</code> operation to attach a resource-based policy to each event data store. For more information,
 *       see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-eds-dashboard">Example: Allow CloudTrail to run queries to populate a dashboard</a> in the <i>CloudTrail User Guide</i>.
 *    </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateDashboardCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateDashboardCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // UpdateDashboardRequest
 *   DashboardId: "STRING_VALUE", // required
 *   Widgets: [ // RequestWidgetList
 *     { // RequestWidget
 *       QueryStatement: "STRING_VALUE", // required
 *       QueryParameters: [ // QueryParameters
 *         "STRING_VALUE",
 *       ],
 *       ViewProperties: { // ViewPropertiesMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   RefreshSchedule: { // RefreshSchedule
 *     Frequency: { // RefreshScheduleFrequency
 *       Unit: "HOURS" || "DAYS",
 *       Value: Number("int"),
 *     },
 *     Status: "ENABLED" || "DISABLED",
 *     TimeOfDay: "STRING_VALUE",
 *   },
 *   TerminationProtectionEnabled: true || false,
 * };
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardResponse
 * //   DashboardArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Type: "MANAGED" || "CUSTOM",
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
 * //   TerminationProtectionEnabled: true || false,
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDashboardCommandInput - {@link UpdateDashboardCommandInput}
 * @returns {@link UpdateDashboardCommandOutput}
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InvalidQueryStatementException} (client fault)
 *  <p>The query that was submitted has validation errors, or uses incorrect syntax or
 *          unsupported keywords. For more information about writing a query, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User
 *             Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the specified resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *    This exception is thrown when the quota is exceeded. For information about CloudTrail quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ct.html#limits_cloudtrail">Service quotas</a>
 *    in the <i>Amazon Web Services General Reference</i>.
 * </p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class UpdateDashboardCommand extends $Command
  .classBuilder<
    UpdateDashboardCommandInput,
    UpdateDashboardCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "UpdateDashboard", {})
  .n("CloudTrailClient", "UpdateDashboardCommand")
  .sc(UpdateDashboard)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardRequest;
      output: UpdateDashboardResponse;
    };
    sdk: {
      input: UpdateDashboardCommandInput;
      output: UpdateDashboardCommandOutput;
    };
  };
}
