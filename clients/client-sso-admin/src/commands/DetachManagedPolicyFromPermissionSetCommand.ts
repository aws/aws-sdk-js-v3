// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetachManagedPolicyFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetResponse,
} from "../models/models_0";
import {
  de_DetachManagedPolicyFromPermissionSetCommand,
  se_DetachManagedPolicyFromPermissionSetCommand,
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
 * The input for {@link DetachManagedPolicyFromPermissionSetCommand}.
 */
export interface DetachManagedPolicyFromPermissionSetCommandInput extends DetachManagedPolicyFromPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link DetachManagedPolicyFromPermissionSetCommand}.
 */
export interface DetachManagedPolicyFromPermissionSetCommandOutput
  extends DetachManagedPolicyFromPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Detaches the attached Amazon Web Services managed policy ARN from the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DetachManagedPolicyFromPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   ManagedPolicyArn: "STRING_VALUE", // required
 * };
 * const command = new DetachManagedPolicyFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachManagedPolicyFromPermissionSetCommandInput - {@link DetachManagedPolicyFromPermissionSetCommandInput}
 * @returns {@link DetachManagedPolicyFromPermissionSetCommandOutput}
 * @see {@link DetachManagedPolicyFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachManagedPolicyFromPermissionSetCommandOutput} for command's `response` shape.
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
export class DetachManagedPolicyFromPermissionSetCommand extends $Command
  .classBuilder<
    DetachManagedPolicyFromPermissionSetCommandInput,
    DetachManagedPolicyFromPermissionSetCommandOutput,
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
  .s("SWBExternalService", "DetachManagedPolicyFromPermissionSet", {})
  .n("SSOAdminClient", "DetachManagedPolicyFromPermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_DetachManagedPolicyFromPermissionSetCommand)
  .de(de_DetachManagedPolicyFromPermissionSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachManagedPolicyFromPermissionSetRequest;
      output: {};
    };
    sdk: {
      input: DetachManagedPolicyFromPermissionSetCommandInput;
      output: DetachManagedPolicyFromPermissionSetCommandOutput;
    };
  };
}
