// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDashboardRefreshRequest, StartDashboardRefreshResponse } from "../models/models_0";
import { de_StartDashboardRefreshCommand, se_StartDashboardRefreshCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDashboardRefreshCommand}.
 */
export interface StartDashboardRefreshCommandInput extends StartDashboardRefreshRequest {}
/**
 * @public
 *
 * The output of {@link StartDashboardRefreshCommand}.
 */
export interface StartDashboardRefreshCommandOutput extends StartDashboardRefreshResponse, __MetadataBearer {}

/**
 * <p>
 * Starts a refresh of the specified dashboard.
 * </p>
 *          <p>
 *    Each time a dashboard is refreshed, CloudTrail runs queries to populate the dashboard's widgets. CloudTrail must be granted permissions to run the <code>StartQuery</code> operation on your behalf. To provide permissions, run the <code>PutResourcePolicy</code> operation to attach a resource-based policy to each event data store. For more information,
 *    see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-eds-dashboard">Example: Allow CloudTrail to run queries to populate a dashboard</a> in the <i>CloudTrail User Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartDashboardRefreshCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartDashboardRefreshCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // StartDashboardRefreshRequest
 *   DashboardId: "STRING_VALUE", // required
 *   QueryParameterValues: { // QueryParameterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartDashboardRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartDashboardRefreshResponse
 * //   RefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDashboardRefreshCommandInput - {@link StartDashboardRefreshCommandInput}
 * @returns {@link StartDashboardRefreshCommandOutput}
 * @see {@link StartDashboardRefreshCommandInput} for command's `input` shape.
 * @see {@link StartDashboardRefreshCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
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
export class StartDashboardRefreshCommand extends $Command
  .classBuilder<
    StartDashboardRefreshCommandInput,
    StartDashboardRefreshCommandOutput,
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
  .s("CloudTrail_20131101", "StartDashboardRefresh", {})
  .n("CloudTrailClient", "StartDashboardRefreshCommand")
  .f(void 0, void 0)
  .ser(se_StartDashboardRefreshCommand)
  .de(de_StartDashboardRefreshCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDashboardRefreshRequest;
      output: StartDashboardRefreshResponse;
    };
    sdk: {
      input: StartDashboardRefreshCommandInput;
      output: StartDashboardRefreshCommandOutput;
    };
  };
}
