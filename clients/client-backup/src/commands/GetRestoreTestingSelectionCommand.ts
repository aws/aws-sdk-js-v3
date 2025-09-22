// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRestoreTestingSelectionInput, GetRestoreTestingSelectionOutput } from "../models/models_0";
import { GetRestoreTestingSelection } from "../schemas/schemas_1_RestoreTesting";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingSelectionCommand}.
 */
export interface GetRestoreTestingSelectionCommandInput extends GetRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingSelectionCommand}.
 */
export interface GetRestoreTestingSelectionCommandOutput extends GetRestoreTestingSelectionOutput, __MetadataBearer {}

/**
 * <p>Returns RestoreTestingSelection, which displays resources
 *          and elements of the restore testing plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingSelectionInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelectionName: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingSelectionOutput
 * //   RestoreTestingSelection: { // RestoreTestingSelectionForGet
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     CreatorRequestId: "STRING_VALUE",
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     ProtectedResourceArns: [ // stringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ProtectedResourceConditions: { // ProtectedResourceConditions
 * //       StringEquals: [ // KeyValueList
 * //         { // KeyValue
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       StringNotEquals: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     ProtectedResourceType: "STRING_VALUE", // required
 * //     RestoreMetadataOverrides: { // SensitiveStringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     RestoreTestingPlanName: "STRING_VALUE", // required
 * //     RestoreTestingSelectionName: "STRING_VALUE", // required
 * //     ValidationWindowHours: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingSelectionCommandInput - {@link GetRestoreTestingSelectionCommandInput}
 * @returns {@link GetRestoreTestingSelectionCommandOutput}
 * @see {@link GetRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class GetRestoreTestingSelectionCommand extends $Command
  .classBuilder<
    GetRestoreTestingSelectionCommandInput,
    GetRestoreTestingSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetRestoreTestingSelection", {})
  .n("BackupClient", "GetRestoreTestingSelectionCommand")
  .sc(GetRestoreTestingSelection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestoreTestingSelectionInput;
      output: GetRestoreTestingSelectionOutput;
    };
    sdk: {
      input: GetRestoreTestingSelectionCommandInput;
      output: GetRestoreTestingSelectionCommandOutput;
    };
  };
}
