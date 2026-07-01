// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutFunctionRequest, PutFunctionResponse } from "../models/models_0";
import { PutFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutFunctionCommand}.
 */
export interface PutFunctionCommandInput extends PutFunctionRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionCommand}.
 */
export interface PutFunctionCommandOutput extends PutFunctionResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a function. A function defines reusable logic that MediaTailor executes at lifecycle hooks during ad insertion. For more information about functions, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html">Working with functions</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutFunctionCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutFunctionCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // PutFunctionRequest
 *   FunctionId: "STRING_VALUE", // required
 *   FunctionType: "HTTP_REQUEST" || "CUSTOM_OUTPUT" || "SEQUENTIAL_EXECUTOR", // required
 *   Description: "STRING_VALUE",
 *   HttpRequestConfiguration: { // HttpRequestConfiguration
 *     Runtime: "JSONATA", // required
 *     Output: { // __mapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     MethodType: "GET" || "POST", // required
 *     RequestTimeoutMilliseconds: Number("int"), // required
 *     Url: "STRING_VALUE", // required
 *     Body: "STRING_VALUE",
 *     Headers: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   CustomOutputConfiguration: { // CustomOutputConfiguration
 *     Runtime: "JSONATA", // required
 *     Output: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   SequentialExecutorConfiguration: { // SequentialExecutorConfiguration
 *     Runtime: "JSONATA", // required
 *     Output: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     FunctionList: [ // __listOfFunctionsRef // required
 *       { // FunctionRef
 *         RunCondition: "STRING_VALUE",
 *         FunctionId: "STRING_VALUE",
 *       },
 *     ],
 *     TimeoutMilliseconds: Number("int"), // required
 *   },
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutFunctionCommand(input);
 * const response = await client.send(command);
 * // { // PutFunctionResponse
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
 * @param PutFunctionCommandInput - {@link PutFunctionCommandInput}
 * @returns {@link PutFunctionCommandOutput}
 * @see {@link PutFunctionCommandInput} for command's `input` shape.
 * @see {@link PutFunctionCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class PutFunctionCommand extends command<PutFunctionCommandInput, PutFunctionCommandOutput>(
  _ep0,
  _mw0,
  "PutFunction",
  PutFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFunctionRequest;
      output: PutFunctionResponse;
    };
    sdk: {
      input: PutFunctionCommandInput;
      output: PutFunctionCommandOutput;
    };
  };
}
