// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRetentionPolicyRequest } from "../models/models_0";
import { DeleteRetentionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified retention policy.
 *
 * Log events do not expire if they belong to log groups without a retention policy.
 *
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
export class DeleteRetentionPolicyCommand extends command<DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRetentionPolicy",
  DeleteRetentionPolicy$
) {
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
