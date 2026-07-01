// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionRequest, GetFunctionResponse } from "../models/models_0";
import { GetFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandInput extends GetFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandOutput extends GetFunctionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the configuration and metadata for a function. For more information about functions, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html">Working with functions</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetFunctionCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetFunctionCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // GetFunctionRequest
 *   FunctionId: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionResponse
 * //   FunctionId: "STRING_VALUE", // required
 * //   FunctionType: "HTTP_REQUEST" || "CUSTOM_OUTPUT" || "SEQUENTIAL_EXECUTOR", // required
 * //   Description: "STRING_VALUE",
 * //   HttpRequestConfiguration: { // HttpRequestConfiguration
 * //     Runtime: "JSONATA", // required
 * //     Output: { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     MethodType: "GET" || "POST", // required
 * //     RequestTimeoutMilliseconds: Number("int"), // required
 * //     Url: "STRING_VALUE", // required
 * //     Body: "STRING_VALUE",
 * //     Headers: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   CustomOutputConfiguration: { // CustomOutputConfiguration
 * //     Runtime: "JSONATA", // required
 * //     Output: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   SequentialExecutorConfiguration: { // SequentialExecutorConfiguration
 * //     Runtime: "JSONATA", // required
 * //     Output: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     FunctionList: [ // __listOfFunctionsRef // required
 * //       { // FunctionRef
 * //         RunCondition: "STRING_VALUE",
 * //         FunctionId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TimeoutMilliseconds: Number("int"), // required
 * //   },
 * //   Tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFunctionCommandInput - {@link GetFunctionCommandInput}
 * @returns {@link GetFunctionCommandOutput}
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class GetFunctionCommand extends command<GetFunctionCommandInput, GetFunctionCommandOutput>(
  _ep0,
  _mw0,
  "GetFunction",
  GetFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionRequest;
      output: GetFunctionResponse;
    };
    sdk: {
      input: GetFunctionCommandInput;
      output: GetFunctionCommandOutput;
    };
  };
}
