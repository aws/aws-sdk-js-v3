// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetParametersByPathRequest,
  GetParametersByPathResult,
  GetParametersByPathResultFilterSensitiveLog,
} from "../models/models_1";
import { de_GetParametersByPathCommand, se_GetParametersByPathCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieve information about one or more parameters under a specified level in a hierarchy. </p>
 *          <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *    in the request, the response includes information up to the limit specified. The number of items
 *    returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *    reaches an internal limit while processing the results, it stops the operation and returns the
 *    matching values up to that point and a <code>NextToken</code>. You can specify the
 *     <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersByPathCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidFilterOption} (client fault)
 *  <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *  <p>The filter value isn't valid. Verify the value and try again.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetParametersByPathCommand extends $Command
  .classBuilder<
    GetParametersByPathCommandInput,
    GetParametersByPathCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetParametersByPath", {})
  .n("SSMClient", "GetParametersByPathCommand")
  .f(void 0, GetParametersByPathResultFilterSensitiveLog)
  .ser(se_GetParametersByPathCommand)
  .de(de_GetParametersByPathCommand)
  .build() {
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
