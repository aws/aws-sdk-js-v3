// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBrandAssignmentRequest, DeleteBrandAssignmentResponse } from "../models/models_3";
import { DeleteBrandAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBrandAssignmentCommand}.
 */
export interface DeleteBrandAssignmentCommandInput extends DeleteBrandAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrandAssignmentCommand}.
 */
export interface DeleteBrandAssignmentCommandOutput extends DeleteBrandAssignmentResponse, __MetadataBearer {}

/**
 * Deletes a brand assignment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteBrandAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteBrandAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteBrandAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrandAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrandAssignmentResponse
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBrandAssignmentCommandInput - {@link DeleteBrandAssignmentCommandInput}
 * @returns {@link DeleteBrandAssignmentCommandOutput}
 * @see {@link DeleteBrandAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteBrandAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service exception.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DeleteBrandAssignmentCommand extends command<DeleteBrandAssignmentCommandInput, DeleteBrandAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBrandAssignment",
  DeleteBrandAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrandAssignmentRequest;
      output: DeleteBrandAssignmentResponse;
    };
    sdk: {
      input: DeleteBrandAssignmentCommandInput;
      output: DeleteBrandAssignmentCommandOutput;
    };
  };
}
