// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RetireGrantRequest } from "../models/models_0";
import { de_RetireGrantCommand, se_RetireGrantCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetireGrantCommand}.
 */
export interface RetireGrantCommandInput extends RetireGrantRequest {}
/**
 * @public
 *
 * The output of {@link RetireGrantCommand}.
 */
export interface RetireGrantCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To
 *       identify the grant to retire, use a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">grant token</a>, or both the grant ID and a
 *       key identifier (key ID or key ARN) of the KMS key. The <a>CreateGrant</a> operation
 *       returns both values.</p>
 *          <p>This operation can be called by the <i>retiring principal</i> for a grant,
 *       by the <i>grantee principal</i> if the grant allows the <code>RetireGrant</code>
 *       operation, and by the Amazon Web Services account in which the grant is created. It can also be called by
 *       principals to whom permission for retiring a grant is delegated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking
 *         grants</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. You can retire a grant on a KMS
 *       key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: Permission to retire a grant is
 *       determined primarily by the grant. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in
 *       the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RetireGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RetireGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // RetireGrantRequest
 *   GrantToken: "STRING_VALUE",
 *   KeyId: "STRING_VALUE",
 *   GrantId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new RetireGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RetireGrantCommandInput - {@link RetireGrantCommandInput}
 * @returns {@link RetireGrantCommandOutput}
 * @see {@link RetireGrantCommandInput} for command's `input` shape.
 * @see {@link RetireGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p> The request was rejected because the DryRun parameter was specified. </p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link InvalidGrantIdException} (client fault)
 *  <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
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
 * @public
 * @example To retire a grant
 * ```javascript
 * // The following example retires a grant.
 * const input = {
 *   "GrantId": "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
 *   "KeyId": "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new RetireGrantCommand(input);
 * await client.send(command);
 * // example id: to-retire-a-grant-1481327028297
 * ```
 *
 */
export class RetireGrantCommand extends $Command
  .classBuilder<
    RetireGrantCommandInput,
    RetireGrantCommandOutput,
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
  .s("TrentService", "RetireGrant", {})
  .n("KMSClient", "RetireGrantCommand")
  .f(void 0, void 0)
  .ser(se_RetireGrantCommand)
  .de(de_RetireGrantCommand)
  .build() {}
