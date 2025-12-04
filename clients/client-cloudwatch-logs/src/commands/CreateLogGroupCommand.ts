// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLogGroupRequest } from "../models/models_0";
import { CreateLogGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLogGroupCommand}.
 */
export interface CreateLogGroupCommandInput extends CreateLogGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateLogGroupCommand}.
 */
export interface CreateLogGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a log group with the specified name. You can create up to 1,000,000 log groups
 *       per Region per account.</p>
 *          <p>You must use the following guidelines when naming a log group:</p>
 *          <ul>
 *             <li>
 *                <p>Log group names must be unique within a Region for an Amazon Web Services
 *           account.</p>
 *             </li>
 *             <li>
 *                <p>Log group names can be between 1 and 512 characters long.</p>
 *             </li>
 *             <li>
 *                <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_'
 *           (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number
 *           sign)</p>
 *             </li>
 *             <li>
 *                <p>Log group names can't start with the string <code>aws/</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>When you create a log group, by default the log events in the log group do not expire.
 *       To set a retention policy so that events expire and are deleted after a specified time, use
 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p>
 *          <p>If you associate an KMS key with the log group, ingested data is
 *       encrypted using the KMS key. This association is stored as long as the data
 *       encrypted with the KMS key is still within CloudWatch Logs. This enables
 *         CloudWatch Logs to decrypt this data whenever it is requested.</p>
 *          <p>If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an
 *         <code>InvalidParameterException</code> error. </p>
 *          <important>
 *             <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an
 *         asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using
 *           Symmetric and Asymmetric Keys</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   logGroupClass: "STANDARD" || "INFREQUENT_ACCESS" || "DELIVERY",
 *   deletionProtectionEnabled: true || false,
 * };
 * const command = new CreateLogGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLogGroupCommandInput - {@link CreateLogGroupCommandInput}
 * @returns {@link CreateLogGroupCommandOutput}
 * @see {@link CreateLogGroupCommandInput} for command's `input` shape.
 * @see {@link CreateLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
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
export class CreateLogGroupCommand extends $Command
  .classBuilder<
    CreateLogGroupCommandInput,
    CreateLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "CreateLogGroup", {})
  .n("CloudWatchLogsClient", "CreateLogGroupCommand")
  .sc(CreateLogGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLogGroupRequest;
      output: {};
    };
    sdk: {
      input: CreateLogGroupCommandInput;
      output: CreateLogGroupCommandOutput;
    };
  };
}
