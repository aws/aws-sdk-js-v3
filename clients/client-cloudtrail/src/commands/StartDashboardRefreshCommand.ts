// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDashboardRefreshRequest, StartDashboardRefreshResponse } from "../models/models_0";
import { StartDashboardRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Starts a refresh of the specified dashboard.
 *
 * Each time a dashboard is refreshed, CloudTrail runs queries to populate the dashboard's widgets. CloudTrail must be granted permissions to run the `StartQuery` operation on your behalf. To provide permissions, run the `PutResourcePolicy` operation to attach a resource-based policy to each event data store. For more information, see [Example: Allow CloudTrail to run queries to populate a dashboard](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-eds-dashboard) in the *CloudTrail User Guide*.
 *
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
 *
 * The specified event data store was not found.
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *
 * The event data store is inactive.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the specified resource is not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This exception is thrown when the quota is exceeded. For information about CloudTrail quotas, see [Service quotas](https://docs.aws.amazon.com/general/latest/gr/ct.html#limits_cloudtrail) in the *Amazon Web Services General Reference*.
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
export class StartDashboardRefreshCommand extends command<StartDashboardRefreshCommandInput, StartDashboardRefreshCommandOutput>(
  _ep0,
  _mw0,
  "StartDashboardRefresh",
  StartDashboardRefresh$
) {
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
