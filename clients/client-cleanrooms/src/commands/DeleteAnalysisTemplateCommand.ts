// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAnalysisTemplateInput, DeleteAnalysisTemplateOutput } from "../models/models_0";
import { DeleteAnalysisTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAnalysisTemplateCommand}.
 */
export interface DeleteAnalysisTemplateCommandInput extends DeleteAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteAnalysisTemplateCommand}.
 */
export interface DeleteAnalysisTemplateCommandOutput extends DeleteAnalysisTemplateOutput, __MetadataBearer {}

/**
 * Deletes an analysis template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteAnalysisTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   analysisTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnalysisTemplateCommandInput - {@link DeleteAnalysisTemplateCommandInput}
 * @returns {@link DeleteAnalysisTemplateCommandOutput}
 * @see {@link DeleteAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
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
export class DeleteAnalysisTemplateCommand extends command<DeleteAnalysisTemplateCommandInput, DeleteAnalysisTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAnalysisTemplate",
  DeleteAnalysisTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnalysisTemplateInput;
      output: {};
    };
    sdk: {
      input: DeleteAnalysisTemplateCommandInput;
      output: DeleteAnalysisTemplateCommandOutput;
    };
  };
}
