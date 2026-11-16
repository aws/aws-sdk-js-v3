// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListKeysRequest, ListKeysResponse } from "../models/models_0";
import { ListKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <p>You can also use <code>ListKeys</code> to list KMS keys in the Region that other
 *         Amazon Web Services accounts shared with the caller's Amazon Web Services account through Resource Access Manager (RAM). To list
 *       them, use the <code>ResourceOwners</code> parameter. If you omit <code>ResourceOwners</code>,
 *         <code>ListKeys</code> lists only the KMS keys in the caller's Amazon Web Services account.</p>
 *          <p>When <code>ResourceOwners</code> includes <code>OTHER_ACCOUNTS_VIA_RAM</code>,
 *         <code>ListKeys</code> returns the KMS keys that other Amazon Web Services accounts currently share with
 *       the caller's Amazon Web Services account through RAM. For information about how and when a resource
 *       that another account shares becomes available to your Amazon Web Services account, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/working-with-shared.html">Access Amazon Web Services
 *         resources shared with you</a> in the <i>RAM User Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. This operation doesn't take a KMS
 *       key parameter, so you can't use it to list the KMS keys of a specific Amazon Web Services account. The only
 *       KMS keys in other Amazon Web Services accounts that <code>ListKeys</code> returns are the ones that other
 *       accounts shared with the caller's Amazon Web Services account through RAM. To list them, set the
 *         <code>ResourceOwners</code> parameter to include <code>OTHER_ACCOUNTS_VIA_RAM</code>.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeys</a> (IAM policy)</p>
 *          <p>The same <code>kms:ListKeys</code> permission lets you list the KMS keys that other
 *       accounts shared with you through RAM. KMS doesn't evaluate the key policies of shared KMS
 *       keys when it lists them. To use a shared KMS key, you need permission for each operation on
 *       that KMS key.</p>
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
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 *          <p>KMS keys that other Amazon Web Services accounts share with you can take some time to appear in or
 *       disappear from <code>ListKeys</code> results after changes to resource shares, such as
 *       accepting an invitation or deleting a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeysCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListKeysCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListKeysRequest
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   ResourceOwners: [ // ResourceOwnersList
 *     "SELF" || "OTHER_ACCOUNTS_VIA_RAM",
 *   ],
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
 *
 * @example To list KMS keys
 * ```javascript
 * // The following example lists KMS keys.
 * const input = { /* empty *\/ };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Keys: [
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/0d990263-018e-4e65-a703-eff731de951e",
 *       KeyId: "0d990263-018e-4e65-a703-eff731de951e"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/144be297-0ae1-44ac-9c8f-93cd8c82f841",
 *       KeyId: "144be297-0ae1-44ac-9c8f-93cd8c82f841"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/21184251-b765-428e-b852-2c7353e72571",
 *       KeyId: "21184251-b765-428e-b852-2c7353e72571"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/214fe92f-5b03-4ae1-b350-db2a45dbe10c",
 *       KeyId: "214fe92f-5b03-4ae1-b350-db2a45dbe10c"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/339963f2-e523-49d3-af24-a0fe752aa458",
 *       KeyId: "339963f2-e523-49d3-af24-a0fe752aa458"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/b776a44b-df37-4438-9be4-a27494e4271a",
 *       KeyId: "b776a44b-df37-4438-9be4-a27494e4271a"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:111122223333:key/deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb",
 *       KeyId: "deaf6c9e-cf2c-46a6-bf6d-0b6d487cffbb"
 *     }
 *   ],
 *   Truncated: false
 * }
 * *\/
 * ```
 *
 * @example To list KMS keys that other accounts shared with you through AWS RAM
 * ```javascript
 * // The following example lists the KMS keys in the Region that other AWS accounts shared with your AWS account through AWS Resource Access Manager (AWS RAM).
 * const input = {
 *   ResourceOwners: [
 *     "OTHER_ACCOUNTS_VIA_RAM"
 *   ]
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Keys: [
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *       KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 *     },
 *     {
 *       KeyArn: "arn:aws:kms:us-east-2:444455556666:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *       KeyId: "0987dcba-09fe-87dc-65ba-ab0987654321"
 *     }
 *   ],
 *   Truncated: false
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListKeysCommand extends command<ListKeysCommandInput, ListKeysCommandOutput>(
  _ep0,
  _mw0,
  "ListKeys",
  ListKeys$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeysRequest;
      output: ListKeysResponse;
    };
    sdk: {
      input: ListKeysCommandInput;
      output: ListKeysCommandOutput;
    };
  };
}
