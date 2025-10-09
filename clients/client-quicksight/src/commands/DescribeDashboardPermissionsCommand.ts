// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDashboardPermissionsRequest, DescribeDashboardPermissionsResponse } from "../models/models_4";
import {
  de_DescribeDashboardPermissionsCommand,
  se_DescribeDashboardPermissionsCommand,
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
 * The input for {@link DescribeDashboardPermissionsCommand}.
 */
export interface DescribeDashboardPermissionsCommandInput extends DescribeDashboardPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardPermissionsCommand}.
 */
export interface DescribeDashboardPermissionsCommandOutput
  extends DescribeDashboardPermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes read and write permissions for a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDashboardPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDashboardPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardPermissionsResponse
 * //   DashboardId: "STRING_VALUE",
 * //   DashboardArn: "STRING_VALUE",
 * //   Permissions: [ // UpdateResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * //   LinkSharingConfiguration: { // LinkSharingConfiguration
 * //     Permissions: [ // ResourcePermissionList
 * //       {
 * //         Principal: "STRING_VALUE", // required
 * //         Actions: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDashboardPermissionsCommandInput - {@link DescribeDashboardPermissionsCommandInput}
 * @returns {@link DescribeDashboardPermissionsCommandOutput}
 * @see {@link DescribeDashboardPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeDashboardPermissionsCommand extends $Command
  .classBuilder<
    DescribeDashboardPermissionsCommandInput,
    DescribeDashboardPermissionsCommandOutput,
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
  .s("QuickSight_20180401", "DescribeDashboardPermissions", {})
  .n("QuickSightClient", "DescribeDashboardPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDashboardPermissionsCommand)
  .de(de_DescribeDashboardPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDashboardPermissionsRequest;
      output: DescribeDashboardPermissionsResponse;
    };
    sdk: {
      input: DescribeDashboardPermissionsCommandInput;
      output: DescribeDashboardPermissionsCommandOutput;
    };
  };
}
