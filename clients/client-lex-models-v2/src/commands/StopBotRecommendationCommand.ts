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
  StopBotRecommendationRequest,
  StopBotRecommendationRequestFilterSensitiveLog,
  StopBotRecommendationResponse,
  StopBotRecommendationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StopBotRecommendationCommand,
  serializeAws_restJson1StopBotRecommendationCommand,
} from "../protocols/Aws_restJson1";

export interface StopBotRecommendationCommandInput extends StopBotRecommendationRequest {}
export interface StopBotRecommendationCommandOutput extends StopBotRecommendationResponse, __MetadataBearer {}

/**
 * <p>Stop an already running Bot Recommendation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StopBotRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StopBotRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new StopBotRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBotRecommendationCommandInput} for command's `input` shape.
 * @see {@link StopBotRecommendationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class StopBotRecommendationCommand extends $Command<
  StopBotRecommendationCommandInput,
  StopBotRecommendationCommandOutput,
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

  constructor(readonly input: StopBotRecommendationCommandInput) {
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
  ): Handler<StopBotRecommendationCommandInput, StopBotRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopBotRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "StopBotRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopBotRecommendationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopBotRecommendationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopBotRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopBotRecommendationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBotRecommendationCommandOutput> {
    return deserializeAws_restJson1StopBotRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
