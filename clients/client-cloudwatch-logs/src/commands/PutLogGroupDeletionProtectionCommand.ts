// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLogGroupDeletionProtectionRequest } from "../models/models_0";
import { PutLogGroupDeletionProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLogGroupDeletionProtectionCommand}.
 */
export interface PutLogGroupDeletionProtectionCommandInput extends PutLogGroupDeletionProtectionRequest {}
/**
 * @public
 *
 * The output of {@link PutLogGroupDeletionProtectionCommand}.
 */
export interface PutLogGroupDeletionProtectionCommandOutput extends __MetadataBearer {}

/**
 * Enables or disables deletion protection for the specified log group. When enabled on a log group, deletion protection blocks all deletion operations until it is explicitly disabled.
 *
 * For information about the parameters that are common to all actions, see [Common Parameters](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/CommonParameters.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutLogGroupDeletionProtectionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutLogGroupDeletionProtectionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutLogGroupDeletionProtectionRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 *   deletionProtectionEnabled: true || false, // required
 * };
 * const command = new PutLogGroupDeletionProtectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLogGroupDeletionProtectionCommandInput - {@link PutLogGroupDeletionProtectionCommandInput}
 * @returns {@link PutLogGroupDeletionProtectionCommandOutput}
 * @see {@link PutLogGroupDeletionProtectionCommandInput} for command's `input` shape.
 * @see {@link PutLogGroupDeletionProtectionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
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
export class PutLogGroupDeletionProtectionCommand extends command<PutLogGroupDeletionProtectionCommandInput, PutLogGroupDeletionProtectionCommandOutput>(
  _ep0,
  _mw0,
  "PutLogGroupDeletionProtection",
  PutLogGroupDeletionProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLogGroupDeletionProtectionRequest;
      output: {};
    };
    sdk: {
      input: PutLogGroupDeletionProtectionCommandInput;
      output: PutLogGroupDeletionProtectionCommandOutput;
    };
  };
}
