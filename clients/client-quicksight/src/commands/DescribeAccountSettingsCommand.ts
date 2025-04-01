// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountSettingsRequest, DescribeAccountSettingsResponse } from "../models/models_4";
import { de_DescribeAccountSettingsCommand, se_DescribeAccountSettingsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountSettingsCommand}.
 */
export interface DescribeAccountSettingsCommandInput extends DescribeAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountSettingsCommand}.
 */
export interface DescribeAccountSettingsCommandOutput extends DescribeAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Describes the settings that were used when your Amazon QuickSight subscription was first
 *             created in this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccountSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAccountSettingsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountSettingsResponse
 * //   AccountSettings: { // AccountSettings
 * //     AccountName: "STRING_VALUE",
 * //     Edition: "STANDARD" || "ENTERPRISE" || "ENTERPRISE_AND_Q",
 * //     DefaultNamespace: "STRING_VALUE",
 * //     NotificationEmail: "STRING_VALUE",
 * //     PublicSharingEnabled: true || false,
 * //     TerminationProtectionEnabled: true || false,
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeAccountSettingsCommandInput - {@link DescribeAccountSettingsCommandInput}
 * @returns {@link DescribeAccountSettingsCommandOutput}
 * @see {@link DescribeAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class DescribeAccountSettingsCommand extends $Command
  .classBuilder<
    DescribeAccountSettingsCommandInput,
    DescribeAccountSettingsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeAccountSettings", {})
  .n("QuickSightClient", "DescribeAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountSettingsCommand)
  .de(de_DescribeAccountSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountSettingsRequest;
      output: DescribeAccountSettingsResponse;
    };
    sdk: {
      input: DescribeAccountSettingsCommandInput;
      output: DescribeAccountSettingsCommandOutput;
    };
  };
}
