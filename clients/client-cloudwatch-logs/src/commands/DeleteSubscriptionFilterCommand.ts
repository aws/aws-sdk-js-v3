// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSubscriptionFilterRequest } from "../models/models_0";
import { de_DeleteSubscriptionFilterCommand, se_DeleteSubscriptionFilterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubscriptionFilterCommand}.
 */
export interface DeleteSubscriptionFilterCommandInput extends DeleteSubscriptionFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriptionFilterCommand}.
 */
export interface DeleteSubscriptionFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified subscription filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteSubscriptionFilterRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubscriptionFilterCommandInput - {@link DeleteSubscriptionFilterCommandInput}
 * @returns {@link DeleteSubscriptionFilterCommandOutput}
 * @see {@link DeleteSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class DeleteSubscriptionFilterCommand extends $Command
  .classBuilder<
    DeleteSubscriptionFilterCommandInput,
    DeleteSubscriptionFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteSubscriptionFilter", {})
  .n("CloudWatchLogsClient", "DeleteSubscriptionFilterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSubscriptionFilterCommand)
  .de(de_DeleteSubscriptionFilterCommand)
  .build() {}
