// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteServiceLinkedAnalyzerRequest } from "../models/models_0";
import { DeleteServiceLinkedAnalyzer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a service-linked analyzer. This operation can be invoked by both authorized Amazon Web Services services and customers.</p> <p>When invoked by a customer, IAM Access Analyzer performs a callback to the managing service to verify whether the analyzer is still in use and can be deleted. If the service indicates the analyzer is still in use, the deletion is rejected with <code>ConflictException</code>.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class DeleteServiceLinkedAnalyzerCommand extends $Command
  .classBuilder<
    DeleteServiceLinkedAnalyzerCommandInput,
    DeleteServiceLinkedAnalyzerCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "DeleteServiceLinkedAnalyzer", {})
  .n("AccessAnalyzerClient", "DeleteServiceLinkedAnalyzerCommand")
  .sc(DeleteServiceLinkedAnalyzer$)
  .build() {
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
