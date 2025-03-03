// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { UpdateFunctionUrlConfigRequest, UpdateFunctionUrlConfigResponse } from "../models/models_0";
import { UpdateFunctionUrlConfig } from "../schemas/com.amazonaws.lambda";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFunctionUrlConfigCommand}.
 */
export interface UpdateFunctionUrlConfigCommandInput extends UpdateFunctionUrlConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionUrlConfigCommand}.
 */
export interface UpdateFunctionUrlConfigCommandOutput extends UpdateFunctionUrlConfigResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration for a Lambda function URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // UpdateFunctionUrlConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 *   AuthType: "NONE" || "AWS_IAM",
 *   Cors: { // Cors
 *     AllowCredentials: true || false,
 *     AllowHeaders: [ // HeadersList
 *       "STRING_VALUE",
 *     ],
 *     AllowMethods: [ // AllowMethodsList
 *       "STRING_VALUE",
 *     ],
 *     AllowOrigins: [ // AllowOriginsList
 *       "STRING_VALUE",
 *     ],
 *     ExposeHeaders: [
 *       "STRING_VALUE",
 *     ],
 *     MaxAge: Number("int"),
 *   },
 *   InvokeMode: "BUFFERED" || "RESPONSE_STREAM",
 * };
 * const command = new UpdateFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFunctionUrlConfigResponse
 * //   FunctionUrl: "STRING_VALUE", // required
 * //   FunctionArn: "STRING_VALUE", // required
 * //   AuthType: "NONE" || "AWS_IAM", // required
 * //   Cors: { // Cors
 * //     AllowCredentials: true || false,
 * //     AllowHeaders: [ // HeadersList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowMethods: [ // AllowMethodsList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowOrigins: [ // AllowOriginsList
 * //       "STRING_VALUE",
 * //     ],
 * //     ExposeHeaders: [
 * //       "STRING_VALUE",
 * //     ],
 * //     MaxAge: Number("int"),
 * //   },
 * //   CreationTime: "STRING_VALUE", // required
 * //   LastModifiedTime: "STRING_VALUE", // required
 * //   InvokeMode: "BUFFERED" || "RESPONSE_STREAM",
 * // };
 *
 * ```
 *
 * @param UpdateFunctionUrlConfigCommandInput - {@link UpdateFunctionUrlConfigCommandInput}
 * @returns {@link UpdateFunctionUrlConfigCommandOutput}
 * @see {@link UpdateFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionUrlConfigCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateFunctionUrlConfigCommand extends $Command
  .classBuilder<
    UpdateFunctionUrlConfigCommandInput,
    UpdateFunctionUrlConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "UpdateFunctionUrlConfig", {})
  .n("LambdaClient", "UpdateFunctionUrlConfigCommand")
  .f(void 0, void 0)
  .sc(UpdateFunctionUrlConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFunctionUrlConfigRequest;
      output: UpdateFunctionUrlConfigResponse;
    };
    sdk: {
      input: UpdateFunctionUrlConfigCommandInput;
      output: UpdateFunctionUrlConfigCommandOutput;
    };
  };
}
