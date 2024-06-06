// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDashboardRequest, DescribeDashboardResponse } from "../models/models_3";
import { de_DescribeDashboardCommand, se_DescribeDashboardCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDashboardCommand}.
 */
export interface DescribeDashboardCommandInput extends DescribeDashboardRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardCommand}.
 */
export interface DescribeDashboardCommandOutput extends DescribeDashboardResponse, __MetadataBearer {}

/**
 * <p>Provides a summary for a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDashboardRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"),
 *   AliasName: "STRING_VALUE",
 * };
 * const command = new DescribeDashboardCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardResponse
 * //   Dashboard: { // Dashboard
 * //     DashboardId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: { // DashboardVersion
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Errors: [ // DashboardErrorList
 * //         { // DashboardError
 * //           Type: "ACCESS_DENIED" || "SOURCE_NOT_FOUND" || "DATA_SET_NOT_FOUND" || "INTERNAL_FAILURE" || "PARAMETER_VALUE_INCOMPATIBLE" || "PARAMETER_TYPE_INVALID" || "PARAMETER_NOT_FOUND" || "COLUMN_TYPE_MISMATCH" || "COLUMN_GEOGRAPHIC_ROLE_MISMATCH" || "COLUMN_REPLACEMENT_MISSING",
 * //           Message: "STRING_VALUE",
 * //           ViolatedEntities: [ // EntityList
 * //             { // Entity
 * //               Path: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       VersionNumber: Number("long"),
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //       Arn: "STRING_VALUE",
 * //       SourceEntityArn: "STRING_VALUE",
 * //       DataSetArns: [ // DataSetArnsList
 * //         "STRING_VALUE",
 * //       ],
 * //       Description: "STRING_VALUE",
 * //       ThemeArn: "STRING_VALUE",
 * //       Sheets: [ // SheetList
 * //         { // Sheet
 * //           SheetId: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastPublishedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     LinkEntities: [ // LinkEntityArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDashboardCommandInput - {@link DescribeDashboardCommandInput}
 * @returns {@link DescribeDashboardCommandOutput}
 * @see {@link DescribeDashboardCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class DescribeDashboardCommand extends $Command
  .classBuilder<
    DescribeDashboardCommandInput,
    DescribeDashboardCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeDashboard", {})
  .n("QuickSightClient", "DescribeDashboardCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDashboardCommand)
  .de(de_DescribeDashboardCommand)
  .build() {}
