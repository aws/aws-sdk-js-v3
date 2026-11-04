// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAliasRequest } from "../models/models_0";
import { DeleteAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAliasCommand}.
 */
export interface DeleteAliasCommandInput extends DeleteAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAliasCommand}.
 */
export interface DeleteAliasCommandOutput extends __MetadataBearer {}

/**
 * Deletes a Lambda Event Function [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteAliasRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAliasCommandInput - {@link DeleteAliasCommandInput}
 * @returns {@link DeleteAliasCommandOutput}
 * @see {@link DeleteAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
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
 * @example To delete a Lambda function alias
 * ```javascript
 * // The following example deletes an alias named BLUE from a function named my-function
 * const input = {
 *   FunctionName: "my-function",
 *   Name: "BLUE"
 * };
 * const command = new DeleteAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAliasCommand extends command<DeleteAliasCommandInput, DeleteAliasCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAlias",
  DeleteAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteAliasCommandInput;
      output: DeleteAliasCommandOutput;
    };
  };
}
