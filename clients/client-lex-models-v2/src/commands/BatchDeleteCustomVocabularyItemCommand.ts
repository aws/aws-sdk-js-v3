// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import {
  BatchDeleteCustomVocabularyItemRequest,
  BatchDeleteCustomVocabularyItemRequestFilterSensitiveLog,
  BatchDeleteCustomVocabularyItemResponse,
  BatchDeleteCustomVocabularyItemResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommand,
  serializeAws_restJson1BatchDeleteCustomVocabularyItemCommand,
} from "../protocols/Aws_restJson1";

export interface BatchDeleteCustomVocabularyItemCommandInput extends BatchDeleteCustomVocabularyItemRequest {}
export interface BatchDeleteCustomVocabularyItemCommandOutput
  extends BatchDeleteCustomVocabularyItemResponse,
    __MetadataBearer {}

/**
 * <p>Batch delete custom vocabulary item for the specified locale in the
 *          specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new BatchDeleteCustomVocabularyItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteCustomVocabularyItemCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCustomVocabularyItemCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class BatchDeleteCustomVocabularyItemCommand extends $Command<
  BatchDeleteCustomVocabularyItemCommandInput,
  BatchDeleteCustomVocabularyItemCommandOutput,
  LexModelsV2ClientResolvedConfig
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

  constructor(readonly input: BatchDeleteCustomVocabularyItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteCustomVocabularyItemCommandInput, BatchDeleteCustomVocabularyItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteCustomVocabularyItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "BatchDeleteCustomVocabularyItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteCustomVocabularyItemRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteCustomVocabularyItemResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDeleteCustomVocabularyItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteCustomVocabularyItemCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteCustomVocabularyItemCommandOutput> {
    return deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
