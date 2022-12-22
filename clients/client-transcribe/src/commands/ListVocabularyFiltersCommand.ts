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

import {
  ListVocabularyFiltersRequest,
  ListVocabularyFiltersRequestFilterSensitiveLog,
  ListVocabularyFiltersResponse,
  ListVocabularyFiltersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListVocabularyFiltersCommand,
  serializeAws_json1_1ListVocabularyFiltersCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface ListVocabularyFiltersCommandInput extends ListVocabularyFiltersRequest {}
export interface ListVocabularyFiltersCommandOutput extends ListVocabularyFiltersResponse, __MetadataBearer {}

/**
 * <p>Provides a list of custom vocabulary filters that match the specified criteria. If no
 *             criteria are specified, all custom vocabularies are returned.</p>
 *          <p>To get detailed information about a specific custom vocabulary filter, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabularyFiltersCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabularyFiltersCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListVocabularyFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVocabularyFiltersCommandInput} for command's `input` shape.
 * @see {@link ListVocabularyFiltersCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class ListVocabularyFiltersCommand extends $Command<
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
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

  constructor(readonly input: ListVocabularyFiltersCommandInput) {
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
  ): Handler<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVocabularyFiltersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListVocabularyFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVocabularyFiltersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVocabularyFiltersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVocabularyFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVocabularyFiltersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVocabularyFiltersCommandOutput> {
    return deserializeAws_json1_1ListVocabularyFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
