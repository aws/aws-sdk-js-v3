// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TagCertificateAuthorityRequest } from "../models/models_0";
import { TagCertificateAuthority } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagCertificateAuthorityCommand}.
 */
export interface TagCertificateAuthorityCommandInput extends TagCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link TagCertificateAuthorityCommand}.
 */
export interface TagCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, TagCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, TagCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // TagCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new TagCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagCertificateAuthorityCommandInput - {@link TagCertificateAuthorityCommandInput}
 * @returns {@link TagCertificateAuthorityCommandOutput}
 * @see {@link TagCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link TagCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 *
 * @public
 */
export class TagCertificateAuthorityCommand extends $Command
  .classBuilder<
    TagCertificateAuthorityCommandInput,
    TagCertificateAuthorityCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ACMPrivateCA", "TagCertificateAuthority", {})
  .n("ACMPCAClient", "TagCertificateAuthorityCommand")
  .sc(TagCertificateAuthority)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagCertificateAuthorityRequest;
      output: {};
    };
    sdk: {
      input: TagCertificateAuthorityCommandInput;
      output: TagCertificateAuthorityCommandOutput;
    };
  };
}
