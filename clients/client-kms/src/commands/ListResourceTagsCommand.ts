// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { ListResourceTagsRequest, ListResourceTagsResponse } from "../models/models_0";
import { ListResourceTags } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns all tags on the specified KMS key.</p>
 *          <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in
 *       the <i>Amazon Web Services General Reference</i>. For information about using
 *       tags in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tags in
 *         KMS</a>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListResourceTags</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ReplicateKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
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
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *  <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
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
export class ListResourceTagsCommand extends $Command
  .classBuilder<
    ListResourceTagsCommandInput,
    ListResourceTagsCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "ListResourceTags", {})
  .n("KMSClient", "ListResourceTagsCommand")
  .sc(ListResourceTags)
  .build() {
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
