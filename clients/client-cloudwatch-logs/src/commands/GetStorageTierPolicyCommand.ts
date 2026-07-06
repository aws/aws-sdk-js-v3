// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStorageTierPolicyRequest, GetStorageTierPolicyResponse } from "../models/models_0";
import { GetStorageTierPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStorageTierPolicyCommand}.
 */
export interface GetStorageTierPolicyCommandInput extends GetStorageTierPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageTierPolicyCommand}.
 */
export interface GetStorageTierPolicyCommandOutput extends GetStorageTierPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the storage tier policy for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetStorageTierPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetStorageTierPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = {};
 * const command = new GetStorageTierPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageTierPolicyResponse
 * //   storageTier: "STANDARD" || "INTELLIGENT_TIERING",
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetStorageTierPolicyCommandInput - {@link GetStorageTierPolicyCommandInput}
 * @returns {@link GetStorageTierPolicyCommandOutput}
 * @see {@link GetStorageTierPolicyCommandInput} for command's `input` shape.
 * @see {@link GetStorageTierPolicyCommandOutput} for command's `response` shape.
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
export class GetStorageTierPolicyCommand extends command<GetStorageTierPolicyCommandInput, GetStorageTierPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetStorageTierPolicy",
  GetStorageTierPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetStorageTierPolicyResponse;
    };
    sdk: {
      input: GetStorageTierPolicyCommandInput;
      output: GetStorageTierPolicyCommandOutput;
    };
  };
}
