// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceLinkedAnalyzerRequest } from "../models/models_0";
import { DeleteServiceLinkedAnalyzer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceLinkedAnalyzerCommand}.
 */
export interface DeleteServiceLinkedAnalyzerCommandInput extends DeleteServiceLinkedAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceLinkedAnalyzerCommand}.
 */
export interface DeleteServiceLinkedAnalyzerCommandOutput extends __MetadataBearer {}

/**
 * Deletes a service-linked analyzer. This operation can be invoked by both authorized Amazon Web Services services and customers.
 *
 * When invoked by a customer, IAM Access Analyzer performs a callback to the managing service to verify whether the analyzer is still in use and can be deleted. If the service indicates the analyzer is still in use, the deletion is rejected with `ConflictException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, DeleteServiceLinkedAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, DeleteServiceLinkedAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // DeleteServiceLinkedAnalyzerRequest
 *   analyzerName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteServiceLinkedAnalyzerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceLinkedAnalyzerCommandInput - {@link DeleteServiceLinkedAnalyzerCommandInput}
 * @returns {@link DeleteServiceLinkedAnalyzerCommandOutput}
 * @see {@link DeleteServiceLinkedAnalyzerCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLinkedAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict exception error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
 *
 * @public
 */
export class DeleteServiceLinkedAnalyzerCommand extends command<DeleteServiceLinkedAnalyzerCommandInput, DeleteServiceLinkedAnalyzerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceLinkedAnalyzer",
  DeleteServiceLinkedAnalyzer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceLinkedAnalyzerRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceLinkedAnalyzerCommandInput;
      output: DeleteServiceLinkedAnalyzerCommandOutput;
    };
  };
}
