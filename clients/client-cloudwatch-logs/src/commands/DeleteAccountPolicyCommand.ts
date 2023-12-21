// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccountPolicyRequest } from "../models/models_0";
import { de_DeleteAccountPolicyCommand, se_DeleteAccountPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountPolicyCommand}.
 */
export interface DeleteAccountPolicyCommandInput extends DeleteAccountPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountPolicyCommand}.
 */
export interface DeleteAccountPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a CloudWatch Logs account policy.</p>
 *          <p>To use this operation, you must be signed on with the <code>logs:DeleteDataProtectionPolicy</code> and
 *       <code>logs:DeleteAccountPolicy</code> permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteAccountPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteAccountPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteAccountPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyType: "DATA_PROTECTION_POLICY", // required
 * };
 * const command = new DeleteAccountPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPolicyCommandInput - {@link DeleteAccountPolicyCommandInput}
 * @returns {@link DeleteAccountPolicyCommandOutput}
 * @see {@link DeleteAccountPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPolicyCommandOutput} for command's `response` shape.
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
 */
export class DeleteAccountPolicyCommand extends $Command
  .classBuilder<
    DeleteAccountPolicyCommandInput,
    DeleteAccountPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: CloudWatchLogsClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteAccountPolicy", {})
  .n("CloudWatchLogsClient", "DeleteAccountPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountPolicyCommand)
  .de(de_DeleteAccountPolicyCommand)
  .build() {}
