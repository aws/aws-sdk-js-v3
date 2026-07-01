// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduledReportRequest, DeleteScheduledReportResponse } from "../models/models_0";
import { DeleteScheduledReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScheduledReportCommand}.
 */
export interface DeleteScheduledReportCommandInput extends DeleteScheduledReportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScheduledReportCommand}.
 */
export interface DeleteScheduledReportCommandOutput extends DeleteScheduledReportResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified scheduled report. This is an irreversible operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, DeleteScheduledReportCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, DeleteScheduledReportCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // DeleteScheduledReportRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduledReportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteScheduledReportResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteScheduledReportCommandInput - {@link DeleteScheduledReportCommandInput}
 * @returns {@link DeleteScheduledReportCommandOutput}
 * @see {@link DeleteScheduledReportCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledReportCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource (dashboard, policy, or widget) was not found. Verify the ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters do not satisfy the requirements. Check the error message for specific validation details.</p>
 *
 * @throws {@link BCMDashboardsServiceException}
 * <p>Base exception class for all service exceptions from BCMDashboards service.</p>
 *
 *
 * @public
 */
export class DeleteScheduledReportCommand extends command<DeleteScheduledReportCommandInput, DeleteScheduledReportCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScheduledReport",
  DeleteScheduledReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduledReportRequest;
      output: DeleteScheduledReportResponse;
    };
    sdk: {
      input: DeleteScheduledReportCommandInput;
      output: DeleteScheduledReportCommandOutput;
    };
  };
}
