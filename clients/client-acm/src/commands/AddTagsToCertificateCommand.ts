// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsToCertificateRequest } from "../models/models_0";
import { AddTagsToCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTagsToCertificateCommand}.
 */
export interface AddTagsToCertificateCommandInput extends AddTagsToCertificateRequest {}
/**
 * @public
 *
 * The output of {@link AddTagsToCertificateCommand}.
 */
export interface AddTagsToCertificateCommandOutput extends __MetadataBearer {}

/**
 * Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a `key` and an optional `value`. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair.
 *
 * > **Note:** This action applies only to the `certificate` resource type. For all other ACM resource types, use TagResource instead.
 *
 * You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see [Tagging ACM certificates](https://docs.aws.amazon.com/acm/latest/userguide/tags.html).
 *
 * To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, AddTagsToCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, AddTagsToCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // AddTagsToCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddTagsToCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToCertificateCommandInput - {@link AddTagsToCertificateCommandInput}
 * @returns {@link AddTagsToCertificateCommandOutput}
 * @see {@link AddTagsToCertificateCommandInput} for command's `input` shape.
 * @see {@link AddTagsToCertificateCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains too many tags. Try the request again with fewer tags.
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
export class AddTagsToCertificateCommand extends command<AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput>(
  _ep0,
  _mw0,
  "AddTagsToCertificate",
  AddTagsToCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsToCertificateRequest;
      output: {};
    };
    sdk: {
      input: AddTagsToCertificateCommandInput;
      output: AddTagsToCertificateCommandOutput;
    };
  };
}
