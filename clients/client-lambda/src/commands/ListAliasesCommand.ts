// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListAliasesRequest, ListAliasesResponse } from "../models/models_0";
import { de_ListAliasesCommand, se_ListAliasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandInput extends ListAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandOutput extends ListAliasesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a>
 *       for a Lambda function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListAliasesCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListAliasesCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListAliasesRequest
 *   FunctionName: "STRING_VALUE", // required
 *   FunctionVersion: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAliasesResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Aliases: [ // AliasList
 * //     { // AliasConfiguration
 * //       AliasArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       FunctionVersion: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RoutingConfig: { // AliasRoutingConfiguration
 * //         AdditionalVersionWeights: { // AdditionalVersionWeights
 * //           "<keys>": Number("double"),
 * //         },
 * //       },
 * //       RevisionId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAliasesCommandInput - {@link ListAliasesCommandInput}
 * @returns {@link ListAliasesCommandOutput}
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
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
 * @example To list a function's aliases
 * ```javascript
 * // The following example returns a list of aliases for a function named my-function.
 * const input = {
 *   FunctionName: "my-function"
 * };
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Aliases: [
 *     {
 *       AliasArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function:BETA",
 *       Description: "Production environment BLUE.",
 *       FunctionVersion: "2",
 *       Name: "BLUE",
 *       RevisionId: "a410117f-xmpl-494e-8035-7e204bb7933b",
 *       RoutingConfig: {
 *         AdditionalVersionWeights: {
 *           1: 0.7
 *         }
 *       }
 *     },
 *     {
 *       AliasArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function:LIVE",
 *       Description: "Production environment GREEN.",
 *       FunctionVersion: "1",
 *       Name: "GREEN",
 *       RevisionId: "21d40116-xmpl-40ba-9360-3ea284da1bb5"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAliasesCommand extends $Command
  .classBuilder<
    ListAliasesCommandInput,
    ListAliasesCommandOutput,
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
  .s("AWSGirApiService", "ListAliases", {})
  .n("LambdaClient", "ListAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAliasesCommand)
  .de(de_ListAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAliasesRequest;
      output: ListAliasesResponse;
    };
    sdk: {
      input: ListAliasesCommandInput;
      output: ListAliasesCommandOutput;
    };
  };
}
