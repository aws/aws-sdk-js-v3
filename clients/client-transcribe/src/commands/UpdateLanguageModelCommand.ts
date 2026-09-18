// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLanguageModelRequest, UpdateLanguageModelResponse } from "../models/models_0";
import { UpdateLanguageModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLanguageModelCommand}.
 */
export interface UpdateLanguageModelCommandInput extends UpdateLanguageModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLanguageModelCommand}.
 */
export interface UpdateLanguageModelCommandOutput extends UpdateLanguageModelResponse, __MetadataBearer {}

/**
 * <p>Updates the encryption configuration for an existing custom language model. You can
 *             use this operation to change the KMS key used to encrypt your model artifacts. The model
 *             artifacts are re-encrypted in place. No model training is required.</p>
 *          <p>Your custom language model must not be in the <code>IN_PROGRESS</code> state when you
 *             call this operation. You cannot submit another update while a previous update is in
 *             progress. Use  to check the current state of
 *             your model.</p>
 *          <p>Your custom language model remains available for transcription jobs while the update
 *             is being processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // import type { TranscribeClientConfig } from "@aws-sdk/client-transcribe";
 * const config = {}; // type is TranscribeClientConfig
 * const client = new TranscribeClient(config);
 * const input = { // UpdateLanguageModelRequest
 *   ModelName: "STRING_VALUE", // required
 *   DataAccessRoleArn: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KMSEncryptionContext: { // KMSEncryptionContextMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     KMSKey: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateLanguageModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLanguageModelResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelStatus: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateLanguageModelCommandInput - {@link UpdateLanguageModelCommandInput}
 * @returns {@link UpdateLanguageModelCommandOutput}
 * @see {@link UpdateLanguageModelCommandInput} for command's `input` shape.
 * @see {@link UpdateLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
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
export class UpdateLanguageModelCommand extends command<UpdateLanguageModelCommandInput, UpdateLanguageModelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLanguageModel",
  UpdateLanguageModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLanguageModelRequest;
      output: UpdateLanguageModelResponse;
    };
    sdk: {
      input: UpdateLanguageModelCommandInput;
      output: UpdateLanguageModelCommandOutput;
    };
  };
}
