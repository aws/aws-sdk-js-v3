// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateKmsKeyRequest } from "../models/models_0";
import { AssociateKmsKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateKmsKeyCommand}.
 */
export interface AssociateKmsKeyCommandInput extends AssociateKmsKeyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateKmsKeyCommand}.
 */
export interface AssociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates the specified KMS key with either one log group in the
 *       account, or with all stored CloudWatch Logs query insights results in the
 *       account.</p>
 *          <p>When you use <code>AssociateKmsKey</code>, you specify either the
 *         <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You
 *       can't specify both of those parameters in the same operation.</p>
 *          <ul>
 *             <li>
 *                <p>Specify the <code>logGroupName</code> parameter to cause log events ingested into that
 *           log group to be encrypted with that key. Only the log events ingested after the key is
 *           associated are encrypted with that key.</p>
 *                <p>Associating a KMS key with a log group overrides any existing
 *           associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group
 *           is encrypted using the KMS key. This association is stored as long as the
 *           data encrypted with the KMS key is still within CloudWatch Logs. This
 *           enables CloudWatch Logs to decrypt this data whenever it is requested.</p>
 *                <p>Associating a key with a log group does not cause the results of queries of that log
 *           group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an <code>AssociateKmsKey</code> operation with the
 *             <code>resourceIdentifier</code> parameter that specifies a <code>query-result</code>
 *           resource. </p>
 *             </li>
 *             <li>
 *                <p>Specify the <code>resourceIdentifier</code> parameter with a <code>query-result</code>
 *           resource, to use that key to encrypt the stored results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. The response from a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> operation will still return the query results in plain
 *           text.</p>
 *                <p>Even if you have not associated a key with your query results, the query results are
 *           encrypted when stored, using the default CloudWatch Logs method.</p>
 *                <p>If you run a query from a monitoring account that queries logs in a source account,
 *           the query results key from the monitoring account, if any, is used.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If you delete the key that is used to encrypt log events or log group query results,
 *         then all the associated stored log events or query results that were encrypted with that key
 *         will be unencryptable and unusable.</p>
 *          </important>
 *          <note>
 *             <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an
 *         asymmetric KMS key with your log group or query results. For more
 *         information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric
 *           Keys</a>.</p>
 *          </note>
 *          <p>It can take up to 5 minutes for this operation to take effect.</p>
 *          <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an
 *         <code>InvalidParameterException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, AssociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, AssociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // AssociateKmsKeyRequest
 *   logGroupName: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE", // required
 *   resourceIdentifier: "STRING_VALUE",
 * };
 * const command = new AssociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateKmsKeyCommandInput - {@link AssociateKmsKeyCommandInput}
 * @returns {@link AssociateKmsKeyCommandOutput}
 * @see {@link AssociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateKmsKeyCommandOutput} for command's `response` shape.
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
export class AssociateKmsKeyCommand extends $Command
  .classBuilder<
    AssociateKmsKeyCommandInput,
    AssociateKmsKeyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "AssociateKmsKey", {})
  .n("CloudWatchLogsClient", "AssociateKmsKeyCommand")
  .sc(AssociateKmsKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateKmsKeyRequest;
      output: {};
    };
    sdk: {
      input: AssociateKmsKeyCommandInput;
      output: AssociateKmsKeyCommandOutput;
    };
  };
}
