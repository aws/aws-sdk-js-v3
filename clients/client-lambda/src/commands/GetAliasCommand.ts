// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AliasConfiguration, GetAliasRequest } from "../models/models_0";
import { GetAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns details about a Lambda Event Function [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html).
 *
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
export class GetAliasCommand extends command<GetAliasCommandInput, GetAliasCommandOutput>(
  _ep0,
  _mw0,
  "GetAlias",
  GetAlias$
) {
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
