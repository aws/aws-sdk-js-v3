// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateInstanceAccessControlAttributeConfigurationCommand,
  se_UpdateInstanceAccessControlAttributeConfigurationCommand,
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
 * The input for {@link UpdateInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface UpdateInstanceAccessControlAttributeConfigurationCommandInput
  extends UpdateInstanceAccessControlAttributeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  extends UpdateInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance
 *             for attributes-based access control (ABAC). When using an external identity provider as
 *             an identity source, you can pass attributes through the SAML assertion as an alternative
 *             to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any
 *             of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center
 *             identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // UpdateInstanceAccessControlAttributeConfigurationRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   InstanceAccessControlAttributeConfiguration: { // InstanceAccessControlAttributeConfiguration
 *     AccessControlAttributes: [ // AccessControlAttributeList // required
 *       { // AccessControlAttribute
 *         Key: "STRING_VALUE", // required
 *         Value: { // AccessControlAttributeValue
 *           Source: [ // AccessControlAttributeValueSourceList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceAccessControlAttributeConfigurationCommandInput - {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput}
 * @returns {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput}
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateInstanceAccessControlAttributeConfigurationCommand extends $Command
  .classBuilder<
    UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "UpdateInstanceAccessControlAttributeConfiguration", {})
  .n("SSOAdminClient", "UpdateInstanceAccessControlAttributeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInstanceAccessControlAttributeConfigurationCommand)
  .de(de_UpdateInstanceAccessControlAttributeConfigurationCommand)
  .build() {}
