// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDashboardsQAConfigurationRequest,
  DescribeDashboardsQAConfigurationResponse,
} from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDashboardsQAConfiguration } from "../schemas/schemas_86_DashboardsQAConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDashboardsQAConfigurationCommand}.
 */
export interface DescribeDashboardsQAConfigurationCommandInput extends DescribeDashboardsQAConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardsQAConfigurationCommand}.
 */
export interface DescribeDashboardsQAConfigurationCommandOutput
  extends DescribeDashboardsQAConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Describes an existing dashboard QA configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardsQAConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardsQAConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDashboardsQAConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDashboardsQAConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardsQAConfigurationResponse
 * //   DashboardsQAStatus: "ENABLED" || "DISABLED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDashboardsQAConfigurationCommandInput - {@link DescribeDashboardsQAConfigurationCommandInput}
 * @returns {@link DescribeDashboardsQAConfigurationCommandOutput}
 * @see {@link DescribeDashboardsQAConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardsQAConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
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
export class DescribeDashboardsQAConfigurationCommand extends $Command
  .classBuilder<
    DescribeDashboardsQAConfigurationCommandInput,
    DescribeDashboardsQAConfigurationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeDashboardsQAConfiguration", {})
  .n("QuickSightClient", "DescribeDashboardsQAConfigurationCommand")
  .sc(DescribeDashboardsQAConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDashboardsQAConfigurationRequest;
      output: DescribeDashboardsQAConfigurationResponse;
    };
    sdk: {
      input: DescribeDashboardsQAConfigurationCommandInput;
      output: DescribeDashboardsQAConfigurationCommandOutput;
    };
  };
}
