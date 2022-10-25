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
  SearchAssociatedTranscriptsRequest,
  SearchAssociatedTranscriptsRequestFilterSensitiveLog,
  SearchAssociatedTranscriptsResponse,
  SearchAssociatedTranscriptsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SearchAssociatedTranscriptsCommand,
  serializeAws_restJson1SearchAssociatedTranscriptsCommand,
} from "../protocols/Aws_restJson1";

export interface SearchAssociatedTranscriptsCommandInput extends SearchAssociatedTranscriptsRequest {}
export interface SearchAssociatedTranscriptsCommandOutput
  extends SearchAssociatedTranscriptsResponse,
    __MetadataBearer {}

/**
 * <p>Search for associated transcripts that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, SearchAssociatedTranscriptsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, SearchAssociatedTranscriptsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new SearchAssociatedTranscriptsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAssociatedTranscriptsCommandInput} for command's `input` shape.
 * @see {@link SearchAssociatedTranscriptsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class SearchAssociatedTranscriptsCommand extends $Command<
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
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

  constructor(readonly input: SearchAssociatedTranscriptsCommandInput) {
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
  ): Handler<SearchAssociatedTranscriptsCommandInput, SearchAssociatedTranscriptsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchAssociatedTranscriptsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "SearchAssociatedTranscriptsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchAssociatedTranscriptsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchAssociatedTranscriptsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchAssociatedTranscriptsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchAssociatedTranscriptsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchAssociatedTranscriptsCommandOutput> {
    return deserializeAws_restJson1SearchAssociatedTranscriptsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
