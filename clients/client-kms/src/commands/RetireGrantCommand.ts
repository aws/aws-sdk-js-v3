// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetireGrantRequest } from "../models/models_0";
import { RetireGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To identify the grant to retire, use a [grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token), or both the grant ID and a key identifier (key ID or key ARN) of the KMS key. The CreateGrant operation returns both values.
 *
 * This operation can be called by the *retiring principal* for a grant, by the *grantee principal* if the grant allows the `RetireGrant` operation, and by the Amazon Web Services account in which the grant is created. It can also be called by principals to whom permission for retiring a grant is delegated.
 *
 * For detailed information about grants, including grant terminology, see [Grants in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html) in the **Key Management Service Developer Guide** . For examples of creating grants in several programming languages, see [Use CreateGrant with an Amazon Web Services SDK or CLI](https://docs.aws.amazon.com/kms/latest/developerguide/example_kms_CreateGrant_section.html).
 *
 * **Cross-account use**: Yes. You can retire a grant on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: Permission to retire a grant is determined primarily by the grant. For details, see [Retiring and revoking grants](https://docs.aws.amazon.com/kms/latest/developerguide/grant-delete.html) in the *Key Management Service Developer Guide*.
 *
 * **Related operations:**
 *
 * - CreateGrant
 * - ListGrants
 * - ListRetirableGrants
 * - RevokeGrant
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RetireGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RetireGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
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
 * @throws {@link InvalidGrantTokenException} (client fault)
 *
 * The request was rejected because the specified grant token is not valid.
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
 * @example To retire a grant
 * ```javascript
 * // The following example retires a grant.
 * const input = {
 *   GrantId: "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
 *   KeyId: "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new RetireGrantCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RetireGrantCommand extends command<RetireGrantCommandInput, RetireGrantCommandOutput>(
  _ep0,
  _mw0,
  "RetireGrant",
  RetireGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetireGrantRequest;
      output: {};
    };
    sdk: {
      input: RetireGrantCommandInput;
      output: RetireGrantCommandOutput;
    };
  };
}
