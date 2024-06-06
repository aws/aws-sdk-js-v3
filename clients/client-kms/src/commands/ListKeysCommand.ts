// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListKeysRequest, ListKeysResponse } from "../models/models_0";
import { de_ListKeysCommand, se_ListKeysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeysCommand}.
 */
export interface ListKeysCommandInput extends ListKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListKeysCommand}.
 */
export interface ListKeysCommandOutput extends ListKeysResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all KMS keys in the caller's Amazon Web Services account and Region.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeys</a> (IAM policy)</p>
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
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListResourceTags</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeysCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListKeysCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ListKeysRequest
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListKeysResponse
 * //   Keys: [ // KeyList
 * //     { // KeyListEntry
 * //       KeyId: "STRING_VALUE",
 * //       KeyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListKeysCommandInput - {@link ListKeysCommandInput}
 * @returns {@link ListKeysCommandOutput}
 * @see {@link ListKeysCommandInput} for command's `input` shape.
 * @see {@link ListKeysCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *  <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @public
 * @example To list KMS keys
 * ```javascript
 * // The following example lists KMS keys.
 * const input = {};
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Keys": [
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/0d990263-018e-4e65-a703-eff731de951e",
 *       "KeyId": "0d990263-018e-4e65-a703-eff731de951e"
 *     },
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/144be297-0ae1-44ac-9c8f-93cd8c82f841",
 *       "KeyId": "144be297-0ae1-44ac-9c8f-93cd8c82f841"
 *     },
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/21184251-b765-428e-b852-2c7353e72571",
 *       "KeyId": "21184251-b765-428e-b852-2c7353e72571"
 *     },
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/214fe92f-5b03-4ae1-b350-db2a45dbe10c",
 *       "KeyId": "214fe92f-5b03-4ae1-b350-db2a45dbe10c"
 *     },
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/339963f2-e523-49d3-af24-a0fe752aa458",
 *       "KeyId": "339963f2-e523-49d3-af24-a0fe752aa458"
 *     },
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/b776a44b-df37-4438-9be4-a27494e4271a",
 *       "KeyId": "b776a44b-df37-4438-9be4-a27494e4271a"
 *     },
 *     {
 *       "KeyArn": "arn:aws:kms:us-east-2:111122223333:key/deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb",
 *       "KeyId": "deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb"
 *     }
 *   ],
 *   "Truncated": false
 * }
 * *\/
 * // example id: to-list-cmks-1481071643069
 * ```
 *
 */
export class ListKeysCommand extends $Command
  .classBuilder<
    ListKeysCommandInput,
    ListKeysCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "ListKeys", {})
  .n("KMSClient", "ListKeysCommand")
  .f(void 0, void 0)
  .ser(se_ListKeysCommand)
  .de(de_ListKeysCommand)
  .build() {}
