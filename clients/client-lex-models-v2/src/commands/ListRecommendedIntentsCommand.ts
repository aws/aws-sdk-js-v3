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
import { ListRecommendedIntentsRequest, ListRecommendedIntentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecommendedIntentsCommand,
  serializeAws_restJson1ListRecommendedIntentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRecommendedIntentsCommandInput extends ListRecommendedIntentsRequest {}
export interface ListRecommendedIntentsCommandOutput extends ListRecommendedIntentsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of recommended intents provided by the bot
 *          recommendation that you can use in your bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListRecommendedIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListRecommendedIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListRecommendedIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecommendedIntentsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendedIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class ListRecommendedIntentsCommand extends $Command<
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecommendedIntentsCommandInput) {
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
  ): Handler<ListRecommendedIntentsCommandInput, ListRecommendedIntentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListRecommendedIntentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecommendedIntentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecommendedIntentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecommendedIntentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecommendedIntentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecommendedIntentsCommandOutput> {
    return deserializeAws_restJson1ListRecommendedIntentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
