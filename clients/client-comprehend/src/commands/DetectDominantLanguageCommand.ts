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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DetectDominantLanguageRequest,
  DetectDominantLanguageRequestFilterSensitiveLog,
  DetectDominantLanguageResponse,
  DetectDominantLanguageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectDominantLanguageCommand, se_DetectDominantLanguageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectDominantLanguageCommand}.
 */
export interface DetectDominantLanguageCommandInput extends DetectDominantLanguageRequest {}
/**
 * @public
 *
 * The output of {@link DetectDominantLanguageCommand}.
 */
export interface DetectDominantLanguageCommandOutput extends DetectDominantLanguageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Determines the dominant language of the input text. For a list of languages that Amazon
 *       Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DetectDominantLanguageRequest
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new DetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * // { // DetectDominantLanguageResponse
 * //   Languages: [ // ListOfDominantLanguages
 * //     { // DominantLanguage
 * //       LanguageCode: "STRING_VALUE",
 * //       Score: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectDominantLanguageCommandInput - {@link DetectDominantLanguageCommandInput}
 * @returns {@link DetectDominantLanguageCommandOutput}
 * @see {@link DetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link DetectDominantLanguageCommandOutput} for command's `response` shape.
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
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DetectDominantLanguageCommand extends $Command<
  DetectDominantLanguageCommandInput,
  DetectDominantLanguageCommandOutput,
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
  constructor(readonly input: DetectDominantLanguageCommandInput) {
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
  ): Handler<DetectDominantLanguageCommandInput, DetectDominantLanguageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectDominantLanguageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectDominantLanguageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectDominantLanguageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectDominantLanguageResponseFilterSensitiveLog,
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
  private serialize(input: DetectDominantLanguageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectDominantLanguageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectDominantLanguageCommandOutput> {
    return de_DetectDominantLanguageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
