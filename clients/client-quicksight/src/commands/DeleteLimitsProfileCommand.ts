// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLimitsProfileRequest, DeleteLimitsProfileResponse } from "../models/models_3";
import { DeleteLimitsProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLimitsProfileCommand}.
 */
export interface DeleteLimitsProfileCommandInput extends DeleteLimitsProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLimitsProfileCommand}.
 */
export interface DeleteLimitsProfileCommandOutput extends DeleteLimitsProfileResponse, __MetadataBearer {}

/**
 * Deletes a limits profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteLimitsProfileCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteLimitsProfileCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteLimitsProfileRequest
 *   profileId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLimitsProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLimitsProfileResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteLimitsProfileCommandInput - {@link DeleteLimitsProfileCommandInput}
 * @returns {@link DeleteLimitsProfileCommandOutput}
 * @see {@link DeleteLimitsProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLimitsProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
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
export class DeleteLimitsProfileCommand extends command<DeleteLimitsProfileCommandInput, DeleteLimitsProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLimitsProfile",
  DeleteLimitsProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLimitsProfileRequest;
      output: DeleteLimitsProfileResponse;
    };
    sdk: {
      input: DeleteLimitsProfileCommandInput;
      output: DeleteLimitsProfileCommandOutput;
    };
  };
}
