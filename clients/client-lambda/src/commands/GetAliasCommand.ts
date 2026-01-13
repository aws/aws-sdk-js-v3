// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { AliasConfiguration, GetAliasRequest } from "../models/models_0";
import { GetAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAliasCommand}.
 */
export interface GetAliasCommandInput extends GetAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetAliasCommand}.
 */
export interface GetAliasCommandOutput extends AliasConfiguration, __MetadataBearer {}

/**
 * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetAliasRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAliasCommand(input);
 * const response = await client.send(command);
 * // { // AliasConfiguration
 * //   AliasArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   FunctionVersion: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   RoutingConfig: { // AliasRoutingConfiguration
 * //     AdditionalVersionWeights: { // AdditionalVersionWeights
 * //       "<keys>": Number("double"),
 * //     },
 * //   },
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAliasCommandInput - {@link GetAliasCommandInput}
 * @returns {@link GetAliasCommandOutput}
 * @see {@link GetAliasCommandInput} for command's `input` shape.
 * @see {@link GetAliasCommandOutput} for command's `response` shape.
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
 * @example To get a Lambda function alias
 * ```javascript
 * // The following example returns details about an alias named BLUE for a function named my-function
 * const input = {
 *   FunctionName: "my-function",
 *   Name: "BLUE"
 * };
 * const command = new GetAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AliasArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function:BLUE",
 *   Description: "Production environment BLUE.",
 *   FunctionVersion: "3",
 *   Name: "BLUE",
 *   RevisionId: "594f41fb-xmpl-4c20-95c7-6ca5f2a92c93"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAliasCommand extends $Command
  .classBuilder<
    GetAliasCommandInput,
    GetAliasCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetAlias", {})
  .n("LambdaClient", "GetAliasCommand")
  .sc(GetAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAliasRequest;
      output: AliasConfiguration;
    };
    sdk: {
      input: GetAliasCommandInput;
      output: GetAliasCommandOutput;
    };
  };
}
