// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDashboardRequest, DeleteDashboardResponse } from "../models/models_0";
import { DeleteDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDashboardCommand}.
 */
export interface DeleteDashboardCommandInput extends DeleteDashboardRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDashboardCommand}.
 */
export interface DeleteDashboardCommandOutput extends DeleteDashboardResponse, __MetadataBearer {}

/**
 * Deletes a specified dashboard. This action cannot be undone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, DeleteDashboardCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, DeleteDashboardCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // DeleteDashboardRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDashboardCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDashboardResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDashboardCommandInput - {@link DeleteDashboardCommandInput}
 * @returns {@link DeleteDashboardCommandOutput}
 * @see {@link DeleteDashboardCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters do not satisfy the requirements. Check the error message for specific validation details.
 *
 * @throws {@link BCMDashboardsServiceException}
 *
 * Base exception class for all service exceptions from BCMDashboards service.
 *
 * @example Deleting a dashboard
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:bcm-dashboards::123456789012:dashboard/abcd1234-ab12-12ab-1ab2-abcd1234efgh"
 * };
 * const command = new DeleteDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:bcm-dashboards::123456789012:dashboard/abcd1234-ab12-12ab-1ab2-abcd1234efgh"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDashboardCommand extends command<DeleteDashboardCommandInput, DeleteDashboardCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDashboard",
  DeleteDashboard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDashboardRequest;
      output: DeleteDashboardResponse;
    };
    sdk: {
      input: DeleteDashboardCommandInput;
      output: DeleteDashboardCommandOutput;
    };
  };
}
