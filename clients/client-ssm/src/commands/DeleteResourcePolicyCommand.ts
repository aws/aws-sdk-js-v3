// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_0";
import { DeleteResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyResponse, __MetadataBearer {}

/**
 * Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following resources support Systems Manager resource policies.
 *
 * - `OpsItemGroup` - The resource policy for `OpsItemGroup` enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
 * - `Parameter` - The resource policy is used to share a parameter with other accounts using Resource Access Manager (RAM). For more information about cross-account sharing of parameters, see [Working with shared parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-shared-parameters.html) in the *Amazon Web Services Systems Manager User Guide*.
 * - `Document` – Shares the document using Resource Access Manager (RAM). For more information about sharing documents, see [Sharing Systems Manager documents](https://docs.aws.amazon.com/systems-manager/latest/userguide/documents-ssm-sharing.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   PolicyId: "STRING_VALUE", // required
 *   PolicyHash: "STRING_VALUE", // required
 *   DeletionMode: "RemoveSharing" || "RollbackMigration",
 * };
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
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
export class DeleteResourcePolicyCommand extends command<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourcePolicy",
  DeleteResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourcePolicyCommandInput;
      output: DeleteResourcePolicyCommandOutput;
    };
  };
}
