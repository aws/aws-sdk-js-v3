// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMedicalVocabularyRequest } from "../models/models_0";
import { DeleteMedicalVocabulary$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMedicalVocabularyCommand}.
 */
export interface DeleteMedicalVocabularyCommandInput extends DeleteMedicalVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMedicalVocabularyCommand}.
 */
export interface DeleteMedicalVocabularyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a custom medical vocabulary. To use this operation, specify the name of the
 *             custom vocabulary you want to delete using <code>VocabularyName</code>. Custom
 *             vocabulary names are case sensitive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // DeleteMedicalVocabularyRequest
 *   VocabularyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMedicalVocabularyCommandInput - {@link DeleteMedicalVocabularyCommandInput}
 * @returns {@link DeleteMedicalVocabularyCommandOutput}
 * @see {@link DeleteMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteMedicalVocabularyCommandOutput} for command's `response` shape.
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
export class DeleteMedicalVocabularyCommand extends $Command
  .classBuilder<
    DeleteMedicalVocabularyCommandInput,
    DeleteMedicalVocabularyCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Transcribe", "DeleteMedicalVocabulary", {})
  .n("TranscribeClient", "DeleteMedicalVocabularyCommand")
  .sc(DeleteMedicalVocabulary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMedicalVocabularyRequest;
      output: {};
    };
    sdk: {
      input: DeleteMedicalVocabularyCommandInput;
      output: DeleteMedicalVocabularyCommandOutput;
    };
  };
}
