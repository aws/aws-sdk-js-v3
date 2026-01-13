// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSelfUpgradeConfigurationRequest, UpdateSelfUpgradeConfigurationResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateSelfUpgradeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSelfUpgradeConfigurationCommand}.
 */
export interface UpdateSelfUpgradeConfigurationCommandInput extends UpdateSelfUpgradeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSelfUpgradeConfigurationCommand}.
 */
export interface UpdateSelfUpgradeConfigurationCommandOutput extends UpdateSelfUpgradeConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the self-upgrade configuration for a Quick Suite account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateSelfUpgradeConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateSelfUpgradeConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateSelfUpgradeConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   SelfUpgradeStatus: "AUTO_APPROVAL" || "ADMIN_APPROVAL", // required
 * };
 * const command = new UpdateSelfUpgradeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSelfUpgradeConfigurationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateSelfUpgradeConfigurationCommandInput - {@link UpdateSelfUpgradeConfigurationCommandInput}
 * @returns {@link UpdateSelfUpgradeConfigurationCommandOutput}
 * @see {@link UpdateSelfUpgradeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSelfUpgradeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameter has a value that isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
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
export class UpdateSelfUpgradeConfigurationCommand extends $Command
  .classBuilder<
    UpdateSelfUpgradeConfigurationCommandInput,
    UpdateSelfUpgradeConfigurationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateSelfUpgradeConfiguration", {})
  .n("QuickSightClient", "UpdateSelfUpgradeConfigurationCommand")
  .sc(UpdateSelfUpgradeConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSelfUpgradeConfigurationRequest;
      output: UpdateSelfUpgradeConfigurationResponse;
    };
    sdk: {
      input: UpdateSelfUpgradeConfigurationCommandInput;
      output: UpdateSelfUpgradeConfigurationCommandOutput;
    };
  };
}
