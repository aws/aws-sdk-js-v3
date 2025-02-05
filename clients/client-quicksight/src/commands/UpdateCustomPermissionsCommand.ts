// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCustomPermissionsRequest, UpdateCustomPermissionsResponse } from "../models/models_5";
import { de_UpdateCustomPermissionsCommand, se_UpdateCustomPermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomPermissionsCommand}.
 */
export interface UpdateCustomPermissionsCommandInput extends UpdateCustomPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomPermissionsCommand}.
 */
export interface UpdateCustomPermissionsCommandOutput extends UpdateCustomPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates a custom permissions profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateCustomPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateCustomPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // UpdateCustomPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   CustomPermissionsName: "STRING_VALUE", // required
 *   Capabilities: { // Capabilities
 *     ExportToCsv: "DENY",
 *     ExportToExcel: "DENY",
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
 *   },
 * };
 * const command = new UpdateCustomPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomPermissionsResponse
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCustomPermissionsCommandInput - {@link UpdateCustomPermissionsCommandInput}
 * @returns {@link UpdateCustomPermissionsCommandOutput}
 * @see {@link UpdateCustomPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomPermissionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateCustomPermissionsCommand extends $Command
  .classBuilder<
    UpdateCustomPermissionsCommandInput,
    UpdateCustomPermissionsCommandOutput,
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
  .s("QuickSight_20180401", "UpdateCustomPermissions", {})
  .n("QuickSightClient", "UpdateCustomPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCustomPermissionsCommand)
  .de(de_UpdateCustomPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomPermissionsRequest;
      output: UpdateCustomPermissionsResponse;
    };
    sdk: {
      input: UpdateCustomPermissionsCommandInput;
      output: UpdateCustomPermissionsCommandOutput;
    };
  };
}
