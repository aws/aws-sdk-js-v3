// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetParametersByPathRequest, GetParametersByPathResult } from "../models/models_1";
import { GetParametersByPath$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetParametersByPathCommand}.
 */
export interface GetParametersByPathCommandInput extends GetParametersByPathRequest {}
/**
 * @public
 *
 * The output of {@link GetParametersByPathCommand}.
 */
export interface GetParametersByPathCommandOutput extends GetParametersByPathResult, __MetadataBearer {}

/**
 * Retrieve information about one or more parameters under a specified level in a hierarchy.
 *
 * Request results are returned on a best-effort basis. If you specify `MaxResults` in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of `MaxResults`. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a `NextToken`. You can specify the `NextToken` in a subsequent call to get the next set of results.
 *
 * Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a `ValidationException` error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersByPathCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetParametersByPathRequest
 *   Path: "STRING_VALUE", // required
 *   Recursive: true || false,
 *   ParameterFilters: [ // ParameterStringFilterList
 *     { // ParameterStringFilter
 *       Key: "STRING_VALUE", // required
 *       Option: "STRING_VALUE",
 *       Values: [ // ParameterStringFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   WithDecryption: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetParametersByPathCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersByPathResult
 * //   Parameters: [ // ParameterList
 * //     { // Parameter
 * //       Name: "STRING_VALUE",
 * //       Type: "String" || "StringList" || "SecureString",
 * //       Value: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Selector: "STRING_VALUE",
 * //       SourceResult: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       ARN: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetParametersByPathCommandInput - {@link GetParametersByPathCommandInput}
 * @returns {@link GetParametersByPathCommandOutput}
 * @see {@link GetParametersByPathCommandInput} for command's `input` shape.
 * @see {@link GetParametersByPathCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *
 * The specified key isn't valid.
 *
 * @throws {@link InvalidFilterOption} (client fault)
 *
 * The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *
 * The filter value isn't valid. Verify the value and try again.
 *
 * @throws {@link InvalidKeyId} (client fault)
 *
 * The query key ID isn't valid.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetParametersByPathCommand extends command<GetParametersByPathCommandInput, GetParametersByPathCommandOutput>(
  _ep0,
  _mw0,
  "GetParametersByPath",
  GetParametersByPath$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersByPathRequest;
      output: GetParametersByPathResult;
    };
    sdk: {
      input: GetParametersByPathCommandInput;
      output: GetParametersByPathCommandOutput;
    };
  };
}
