// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeGrantRequest } from "../models/models_0";
import { RevokeGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeGrantCommand}.
 */
export interface RevokeGrantCommandInput extends RevokeGrantRequest {}
/**
 * @public
 *
 * The output of {@link RevokeGrantCommand}.
 */
export interface RevokeGrantCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified grant. You revoke a grant to terminate the permissions that the grant allows. For more information, see [Retiring and revoking grants](https://docs.aws.amazon.com/kms/latest/developerguide/grant-delete.html) in the **Key Management Service Developer Guide** .
 *
 * When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as *eventual consistency*. For details, see [Eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency) in the **Key Management Service Developer Guide** .
 *
 * For detailed information about grants, including grant terminology, see [Grants in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html) in the **Key Management Service Developer Guide** . For examples of creating grants in several programming languages, see [Use CreateGrant with an Amazon Web Services SDK or CLI](https://docs.aws.amazon.com/kms/latest/developerguide/example_kms_CreateGrant_section.html).
 *
 * **Cross-account use**: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:RevokeGrant](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy).
 *
 * **Related operations:**
 *
 * - CreateGrant
 * - ListGrants
 * - ListRetirableGrants
 * - RetireGrant
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RevokeGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RevokeGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // RevokeGrantRequest
 *   KeyId: "STRING_VALUE", // required
 *   GrantId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RevokeGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeGrantCommandInput - {@link RevokeGrantCommandInput}
 * @returns {@link RevokeGrantCommandOutput}
 * @see {@link RevokeGrantCommandInput} for command's `input` shape.
 * @see {@link RevokeGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link InvalidGrantIdException} (client fault)
 *
 * The request was rejected because the specified `GrantId` is not valid.
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
 * @example To revoke a grant
 * ```javascript
 * // The following example revokes a grant.
 * const input = {
 *   GrantId: "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new RevokeGrantCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RevokeGrantCommand extends command<RevokeGrantCommandInput, RevokeGrantCommandOutput>(
  _ep0,
  _mw0,
  "RevokeGrant",
  RevokeGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeGrantRequest;
      output: {};
    };
    sdk: {
      input: RevokeGrantCommandInput;
      output: RevokeGrantCommandOutput;
    };
  };
}
