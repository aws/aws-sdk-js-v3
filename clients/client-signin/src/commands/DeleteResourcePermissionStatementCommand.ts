// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type {
  DeleteResourcePermissionStatementInput,
  DeleteResourcePermissionStatementOutput,
} from "../models/models_0";
import { DeleteResourcePermissionStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourcePermissionStatementCommand}.
 */
export interface DeleteResourcePermissionStatementCommandInput extends DeleteResourcePermissionStatementInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePermissionStatementCommand}.
 */
export interface DeleteResourcePermissionStatementCommandOutput extends DeleteResourcePermissionStatementOutput, __MetadataBearer {}

/**
 * Remove a permission statement from the account's SignIn resource-based policy
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, DeleteResourcePermissionStatementCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, DeleteResourcePermissionStatementCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // DeleteResourcePermissionStatementInput
 *   statementId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteResourcePermissionStatementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePermissionStatementCommandInput - {@link DeleteResourcePermissionStatementCommandInput}
 * @returns {@link DeleteResourcePermissionStatementCommandOutput}
 * @see {@link DeleteResourcePermissionStatementCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePermissionStatementCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Error thrown when requested resource is not found
 *
 * HTTP Status Code: 404 Not Found
 *
 * Used when the specified resource does not exist
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request failed because it contains a malformed, missing, or invalid parameter.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class DeleteResourcePermissionStatementCommand extends command<DeleteResourcePermissionStatementCommandInput, DeleteResourcePermissionStatementCommandOutput>(
  _ep2,
  _mw0,
  "DeleteResourcePermissionStatement",
  DeleteResourcePermissionStatement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePermissionStatementInput;
      output: {};
    };
    sdk: {
      input: DeleteResourcePermissionStatementCommandInput;
      output: DeleteResourcePermissionStatementCommandOutput;
    };
  };
}
