// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListKeyRotationsRequest, ListKeyRotationsResponse } from "../models/models_0";
import { ListKeyRotations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListKeyRotationsCommand}.
 */
export interface ListKeyRotationsCommandInput extends ListKeyRotationsRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyRotationsCommand}.
 */
export interface ListKeyRotationsCommandOutput extends ListKeyRotationsResponse, __MetadataBearer {}

/**
 * Returns information about the key materials associated with the specified KMS key. You can use the optional `IncludeKeyMaterial` parameter to control which key materials are included in the response.
 *
 * You must specify the KMS key in all requests. You can refine the key rotations list by limiting the number of rotations returned.
 *
 * For detailed information about automatic and on-demand key rotations, see [Rotate KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:ListKeyRotations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - EnableKeyRotation
 * - DeleteImportedKeyMaterial
 * - DisableKeyRotation
 * - GetKeyRotationStatus
 * - ImportKeyMaterial
 * - RotateKeyOnDemand
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeyRotationsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListKeyRotationsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListKeyRotationsRequest
 *   KeyId: "STRING_VALUE", // required
 *   IncludeKeyMaterial: "ALL_KEY_MATERIAL" || "ROTATIONS_ONLY",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListKeyRotationsCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyRotationsResponse
 * //   Rotations: [ // RotationsList
 * //     { // RotationsListEntry
 * //       KeyId: "STRING_VALUE",
 * //       KeyMaterialId: "STRING_VALUE",
 * //       KeyMaterialDescription: "STRING_VALUE",
 * //       ImportState: "IMPORTED" || "PENDING_IMPORT",
 * //       KeyMaterialState: "NON_CURRENT" || "CURRENT" || "PENDING_ROTATION" || "PENDING_MULTI_REGION_IMPORT_AND_ROTATION",
 * //       ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 * //       ValidTo: new Date("TIMESTAMP"),
 * //       RotationDate: new Date("TIMESTAMP"),
 * //       RotationType: "AUTOMATIC" || "ON_DEMAND",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListKeyRotationsCommandInput - {@link ListKeyRotationsCommandInput}
 * @returns {@link ListKeyRotationsCommandOutput}
 * @see {@link ListKeyRotationsCommandInput} for command's `input` shape.
 * @see {@link ListKeyRotationsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @public
 */
export class ListKeyRotationsCommand extends command<ListKeyRotationsCommandInput, ListKeyRotationsCommandOutput>(
  _ep0,
  _mw0,
  "ListKeyRotations",
  ListKeyRotations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeyRotationsRequest;
      output: ListKeyRotationsResponse;
    };
    sdk: {
      input: ListKeyRotationsCommandInput;
      output: ListKeyRotationsCommandOutput;
    };
  };
}
