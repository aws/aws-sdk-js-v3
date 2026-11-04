// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataProtectionPolicyRequest, GetDataProtectionPolicyResponse } from "../models/models_0";
import { GetDataProtectionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataProtectionPolicyCommand}.
 */
export interface GetDataProtectionPolicyCommandInput extends GetDataProtectionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetDataProtectionPolicyCommand}.
 */
export interface GetDataProtectionPolicyCommandOutput extends GetDataProtectionPolicyResponse, __MetadataBearer {}

/**
 * Returns information about a log group data protection policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetDataProtectionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetDataProtectionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetDataProtectionPolicyRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDataProtectionPolicyResponse
 * //   logGroupIdentifier: "STRING_VALUE",
 * //   policyDocument: "STRING_VALUE",
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetDataProtectionPolicyCommandInput - {@link GetDataProtectionPolicyCommandInput}
 * @returns {@link GetDataProtectionPolicyCommandOutput}
 * @see {@link GetDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataProtectionPolicyCommandOutput} for command's `response` shape.
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
export class GetDataProtectionPolicyCommand extends command<GetDataProtectionPolicyCommandInput, GetDataProtectionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetDataProtectionPolicy",
  GetDataProtectionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataProtectionPolicyRequest;
      output: GetDataProtectionPolicyResponse;
    };
    sdk: {
      input: GetDataProtectionPolicyCommandInput;
      output: GetDataProtectionPolicyCommandOutput;
    };
  };
}
