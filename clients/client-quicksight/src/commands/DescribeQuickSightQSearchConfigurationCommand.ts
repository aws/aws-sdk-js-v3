// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeQuickSightQSearchConfigurationRequest,
  DescribeQuickSightQSearchConfigurationResponse,
} from "../models/models_4";
import {
  de_DescribeQuickSightQSearchConfigurationCommand,
  se_DescribeQuickSightQSearchConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQuickSightQSearchConfigurationCommand}.
 */
export interface DescribeQuickSightQSearchConfigurationCommandInput
  extends DescribeQuickSightQSearchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQuickSightQSearchConfigurationCommand}.
 */
export interface DescribeQuickSightQSearchConfigurationCommandOutput
  extends DescribeQuickSightQSearchConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the state of a Amazon QuickSight Q Search configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeQuickSightQSearchConfigurationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeQuickSightQSearchConfigurationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeQuickSightQSearchConfigurationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQuickSightQSearchConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQuickSightQSearchConfigurationResponse
 * //   QSearchStatus: "ENABLED" || "DISABLED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeQuickSightQSearchConfigurationCommandInput - {@link DescribeQuickSightQSearchConfigurationCommandInput}
 * @returns {@link DescribeQuickSightQSearchConfigurationCommandOutput}
 * @see {@link DescribeQuickSightQSearchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeQuickSightQSearchConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeQuickSightQSearchConfigurationCommand extends $Command
  .classBuilder<
    DescribeQuickSightQSearchConfigurationCommandInput,
    DescribeQuickSightQSearchConfigurationCommandOutput,
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
  .s("QuickSight_20180401", "DescribeQuickSightQSearchConfiguration", {})
  .n("QuickSightClient", "DescribeQuickSightQSearchConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeQuickSightQSearchConfigurationCommand)
  .de(de_DescribeQuickSightQSearchConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQuickSightQSearchConfigurationRequest;
      output: DescribeQuickSightQSearchConfigurationResponse;
    };
    sdk: {
      input: DescribeQuickSightQSearchConfigurationCommandInput;
      output: DescribeQuickSightQSearchConfigurationCommandOutput;
    };
  };
}
