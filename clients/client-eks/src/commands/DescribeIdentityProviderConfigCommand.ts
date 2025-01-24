// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdentityProviderConfigRequest, DescribeIdentityProviderConfigResponse } from "../models/models_0";
import {
  de_DescribeIdentityProviderConfigCommand,
  se_DescribeIdentityProviderConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityProviderConfigCommand}.
 */
export interface DescribeIdentityProviderConfigCommandInput extends DescribeIdentityProviderConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityProviderConfigCommand}.
 */
export interface DescribeIdentityProviderConfigCommandOutput
  extends DescribeIdentityProviderConfigResponse,
    __MetadataBearer {}

/**
 * <p>Describes an identity provider configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeIdentityProviderConfigRequest
 *   clusterName: "STRING_VALUE", // required
 *   identityProviderConfig: { // IdentityProviderConfig
 *     type: "STRING_VALUE", // required
 *     name: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityProviderConfigResponse
 * //   identityProviderConfig: { // IdentityProviderConfigResponse
 * //     oidc: { // OidcIdentityProviderConfig
 * //       identityProviderConfigName: "STRING_VALUE",
 * //       identityProviderConfigArn: "STRING_VALUE",
 * //       clusterName: "STRING_VALUE",
 * //       issuerUrl: "STRING_VALUE",
 * //       clientId: "STRING_VALUE",
 * //       usernameClaim: "STRING_VALUE",
 * //       usernamePrefix: "STRING_VALUE",
 * //       groupsClaim: "STRING_VALUE",
 * //       groupsPrefix: "STRING_VALUE",
 * //       requiredClaims: { // requiredClaimsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       status: "CREATING" || "DELETING" || "ACTIVE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIdentityProviderConfigCommandInput - {@link DescribeIdentityProviderConfigCommandInput}
 * @returns {@link DescribeIdentityProviderConfigCommandOutput}
 * @see {@link DescribeIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *                  specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class DescribeIdentityProviderConfigCommand extends $Command
  .classBuilder<
    DescribeIdentityProviderConfigCommandInput,
    DescribeIdentityProviderConfigCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "DescribeIdentityProviderConfig", {})
  .n("EKSClient", "DescribeIdentityProviderConfigCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIdentityProviderConfigCommand)
  .de(de_DescribeIdentityProviderConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdentityProviderConfigRequest;
      output: DescribeIdentityProviderConfigResponse;
    };
    sdk: {
      input: DescribeIdentityProviderConfigCommandInput;
      output: DescribeIdentityProviderConfigCommandOutput;
    };
  };
}
