// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListKeyRotationsRequest, ListKeyRotationsResponse } from "../models/models_0";
import { de_ListKeyRotationsCommand, se_ListKeyRotationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about all completed key material rotations for the specified KMS
 *       key.</p>
 *          <p>You must specify the KMS key in all requests. You can refine the key rotations list by
 *       limiting the number of rotations returned.</p>
 *          <p>For detailed information about automatic and on-demand key rotations, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">Rotating KMS keys</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyRotations</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EnableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RotateKeyOnDemand</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeyRotationsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListKeyRotationsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ListKeyRotationsRequest
 *   KeyId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListKeyRotationsCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyRotationsResponse
 * //   Rotations: [ // RotationsList
 * //     { // RotationsListEntry
 * //       KeyId: "STRING_VALUE",
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
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @public
 * @example To retrieve information about all completed key material rotations
 * ```javascript
 * // The following example returns information about all completed key material rotations for the specified KMS key.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ListKeyRotationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Rotations": [
 *     {
 *       "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "RotationDate": "2024-03-02T10:11:36.564000+00:00",
 *       "RotationType": "AUTOMATIC"
 *     },
 *     {
 *       "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *       "RotationDate": "2024-04-05T15:14:47.757000+00:00",
 *       "RotationType": "ON_DEMAND"
 *     }
 *   ],
 *   "Truncated": false
 * }
 * *\/
 * // example id: to-retrieve-information-about-all-completed-key-material-rotations-1712585167775
 * ```
 *
 */
export class ListKeyRotationsCommand extends $Command
  .classBuilder<
    ListKeyRotationsCommandInput,
    ListKeyRotationsCommandOutput,
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
  .s("TrentService", "ListKeyRotations", {})
  .n("KMSClient", "ListKeyRotationsCommand")
  .f(void 0, void 0)
  .ser(se_ListKeyRotationsCommand)
  .de(de_ListKeyRotationsCommand)
  .build() {}
