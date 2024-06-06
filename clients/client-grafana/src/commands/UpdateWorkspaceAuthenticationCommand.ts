// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  UpdateWorkspaceAuthenticationRequest,
  UpdateWorkspaceAuthenticationRequestFilterSensitiveLog,
  UpdateWorkspaceAuthenticationResponse,
  UpdateWorkspaceAuthenticationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateWorkspaceAuthenticationCommand,
  se_UpdateWorkspaceAuthenticationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceAuthenticationCommand}.
 */
export interface UpdateWorkspaceAuthenticationCommandInput extends UpdateWorkspaceAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceAuthenticationCommand}.
 */
export interface UpdateWorkspaceAuthenticationCommandOutput
  extends UpdateWorkspaceAuthenticationResponse,
    __MetadataBearer {}

/**
 * <p>Use this operation to define the identity provider (IdP) that this workspace
 *             authenticates users from, using SAML. You can also map SAML assertion attributes to
 *             workspace user information and define which groups in the assertion attribute are to
 *             have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
 *          <note>
 *             <p>Changes to the authentication method for a workspace may take a few minutes to
 *                 take effect.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, UpdateWorkspaceAuthenticationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, UpdateWorkspaceAuthenticationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // UpdateWorkspaceAuthenticationRequest
 *   workspaceId: "STRING_VALUE", // required
 *   authenticationProviders: [ // AuthenticationProviders // required
 *     "STRING_VALUE",
 *   ],
 *   samlConfiguration: { // SamlConfiguration
 *     idpMetadata: { // IdpMetadata Union: only one key present
 *       url: "STRING_VALUE",
 *       xml: "STRING_VALUE",
 *     },
 *     assertionAttributes: { // AssertionAttributes
 *       name: "STRING_VALUE",
 *       login: "STRING_VALUE",
 *       email: "STRING_VALUE",
 *       groups: "STRING_VALUE",
 *       role: "STRING_VALUE",
 *       org: "STRING_VALUE",
 *     },
 *     roleValues: { // RoleValues
 *       editor: [ // RoleValueList
 *         "STRING_VALUE",
 *       ],
 *       admin: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     allowedOrganizations: [ // AllowedOrganizations
 *       "STRING_VALUE",
 *     ],
 *     loginValidityDuration: Number("int"),
 *   },
 * };
 * const command = new UpdateWorkspaceAuthenticationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkspaceAuthenticationResponse
 * //   authentication: { // AuthenticationDescription
 * //     providers: [ // AuthenticationProviders // required
 * //       "STRING_VALUE",
 * //     ],
 * //     saml: { // SamlAuthentication
 * //       status: "STRING_VALUE", // required
 * //       configuration: { // SamlConfiguration
 * //         idpMetadata: { // IdpMetadata Union: only one key present
 * //           url: "STRING_VALUE",
 * //           xml: "STRING_VALUE",
 * //         },
 * //         assertionAttributes: { // AssertionAttributes
 * //           name: "STRING_VALUE",
 * //           login: "STRING_VALUE",
 * //           email: "STRING_VALUE",
 * //           groups: "STRING_VALUE",
 * //           role: "STRING_VALUE",
 * //           org: "STRING_VALUE",
 * //         },
 * //         roleValues: { // RoleValues
 * //           editor: [ // RoleValueList
 * //             "STRING_VALUE",
 * //           ],
 * //           admin: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         allowedOrganizations: [ // AllowedOrganizations
 * //           "STRING_VALUE",
 * //         ],
 * //         loginValidityDuration: Number("int"),
 * //       },
 * //     },
 * //     awsSso: { // AwsSsoAuthentication
 * //       ssoClientId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkspaceAuthenticationCommandInput - {@link UpdateWorkspaceAuthenticationCommandInput}
 * @returns {@link UpdateWorkspaceAuthenticationCommandOutput}
 * @see {@link UpdateWorkspaceAuthenticationCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 * @public
 */
export class UpdateWorkspaceAuthenticationCommand extends $Command
  .classBuilder<
    UpdateWorkspaceAuthenticationCommandInput,
    UpdateWorkspaceAuthenticationCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGrafanaControlPlane", "UpdateWorkspaceAuthentication", {})
  .n("GrafanaClient", "UpdateWorkspaceAuthenticationCommand")
  .f(UpdateWorkspaceAuthenticationRequestFilterSensitiveLog, UpdateWorkspaceAuthenticationResponseFilterSensitiveLog)
  .ser(se_UpdateWorkspaceAuthenticationCommand)
  .de(de_UpdateWorkspaceAuthenticationCommand)
  .build() {}
