// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomPermissionsRequest, CreateCustomPermissionsResponse } from "../models/models_3";
import { de_CreateCustomPermissionsCommand, se_CreateCustomPermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomPermissionsCommand}.
 */
export interface CreateCustomPermissionsCommandInput extends CreateCustomPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomPermissionsCommand}.
 */
export interface CreateCustomPermissionsCommandOutput extends CreateCustomPermissionsResponse, __MetadataBearer {}

/**
 * <p>Creates a custom permissions profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateCustomPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateCustomPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // CreateCustomPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   CustomPermissionsName: "STRING_VALUE", // required
 *   Capabilities: { // Capabilities
 *     ExportToCsv: "DENY",
 *     ExportToExcel: "DENY",
 *     ExportToPdf: "DENY",
 *     PrintReports: "DENY",
 *     CreateAndUpdateThemes: "DENY",
 *     AddOrRunAnomalyDetectionForAnalyses: "DENY",
 *     ShareAnalyses: "DENY",
 *     CreateAndUpdateDatasets: "DENY",
 *     ShareDatasets: "DENY",
 *     SubscribeDashboardEmailReports: "DENY",
 *     CreateAndUpdateDashboardEmailReports: "DENY",
 *     ShareDashboards: "DENY",
 *     CreateAndUpdateThresholdAlerts: "DENY",
 *     RenameSharedFolders: "DENY",
 *     CreateSharedFolders: "DENY",
 *     CreateAndUpdateDataSources: "DENY",
 *     ShareDataSources: "DENY",
 *     ViewAccountSPICECapacity: "DENY",
 *     CreateSPICEDataset: "DENY",
 *     ExportToPdfInScheduledReports: "DENY",
 *     ExportToCsvInScheduledReports: "DENY",
 *     ExportToExcelInScheduledReports: "DENY",
 *     IncludeContentInScheduledReportsEmail: "DENY",
 *     Dashboard: "DENY",
 *     Analysis: "DENY",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCustomPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomPermissionsResponse
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomPermissionsCommandInput - {@link CreateCustomPermissionsCommandInput}
 * @returns {@link CreateCustomPermissionsCommandOutput}
 * @see {@link CreateCustomPermissionsCommandInput} for command's `input` shape.
 * @see {@link CreateCustomPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateCustomPermissionsCommand extends $Command
  .classBuilder<
    CreateCustomPermissionsCommandInput,
    CreateCustomPermissionsCommandOutput,
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
  .s("QuickSight_20180401", "CreateCustomPermissions", {})
  .n("QuickSightClient", "CreateCustomPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomPermissionsCommand)
  .de(de_CreateCustomPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomPermissionsRequest;
      output: CreateCustomPermissionsResponse;
    };
    sdk: {
      input: CreateCustomPermissionsCommandInput;
      output: CreateCustomPermissionsCommandOutput;
    };
  };
}
