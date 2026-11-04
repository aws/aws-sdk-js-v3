// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutPermissionsBoundaryToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetResponse,
} from "../models/models_0";
import { PutPermissionsBoundaryToPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPermissionsBoundaryToPermissionSetCommand}.
 */
export interface PutPermissionsBoundaryToPermissionSetCommandInput extends PutPermissionsBoundaryToPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionsBoundaryToPermissionSetCommand}.
 */
export interface PutPermissionsBoundaryToPermissionSetCommandOutput extends PutPermissionsBoundaryToPermissionSetResponse, __MetadataBearer {}

/**
 * Attaches an Amazon Web Services managed or customer managed policy to the specified PermissionSet as a permissions boundary.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutPermissionsBoundaryToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutPermissionsBoundaryToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // PutPermissionsBoundaryToPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   PermissionsBoundary: { // PermissionsBoundary
 *     CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 *       Name: "STRING_VALUE", // required
 *       Path: "STRING_VALUE",
 *     },
 *     ManagedPolicyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new PutPermissionsBoundaryToPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionsBoundaryToPermissionSetCommandInput - {@link PutPermissionsBoundaryToPermissionSetCommandInput}
 * @returns {@link PutPermissionsBoundaryToPermissionSetCommandOutput}
 * @see {@link PutPermissionsBoundaryToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link PutPermissionsBoundaryToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
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
export class PutPermissionsBoundaryToPermissionSetCommand extends command<PutPermissionsBoundaryToPermissionSetCommandInput, PutPermissionsBoundaryToPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "PutPermissionsBoundaryToPermissionSet",
  PutPermissionsBoundaryToPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPermissionsBoundaryToPermissionSetRequest;
      output: {};
    };
    sdk: {
      input: PutPermissionsBoundaryToPermissionSetCommandInput;
      output: PutPermissionsBoundaryToPermissionSetCommandOutput;
    };
  };
}
