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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DetectToxicContentRequest,
  DetectToxicContentRequestFilterSensitiveLog,
  DetectToxicContentResponse,
} from "../models/models_0";
import { de_DetectToxicContentCommand, se_DetectToxicContentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectToxicContentCommand}.
 */
export interface DetectToxicContentCommandInput extends DetectToxicContentRequest {}
/**
 * @public
 *
 * The output of {@link DetectToxicContentCommand}.
 */
export interface DetectToxicContentCommandOutput extends DetectToxicContentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Performs toxicity analysis on the list of text strings that you provide as input.
 *       The analysis uses the order of strings in the list to determine context when predicting toxicity.
 *       The API response contains a results list that matches the size of the input list.
 *       For more information about toxicity detection, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/toxicity-detection.html">Toxicity detection</a> in the <i>Amazon Comprehend Developer Guide</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectToxicContentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectToxicContentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DetectToxicContentRequest
 *   TextSegments: [ // ListOfTextSegments // required
 *     { // TextSegment
 *       Text: "STRING_VALUE", // required
 *     },
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectToxicContentCommand(input);
 * const response = await client.send(command);
 * // { // DetectToxicContentResponse
 * //   ResultList: [ // ListOfToxicLabels
 * //     { // ToxicLabels
 * //       Labels: [ // ListOfToxicContent
 * //         { // ToxicContent
 * //           Name: "GRAPHIC" || "HARASSMENT_OR_ABUSE" || "HATE_SPEECH" || "INSULT" || "PROFANITY" || "SEXUAL" || "VIOLENCE_OR_THREAT",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //       Toxicity: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectToxicContentCommandInput - {@link DetectToxicContentCommandInput}
 * @returns {@link DetectToxicContentCommandOutput}
 * @see {@link DetectToxicContentCommandInput} for command's `input` shape.
 * @see {@link DetectToxicContentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For custom entity
 *       recognition APIs, only English, Spanish, French, Italian, German, or Portuguese are accepted.
 *       For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DetectToxicContentCommand extends $Command<
  DetectToxicContentCommandInput,
  DetectToxicContentCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DetectToxicContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectToxicContentCommandInput, DetectToxicContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectToxicContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectToxicContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectToxicContentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DetectToxicContent",
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
  private serialize(input: DetectToxicContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectToxicContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectToxicContentCommandOutput> {
    return de_DetectToxicContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
