// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { PutRuntimeManagementConfigRequest, PutRuntimeManagementConfigResponse } from "../models/models_0";
import { PutRuntimeManagementConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandInput extends PutRuntimeManagementConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutRuntimeManagementConfigCommand}.
 */
export interface PutRuntimeManagementConfigCommandOutput extends PutRuntimeManagementConfigResponse, __MetadataBearer {}

/**
 * <p>Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutRuntimeManagementConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutRuntimeManagementConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PutRuntimeManagementConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 *   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate", // required
 *   RuntimeVersionArn: "STRING_VALUE",
 * };
 * const command = new PutRuntimeManagementConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutRuntimeManagementConfigResponse
 * //   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate", // required
 * //   FunctionArn: "STRING_VALUE", // required
 * //   RuntimeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutRuntimeManagementConfigCommandInput - {@link PutRuntimeManagementConfigCommandInput}
 * @returns {@link PutRuntimeManagementConfigCommandOutput}
 * @see {@link PutRuntimeManagementConfigCommandInput} for command's `input` shape.
 * @see {@link PutRuntimeManagementConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
export class PutRuntimeManagementConfigCommand extends $Command
  .classBuilder<
    PutRuntimeManagementConfigCommandInput,
    PutRuntimeManagementConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "PutRuntimeManagementConfig", {})
  .n("LambdaClient", "PutRuntimeManagementConfigCommand")
  .sc(PutRuntimeManagementConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRuntimeManagementConfigRequest;
      output: PutRuntimeManagementConfigResponse;
    };
    sdk: {
      input: PutRuntimeManagementConfigCommandInput;
      output: PutRuntimeManagementConfigCommandOutput;
    };
  };
}
