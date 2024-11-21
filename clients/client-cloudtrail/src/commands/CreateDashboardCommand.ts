// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDashboardRequest, CreateDashboardResponse } from "../models/models_0";
import { de_CreateDashboardCommand, se_CreateDashboardCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDashboardCommand}.
 */
export interface CreateDashboardCommandInput extends CreateDashboardRequest {}
/**
 * @public
 *
 * The output of {@link CreateDashboardCommand}.
 */
export interface CreateDashboardCommandOutput extends CreateDashboardResponse, __MetadataBearer {}

/**
 * <p>
 * Creates a custom dashboard or the Highlights dashboard.
 * </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Custom dashboards</b> - Custom dashboards allow you to query
 *             events in any event data store type. You can add up to 10 widgets to a custom dashboard. You can manually refresh a custom dashboard, or you can set a refresh schedule.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Highlights dashboard</b> - You can create
 *             the Highlights dashboard to see a summary of key user activities and API usage across all your event data stores.
 *             CloudTrail Lake manages the Highlights dashboard and refreshes the dashboard every 6 hours. To create the Highlights dashboard, you must set and enable a refresh schedule.</p>
 *             </li>
 *          </ul>
 *          <p>
 *       CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the <code>StartQuery</code> operation on your behalf. To provide permissions, run the <code>PutResourcePolicy</code> operation to attach a resource-based policy to each event data store. For more information,
 *       see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-eds-dashboard">Example: Allow CloudTrail to run queries to populate a dashboard</a> in the <i>CloudTrail User Guide</i>.
 *    </p>
 *          <p>
 *       To set a refresh schedule, CloudTrail must be granted permissions to run the <code>StartDashboardRefresh</code> operation to refresh the dashboard on your behalf. To provide permissions, run the <code>PutResourcePolicy</code> operation to attach a resource-based policy to the dashboard. For more information,
 *       see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-dashboards">
 *          Resource-based policy example for a dashboard</a> in the <i>CloudTrail User Guide</i>.
 *    </p>
 *          <p>For more information about dashboards, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-dashboard.html">CloudTrail Lake dashboards</a> in the <i>CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, CreateDashboardCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, CreateDashboardCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // CreateDashboardRequest
 *   Name: "STRING_VALUE", // required
 *   RefreshSchedule: { // RefreshSchedule
 *     Frequency: { // RefreshScheduleFrequency
 *       Unit: "HOURS" || "DAYS",
 *       Value: Number("int"),
 *     },
 *     Status: "ENABLED" || "DISABLED",
 *     TimeOfDay: "STRING_VALUE",
 *   },
 *   TagsList: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   TerminationProtectionEnabled: true || false,
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
 * };
 * const command = new CreateDashboardCommand(input);
 * const response = await client.send(command);
 * // { // CreateDashboardResponse
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
 * //   TagsList: [ // TagsList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param CreateDashboardCommandInput - {@link CreateDashboardCommandInput}
 * @returns {@link CreateDashboardCommandOutput}
 * @see {@link CreateDashboardCommandInput} for command's `input` shape.
 * @see {@link CreateDashboardCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTagParameterException} (client fault)
 *  <p>This exception is thrown when the specified tag key or values are not valid. It can also
 *          occur if there are duplicate tags or too many tags on the resource.</p>
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
 * @public
 */
export class CreateDashboardCommand extends $Command
  .classBuilder<
    CreateDashboardCommandInput,
    CreateDashboardCommandOutput,
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
  .s("CloudTrail_20131101", "CreateDashboard", {})
  .n("CloudTrailClient", "CreateDashboardCommand")
  .f(void 0, void 0)
  .ser(se_CreateDashboardCommand)
  .de(de_CreateDashboardCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDashboardRequest;
      output: CreateDashboardResponse;
    };
    sdk: {
      input: CreateDashboardCommandInput;
      output: CreateDashboardCommandOutput;
    };
  };
}
