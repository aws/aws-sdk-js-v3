// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AliasConfiguration, UpdateAliasRequest } from "../models/models_0";
import { UpdateAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandInput extends UpdateAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandOutput extends AliasConfiguration, __MetadataBearer {}

/**
 * Updates the configuration of a Lambda Event Function [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // UpdateAliasRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   FunctionVersion: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RoutingConfig: { // AliasRoutingConfiguration
 *     AdditionalVersionWeights: { // AdditionalVersionWeights
 *       "<keys>": Number("double"),
 *     },
 *   },
 *   RevisionId: "STRING_VALUE",
 * };
 * const command = new UpdateAliasCommand(input);
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
 * @param UpdateAliasCommandInput - {@link UpdateAliasCommandInput}
 * @returns {@link UpdateAliasCommandOutput}
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.
 *
 * - **For AddPermission and RemovePermission API operations:** Call `GetPolicy` to retrieve the latest RevisionId for your resource.
 * - **For all other API operations:** Call `GetFunction` or `GetAlias` to retrieve the latest RevisionId for your resource.
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
 * @example To update a function alias
 * ```javascript
 * // The following example updates the alias named BLUE to send 30% of traffic to version 2 and 70% to version 1.
 * const input = {
 *   FunctionName: "my-function",
 *   FunctionVersion: "2",
 *   Name: "BLUE",
 *   RoutingConfig: {
 *     AdditionalVersionWeights: {
 *       1: 0.7
 *     }
 *   }
 * };
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AliasArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function:BLUE",
 *   Description: "Production environment BLUE.",
 *   FunctionVersion: "2",
 *   Name: "BLUE",
 *   RevisionId: "594f41fb-xmpl-4c20-95c7-6ca5f2a92c93",
 *   RoutingConfig: {
 *     AdditionalVersionWeights: {
 *       1: 0.7
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAliasCommand extends command<UpdateAliasCommandInput, UpdateAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAlias",
  UpdateAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAliasRequest;
      output: AliasConfiguration;
    };
    sdk: {
      input: UpdateAliasCommandInput;
      output: UpdateAliasCommandOutput;
    };
  };
}
