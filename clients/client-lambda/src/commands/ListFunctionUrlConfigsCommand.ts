// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionUrlConfigsRequest, ListFunctionUrlConfigsResponse } from "../models/models_0";
import { de_ListFunctionUrlConfigsCommand, se_ListFunctionUrlConfigsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionUrlConfigsCommand}.
 */
export interface ListFunctionUrlConfigsCommandInput extends ListFunctionUrlConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionUrlConfigsCommand}.
 */
export interface ListFunctionUrlConfigsCommandOutput extends ListFunctionUrlConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Lambda function URLs for the specified function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionUrlConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionUrlConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionUrlConfigsRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionUrlConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionUrlConfigsResponse
 * //   FunctionUrlConfigs: [ // FunctionUrlConfigList // required
 * //     { // FunctionUrlConfig
 * //       FunctionUrl: "STRING_VALUE", // required
 * //       FunctionArn: "STRING_VALUE", // required
 * //       CreationTime: "STRING_VALUE", // required
 * //       LastModifiedTime: "STRING_VALUE", // required
 * //       Cors: { // Cors
 * //         AllowCredentials: true || false,
 * //         AllowHeaders: [ // HeadersList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowMethods: [ // AllowMethodsList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowOrigins: [ // AllowOriginsList
 * //           "STRING_VALUE",
 * //         ],
 * //         ExposeHeaders: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MaxAge: Number("int"),
 * //       },
 * //       AuthType: "NONE" || "AWS_IAM", // required
 * //       InvokeMode: "BUFFERED" || "RESPONSE_STREAM",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionUrlConfigsCommandInput - {@link ListFunctionUrlConfigsCommandInput}
 * @returns {@link ListFunctionUrlConfigsCommandOutput}
 * @see {@link ListFunctionUrlConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionUrlConfigsCommandOutput} for command's `response` shape.
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
export class ListFunctionUrlConfigsCommand extends $Command
  .classBuilder<
    ListFunctionUrlConfigsCommandInput,
    ListFunctionUrlConfigsCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "ListFunctionUrlConfigs", {})
  .n("LambdaClient", "ListFunctionUrlConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListFunctionUrlConfigsCommand)
  .de(de_ListFunctionUrlConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionUrlConfigsRequest;
      output: ListFunctionUrlConfigsResponse;
    };
    sdk: {
      input: ListFunctionUrlConfigsCommandInput;
      output: ListFunctionUrlConfigsCommandOutput;
    };
  };
}
