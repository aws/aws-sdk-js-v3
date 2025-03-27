// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  CreateSAMLProviderRequest,
  CreateSAMLProviderRequestFilterSensitiveLog,
  CreateSAMLProviderResponse,
} from "../models/models_0";
import { de_CreateSAMLProviderCommand, se_CreateSAMLProviderCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSAMLProviderCommand}.
 */
export interface CreateSAMLProviderCommandInput extends CreateSAMLProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateSAMLProviderCommand}.
 */
export interface CreateSAMLProviderCommandOutput extends CreateSAMLProviderResponse, __MetadataBearer {}

/**
 * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML
 *             2.0.</p>
 *          <p>The SAML provider resource that you create with this operation can be used as a
 *             principal in an IAM role's trust policy. Such a policy can enable federated users who
 *             sign in using the SAML IdP to assume the role. You can create an IAM role that
 *             supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access
 *             to Amazon Web Services.</p>
 *          <p>When you create the SAML provider resource, you upload a SAML metadata document that
 *             you get from your IdP. That document includes the issuer's name, expiration information,
 *             and keys that can be used to validate the SAML authentication response (assertions) that
 *             the IdP sends. You must generate the metadata document using the identity management
 *             software that is used as your organization's IdP.</p>
 *          <note>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          </note>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0
 *                 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *                 federation</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateSAMLProviderRequest
 *   SAMLMetadataDocument: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AssertionEncryptionMode: "Required" || "Allowed",
 *   AddPrivateKey: "STRING_VALUE",
 * };
 * const command = new CreateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateSAMLProviderResponse
 * //   SAMLProviderArn: "STRING_VALUE",
 * //   Tags: [ // tagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSAMLProviderCommandInput - {@link CreateSAMLProviderCommandInput}
 * @returns {@link CreateSAMLProviderCommandOutput}
 * @see {@link CreateSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link CreateSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class CreateSAMLProviderCommand extends $Command
  .classBuilder<
    CreateSAMLProviderCommandInput,
    CreateSAMLProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "CreateSAMLProvider", {})
  .n("IAMClient", "CreateSAMLProviderCommand")
  .f(CreateSAMLProviderRequestFilterSensitiveLog, void 0)
  .ser(se_CreateSAMLProviderCommand)
  .de(de_CreateSAMLProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSAMLProviderRequest;
      output: CreateSAMLProviderResponse;
    };
    sdk: {
      input: CreateSAMLProviderCommandInput;
      output: CreateSAMLProviderCommandOutput;
    };
  };
}
