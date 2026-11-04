// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetResponse,
} from "../models/models_0";
import { GetPermissionsBoundaryForPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPermissionsBoundaryForPermissionSetCommand}.
 */
export interface GetPermissionsBoundaryForPermissionSetCommandInput extends GetPermissionsBoundaryForPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionsBoundaryForPermissionSetCommand}.
 */
export interface GetPermissionsBoundaryForPermissionSetCommandOutput extends GetPermissionsBoundaryForPermissionSetResponse, __MetadataBearer {}

/**
 * Obtains the permissions boundary for a specified PermissionSet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // GetPermissionsBoundaryForPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionsBoundaryForPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionsBoundaryForPermissionSetResponse
 * //   PermissionsBoundary: { // PermissionsBoundary
 * //     CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 * //       Name: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE",
 * //     },
 * //     ManagedPolicyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPermissionsBoundaryForPermissionSetCommandInput - {@link GetPermissionsBoundaryForPermissionSetCommandInput}
 * @returns {@link GetPermissionsBoundaryForPermissionSetCommandOutput}
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandOutput} for command's `response` shape.
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
export class GetPermissionsBoundaryForPermissionSetCommand extends command<GetPermissionsBoundaryForPermissionSetCommandInput, GetPermissionsBoundaryForPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "GetPermissionsBoundaryForPermissionSet",
  GetPermissionsBoundaryForPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPermissionsBoundaryForPermissionSetRequest;
      output: GetPermissionsBoundaryForPermissionSetResponse;
    };
    sdk: {
      input: GetPermissionsBoundaryForPermissionSetCommandInput;
      output: GetPermissionsBoundaryForPermissionSetCommandOutput;
    };
  };
}
