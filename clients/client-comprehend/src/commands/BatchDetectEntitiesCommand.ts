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
  BatchDetectEntitiesRequest,
  BatchDetectEntitiesRequestFilterSensitiveLog,
  BatchDetectEntitiesResponse,
  BatchDetectEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchDetectEntitiesCommand, se_BatchDetectEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDetectEntitiesCommand}.
 */
export interface BatchDetectEntitiesCommandInput extends BatchDetectEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDetectEntitiesCommand}.
 */
export interface BatchDetectEntitiesCommandOutput extends BatchDetectEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Inspects the text of a batch of documents for named entities and returns information
 *       about them. For more information about named entities, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // BatchDetectEntitiesRequest
 *   TextList: [ // CustomerInputStringList // required
 *     "STRING_VALUE",
 *   ],
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new BatchDetectEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDetectEntitiesResponse
 * //   ResultList: [ // ListOfDetectEntitiesResult // required
 * //     { // BatchDetectEntitiesItemResult
 * //       Index: Number("int"),
 * //       Entities: [ // ListOfEntities
 * //         { // Entity
 * //           Score: Number("float"),
 * //           Type: "PERSON" || "LOCATION" || "ORGANIZATION" || "COMMERCIAL_ITEM" || "EVENT" || "DATE" || "QUANTITY" || "TITLE" || "OTHER",
 * //           Text: "STRING_VALUE",
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           BlockReferences: [ // ListOfBlockReferences
 * //             { // BlockReference
 * //               BlockId: "STRING_VALUE",
 * //               BeginOffset: Number("int"),
 * //               EndOffset: Number("int"),
 * //               ChildBlocks: [ // ListOfChildBlocks
 * //                 { // ChildBlock
 * //                   ChildBlockId: "STRING_VALUE",
 * //                   BeginOffset: Number("int"),
 * //                   EndOffset: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
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
 * @param BatchDetectEntitiesCommandInput - {@link BatchDetectEntitiesCommandInput}
 * @returns {@link BatchDetectEntitiesCommandOutput}
 * @see {@link BatchDetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectEntitiesCommandOutput} for command's `response` shape.
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
export class BatchDetectEntitiesCommand extends $Command<
  BatchDetectEntitiesCommandInput,
  BatchDetectEntitiesCommandOutput,
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
  constructor(readonly input: BatchDetectEntitiesCommandInput) {
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
  ): Handler<BatchDetectEntitiesCommandInput, BatchDetectEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectEntitiesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "BatchDetectEntities",
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
  private serialize(input: BatchDetectEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDetectEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDetectEntitiesCommandOutput> {
    return de_BatchDetectEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
