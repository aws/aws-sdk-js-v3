// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDashboardRequest, DeleteDashboardResponse } from "../models/models_0";
import { de_DeleteDashboardCommand, se_DeleteDashboardCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a specified dashboard. This action cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, DeleteDashboardCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, DeleteDashboardCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
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
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
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
export class DeleteDashboardCommand extends $Command
  .classBuilder<
    DeleteDashboardCommandInput,
    DeleteDashboardCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBCMDashboardsService", "DeleteDashboard", {})
  .n("BCMDashboardsClient", "DeleteDashboardCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDashboardCommand)
  .de(de_DeleteDashboardCommand)
  .build() {
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
