// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourceTagsRequest, ListResourceTagsResponse } from "../models/models_0";
import { ListResourceTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceTagsCommand}.
 */
export interface ListResourceTagsCommandInput extends ListResourceTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceTagsCommand}.
 */
export interface ListResourceTagsCommandOutput extends ListResourceTagsResponse, __MetadataBearer {}

/**
 * Returns all tags on the specified KMS key.
 *
 * For general information about tags, including the format and syntax, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*. For information about using tags in KMS, see [Tags in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html).
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:ListResourceTags](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - CreateKey
 * - ReplicateKey
 * - TagResource
 * - UntagResource
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListResourceTagsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListResourceTagsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListResourceTagsRequest
 *   KeyId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListResourceTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceTagsResponse
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       TagKey: "STRING_VALUE", // required
 * //       TagValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListResourceTagsCommandInput - {@link ListResourceTagsCommandInput}
 * @returns {@link ListResourceTagsCommandOutput}
 * @see {@link ListResourceTagsCommandInput} for command's `input` shape.
 * @see {@link ListResourceTagsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *
 * The request was rejected because the marker that specifies where pagination should next begin is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To list tags for a KMS key
 * ```javascript
 * // The following example lists tags for a KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ListResourceTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Tags: [
 *     {
 *       TagKey: "CostCenter",
 *       TagValue: "87654"
 *     },
 *     {
 *       TagKey: "CreatedBy",
 *       TagValue: "ExampleUser"
 *     },
 *     {
 *       TagKey: "Purpose",
 *       TagValue: "Test"
 *     }
 *   ],
 *   Truncated: false
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListResourceTagsCommand extends command<ListResourceTagsCommandInput, ListResourceTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceTags",
  ListResourceTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceTagsRequest;
      output: ListResourceTagsResponse;
    };
    sdk: {
      input: ListResourceTagsCommandInput;
      output: ListResourceTagsCommandOutput;
    };
  };
}
