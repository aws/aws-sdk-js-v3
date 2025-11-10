// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { DescribeWorkspaceAuthenticationRequest, DescribeWorkspaceAuthenticationResponse } from "../models/models_0";
import { DescribeWorkspaceAuthentication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceAuthenticationCommand}.
 */
export interface DescribeWorkspaceAuthenticationCommandInput extends DescribeWorkspaceAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceAuthenticationCommand}.
 */
export interface DescribeWorkspaceAuthenticationCommandOutput
  extends DescribeWorkspaceAuthenticationResponse,
    __MetadataBearer {}

/**
 * <p>Displays information about the authentication methods used in one Amazon Managed Grafana
 *             workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceAuthenticationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceAuthenticationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // DescribeWorkspaceAuthenticationRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceAuthenticationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceAuthenticationResponse
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
 * @param DescribeWorkspaceAuthenticationCommandInput - {@link DescribeWorkspaceAuthenticationCommandInput}
 * @returns {@link DescribeWorkspaceAuthenticationCommandOutput}
 * @see {@link DescribeWorkspaceAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceAuthenticationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeWorkspaceAuthenticationCommand extends $Command
  .classBuilder<
    DescribeWorkspaceAuthenticationCommandInput,
    DescribeWorkspaceAuthenticationCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "DescribeWorkspaceAuthentication", {})
  .n("GrafanaClient", "DescribeWorkspaceAuthenticationCommand")
  .sc(DescribeWorkspaceAuthentication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceAuthenticationRequest;
      output: DescribeWorkspaceAuthenticationResponse;
    };
    sdk: {
      input: DescribeWorkspaceAuthenticationCommandInput;
      output: DescribeWorkspaceAuthenticationCommandOutput;
    };
  };
}
