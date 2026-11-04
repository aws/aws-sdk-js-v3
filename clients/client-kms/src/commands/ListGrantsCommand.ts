// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGrantsRequest, ListGrantsResponse } from "../models/models_0";
import { ListGrants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGrantsCommand}.
 */
export interface ListGrantsCommandInput extends ListGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListGrantsCommand}.
 */
export interface ListGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {}

/**
 * Gets a list of all grants for the specified KMS key.
 *
 * You must specify the KMS key in all requests. You can filter the grant list by grant ID, grantee principal, or grantee service principal.
 *
 * For detailed information about grants, including grant terminology, see [Grants in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html) in the **Key Management Service Developer Guide** . For examples of creating grants in several programming languages, see [Use CreateGrant with an Amazon Web Services SDK or CLI](https://docs.aws.amazon.com/kms/latest/developerguide/example_kms_CreateGrant_section.html).
 *
 * > **Note:**
 * >
 * > When a grant is created with the `GranteePrincipal` field, the `ListGrants` response usually contains the user or role designated as the grantee principal in the grant. However, if the grantee principal is an Amazon Web Services service, the `GranteePrincipal` field contains an Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services), which might correspond to several different grantee principals, such as an IAM user, IAM role, or Amazon Web Services account.
 * >
 * > When a grant is created with the `GranteeServicePrincipal` field, the `ListGrants` response always includes a `GranteeServicePrincipal` that indicates the grantee is actually an Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services).
 *
 * **Cross-account use**: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:ListGrants](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - CreateGrant
 * - ListRetirableGrants
 * - RetireGrant
 * - RevokeGrant
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListGrantsRequest
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   KeyId: "STRING_VALUE", // required
 *   GrantId: "STRING_VALUE",
 *   GranteePrincipal: "STRING_VALUE",
 *   GranteeServicePrincipal: "STRING_VALUE",
 * };
 * const command = new ListGrantsCommand(input);
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
 * @param ListGrantsCommandInput - {@link ListGrantsCommandInput}
 * @returns {@link ListGrantsCommandOutput}
 * @see {@link ListGrantsCommandInput} for command's `input` shape.
 * @see {@link ListGrantsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidGrantIdException} (client fault)
 *
 * The request was rejected because the specified `GrantId` is not valid.
 *
 * @throws {@link InvalidMarkerException} (client fault)
 *
 * The request was rejected because the marker that specifies where pagination should next begin is not valid.
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
export class ListGrantsCommand extends command<ListGrantsCommandInput, ListGrantsCommandOutput>(
  _ep0,
  _mw0,
  "ListGrants",
  ListGrants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGrantsRequest;
      output: ListGrantsResponse;
    };
    sdk: {
      input: ListGrantsCommandInput;
      output: ListGrantsCommandOutput;
    };
  };
}
