// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountCustomPermissionRequest, DescribeAccountCustomPermissionResponse } from "../models/models_4";
import {
  de_DescribeAccountCustomPermissionCommand,
  se_DescribeAccountCustomPermissionCommand,
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
 * The input for {@link DescribeAccountCustomPermissionCommand}.
 */
export interface DescribeAccountCustomPermissionCommandInput extends DescribeAccountCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountCustomPermissionCommand}.
 */
export interface DescribeAccountCustomPermissionCommandOutput
  extends DescribeAccountCustomPermissionResponse,
    __MetadataBearer {}

/**
 * <p>Describes the custom permissions profile that is applied to an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccountCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAccountCustomPermissionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountCustomPermissionResponse
 * //   CustomPermissionsName: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeAccountCustomPermissionCommandInput - {@link DescribeAccountCustomPermissionCommandInput}
 * @returns {@link DescribeAccountCustomPermissionCommandOutput}
 * @see {@link DescribeAccountCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountCustomPermissionCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeAccountCustomPermissionCommand extends $Command
  .classBuilder<
    DescribeAccountCustomPermissionCommandInput,
    DescribeAccountCustomPermissionCommandOutput,
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
  .s("QuickSight_20180401", "DescribeAccountCustomPermission", {})
  .n("QuickSightClient", "DescribeAccountCustomPermissionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountCustomPermissionCommand)
  .de(de_DescribeAccountCustomPermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountCustomPermissionRequest;
      output: DescribeAccountCustomPermissionResponse;
    };
    sdk: {
      input: DescribeAccountCustomPermissionCommandInput;
      output: DescribeAccountCustomPermissionCommandOutput;
    };
  };
}
