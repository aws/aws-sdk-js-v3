// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
} from "../models/models_0";
import { DetachCustomerManagedPolicyReferenceFromPermissionSet } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommand}.
 */
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput
  extends DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommand}.
 */
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput
  extends DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachCustomerManagedPolicyReferenceFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DetachCustomerManagedPolicyReferenceFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DetachCustomerManagedPolicyReferenceFromPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 *     Name: "STRING_VALUE", // required
 *     Path: "STRING_VALUE",
 *   },
 * };
 * const command = new DetachCustomerManagedPolicyReferenceFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput - {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput}
 * @returns {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput}
 * @see {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput} for command's `response` shape.
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
export class DetachCustomerManagedPolicyReferenceFromPermissionSetCommand extends $Command
  .classBuilder<
    DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DetachCustomerManagedPolicyReferenceFromPermissionSet", {})
  .n("SSOAdminClient", "DetachCustomerManagedPolicyReferenceFromPermissionSetCommand")
  .sc(DetachCustomerManagedPolicyReferenceFromPermissionSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest;
      output: {};
    };
    sdk: {
      input: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput;
      output: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput;
    };
  };
}
