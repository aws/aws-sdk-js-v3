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
} from "@smithy/types";

import { UpdateVocabularyRequest, UpdateVocabularyResponse } from "../models/models_0";
import { de_UpdateVocabularyCommand, se_UpdateVocabularyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVocabularyCommand}.
 */
export interface UpdateVocabularyCommandInput extends UpdateVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVocabularyCommand}.
 */
export interface UpdateVocabularyCommandOutput extends UpdateVocabularyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing custom vocabulary with new values. This operation overwrites all
 *             existing information with your new values; you cannot append new terms onto an existing
 *             custom vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // UpdateVocabularyRequest
 *   VocabularyName: "STRING_VALUE", // required
 *   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE", // required
 *   Phrases: [ // Phrases
 *     "STRING_VALUE",
 *   ],
 *   VocabularyFileUri: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateVocabularyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVocabularyResponse
 * //   VocabularyName: "STRING_VALUE",
 * //   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   VocabularyState: "PENDING" || "READY" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateVocabularyCommandInput - {@link UpdateVocabularyCommandInput}
 * @returns {@link UpdateVocabularyCommandOutput}
 * @see {@link UpdateVocabularyCommandInput} for command's `input` shape.
 * @see {@link UpdateVocabularyCommandOutput} for command's `response` shape.
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
 */
export class UpdateVocabularyCommand extends $Command<
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput,
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
  constructor(readonly input: UpdateVocabularyCommandInput) {
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
  ): Handler<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVocabularyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "UpdateVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVocabularyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVocabularyCommandOutput> {
    return de_UpdateVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
