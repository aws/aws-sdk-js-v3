// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBackupSelectionInput, GetBackupSelectionOutput } from "../models/models_0";
import { de_GetBackupSelectionCommand, se_GetBackupSelectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackupSelectionCommand}.
 */
export interface GetBackupSelectionCommandInput extends GetBackupSelectionInput {}
/**
 * @public
 *
 * The output of {@link GetBackupSelectionCommand}.
 */
export interface GetBackupSelectionCommandOutput extends GetBackupSelectionOutput, __MetadataBearer {}

/**
 * <p>Returns selection metadata and a document in JSON format that specifies a list of
 *          resources that are associated with a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupClient(config);
 * const input = { // GetBackupSelectionInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   SelectionId: "STRING_VALUE", // required
 * };
 * const command = new GetBackupSelectionCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupSelectionOutput
 * //   BackupSelection: { // BackupSelection
 * //     SelectionName: "STRING_VALUE", // required
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     Resources: [ // ResourceArns
 * //       "STRING_VALUE",
 * //     ],
 * //     ListOfTags: [ // ListOfTags
 * //       { // Condition
 * //         ConditionType: "STRINGEQUALS", // required
 * //         ConditionKey: "STRING_VALUE", // required
 * //         ConditionValue: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     NotResources: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Conditions: { // Conditions
 * //       StringEquals: [ // ConditionParameters
 * //         { // ConditionParameter
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StringNotEquals: [
 * //         {
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StringLike: [
 * //         {
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StringNotLike: [
 * //         {
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   SelectionId: "STRING_VALUE",
 * //   BackupPlanId: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CreatorRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackupSelectionCommandInput - {@link GetBackupSelectionCommandInput}
 * @returns {@link GetBackupSelectionCommandOutput}
 * @see {@link GetBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link GetBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
 * @public
 */
export class GetBackupSelectionCommand extends $Command
  .classBuilder<
    GetBackupSelectionCommandInput,
    GetBackupSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "GetBackupSelection", {})
  .n("BackupClient", "GetBackupSelectionCommand")
  .f(void 0, void 0)
  .ser(se_GetBackupSelectionCommand)
  .de(de_GetBackupSelectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackupSelectionInput;
      output: GetBackupSelectionOutput;
    };
    sdk: {
      input: GetBackupSelectionCommandInput;
      output: GetBackupSelectionCommandOutput;
    };
  };
}
