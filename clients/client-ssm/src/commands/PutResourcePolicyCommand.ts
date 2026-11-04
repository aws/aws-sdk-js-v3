// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_1";
import { PutResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following resources support Systems Manager resource policies.
 *
 * - `OpsItemGroup` - The resource policy for `OpsItemGroup` enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
 * - `Parameter` - The resource policy is used to share a parameter with other accounts using Resource Access Manager (RAM).
 *
 *   To share a parameter, it must be in the advanced parameter tier. For information about parameter tiers, see [Managing parameter tiers](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html). For information about changing an existing standard parameter to an advanced parameter, see [Changing a standard parameter to an advanced parameter](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html#parameter-store-advanced-parameters-enabling).
 *
 *   To share a `SecureString` parameter, it must be encrypted with a customer managed key, and you must share the key separately through Key Management Service. Amazon Web Services managed keys cannot be shared. Parameters encrypted with the default Amazon Web Services managed key can be updated to use a customer managed key instead. For KMS key definitions, see [KMS concepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html) in the *Key Management Service Developer Guide*.
 *
 *   > **Important:**
 *   >
 *   > While you can share a parameter using the Systems Manager `PutResourcePolicy` operation, we recommend using Resource Access Manager (RAM) instead. This is because using `PutResourcePolicy` requires the extra step of promoting the parameter to a standard RAM Resource Share using the RAM [PromoteResourceShareCreatedFromPolicy](https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) API operation. Otherwise, the parameter won't be returned by the Systems Manager [DescribeParameters](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html) API operation using the `--shared` option.
 *   >
 *   > For more information, see [Sharing a parameter](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html#share) in the *Amazon Web Services Systems Manager User Guide*
 * - `Document` – Shares the document using Resource Access Manager (RAM). For more information about sharing documents, see [Sharing Systems Manager documents](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-ssm-sharing.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * > **Important:** While you can share a document using the Systems Manager `PutResourcePolicy` operation, we recommend using Resource Access Manager (RAM) instead. Using `PutResourcePolicy` requires an extra step. You must promote the document to a standard RAM Resource Share using the RAM [PromoteResourceShareCreatedFromPolicy](https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) API operation. Otherwise, the Systems Manager [ListDocuments](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html) API operation won't return the document when filtering for shared documents. The Amazon Web Services Config [PutRemediationConfigurations](https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html) API operation also can't use the document.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutResourcePolicyCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutResourcePolicyCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // PutResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   PolicyId: "STRING_VALUE",
 *   PolicyHash: "STRING_VALUE",
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResponse
 * //   PolicyId: "STRING_VALUE",
 * //   PolicyHash: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link MalformedResourcePolicyDocumentException} (client fault)
 *
 * The specified policy document is malformed or invalid, or excessive `PutResourcePolicy` or `DeleteResourcePolicy` calls have been made.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified parameter to be shared could not be found.
 *
 * @throws {@link ResourcePolicyConflictException} (client fault)
 *
 * The hash provided in the call doesn't match the stored hash. This exception is thrown when trying to update an obsolete policy version or when multiple requests to update a policy are sent.
 *
 * @throws {@link ResourcePolicyInvalidParameterException} (client fault)
 *
 * One or more parameters specified for the call aren't valid. Verify the parameters and their values and try again.
 *
 * @throws {@link ResourcePolicyLimitExceededException} (client fault)
 *
 * The PutResourcePolicy API action enforces two limits. A policy can't be greater than 1024 bytes in size. And only one policy can be attached to `OpsItemGroup`. Verify these limits and try again.
 *
 * @throws {@link ResourcePolicyNotFoundException} (client fault)
 *
 * No policies with the specified policy ID and hash could be found.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class PutResourcePolicyCommand extends command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutResourcePolicy",
  PutResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResponse;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
