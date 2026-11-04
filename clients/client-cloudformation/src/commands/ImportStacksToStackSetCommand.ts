// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportStacksToStackSetInput, ImportStacksToStackSetOutput } from "../models/models_0";
import { ImportStacksToStackSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportStacksToStackSetCommand}.
 */
export interface ImportStacksToStackSetCommandInput extends ImportStacksToStackSetInput {}
/**
 * @public
 *
 * The output of {@link ImportStacksToStackSetCommand}.
 */
export interface ImportStacksToStackSetCommandOutput extends ImportStacksToStackSetOutput, __MetadataBearer {}

/**
 * Import existing stacks into a new StackSets. Use the stack import operation to import up to 10 stacks into a new StackSet in the same account as the source stack or in a different administrator account and Region, by specifying the stack ID of the stack you intend to import.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ImportStacksToStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ImportStacksToStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ImportStacksToStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   StackIds: [ // StackIdList
 *     "STRING_VALUE",
 *   ],
 *   StackIdsUrl: "STRING_VALUE",
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 *   OperationPreferences: { // StackSetOperationPreferences
 *     RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 *     RegionOrder: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *     FailureToleranceCount: Number("int"),
 *     FailureTolerancePercentage: Number("int"),
 *     MaxConcurrentCount: Number("int"),
 *     MaxConcurrentPercentage: Number("int"),
 *     ConcurrencyMode: "STRICT_FAILURE_TOLERANCE" || "SOFT_FAILURE_TOLERANCE",
 *   },
 *   OperationId: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ImportStacksToStackSetCommand(input);
 * const response = await client.send(command);
 * // { // ImportStacksToStackSetOutput
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportStacksToStackSetCommandInput - {@link ImportStacksToStackSetCommandInput}
 * @returns {@link ImportStacksToStackSetCommandOutput}
 * @see {@link ImportStacksToStackSetCommandInput} for command's `input` shape.
 * @see {@link ImportStacksToStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The specified operation isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The quota for the resource has already been reached.
 *
 * For information about resource and stack limitations, see [CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *
 * The specified operation ID already exists.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *
 * Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack set at a given time.
 *
 * @throws {@link StackNotFoundException} (client fault)
 *
 * The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in input.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *
 * The specified StackSet doesn't exist.
 *
 * @throws {@link StaleRequestException} (client fault)
 *
 * Another operation has been performed on this StackSet since the specified operation was performed.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class ImportStacksToStackSetCommand extends command<ImportStacksToStackSetCommandInput, ImportStacksToStackSetCommandOutput>(
  _ep0,
  _mw0,
  "ImportStacksToStackSet",
  ImportStacksToStackSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportStacksToStackSetInput;
      output: ImportStacksToStackSetOutput;
    };
    sdk: {
      input: ImportStacksToStackSetCommandInput;
      output: ImportStacksToStackSetCommandOutput;
    };
  };
}
