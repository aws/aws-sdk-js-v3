// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateKmsKeyRequest } from "../models/models_0";
import { DisassociateKmsKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account.
 *
 * When you use `DisassociateKmsKey`, you specify either the `logGroupName` parameter or the `resourceIdentifier` parameter. You can't specify both of those parameters in the same operation.
 *
 * - Specify the `logGroupName` parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.
 * - Specify the `resourceIdentifier` parameter with the `query-result` resource to stop using the KMS key to encrypt the results of all future [StartQuery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html) operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.
 *
 * It can take up to 5 minutes for this operation to take effect.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DisassociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
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
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DisassociateKmsKeyCommand extends command<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateKmsKey",
  DisassociateKmsKey$
) {
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
