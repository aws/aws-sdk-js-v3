// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataProtectionPolicyRequest } from "../models/models_0";
import { DeleteDataProtectionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the data protection policy from the specified log group.
 *
 * For more information about data protection policies, see [PutDataProtectionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDataProtectionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDataProtectionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
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
export class DeleteDataProtectionPolicyCommand extends command<DeleteDataProtectionPolicyCommandInput, DeleteDataProtectionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataProtectionPolicy",
  DeleteDataProtectionPolicy$
) {
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
