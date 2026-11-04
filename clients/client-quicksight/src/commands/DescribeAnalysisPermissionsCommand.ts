// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAnalysisPermissionsRequest, DescribeAnalysisPermissionsResponse } from "../models/models_4";
import { DescribeAnalysisPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeAnalysisPermissionsCommandOutput extends DescribeAnalysisPermissionsResponse, __MetadataBearer {}

/**
 * Provides the read and write permissions for an analysis.
 *
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
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeAnalysisPermissionsCommand extends command<DescribeAnalysisPermissionsCommandInput, DescribeAnalysisPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAnalysisPermissions",
  DescribeAnalysisPermissions$
) {
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
