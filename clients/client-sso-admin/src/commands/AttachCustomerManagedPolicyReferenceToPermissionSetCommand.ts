// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
} from "../models/models_0";
import {
  de_AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  se_AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommand}.
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput
  extends AttachCustomerManagedPolicyReferenceToPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommand}.
 */
export interface AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  extends AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSOAdminClient(config);
 * const input = { // AttachCustomerManagedPolicyReferenceToPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 *     Name: "STRING_VALUE", // required
 *     Path: "STRING_VALUE",
 *   },
 * };
 * const command = new AttachCustomerManagedPolicyReferenceToPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput - {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput}
 * @returns {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput}
 * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *             occurs when the previous write did not have time to propagate to the host serving the
 *             current request. A retry (with appropriate backoff logic) is the recommended response to
 *             this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be
 *             created.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 * @public
 */
export class AttachCustomerManagedPolicyReferenceToPermissionSetCommand extends $Command
  .classBuilder<
    AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "AttachCustomerManagedPolicyReferenceToPermissionSet", {})
  .n("SSOAdminClient", "AttachCustomerManagedPolicyReferenceToPermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_AttachCustomerManagedPolicyReferenceToPermissionSetCommand)
  .de(de_AttachCustomerManagedPolicyReferenceToPermissionSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
      output: {};
    };
    sdk: {
      input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput;
      output: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput;
    };
  };
}
