// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionEventInvokeConfigsRequest, ListFunctionEventInvokeConfigsResponse } from "../models/models_0";
import {
  de_ListFunctionEventInvokeConfigsCommand,
  se_ListFunctionEventInvokeConfigsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionEventInvokeConfigsCommand}.
 */
export interface ListFunctionEventInvokeConfigsCommandInput extends ListFunctionEventInvokeConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionEventInvokeConfigsCommand}.
 */
export interface ListFunctionEventInvokeConfigsCommandOutput
  extends ListFunctionEventInvokeConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionEventInvokeConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionEventInvokeConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionEventInvokeConfigsRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionEventInvokeConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionEventInvokeConfigsResponse
 * //   FunctionEventInvokeConfigs: [ // FunctionEventInvokeConfigList
 * //     { // FunctionEventInvokeConfig
 * //       LastModified: new Date("TIMESTAMP"),
 * //       FunctionArn: "STRING_VALUE",
 * //       MaximumRetryAttempts: Number("int"),
 * //       MaximumEventAgeInSeconds: Number("int"),
 * //       DestinationConfig: { // DestinationConfig
 * //         OnSuccess: { // OnSuccess
 * //           Destination: "STRING_VALUE",
 * //         },
 * //         OnFailure: { // OnFailure
 * //           Destination: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionEventInvokeConfigsCommandInput - {@link ListFunctionEventInvokeConfigsCommandInput}
 * @returns {@link ListFunctionEventInvokeConfigsCommandOutput}
 * @see {@link ListFunctionEventInvokeConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionEventInvokeConfigsCommandOutput} for command's `response` shape.
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
 * @example To view a list of asynchronous invocation configurations
 * ```javascript
 * // The following example returns a list of asynchronous invocation configurations for a function named my-function.
 * const input = {
 *   FunctionName: "my-function"
 * };
 * const command = new ListFunctionEventInvokeConfigsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FunctionEventInvokeConfigs: [
 *     {
 *       FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:GREEN",
 *       LastModified: 1.577824406719E9,
 *       MaximumEventAgeInSeconds: 1800,
 *       MaximumRetryAttempts: 2
 *     },
 *     {
 *       FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:BLUE",
 *       LastModified: 1.577824396653E9,
 *       MaximumEventAgeInSeconds: 3600,
 *       MaximumRetryAttempts: 0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListFunctionEventInvokeConfigsCommand extends $Command
  .classBuilder<
    ListFunctionEventInvokeConfigsCommandInput,
    ListFunctionEventInvokeConfigsCommandOutput,
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
  .s("AWSGirApiService", "ListFunctionEventInvokeConfigs", {})
  .n("LambdaClient", "ListFunctionEventInvokeConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListFunctionEventInvokeConfigsCommand)
  .de(de_ListFunctionEventInvokeConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionEventInvokeConfigsRequest;
      output: ListFunctionEventInvokeConfigsResponse;
    };
    sdk: {
      input: ListFunctionEventInvokeConfigsCommandInput;
      output: ListFunctionEventInvokeConfigsCommandOutput;
    };
  };
}
