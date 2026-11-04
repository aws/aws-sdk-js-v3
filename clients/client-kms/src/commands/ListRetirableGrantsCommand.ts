// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/models_0";
import { ListRetirableGrants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRetirableGrantsCommand}.
 */
export interface ListRetirableGrantsCommandInput extends ListRetirableGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListRetirableGrantsCommand}.
 */
export interface ListRetirableGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {}

/**
 * Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal or retiring service principal.
 *
 * You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the RetireGrant operation.
 *
 * For detailed information about grants, including grant terminology, see [Grants in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html) in the **Key Management Service Developer Guide** . For examples of creating grants in several programming languages, see [Use CreateGrant with an Amazon Web Services SDK or CLI](https://docs.aws.amazon.com/kms/latest/developerguide/example_kms_CreateGrant_section.html).
 *
 * **Cross-account use**: You must specify a principal in your Amazon Web Services account. This operation returns a list of grants where the retiring principal specified in the `ListRetirableGrants` request is the same retiring principal on the grant. This can include grants on KMS keys owned by other Amazon Web Services accounts, but you do not need `kms:ListRetirableGrants` permission (or any other additional permission) in any Amazon Web Services account other than your own.
 *
 * **Required permissions**: [kms:ListRetirableGrants](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy) in your Amazon Web Services account.
 *
 * > **Note:**
 * >
 * > When listing retirable grants by `RetiringPrincipal`, KMS authorizes `ListRetirableGrants` requests by evaluating the caller account's kms:ListRetirableGrants permissions. The authorized resource in `ListRetirableGrants` calls is the retiring principal specified in the request. KMS does not evaluate the caller's permissions to verify their access to any KMS keys or grants that might be returned by the `ListRetirableGrants` call.
 * >
 * > The `RetiringServicePrincipal` filter is only usable by callers in a service principal.
 *
 * **Related operations:**
 *
 * - CreateGrant
 * - ListGrants
 * - RetireGrant
 * - RevokeGrant
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListRetirableGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListRetirableGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListRetirableGrantsRequest
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   RetiringPrincipal: "STRING_VALUE",
 *   RetiringServicePrincipal: "STRING_VALUE",
 * };
 * const command = new ListRetirableGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListGrantsResponse
 * //   Grants: [ // GrantList
 * //     { // GrantListEntry
 * //       KeyId: "STRING_VALUE",
 * //       GrantId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       GranteePrincipal: "STRING_VALUE",
 * //       RetiringPrincipal: "STRING_VALUE",
 * //       IssuingAccount: "STRING_VALUE",
 * //       Operations: [ // GrantOperationList
 * //         "Decrypt" || "Encrypt" || "GenerateDataKey" || "GenerateDataKeyWithoutPlaintext" || "ReEncryptFrom" || "ReEncryptTo" || "Sign" || "Verify" || "GetPublicKey" || "CreateGrant" || "RetireGrant" || "DescribeKey" || "GenerateDataKeyPair" || "GenerateDataKeyPairWithoutPlaintext" || "GenerateMac" || "VerifyMac" || "DeriveSharedSecret" || "Encapsulate" || "Decapsulate",
 * //       ],
 * //       Constraints: { // GrantConstraints
 * //         EncryptionContextSubset: { // EncryptionContextType
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         EncryptionContextEquals: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         SourceArn: "STRING_VALUE",
 * //       },
 * //       GranteeServicePrincipal: "STRING_VALUE",
 * //       RetiringServicePrincipal: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListRetirableGrantsCommandInput - {@link ListRetirableGrantsCommandInput}
 * @returns {@link ListRetirableGrantsCommandOutput}
 * @see {@link ListRetirableGrantsCommandInput} for command's `input` shape.
 * @see {@link ListRetirableGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
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
 * @public
 */
export class ListRetirableGrantsCommand extends command<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput>(
  _ep0,
  _mw0,
  "ListRetirableGrants",
  ListRetirableGrants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetirableGrantsRequest;
      output: ListGrantsResponse;
    };
    sdk: {
      input: ListRetirableGrantsCommandInput;
      output: ListRetirableGrantsCommandOutput;
    };
  };
}
