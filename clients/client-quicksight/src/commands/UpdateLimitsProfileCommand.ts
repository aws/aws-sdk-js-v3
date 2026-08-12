// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLimitsProfileRequest, UpdateLimitsProfileResponse } from "../models/models_5";
import { UpdateLimitsProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLimitsProfileCommand}.
 */
export interface UpdateLimitsProfileCommandInput extends UpdateLimitsProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLimitsProfileCommand}.
 */
export interface UpdateLimitsProfileCommandOutput extends UpdateLimitsProfileResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of an existing limits profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateLimitsProfileCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateLimitsProfileCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateLimitsProfileRequest
 *   profileId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   profileName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   resourceLimits: { // ResourceLimitsMap
 *     "<keys>": { // ProfileLimitValue
 *       maxValue: Number("long"), // required
 *       unit: "MB" || "GB" || "HOURS" || "DAYS", // required
 *     },
 *   },
 * };
 * const command = new UpdateLimitsProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLimitsProfileResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateLimitsProfileCommandInput - {@link UpdateLimitsProfileCommandInput}
 * @returns {@link UpdateLimitsProfileCommandOutput}
 * @see {@link UpdateLimitsProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLimitsProfileCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateLimitsProfileCommand extends command<UpdateLimitsProfileCommandInput, UpdateLimitsProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLimitsProfile",
  UpdateLimitsProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLimitsProfileRequest;
      output: UpdateLimitsProfileResponse;
    };
    sdk: {
      input: UpdateLimitsProfileCommandInput;
      output: UpdateLimitsProfileCommandOutput;
    };
  };
}
