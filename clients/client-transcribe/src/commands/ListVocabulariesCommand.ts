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
  ListVocabulariesRequest,
  ListVocabulariesRequestFilterSensitiveLog,
  ListVocabulariesResponse,
  ListVocabulariesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListVocabulariesCommand,
  serializeAws_json1_1ListVocabulariesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface ListVocabulariesCommandInput extends ListVocabulariesRequest {}
export interface ListVocabulariesCommandOutput extends ListVocabulariesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of custom vocabularies that match the specified criteria. If no
 *             criteria are specified, all custom vocabularies are returned.</p>
 *          <p>To get detailed information about a specific custom vocabulary, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListVocabulariesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListVocabulariesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListVocabulariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListVocabulariesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class ListVocabulariesCommand extends $Command<
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
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

  constructor(readonly input: ListVocabulariesCommandInput) {
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
  ): Handler<ListVocabulariesCommandInput, ListVocabulariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVocabulariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListVocabulariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVocabulariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVocabulariesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVocabulariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVocabulariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVocabulariesCommandOutput> {
    return deserializeAws_json1_1ListVocabulariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
