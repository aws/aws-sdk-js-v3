// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVocabularyFilterRequest } from "../models/models_0";
import { DeleteVocabularyFilter } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVocabularyFilterCommand}.
 */
export interface DeleteVocabularyFilterCommandInput extends DeleteVocabularyFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVocabularyFilterCommand}.
 */
export interface DeleteVocabularyFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a custom vocabulary filter. To use this operation, specify the name of the
 *             custom vocabulary filter you want to delete using <code>VocabularyFilterName</code>.
 *             Custom vocabulary filter names are case sensitive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // DeleteVocabularyFilterRequest
 *   VocabularyFilterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVocabularyFilterCommandInput - {@link DeleteVocabularyFilterCommandInput}
 * @returns {@link DeleteVocabularyFilterCommandOutput}
 * @see {@link DeleteVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class DeleteVocabularyFilterCommand extends $Command
  .classBuilder<
    DeleteVocabularyFilterCommandInput,
    DeleteVocabularyFilterCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "DeleteVocabularyFilter", {})
  .n("TranscribeClient", "DeleteVocabularyFilterCommand")
  .sc(DeleteVocabularyFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVocabularyFilterRequest;
      output: {};
    };
    sdk: {
      input: DeleteVocabularyFilterCommandInput;
      output: DeleteVocabularyFilterCommandOutput;
    };
  };
}
