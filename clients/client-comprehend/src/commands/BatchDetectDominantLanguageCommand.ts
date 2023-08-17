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
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageRequestFilterSensitiveLog,
  BatchDetectDominantLanguageResponse,
  BatchDetectDominantLanguageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDetectDominantLanguageCommand, se_BatchDetectDominantLanguageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectDominantLanguageCommand}.
 */
export interface BatchDetectDominantLanguageCommandInput extends BatchDetectDominantLanguageRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectDominantLanguageCommand}.
 */
export interface BatchDetectDominantLanguageCommandOutput
  extends BatchDetectDominantLanguageResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Determines the dominant language of the input text for a batch of documents. For a list
 *       of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectDominantLanguageRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectDominantLanguageResponse
 * //   ResultList: [ // ListOfDetectDominantLanguageResult // required
 * //     { // BatchDetectDominantLanguageItemResult
 * //       Index: Number("int"),
 * //       Languages: [ // ListOfDominantLanguages
 * //         { // DominantLanguage
 * //           LanguageCode: "STRING_VALUE",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ErrorList: [ // BatchItemErrorList // required
 * //     { // BatchItemError
 * //       Index: Number("int"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDetectDominantLanguageCommandInput - {@link BatchDetectDominantLanguageCommandInput}
 * @returns {@link BatchDetectDominantLanguageCommandOutput}
 * @see {@link BatchDetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link BatchDetectDominantLanguageCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link BatchSizeLimitExceededException} (client fault)
 *  <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
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
export class BatchDetectDominantLanguageCommand extends $Command<
  BatchDetectDominantLanguageCommandInput,
  BatchDetectDominantLanguageCommandOutput,
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
  constructor(readonly input: BatchDetectDominantLanguageCommandInput) {
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
  ): Handler<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectDominantLanguageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectDominantLanguageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectDominantLanguageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectDominantLanguageResponseFilterSensitiveLog,
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
  private serialize(input: BatchDetectDominantLanguageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDetectDominantLanguageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetectDominantLanguageCommandOutput> {
    return de_BatchDetectDominantLanguageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
