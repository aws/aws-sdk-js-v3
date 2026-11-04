// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProvisionedConcurrencyConfigRequest } from "../models/models_0";
import { DeleteProvisionedConcurrencyConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProvisionedConcurrencyConfigCommand}.
 */
export interface DeleteProvisionedConcurrencyConfigCommandInput extends DeleteProvisionedConcurrencyConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisionedConcurrencyConfigCommand}.
 */
export interface DeleteProvisionedConcurrencyConfigCommandOutput extends __MetadataBearer {}

/**
 * Deletes the provisioned concurrency configuration for a function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteProvisionedConcurrencyConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisionedConcurrencyConfigCommandInput - {@link DeleteProvisionedConcurrencyConfigCommandInput}
 * @returns {@link DeleteProvisionedConcurrencyConfigCommandOutput}
 * @see {@link DeleteProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
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
 * @example To delete a provisioned concurrency configuration
 * ```javascript
 * // The following example deletes the provisioned concurrency configuration for the GREEN alias of a function named my-function.
 * const input = {
 *   FunctionName: "my-function",
 *   Qualifier: "GREEN"
 * };
 * const command = new DeleteProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteProvisionedConcurrencyConfigCommand extends command<DeleteProvisionedConcurrencyConfigCommandInput, DeleteProvisionedConcurrencyConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProvisionedConcurrencyConfig",
  DeleteProvisionedConcurrencyConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProvisionedConcurrencyConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteProvisionedConcurrencyConfigCommandInput;
      output: DeleteProvisionedConcurrencyConfigCommandOutput;
    };
  };
}
