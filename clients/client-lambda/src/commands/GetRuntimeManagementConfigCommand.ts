// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetRuntimeManagementConfigRequest, GetRuntimeManagementConfigResponse } from "../models/models_0";
import { GetRuntimeManagementConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandInput extends GetRuntimeManagementConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandOutput extends GetRuntimeManagementConfigResponse, __MetadataBearer {}

/**
 * <p>Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetRuntimeManagementConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetRuntimeManagementConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetRuntimeManagementConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new GetRuntimeManagementConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeManagementConfigResponse
 * //   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate",
 * //   RuntimeVersionArn: "STRING_VALUE",
 * //   FunctionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRuntimeManagementConfigCommandInput - {@link GetRuntimeManagementConfigCommandInput}
 * @returns {@link GetRuntimeManagementConfigCommandOutput}
 * @see {@link GetRuntimeManagementConfigCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeManagementConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class GetRuntimeManagementConfigCommand extends $Command
  .classBuilder<
    GetRuntimeManagementConfigCommandInput,
    GetRuntimeManagementConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetRuntimeManagementConfig", {})
  .n("LambdaClient", "GetRuntimeManagementConfigCommand")
  .sc(GetRuntimeManagementConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuntimeManagementConfigRequest;
      output: GetRuntimeManagementConfigResponse;
    };
    sdk: {
      input: GetRuntimeManagementConfigCommandInput;
      output: GetRuntimeManagementConfigCommandOutput;
    };
  };
}
