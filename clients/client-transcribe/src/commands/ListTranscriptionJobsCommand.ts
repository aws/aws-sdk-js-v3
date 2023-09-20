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

import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/models_0";
import { de_ListTranscriptionJobsCommand, se_ListTranscriptionJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTranscriptionJobsCommand}.
 */
export interface ListTranscriptionJobsCommandInput extends ListTranscriptionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTranscriptionJobsCommand}.
 */
export interface ListTranscriptionJobsCommandOutput extends ListTranscriptionJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of transcription jobs that match the specified criteria. If no
 *             criteria are specified, all transcription jobs are returned.</p>
 *          <p>To get detailed information about a specific transcription job, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListTranscriptionJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListTranscriptionJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // ListTranscriptionJobsRequest
 *   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   JobNameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTranscriptionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTranscriptionJobsResponse
 * //   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   NextToken: "STRING_VALUE",
 * //   TranscriptionJobSummaries: [ // TranscriptionJobSummaries
 * //     { // TranscriptionJobSummary
 * //       TranscriptionJobName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //       TranscriptionJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       FailureReason: "STRING_VALUE",
 * //       OutputLocationType: "CUSTOMER_BUCKET" || "SERVICE_BUCKET",
 * //       ContentRedaction: { // ContentRedaction
 * //         RedactionType: "PII", // required
 * //         RedactionOutput: "redacted" || "redacted_and_unredacted", // required
 * //         PiiEntityTypes: [ // PiiEntityTypes
 * //           "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "ALL",
 * //         ],
 * //       },
 * //       ModelSettings: { // ModelSettings
 * //         LanguageModelName: "STRING_VALUE",
 * //       },
 * //       IdentifyLanguage: true || false,
 * //       IdentifyMultipleLanguages: true || false,
 * //       IdentifiedLanguageScore: Number("float"),
 * //       LanguageCodes: [ // LanguageCodeList
 * //         { // LanguageCodeItem
 * //           LanguageCode: "af-ZA" || "ar-AE" || "ar-SA" || "da-DK" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fa-IR" || "fr-CA" || "fr-FR" || "he-IL" || "hi-IN" || "id-ID" || "it-IT" || "ja-JP" || "ko-KR" || "ms-MY" || "nl-NL" || "pt-BR" || "pt-PT" || "ru-RU" || "ta-IN" || "te-IN" || "tr-TR" || "zh-CN" || "zh-TW" || "th-TH" || "en-ZA" || "en-NZ" || "vi-VN" || "sv-SE",
 * //           DurationInSeconds: Number("float"),
 * //         },
 * //       ],
 * //       ToxicityDetection: [ // ToxicityDetection
 * //         { // ToxicityDetectionSettings
 * //           ToxicityCategories: [ // ToxicityCategories // required
 * //             "ALL",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTranscriptionJobsCommandInput - {@link ListTranscriptionJobsCommandInput}
 * @returns {@link ListTranscriptionJobsCommandOutput}
 * @see {@link ListTranscriptionJobsCommandInput} for command's `input` shape.
 * @see {@link ListTranscriptionJobsCommandOutput} for command's `response` shape.
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
 */
export class ListTranscriptionJobsCommand extends $Command<
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
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
  constructor(readonly input: ListTranscriptionJobsCommandInput) {
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
  ): Handler<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTranscriptionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListTranscriptionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Transcribe",
        operation: "ListTranscriptionJobs",
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
  private serialize(input: ListTranscriptionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTranscriptionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTranscriptionJobsCommandOutput> {
    return de_ListTranscriptionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
