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
  BatchDetectTargetedSentimentRequest,
  BatchDetectTargetedSentimentRequestFilterSensitiveLog,
  BatchDetectTargetedSentimentResponse,
  BatchDetectTargetedSentimentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDetectTargetedSentimentCommand,
  serializeAws_json1_1BatchDetectTargetedSentimentCommand,
} from "../protocols/Aws_json1_1";

export interface BatchDetectTargetedSentimentCommandInput extends BatchDetectTargetedSentimentRequest {}
export interface BatchDetectTargetedSentimentCommandOutput
  extends BatchDetectTargetedSentimentResponse,
    __MetadataBearer {}

/**
 * <p>Inspects a batch of documents and returns a sentiment analysis
 *       for each entity identified in the documents.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectTargetedSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectTargetedSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectTargetedSentimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectTargetedSentimentCommandInput} for command's `input` shape.
 * @see {@link BatchDetectTargetedSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class BatchDetectTargetedSentimentCommand extends $Command<
  BatchDetectTargetedSentimentCommandInput,
  BatchDetectTargetedSentimentCommandOutput,
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

  constructor(readonly input: BatchDetectTargetedSentimentCommandInput) {
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
  ): Handler<BatchDetectTargetedSentimentCommandInput, BatchDetectTargetedSentimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDetectTargetedSentimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectTargetedSentimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectTargetedSentimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectTargetedSentimentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDetectTargetedSentimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDetectTargetedSentimentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetectTargetedSentimentCommandOutput> {
    return deserializeAws_json1_1BatchDetectTargetedSentimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
