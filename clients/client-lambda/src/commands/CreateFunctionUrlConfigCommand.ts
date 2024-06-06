// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { CreateFunctionUrlConfigRequest, CreateFunctionUrlConfigResponse } from "../models/models_0";
import { de_CreateFunctionUrlConfigCommand, se_CreateFunctionUrlConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionUrlConfigCommand}.
 */
export interface CreateFunctionUrlConfigCommandInput extends CreateFunctionUrlConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionUrlConfigCommand}.
 */
export interface CreateFunctionUrlConfigCommandOutput extends CreateFunctionUrlConfigResponse, __MetadataBearer {}

/**
 * <p>Creates a Lambda function URL with the specified configuration parameters. A function URL is
 *       a dedicated HTTP(S) endpoint that you can use to invoke your function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // CreateFunctionUrlConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 *   AuthType: "NONE" || "AWS_IAM", // required
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
 * const command = new CreateFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionUrlConfigResponse
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
 * //   InvokeMode: "BUFFERED" || "RESPONSE_STREAM",
 * // };
 *
 * ```
 *
 * @param CreateFunctionUrlConfigCommandInput - {@link CreateFunctionUrlConfigCommandInput}
 * @returns {@link CreateFunctionUrlConfigCommandOutput}
 * @see {@link CreateFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionUrlConfigCommandOutput} for command's `response` shape.
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
export class CreateFunctionUrlConfigCommand extends $Command
  .classBuilder<
    CreateFunctionUrlConfigCommandInput,
    CreateFunctionUrlConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "CreateFunctionUrlConfig", {})
  .n("LambdaClient", "CreateFunctionUrlConfigCommand")
  .f(void 0, void 0)
  .ser(se_CreateFunctionUrlConfigCommand)
  .de(de_CreateFunctionUrlConfigCommand)
  .build() {}
