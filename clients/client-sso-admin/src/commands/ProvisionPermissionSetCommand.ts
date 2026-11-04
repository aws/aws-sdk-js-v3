// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ProvisionPermissionSetRequest, ProvisionPermissionSetResponse } from "../models/models_0";
import { ProvisionPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ProvisionPermissionSetCommand}.
 */
export interface ProvisionPermissionSetCommandInput extends ProvisionPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionPermissionSetCommand}.
 */
export interface ProvisionPermissionSetCommandOutput extends ProvisionPermissionSetResponse, __MetadataBearer {}

/**
 * The process by which a specified permission set is provisioned to the specified target.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ProvisionPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ProvisionPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ProvisionPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   TargetId: "STRING_VALUE",
 *   TargetType: "AWS_ACCOUNT" || "ALL_PROVISIONED_ACCOUNTS", // required
 * };
 * const command = new ProvisionPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionPermissionSetResponse
 * //   PermissionSetProvisioningStatus: { // PermissionSetProvisioningStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //     RequestId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionPermissionSetCommandInput - {@link ProvisionPermissionSetCommandInput}
 * @returns {@link ProvisionPermissionSetCommandOutput}
 * @see {@link ProvisionPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ProvisionPermissionSetCommandOutput} for command's `response` shape.
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
export class ProvisionPermissionSetCommand extends command<ProvisionPermissionSetCommandInput, ProvisionPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "ProvisionPermissionSet",
  ProvisionPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionPermissionSetRequest;
      output: ProvisionPermissionSetResponse;
    };
    sdk: {
      input: ProvisionPermissionSetCommandInput;
      output: ProvisionPermissionSetCommandOutput;
    };
  };
}
