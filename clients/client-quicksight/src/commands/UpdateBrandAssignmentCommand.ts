// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBrandAssignmentRequest, UpdateBrandAssignmentResponse } from "../models/models_5";
import { UpdateBrandAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBrandAssignmentCommand}.
 */
export interface UpdateBrandAssignmentCommandInput extends UpdateBrandAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrandAssignmentCommand}.
 */
export interface UpdateBrandAssignmentCommandOutput extends UpdateBrandAssignmentResponse, __MetadataBearer {}

/**
 * Updates a brand assignment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateBrandAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateBrandAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateBrandAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateBrandAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandAssignmentResponse
 * //   RequestId: "STRING_VALUE",
 * //   BrandArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrandAssignmentCommandInput - {@link UpdateBrandAssignmentCommandInput}
 * @returns {@link UpdateBrandAssignmentCommandOutput}
 * @see {@link UpdateBrandAssignmentCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandAssignmentCommandOutput} for command's `response` shape.
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
export class UpdateBrandAssignmentCommand extends command<UpdateBrandAssignmentCommandInput, UpdateBrandAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBrandAssignment",
  UpdateBrandAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandAssignmentRequest;
      output: UpdateBrandAssignmentResponse;
    };
    sdk: {
      input: UpdateBrandAssignmentCommandInput;
      output: UpdateBrandAssignmentCommandOutput;
    };
  };
}
