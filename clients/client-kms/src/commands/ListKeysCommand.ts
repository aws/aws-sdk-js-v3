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
 * Gets a list of all KMS keys in the caller's Amazon Web Services account and Region.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:ListKeys](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * **Related operations:**
 *
 * - CreateKey
 * - DescribeKey
 * - ListAliases
 * - ListResourceTags
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
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
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *
 * The request was rejected because the marker that specifies where pagination should next begin is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
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
