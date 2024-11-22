// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSourcePermissionsRequest, DescribeDataSourcePermissionsResponse } from "../models/models_4";
import {
  de_DescribeDataSourcePermissionsCommand,
  se_DescribeDataSourcePermissionsCommand,
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
 * The input for {@link DescribeDataSourcePermissionsCommand}.
 */
export interface DescribeDataSourcePermissionsCommandInput extends DescribeDataSourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSourcePermissionsCommand}.
 */
export interface DescribeDataSourcePermissionsCommandOutput
  extends DescribeDataSourcePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the resource permissions for a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDataSourcePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSourcePermissionsResponse
 * //   DataSourceArn: "STRING_VALUE",
 * //   DataSourceId: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDataSourcePermissionsCommandInput - {@link DescribeDataSourcePermissionsCommandInput}
 * @returns {@link DescribeDataSourcePermissionsCommandOutput}
 * @see {@link DescribeDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcePermissionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeDataSourcePermissionsCommand extends $Command
  .classBuilder<
    DescribeDataSourcePermissionsCommandInput,
    DescribeDataSourcePermissionsCommandOutput,
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
  .s("QuickSight_20180401", "DescribeDataSourcePermissions", {})
  .n("QuickSightClient", "DescribeDataSourcePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSourcePermissionsCommand)
  .de(de_DescribeDataSourcePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSourcePermissionsRequest;
      output: DescribeDataSourcePermissionsResponse;
    };
    sdk: {
      input: DescribeDataSourcePermissionsCommandInput;
      output: DescribeDataSourcePermissionsCommandOutput;
    };
  };
}
