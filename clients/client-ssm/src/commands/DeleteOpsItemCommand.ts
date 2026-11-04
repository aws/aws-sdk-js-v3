// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOpsItemRequest, DeleteOpsItemResponse } from "../models/models_0";
import { DeleteOpsItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOpsItemCommand}.
 */
export interface DeleteOpsItemCommandInput extends DeleteOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOpsItemCommand}.
 */
export interface DeleteOpsItemCommandOutput extends DeleteOpsItemResponse, __MetadataBearer {}

/**
 * Delete an OpsItem. You must have permission in Identity and Access Management (IAM) to delete an OpsItem.
 *
 * > **Important:**
 * >
 * > Note the following important information about this operation.
 * >
 * > - Deleting an OpsItem is irreversible. You can't restore a deleted OpsItem.
 * > - This operation uses an *eventual consistency model*, which means the system can take a few minutes to complete this operation. If you delete an OpsItem and immediately call, for example, GetOpsItem, the deleted OpsItem might still appear in the response.
 * > - This operation is idempotent. The system doesn't throw an exception if you repeatedly call this operation for the same OpsItem. If the first call is successful, all additional calls return the same successful response as the first call.
 * > - This operation doesn't support cross-account calls. A delegated administrator or management account can't delete OpsItems in other accounts, even if OpsCenter has been set up for cross-account administration. For more information about cross-account administration, see [Setting up OpsCenter to centrally manage OpsItems across accounts](https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setting-up-cross-account.html) in the *Systems Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteOpsItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOpsItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOpsItemCommandInput - {@link DeleteOpsItemCommandInput}
 * @returns {@link DeleteOpsItemCommandOutput}
 * @see {@link DeleteOpsItemCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *
 * A specified parameter argument isn't valid. Verify the available arguments and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DeleteOpsItemCommand extends command<DeleteOpsItemCommandInput, DeleteOpsItemCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOpsItem",
  DeleteOpsItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOpsItemRequest;
      output: {};
    };
    sdk: {
      input: DeleteOpsItemCommandInput;
      output: DeleteOpsItemCommandOutput;
    };
  };
}
