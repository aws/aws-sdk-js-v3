// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutStorageTierPolicyRequest, PutStorageTierPolicyResponse } from "../models/models_0";
import { PutStorageTierPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutStorageTierPolicyCommand}.
 */
export interface PutStorageTierPolicyCommandInput extends PutStorageTierPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutStorageTierPolicyCommand}.
 */
export interface PutStorageTierPolicyCommandOutput extends PutStorageTierPolicyResponse, __MetadataBearer {}

/**
 * <p>Sets the storage tier policy for your account. When you set the storage tier to
 *       <code>INTELLIGENT_TIERING</code>, CloudWatch Logs automatically moves your log data between
 *       storage tiers based on access patterns to optimize costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutStorageTierPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutStorageTierPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutStorageTierPolicyRequest
 *   storageTier: "STANDARD" || "INTELLIGENT_TIERING", // required
 * };
 * const command = new PutStorageTierPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutStorageTierPolicyResponse
 * //   storageTier: "STANDARD" || "INTELLIGENT_TIERING",
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param PutStorageTierPolicyCommandInput - {@link PutStorageTierPolicyCommandInput}
 * @returns {@link PutStorageTierPolicyCommandOutput}
 * @see {@link PutStorageTierPolicyCommandInput} for command's `input` shape.
 * @see {@link PutStorageTierPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
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
export class PutStorageTierPolicyCommand extends command<PutStorageTierPolicyCommandInput, PutStorageTierPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutStorageTierPolicy",
  PutStorageTierPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutStorageTierPolicyRequest;
      output: PutStorageTierPolicyResponse;
    };
    sdk: {
      input: PutStorageTierPolicyCommandInput;
      output: PutStorageTierPolicyCommandOutput;
    };
  };
}
