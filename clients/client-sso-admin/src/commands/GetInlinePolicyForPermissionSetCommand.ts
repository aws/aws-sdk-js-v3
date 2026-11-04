// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetInlinePolicyForPermissionSetRequest,
  GetInlinePolicyForPermissionSetResponse,
} from "../models/models_0";
import { GetInlinePolicyForPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInlinePolicyForPermissionSetCommand}.
 */
export interface GetInlinePolicyForPermissionSetCommandInput extends GetInlinePolicyForPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link GetInlinePolicyForPermissionSetCommand}.
 */
export interface GetInlinePolicyForPermissionSetCommandOutput extends GetInlinePolicyForPermissionSetResponse, __MetadataBearer {}

/**
 * Obtains the inline policy assigned to the permission set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // GetInlinePolicyForPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 * };
 * const command = new GetInlinePolicyForPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // GetInlinePolicyForPermissionSetResponse
 * //   InlinePolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInlinePolicyForPermissionSetCommandInput - {@link GetInlinePolicyForPermissionSetCommandInput}
 * @returns {@link GetInlinePolicyForPermissionSetCommandOutput}
 * @see {@link GetInlinePolicyForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetInlinePolicyForPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class GetInlinePolicyForPermissionSetCommand extends command<GetInlinePolicyForPermissionSetCommandInput, GetInlinePolicyForPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "GetInlinePolicyForPermissionSet",
  GetInlinePolicyForPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInlinePolicyForPermissionSetRequest;
      output: GetInlinePolicyForPermissionSetResponse;
    };
    sdk: {
      input: GetInlinePolicyForPermissionSetCommandInput;
      output: GetInlinePolicyForPermissionSetCommandOutput;
    };
  };
}
