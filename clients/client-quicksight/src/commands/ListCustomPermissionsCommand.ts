// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCustomPermissionsRequest, ListCustomPermissionsResponse } from "../models/models_4";
import { de_ListCustomPermissionsCommand, se_ListCustomPermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomPermissionsCommand}.
 */
export interface ListCustomPermissionsCommandInput extends ListCustomPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomPermissionsCommand}.
 */
export interface ListCustomPermissionsCommandOutput extends ListCustomPermissionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the custom permissions profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListCustomPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListCustomPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListCustomPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomPermissionsResponse
 * //   Status: Number("int"),
 * //   CustomPermissionsList: [ // CustomPermissionsList
 * //     { // CustomPermissions
 * //       Arn: "STRING_VALUE",
 * //       CustomPermissionsName: "STRING_VALUE",
 * //       Capabilities: { // Capabilities
 * //         ExportToCsv: "DENY",
 * //         ExportToExcel: "DENY",
 * //         CreateAndUpdateThemes: "DENY",
 * //         AddOrRunAnomalyDetectionForAnalyses: "DENY",
 * //         ShareAnalyses: "DENY",
 * //         CreateAndUpdateDatasets: "DENY",
 * //         ShareDatasets: "DENY",
 * //         SubscribeDashboardEmailReports: "DENY",
 * //         CreateAndUpdateDashboardEmailReports: "DENY",
 * //         ShareDashboards: "DENY",
 * //         CreateAndUpdateThresholdAlerts: "DENY",
 * //         RenameSharedFolders: "DENY",
 * //         CreateSharedFolders: "DENY",
 * //         CreateAndUpdateDataSources: "DENY",
 * //         ShareDataSources: "DENY",
 * //         ViewAccountSPICECapacity: "DENY",
 * //         CreateSPICEDataset: "DENY",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomPermissionsCommandInput - {@link ListCustomPermissionsCommandInput}
 * @returns {@link ListCustomPermissionsCommandOutput}
 * @see {@link ListCustomPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListCustomPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
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
export class ListCustomPermissionsCommand extends $Command
  .classBuilder<
    ListCustomPermissionsCommandInput,
    ListCustomPermissionsCommandOutput,
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
  .s("QuickSight_20180401", "ListCustomPermissions", {})
  .n("QuickSightClient", "ListCustomPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomPermissionsCommand)
  .de(de_ListCustomPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomPermissionsRequest;
      output: ListCustomPermissionsResponse;
    };
    sdk: {
      input: ListCustomPermissionsCommandInput;
      output: ListCustomPermissionsCommandOutput;
    };
  };
}
