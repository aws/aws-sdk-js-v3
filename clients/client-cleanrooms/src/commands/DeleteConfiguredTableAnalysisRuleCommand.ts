// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteConfiguredTableAnalysisRuleInput,
  DeleteConfiguredTableAnalysisRuleOutput,
} from "../models/models_0";
import { DeleteConfiguredTableAnalysisRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableAnalysisRuleCommand}.
 */
export interface DeleteConfiguredTableAnalysisRuleCommandInput extends DeleteConfiguredTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableAnalysisRuleCommand}.
 */
export interface DeleteConfiguredTableAnalysisRuleCommandOutput extends DeleteConfiguredTableAnalysisRuleOutput, __MetadataBearer {}

/**
 * Deletes a configured table analysis rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableAnalysisRuleInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * };
 * const command = new DeleteConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableAnalysisRuleCommandInput - {@link DeleteConfiguredTableAnalysisRuleCommandInput}
 * @returns {@link DeleteConfiguredTableAnalysisRuleCommandOutput}
 * @see {@link DeleteConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class DeleteConfiguredTableAnalysisRuleCommand extends command<DeleteConfiguredTableAnalysisRuleCommandInput, DeleteConfiguredTableAnalysisRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfiguredTableAnalysisRule",
  DeleteConfiguredTableAnalysisRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredTableAnalysisRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredTableAnalysisRuleCommandInput;
      output: DeleteConfiguredTableAnalysisRuleCommandOutput;
    };
  };
}
