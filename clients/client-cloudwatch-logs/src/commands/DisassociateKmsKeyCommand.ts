// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateKmsKeyRequest } from "../models/models_0";
import { de_DisassociateKmsKeyCommand, se_DisassociateKmsKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateKmsKeyCommand}.
 */
export interface DisassociateKmsKeyCommandInput extends DisassociateKmsKeyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateKmsKeyCommand}.
 */
export interface DisassociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates the specified KMS key from the specified log
 *       group or from all CloudWatch Logs Insights query results in the account.</p>
 *          <p>When you use <code>DisassociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter
 *       or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p>
 *          <ul>
 *             <li>
 *                <p>Specify the <code>logGroupName</code> parameter to stop using the KMS key
 *           to encrypt future log events ingested and stored in the log group. Instead, they will be
 *           encrypted with the default CloudWatch Logs method. The log events that were ingested
 *           while the key was associated with the log group are still encrypted with that key.
 *           Therefore, CloudWatch Logs will need permissions for the key whenever that data is
 *           accessed.</p>
 *             </li>
 *             <li>
 *                <p>Specify the <code>resourceIdentifier</code> parameter with the <code>query-result</code>
 *           resource to stop using the KMS key to encrypt the results of all
 *           future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>
 *           operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with
 *           the account are still encrypted with that key. Therefore, CloudWatch Logs will need
 *           permissions for the key whenever that data is accessed.</p>
 *             </li>
 *          </ul>
 *          <p>It can take up to 5 minutes for this operation to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DisassociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DisassociateKmsKeyRequest
 *   logGroupName: "STRING_VALUE",
 *   resourceIdentifier: "STRING_VALUE",
 * };
 * const command = new DisassociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateKmsKeyCommandInput - {@link DisassociateKmsKeyCommandInput}
 * @returns {@link DisassociateKmsKeyCommandOutput}
 * @see {@link DisassociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateKmsKeyCommandOutput} for command's `response` shape.
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
export class DisassociateKmsKeyCommand extends $Command
  .classBuilder<
    DisassociateKmsKeyCommandInput,
    DisassociateKmsKeyCommandOutput,
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
  .s("Logs_20140328", "DisassociateKmsKey", {})
  .n("CloudWatchLogsClient", "DisassociateKmsKeyCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateKmsKeyCommand)
  .de(de_DisassociateKmsKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateKmsKeyRequest;
      output: {};
    };
    sdk: {
      input: DisassociateKmsKeyCommandInput;
      output: DisassociateKmsKeyCommandOutput;
    };
  };
}
