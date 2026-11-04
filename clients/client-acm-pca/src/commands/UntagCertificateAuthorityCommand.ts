// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagCertificateAuthorityRequest } from "../models/models_0";
import { UntagCertificateAuthority$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagCertificateAuthorityCommand}.
 */
export interface UntagCertificateAuthorityCommandInput extends UntagCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link UntagCertificateAuthorityCommand}.
 */
export interface UntagCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the [TagCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html). Call the [ListTags](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html) action to see what tags are associated with your CA.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, UntagCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UntagCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // UntagCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UntagCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagCertificateAuthorityCommandInput - {@link UntagCertificateAuthorityCommandInput}
 * @returns {@link UntagCertificateAuthorityCommandOutput}
 * @see {@link UntagCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UntagCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The state of the private CA does not allow this action to occur.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * The tag associated with the CA is not valid. The invalid argument is contained in the message field.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.
 *
 * @throws {@link ACMPCAServiceException}
 *
 * Base exception class for all service exceptions from ACMPCA service.
 *
 * @public
 */
export class UntagCertificateAuthorityCommand extends command<UntagCertificateAuthorityCommandInput, UntagCertificateAuthorityCommandOutput>(
  _ep0,
  _mw0,
  "UntagCertificateAuthority",
  UntagCertificateAuthority$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagCertificateAuthorityRequest;
      output: {};
    };
    sdk: {
      input: UntagCertificateAuthorityCommandInput;
      output: UntagCertificateAuthorityCommandOutput;
    };
  };
}
