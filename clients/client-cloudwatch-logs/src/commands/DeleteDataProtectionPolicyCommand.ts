// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataProtectionPolicyRequest } from "../models/models_0";
import { de_DeleteDataProtectionPolicyCommand, se_DeleteDataProtectionPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataProtectionPolicyCommand}.
 */
export interface DeleteDataProtectionPolicyCommandInput extends DeleteDataProtectionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataProtectionPolicyCommand}.
 */
export interface DeleteDataProtectionPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the data protection policy from the specified log group. </p>
 *          <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDataProtectionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDataProtectionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteDataProtectionPolicyRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataProtectionPolicyCommandInput - {@link DeleteDataProtectionPolicyCommandInput}
 * @returns {@link DeleteDataProtectionPolicyCommandOutput}
 * @see {@link DeleteDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteDataProtectionPolicyCommandOutput} for command's `response` shape.
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
export class DeleteDataProtectionPolicyCommand extends $Command
  .classBuilder<
    DeleteDataProtectionPolicyCommandInput,
    DeleteDataProtectionPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteDataProtectionPolicy", {})
  .n("CloudWatchLogsClient", "DeleteDataProtectionPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataProtectionPolicyCommand)
  .de(de_DeleteDataProtectionPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataProtectionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataProtectionPolicyCommandInput;
      output: DeleteDataProtectionPolicyCommandOutput;
    };
  };
}
