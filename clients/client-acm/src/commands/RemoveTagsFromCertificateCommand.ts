// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveTagsFromCertificateRequest } from "../models/models_0";
import { RemoveTagsFromCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveTagsFromCertificateCommand}.
 */
export interface RemoveTagsFromCertificateCommandInput extends RemoveTagsFromCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromCertificateCommand}.
 */
export interface RemoveTagsFromCertificateCommandOutput extends __MetadataBearer {}

/**
 * Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value.
 *
 * > **Note:** This action applies only to the `certificate` resource type. For all other ACM resource types, use UntagResource instead.
 *
 * To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RemoveTagsFromCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RemoveTagsFromCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // RemoveTagsFromCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RemoveTagsFromCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsFromCertificateCommandInput - {@link RemoveTagsFromCertificateCommandInput}
 * @returns {@link RemoveTagsFromCertificateCommandOutput}
 * @see {@link RemoveTagsFromCertificateCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An input parameter was invalid.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * One or both of the values that make up the key-value pair is not valid. For example, you cannot specify a tag value that begins with `aws:`.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link TagPolicyException} (client fault)
 *
 * A specified tag did not comply with an existing tag policy and was rejected.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class RemoveTagsFromCertificateCommand extends command<RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput>(
  _ep0,
  _mw0,
  "RemoveTagsFromCertificate",
  RemoveTagsFromCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsFromCertificateRequest;
      output: {};
    };
    sdk: {
      input: RemoveTagsFromCertificateCommandInput;
      output: RemoveTagsFromCertificateCommandOutput;
    };
  };
}
