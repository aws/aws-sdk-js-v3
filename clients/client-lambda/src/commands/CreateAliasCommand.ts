// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AliasConfiguration, CreateAliasRequest } from "../models/models_0";
import { CreateAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandInput extends CreateAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandOutput extends AliasConfiguration, __MetadataBearer {}

/**
 * Creates an [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) for a Lambda Event Function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.
 *
 * You can also map an alias to split invocation requests between two versions. Use the `RoutingConfig` parameter to specify a second version and the percentage of invocation requests that it receives.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // CreateAliasRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   FunctionVersion: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RoutingConfig: { // AliasRoutingConfiguration
 *     AdditionalVersionWeights: { // AdditionalVersionWeights
 *       "<keys>": Number("double"),
 *     },
 *   },
 * };
 * const command = new CreateAliasCommand(input);
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
 * @param CreateAliasCommandInput - {@link CreateAliasCommandInput}
 * @returns {@link CreateAliasCommandOutput}
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link AliasLimitExceededException} (client fault)
 *
 * Lambda couldn't create the alias because your Amazon Web Services account has exceeded the maximum number of aliases allowed per Lambda function. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
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
 * @example To create an alias for a Lambda function
 * ```javascript
 * // The following example creates an alias named LIVE that points to version 1 of the my-function Lambda function.
 * const input = {
 *   Description: "alias for live version of function",
 *   FunctionName: "my-function",
 *   FunctionVersion: "1",
 *   Name: "LIVE"
 * };
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AliasArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function:LIVE",
 *   Description: "alias for live version of function",
 *   FunctionVersion: "1",
 *   Name: "LIVE",
 *   RevisionId: "873282ed-xmpl-4dc8-a069-d0c647e470c6"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAliasCommand extends command<CreateAliasCommandInput, CreateAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateAlias",
  CreateAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAliasRequest;
      output: AliasConfiguration;
    };
    sdk: {
      input: CreateAliasCommandInput;
      output: CreateAliasCommandOutput;
    };
  };
}
