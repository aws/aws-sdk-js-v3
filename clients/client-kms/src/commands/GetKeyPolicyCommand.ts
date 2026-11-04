// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetKeyPolicyRequest, GetKeyPolicyResponse } from "../models/models_0";
import { GetKeyPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetKeyPolicyCommand}.
 */
export interface GetKeyPolicyCommandInput extends GetKeyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyPolicyCommand}.
 */
export interface GetKeyPolicyCommandOutput extends GetKeyPolicyResponse, __MetadataBearer {}

/**
 * Gets a key policy attached to the specified KMS key.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:GetKeyPolicy](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations**: [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html)
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyPolicyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyPolicyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GetKeyPolicyRequest
 *   KeyId: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE",
 * };
 * const command = new GetKeyPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyPolicyResponse
 * //   Policy: "STRING_VALUE",
 * //   PolicyName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKeyPolicyCommandInput - {@link GetKeyPolicyCommandInput}
 * @returns {@link GetKeyPolicyCommandOutput}
 * @see {@link GetKeyPolicyCommandInput} for command's `input` shape.
 * @see {@link GetKeyPolicyCommandOutput} for command's `response` shape.
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
 * @example To retrieve a key policy
 * ```javascript
 * // The following example retrieves the key policy for the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   PolicyName: "default"
 * };
 * const command = new GetKeyPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Policy: `{
 *   "Version" : "2012-10-17",
 *   "Id" : "key-default-1",
 *   "Statement" : [ {
 *     "Sid" : "Enable IAM User Permissions",
 *     "Effect" : "Allow",
 *     "Principal" : {
 *       "AWS" : "arn:aws:iam::111122223333:root"
 *     },
 *     "Action" : "kms:*",
 *     "Resource" : "*"
 *   } ]
 * }`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetKeyPolicyCommand extends command<GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetKeyPolicy",
  GetKeyPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyPolicyRequest;
      output: GetKeyPolicyResponse;
    };
    sdk: {
      input: GetKeyPolicyCommandInput;
      output: GetKeyPolicyCommandOutput;
    };
  };
}
