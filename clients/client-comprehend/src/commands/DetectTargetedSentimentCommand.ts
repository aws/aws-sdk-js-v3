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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DetectTargetedSentimentRequest,
  DetectTargetedSentimentRequestFilterSensitiveLog,
  DetectTargetedSentimentResponse,
  DetectTargetedSentimentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectTargetedSentimentCommand,
  serializeAws_json1_1DetectTargetedSentimentCommand,
} from "../protocols/Aws_json1_1";

export interface DetectTargetedSentimentCommandInput extends DetectTargetedSentimentRequest {}
export interface DetectTargetedSentimentCommandOutput extends DetectTargetedSentimentResponse, __MetadataBearer {}

/**
 * <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectTargetedSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectTargetedSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectTargetedSentimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectTargetedSentimentCommandInput} for command's `input` shape.
 * @see {@link DetectTargetedSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DetectTargetedSentimentCommand extends $Command<
  DetectTargetedSentimentCommandInput,
  DetectTargetedSentimentCommandOutput,
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

  constructor(readonly input: DetectTargetedSentimentCommandInput) {
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
  ): Handler<DetectTargetedSentimentCommandInput, DetectTargetedSentimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectTargetedSentimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectTargetedSentimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectTargetedSentimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectTargetedSentimentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectTargetedSentimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectTargetedSentimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectTargetedSentimentCommandOutput> {
    return deserializeAws_json1_1DetectTargetedSentimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
