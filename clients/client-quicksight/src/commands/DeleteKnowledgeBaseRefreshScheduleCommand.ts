// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteKnowledgeBaseRefreshScheduleRequest,
  DeleteKnowledgeBaseRefreshScheduleResponse,
} from "../models/models_4";
import { DeleteKnowledgeBaseRefreshSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteKnowledgeBaseRefreshScheduleCommand}.
 */
export interface DeleteKnowledgeBaseRefreshScheduleCommandInput extends DeleteKnowledgeBaseRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKnowledgeBaseRefreshScheduleCommand}.
 */
export interface DeleteKnowledgeBaseRefreshScheduleCommandOutput extends DeleteKnowledgeBaseRefreshScheduleResponse, __MetadataBearer {}

/**
 * <p>Deletes the refresh schedule for an Amazon Quick Sight knowledge base. Delete the schedule when you no longer want the knowledge base to refresh automatically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteKnowledgeBaseRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteKnowledgeBaseRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteKnowledgeBaseRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   KnowledgeBaseId: "STRING_VALUE", // required
 *   ScheduleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteKnowledgeBaseRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKnowledgeBaseRefreshScheduleResponse
 * //   ScheduleId: "STRING_VALUE", // required
 * //   KnowledgeBaseArn: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteKnowledgeBaseRefreshScheduleCommandInput - {@link DeleteKnowledgeBaseRefreshScheduleCommandInput}
 * @returns {@link DeleteKnowledgeBaseRefreshScheduleCommandOutput}
 * @see {@link DeleteKnowledgeBaseRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteKnowledgeBaseRefreshScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class DeleteKnowledgeBaseRefreshScheduleCommand extends command<DeleteKnowledgeBaseRefreshScheduleCommandInput, DeleteKnowledgeBaseRefreshScheduleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKnowledgeBaseRefreshSchedule",
  DeleteKnowledgeBaseRefreshSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKnowledgeBaseRefreshScheduleRequest;
      output: DeleteKnowledgeBaseRefreshScheduleResponse;
    };
    sdk: {
      input: DeleteKnowledgeBaseRefreshScheduleCommandInput;
      output: DeleteKnowledgeBaseRefreshScheduleCommandOutput;
    };
  };
}
