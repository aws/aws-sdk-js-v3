// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFunctionUrlConfigsRequest, ListFunctionUrlConfigsResponse } from "../models/models_0";
import { ListFunctionUrlConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of Lambda function URLs for the specified function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionUrlConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionUrlConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
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
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class ListFunctionUrlConfigsCommand extends command<ListFunctionUrlConfigsCommandInput, ListFunctionUrlConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListFunctionUrlConfigs",
  ListFunctionUrlConfigs$
) {
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
