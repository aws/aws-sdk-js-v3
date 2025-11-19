// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAnalysisPermissionsRequest, DescribeAnalysisPermissionsResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeAnalysisPermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnalysisPermissionsCommand}.
 */
export interface DescribeAnalysisPermissionsCommandInput extends DescribeAnalysisPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnalysisPermissionsCommand}.
 */
export interface DescribeAnalysisPermissionsCommandOutput
  extends DescribeAnalysisPermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Provides the read and write permissions for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAnalysisPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAnalysisPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAnalysisPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AnalysisId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAnalysisPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnalysisPermissionsResponse
 * //   AnalysisId: "STRING_VALUE",
 * //   AnalysisArn: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param DescribeAnalysisPermissionsCommandInput - {@link DescribeAnalysisPermissionsCommandInput}
 * @returns {@link DescribeAnalysisPermissionsCommandOutput}
 * @see {@link DescribeAnalysisPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisPermissionsCommandOutput} for command's `response` shape.
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
export class DescribeAnalysisPermissionsCommand extends $Command
  .classBuilder<
    DescribeAnalysisPermissionsCommandInput,
    DescribeAnalysisPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeAnalysisPermissions", {})
  .n("QuickSightClient", "DescribeAnalysisPermissionsCommand")
  .sc(DescribeAnalysisPermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAnalysisPermissionsRequest;
      output: DescribeAnalysisPermissionsResponse;
    };
    sdk: {
      input: DescribeAnalysisPermissionsCommandInput;
      output: DescribeAnalysisPermissionsCommandOutput;
    };
  };
}
