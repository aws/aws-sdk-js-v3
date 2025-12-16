// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { ListKeyPoliciesRequest, ListKeyPoliciesResponse } from "../models/models_0";
import { ListKeyPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeyPoliciesCommand}.
 */
export interface ListKeyPoliciesCommandInput extends ListKeyPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyPoliciesCommand}.
 */
export interface ListKeyPoliciesCommandOutput extends ListKeyPoliciesResponse, __MetadataBearer {}

/**
 * <p>Gets the names of the key policies that are attached to a KMS key. This operation is
 *       designed to get policy names that you can use in a <a>GetKeyPolicy</a> operation.
 *       However, the only valid policy name is <code>default</code>. </p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListKeyPolicies</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetKeyPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html">PutKeyPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListKeyPoliciesCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListKeyPoliciesCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ListKeyPoliciesRequest
 *   KeyId: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListKeyPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyPoliciesResponse
 * //   PolicyNames: [ // PolicyNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * //   Truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ListKeyPoliciesCommandInput - {@link ListKeyPoliciesCommandInput}
 * @returns {@link ListKeyPoliciesCommandOutput}
 * @see {@link ListKeyPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListKeyPoliciesCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To list key policies for a KMS key
 * ```javascript
 * // The following example lists key policies for the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ListKeyPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   PolicyNames: [
 *     "default"
 *   ],
 *   Truncated: false
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListKeyPoliciesCommand extends $Command
  .classBuilder<
    ListKeyPoliciesCommandInput,
    ListKeyPoliciesCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "ListKeyPolicies", {})
  .n("KMSClient", "ListKeyPoliciesCommand")
  .sc(ListKeyPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeyPoliciesRequest;
      output: ListKeyPoliciesResponse;
    };
    sdk: {
      input: ListKeyPoliciesCommandInput;
      output: ListKeyPoliciesCommandOutput;
    };
  };
}
