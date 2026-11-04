// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends __MetadataBearer {}

/**
 * Adds or edits tags on a [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key).
 *
 * > **Note:** Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Key Management Service Developer Guide*.
 *
 * Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.
 *
 * You can use this operation to tag a [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key), but you cannot tag an [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key), an [Amazon Web Services owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-key), a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html), or an [alias](https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html).
 *
 * You can also add tags to a KMS key while creating it (CreateKey) or replicating it (ReplicateKey).
 *
 * For information about using tags in KMS, see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html). For general information about tags, including the format and syntax, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:TagResource](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations**
 *
 * - CreateKey
 * - ListResourceTags
 * - ReplicateKey
 * - UntagResource
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, TagResourceCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, TagResourceCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // TagResourceRequest
 *   KeyId: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * This exceptions means one of the following:
 *
 * - The key state of the KMS key is not compatible with the operation.
 *
 *   To find the key state, use the DescribeKey operation. For more information about which key states are compatible with each KMS operation, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the **Key Management Service Developer Guide** .
 * - For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a length constraint or quota was exceeded. For more information, see [Quotas](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) in the *Key Management Service Developer Guide*.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link TagException} (client fault)
 *
 * The request was rejected because one or more tags are not valid.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To tag a KMS key
 * ```javascript
 * // The following example tags a KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   Tags: [
 *     {
 *       TagKey: "Purpose",
 *       TagValue: "Test"
 *     }
 *   ]
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
