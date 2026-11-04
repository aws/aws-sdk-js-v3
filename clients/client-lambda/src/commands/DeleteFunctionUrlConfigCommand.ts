// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFunctionUrlConfigRequest } from "../models/models_0";
import { DeleteFunctionUrlConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFunctionUrlConfigCommand}.
 */
export interface DeleteFunctionUrlConfigCommandInput extends DeleteFunctionUrlConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFunctionUrlConfigCommand}.
 */
export interface DeleteFunctionUrlConfigCommandOutput extends __MetadataBearer {}

/**
 * Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteFunctionUrlConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new DeleteFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFunctionUrlConfigCommandInput - {@link DeleteFunctionUrlConfigCommandInput}
 * @returns {@link DeleteFunctionUrlConfigCommandOutput}
 * @see {@link DeleteFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionUrlConfigCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteFunctionUrlConfigCommand extends command<DeleteFunctionUrlConfigCommandInput, DeleteFunctionUrlConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFunctionUrlConfig",
  DeleteFunctionUrlConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFunctionUrlConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionUrlConfigCommandInput;
      output: DeleteFunctionUrlConfigCommandOutput;
    };
  };
}
