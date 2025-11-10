// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDashboardsQAConfigurationRequest, UpdateDashboardsQAConfigurationResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDashboardsQAConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardsQAConfigurationCommand}.
 */
export interface UpdateDashboardsQAConfigurationCommandInput extends UpdateDashboardsQAConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardsQAConfigurationCommand}.
 */
export interface UpdateDashboardsQAConfigurationCommandOutput
  extends UpdateDashboardsQAConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a Dashboard QA configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardsQAConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardsQAConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDashboardsQAConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardsQAStatus: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateDashboardsQAConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardsQAConfigurationResponse
 * //   DashboardsQAStatus: "ENABLED" || "DISABLED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateDashboardsQAConfigurationCommandInput - {@link UpdateDashboardsQAConfigurationCommandInput}
 * @returns {@link UpdateDashboardsQAConfigurationCommandOutput}
 * @see {@link UpdateDashboardsQAConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardsQAConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateDashboardsQAConfigurationCommand extends $Command
  .classBuilder<
    UpdateDashboardsQAConfigurationCommandInput,
    UpdateDashboardsQAConfigurationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateDashboardsQAConfiguration", {})
  .n("QuickSightClient", "UpdateDashboardsQAConfigurationCommand")
  .sc(UpdateDashboardsQAConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardsQAConfigurationRequest;
      output: UpdateDashboardsQAConfigurationResponse;
    };
    sdk: {
      input: UpdateDashboardsQAConfigurationCommandInput;
      output: UpdateDashboardsQAConfigurationCommandOutput;
    };
  };
}
