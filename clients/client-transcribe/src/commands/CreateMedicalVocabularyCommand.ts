// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateMedicalVocabularyRequest, CreateMedicalVocabularyResponse } from "../models/models_0";
import { de_CreateMedicalVocabularyCommand, se_CreateMedicalVocabularyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMedicalVocabularyCommand}.
 */
export interface CreateMedicalVocabularyCommandInput extends CreateMedicalVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link CreateMedicalVocabularyCommand}.
 */
export interface CreateMedicalVocabularyCommandOutput extends CreateMedicalVocabularyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new custom medical vocabulary.</p>
 *          <p>Before creating a new custom medical vocabulary, you must first upload a text file
 *             that contains your vocabulary table into an Amazon S3 bucket.
 *             Note that this differs from , where you can
 *             include a list of terms within your request using the <code>Phrases</code> flag;
 *                 <code>CreateMedicalVocabulary</code> does not support the <code>Phrases</code>
 *             flag and only accepts vocabularies in table format.</p>
 *          <p>Each language has a character set that contains all allowed characters for that
 *             specific language. If you use unsupported characters, your custom vocabulary request
 *             fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom Vocabularies</a> to get the character set for your
 *             language.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html">Custom
 *             vocabularies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // CreateMedicalVocabularyRequest
 *   VocabularyName: "STRING_VALUE", // required
 *   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE", // required
 *   VocabularyFileUri: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * // { // CreateMedicalVocabularyResponse
 * //   VocabularyName: "STRING_VALUE",
 * //   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //   VocabularyState: "PENDING" || "READY" || "FAILED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMedicalVocabularyCommandInput - {@link CreateMedicalVocabularyCommandInput}
 * @returns {@link CreateMedicalVocabularyCommandOutput}
 * @see {@link CreateMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link CreateMedicalVocabularyCommandOutput} for command's `response` shape.
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
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 */
export class CreateMedicalVocabularyCommand extends $Command<
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateMedicalVocabularyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMedicalVocabularyCommandInput, CreateMedicalVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMedicalVocabularyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateMedicalVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "CreateMedicalVocabulary",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateMedicalVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMedicalVocabularyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMedicalVocabularyCommandOutput> {
    return de_CreateMedicalVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
