// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { PutResourcePermissionStatementInput, PutResourcePermissionStatementOutput } from "../models/models_0";
import { PutResourcePermissionStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourcePermissionStatementCommand}.
 */
export interface PutResourcePermissionStatementCommandInput extends PutResourcePermissionStatementInput {}
/**
 * @public
 *
 * The output of {@link PutResourcePermissionStatementCommand}.
 */
export interface PutResourcePermissionStatementCommandOutput extends PutResourcePermissionStatementOutput, __MetadataBearer {}

/**
 * Create a permission statement in the account's SignIn resource-based policy
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, PutResourcePermissionStatementCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, PutResourcePermissionStatementCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // PutResourcePermissionStatementInput
 *   sourceVpc: "STRING_VALUE",
 *   signinSourceVpce: "STRING_VALUE",
 *   consoleSourceVpce: "STRING_VALUE",
 *   vpcSourceIp: "STRING_VALUE",
 *   sourceIp: "STRING_VALUE",
 *   requestedRegion: "STRING_VALUE",
 *   excludedPrincipal: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutResourcePermissionStatementCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePermissionStatementOutput
 * //   statementId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutResourcePermissionStatementCommandInput - {@link PutResourcePermissionStatementCommandInput}
 * @returns {@link PutResourcePermissionStatementCommandOutput}
 * @see {@link PutResourcePermissionStatementCommandInput} for command's `input` shape.
 * @see {@link PutResourcePermissionStatementCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Error thrown when request conflicts with current state
 *
 * HTTP Status Code: 409 Conflict
 *
 * Used when the request conflicts with the current state of the resource
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Error thrown when service quota is exceeded
 *
 * HTTP Status Code: 402 Payment Required (used as quota exceeded indicator)
 *
 * Used when the request would cause a service quota to be exceeded
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
export class PutResourcePermissionStatementCommand extends command<PutResourcePermissionStatementCommandInput, PutResourcePermissionStatementCommandOutput>(
  _ep2,
  _mw0,
  "PutResourcePermissionStatement",
  PutResourcePermissionStatement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePermissionStatementInput;
      output: PutResourcePermissionStatementOutput;
    };
    sdk: {
      input: PutResourcePermissionStatementCommandInput;
      output: PutResourcePermissionStatementCommandOutput;
    };
  };
}
