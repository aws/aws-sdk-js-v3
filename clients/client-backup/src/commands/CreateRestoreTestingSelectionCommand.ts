// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRestoreTestingSelectionInput, CreateRestoreTestingSelectionOutput } from "../models/models_0";
import { CreateRestoreTestingSelection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateRestoreTestingSelectionCommandOutput extends CreateRestoreTestingSelectionOutput, __MetadataBearer {}

/**
 * This request can be sent after CreateRestoreTestingPlan request returns successfully. This is the second part of creating a resource testing plan, and it must be completed sequentially.
 *
 * This consists of `RestoreTestingSelectionName`, `ProtectedResourceType`, and one of the following:
 *
 * - `ProtectedResourceArns`
 * - `ProtectedResourceConditions`
 *
 * Each protected resource type can have one single value.
 *
 * A restore testing selection can include a wildcard value ("*") for `ProtectedResourceArns` along with `ProtectedResourceConditions`. Alternatively, you can include up to 30 specific protected resource ARNs in `ProtectedResourceArns`.
 *
 * Cannot select by both protected resource types AND specific ARNs. Request will fail if both are included.
 *
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
 *
 * The required resource already exists.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class CreateRestoreTestingSelectionCommand extends command<CreateRestoreTestingSelectionCommandInput, CreateRestoreTestingSelectionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRestoreTestingSelection",
  CreateRestoreTestingSelection$
) {
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
