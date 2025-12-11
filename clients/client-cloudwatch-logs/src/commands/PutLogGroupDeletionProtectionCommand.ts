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
import type { PutLogGroupDeletionProtectionRequest } from "../models/models_0";
import { PutLogGroupDeletionProtection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Enables or disables deletion protection for the specified log group. When enabled on a log group, deletion protection blocks all
 *       deletion operations until it is explicitly disabled.</p>
 *          <p>For information about the parameters that are common to all actions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p>
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
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
export class PutLogGroupDeletionProtectionCommand extends $Command
  .classBuilder<
    PutLogGroupDeletionProtectionCommandInput,
    PutLogGroupDeletionProtectionCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutLogGroupDeletionProtection", {})
  .n("CloudWatchLogsClient", "PutLogGroupDeletionProtectionCommand")
  .sc(PutLogGroupDeletionProtection)
  .build() {
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
