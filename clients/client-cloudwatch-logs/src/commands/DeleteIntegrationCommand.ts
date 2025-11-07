// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIntegrationRequest, DeleteIntegrationResponse } from "../models/models_0";
import { DeleteIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationCommand}.
 */
export interface DeleteIntegrationCommandInput extends DeleteIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationCommand}.
 */
export interface DeleteIntegrationCommandOutput extends DeleteIntegrationResponse, __MetadataBearer {}

/**
 * <p>Deletes the integration between CloudWatch Logs and OpenSearch Service. If your
 *       integration has active vended logs dashboards, you must specify <code>true</code> for the
 *         <code>force</code> parameter, otherwise the operation will fail. If you delete the
 *       integration by setting <code>force</code> to <code>true</code>, all your vended logs
 *       dashboards powered by OpenSearch Service will be deleted and the data that was on them will no
 *       longer be accessible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteIntegrationRequest
 *   integrationName: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationCommandInput - {@link DeleteIntegrationCommandInput}
 * @returns {@link DeleteIntegrationCommandOutput}
 * @see {@link DeleteIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DeleteIntegrationCommand extends $Command
  .classBuilder<
    DeleteIntegrationCommandInput,
    DeleteIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteIntegration", {})
  .n("CloudWatchLogsClient", "DeleteIntegrationCommand")
  .sc(DeleteIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationCommandInput;
      output: DeleteIntegrationCommandOutput;
    };
  };
}
