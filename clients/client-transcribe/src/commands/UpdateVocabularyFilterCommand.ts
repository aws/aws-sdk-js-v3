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

import { UpdateVocabularyFilterRequest, UpdateVocabularyFilterResponse } from "../models/models_0";
import { de_UpdateVocabularyFilterCommand, se_UpdateVocabularyFilterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVocabularyFilterCommand}.
 */
export interface UpdateVocabularyFilterCommandInput extends UpdateVocabularyFilterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVocabularyFilterCommand}.
 */
export interface UpdateVocabularyFilterCommandOutput extends UpdateVocabularyFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing custom vocabulary filter with a new list of words. The new list
 *             you provide overwrites all previous entries; you cannot append new terms onto an
 *             existing custom vocabulary filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // UpdateVocabularyFilterRequest
 *   VocabularyFilterName: "STRING_VALUE", // required
 *   Words: [ // Words
 *     "STRING_VALUE",
 *   ],
 *   VocabularyFilterFileUri: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVocabularyFilterResponse
 * //   VocabularyFilterName: "STRING_VALUE",
 * //   LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateVocabularyFilterCommandInput - {@link UpdateVocabularyFilterCommandInput}
 * @returns {@link UpdateVocabularyFilterCommandOutput}
 * @see {@link UpdateVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateVocabularyFilterCommandOutput} for command's `response` shape.
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
 */
export class UpdateVocabularyFilterCommand extends $Command<
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
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
  constructor(readonly input: UpdateVocabularyFilterCommandInput) {
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
  ): Handler<UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVocabularyFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "UpdateVocabularyFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "UpdateVocabularyFilter",
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
  private serialize(input: UpdateVocabularyFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVocabularyFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVocabularyFilterCommandOutput> {
    return de_UpdateVocabularyFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
