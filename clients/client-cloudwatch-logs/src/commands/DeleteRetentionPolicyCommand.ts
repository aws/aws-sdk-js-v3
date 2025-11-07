// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRetentionPolicyRequest } from "../models/models_0";
import { DeleteRetentionPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRetentionPolicyCommand}.
 */
export interface DeleteRetentionPolicyCommandInput extends DeleteRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetentionPolicyCommand}.
 */
export interface DeleteRetentionPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified retention policy.</p>
 *          <p>Log events do not expire if they belong to log groups without a retention
 *       policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteRetentionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteRetentionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteRetentionPolicyRequest
 *   logGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRetentionPolicyCommandInput - {@link DeleteRetentionPolicyCommandInput}
 * @returns {@link DeleteRetentionPolicyCommandOutput}
 * @see {@link DeleteRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRetentionPolicyCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteRetentionPolicyCommand extends $Command
  .classBuilder<
    DeleteRetentionPolicyCommandInput,
    DeleteRetentionPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteRetentionPolicy", {})
  .n("CloudWatchLogsClient", "DeleteRetentionPolicyCommand")
  .sc(DeleteRetentionPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetentionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteRetentionPolicyCommandInput;
      output: DeleteRetentionPolicyCommandOutput;
    };
  };
}
