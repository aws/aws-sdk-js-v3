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
 * Returns the storage tier policy for the account.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
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
