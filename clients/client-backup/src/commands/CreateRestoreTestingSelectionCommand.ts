// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRestoreTestingSelectionInput, CreateRestoreTestingSelectionOutput } from "../models/models_0";
import { CreateRestoreTestingSelection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRestoreTestingSelectionCommand}.
 */
export interface CreateRestoreTestingSelectionCommandInput extends CreateRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link CreateRestoreTestingSelectionCommand}.
 */
export interface CreateRestoreTestingSelectionCommandOutput
  extends CreateRestoreTestingSelectionOutput,
    __MetadataBearer {}

/**
 * <p>This request can be sent after CreateRestoreTestingPlan request
 *          returns successfully. This is the second part of creating a resource testing
 *          plan, and it must be completed sequentially.</p>
 *          <p>This consists of <code>RestoreTestingSelectionName</code>,
 *          <code>ProtectedResourceType</code>, and one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ProtectedResourceArns</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProtectedResourceConditions</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Each protected resource type can have one single value.</p>
 *          <p>A restore testing selection can include a wildcard value ("*") for
 *          <code>ProtectedResourceArns</code> along with <code>ProtectedResourceConditions</code>.
 *          Alternatively, you can include up to 30 specific protected resource ARNs in
 *          <code>ProtectedResourceArns</code>.</p>
 *          <p>Cannot select by both protected resource types AND specific ARNs.
 *          Request will fail if both are included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateRestoreTestingSelectionInput
 *   CreatorRequestId: "STRING_VALUE",
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelection: { // RestoreTestingSelectionForCreate
 *     IamRoleArn: "STRING_VALUE", // required
 *     ProtectedResourceArns: [ // stringList
 *       "STRING_VALUE",
 *     ],
 *     ProtectedResourceConditions: { // ProtectedResourceConditions
 *       StringEquals: [ // KeyValueList
 *         { // KeyValue
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       StringNotEquals: [
 *         {
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     ProtectedResourceType: "STRING_VALUE", // required
 *     RestoreMetadataOverrides: { // SensitiveStringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     RestoreTestingSelectionName: "STRING_VALUE", // required
 *     ValidationWindowHours: Number("int"),
 *   },
 * };
 * const command = new CreateRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRestoreTestingSelectionOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * //   RestoreTestingSelectionName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRestoreTestingSelectionCommandInput - {@link CreateRestoreTestingSelectionCommandInput}
 * @returns {@link CreateRestoreTestingSelectionCommandOutput}
 * @see {@link CreateRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreTestingSelectionCommandOutput} for command's `response` shape.
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
export class CreateRestoreTestingSelectionCommand extends $Command
  .classBuilder<
    CreateRestoreTestingSelectionCommandInput,
    CreateRestoreTestingSelectionCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateRestoreTestingSelection", {})
  .n("BackupClient", "CreateRestoreTestingSelectionCommand")
  .sc(CreateRestoreTestingSelection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRestoreTestingSelectionInput;
      output: CreateRestoreTestingSelectionOutput;
    };
    sdk: {
      input: CreateRestoreTestingSelectionCommandInput;
      output: CreateRestoreTestingSelectionCommandOutput;
    };
  };
}
