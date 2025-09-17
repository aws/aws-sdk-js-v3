// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMedicalTranscriptionJobRequest } from "../models/models_0";
import {
  de_DeleteMedicalTranscriptionJobCommand,
  se_DeleteMedicalTranscriptionJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMedicalTranscriptionJobCommand}.
 */
export interface DeleteMedicalTranscriptionJobCommandInput extends DeleteMedicalTranscriptionJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMedicalTranscriptionJobCommand}.
 */
export interface DeleteMedicalTranscriptionJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a medical transcription job. To use this operation, specify the name of the
 *             job you want to delete using <code>MedicalTranscriptionJobName</code>. Job names are
 *             case sensitive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteMedicalTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteMedicalTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // DeleteMedicalTranscriptionJobRequest
 *   MedicalTranscriptionJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMedicalTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMedicalTranscriptionJobCommandInput - {@link DeleteMedicalTranscriptionJobCommandInput}
 * @returns {@link DeleteMedicalTranscriptionJobCommandOutput}
 * @see {@link DeleteMedicalTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link DeleteMedicalTranscriptionJobCommandOutput} for command's `response` shape.
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
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class DeleteMedicalTranscriptionJobCommand extends $Command
  .classBuilder<
    DeleteMedicalTranscriptionJobCommandInput,
    DeleteMedicalTranscriptionJobCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "DeleteMedicalTranscriptionJob", {})
  .n("TranscribeClient", "DeleteMedicalTranscriptionJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMedicalTranscriptionJobCommand)
  .de(de_DeleteMedicalTranscriptionJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMedicalTranscriptionJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteMedicalTranscriptionJobCommandInput;
      output: DeleteMedicalTranscriptionJobCommandOutput;
    };
  };
}
