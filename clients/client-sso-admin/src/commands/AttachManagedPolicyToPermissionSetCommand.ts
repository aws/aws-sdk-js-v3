// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AttachManagedPolicyToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetResponse,
} from "../models/models_0";
import { AttachManagedPolicyToPermissionSet$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachManagedPolicyToPermissionSetCommand}.
 */
export interface AttachManagedPolicyToPermissionSetCommandInput extends AttachManagedPolicyToPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link AttachManagedPolicyToPermissionSetCommand}.
 */
export interface AttachManagedPolicyToPermissionSetCommandOutput extends AttachManagedPolicyToPermissionSetResponse, __MetadataBearer {}

/**
 * <p>Attaches an Amazon Web Services managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // AttachManagedPolicyToPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   ManagedPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new AttachManagedPolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachManagedPolicyToPermissionSetCommandInput - {@link AttachManagedPolicyToPermissionSetCommandInput}
 * @returns {@link AttachManagedPolicyToPermissionSetCommandOutput}
 * @see {@link AttachManagedPolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachManagedPolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be created.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class AttachManagedPolicyToPermissionSetCommand extends $Command
  .classBuilder<
    AttachManagedPolicyToPermissionSetCommandInput,
    AttachManagedPolicyToPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "AttachManagedPolicyToPermissionSet", {})
  .n("SSOAdminClient", "AttachManagedPolicyToPermissionSetCommand")
  .sc(AttachManagedPolicyToPermissionSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachManagedPolicyToPermissionSetRequest;
      output: {};
    };
    sdk: {
      input: AttachManagedPolicyToPermissionSetCommandInput;
      output: AttachManagedPolicyToPermissionSetCommandOutput;
    };
  };
}
