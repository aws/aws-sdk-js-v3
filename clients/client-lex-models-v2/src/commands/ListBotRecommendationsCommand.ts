// smithy-typescript generated code
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
import { ListBotRecommendationsRequest, ListBotRecommendationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListBotRecommendationsCommand,
  serializeAws_restJson1ListBotRecommendationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBotRecommendationsCommandInput extends ListBotRecommendationsRequest {}
export interface ListBotRecommendationsCommandOutput extends ListBotRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Get a list of bot recommendations that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotRecommendationsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotRecommendationsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListBotRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class ListBotRecommendationsCommand extends $Command<
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBotRecommendationsCommandInput) {
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
  ): Handler<ListBotRecommendationsCommandInput, ListBotRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListBotRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBotRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBotRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBotRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBotRecommendationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBotRecommendationsCommandOutput> {
    return deserializeAws_restJson1ListBotRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
