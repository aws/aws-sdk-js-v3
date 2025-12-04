// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateBackupSelectionInput, CreateBackupSelectionOutput } from "../models/models_0";
import { CreateBackupSelection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackupSelectionCommand}.
 */
export interface CreateBackupSelectionCommandInput extends CreateBackupSelectionInput {}
/**
 * @public
 *
 * The output of {@link CreateBackupSelectionCommand}.
 */
export interface CreateBackupSelectionCommandOutput extends CreateBackupSelectionOutput, __MetadataBearer {}

/**
 * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan.
 *          For examples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateBackupSelectionInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   BackupSelection: { // BackupSelection
 *     SelectionName: "STRING_VALUE", // required
 *     IamRoleArn: "STRING_VALUE", // required
 *     Resources: [ // ResourceArns
 *       "STRING_VALUE",
 *     ],
 *     ListOfTags: [ // ListOfTags
 *       { // Condition
 *         ConditionType: "STRINGEQUALS", // required
 *         ConditionKey: "STRING_VALUE", // required
 *         ConditionValue: "STRING_VALUE", // required
 *       },
 *     ],
 *     NotResources: [
 *       "STRING_VALUE",
 *     ],
 *     Conditions: { // Conditions
 *       StringEquals: [ // ConditionParameters
 *         { // ConditionParameter
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *       StringNotEquals: [
 *         {
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *       StringLike: [
 *         {
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *       StringNotLike: [
 *         {
 *           ConditionKey: "STRING_VALUE",
 *           ConditionValue: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 * };
 * const command = new CreateBackupSelectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupSelectionOutput
 * //   SelectionId: "STRING_VALUE",
 * //   BackupPlanId: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateBackupSelectionCommandInput - {@link CreateBackupSelectionCommandInput}
 * @returns {@link CreateBackupSelectionCommandOutput}
 * @see {@link CreateBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link CreateBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class CreateBackupSelectionCommand extends $Command
  .classBuilder<
    CreateBackupSelectionCommandInput,
    CreateBackupSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateBackupSelection", {})
  .n("BackupClient", "CreateBackupSelectionCommand")
  .sc(CreateBackupSelection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackupSelectionInput;
      output: CreateBackupSelectionOutput;
    };
    sdk: {
      input: CreateBackupSelectionCommandInput;
      output: CreateBackupSelectionCommandOutput;
    };
  };
}
