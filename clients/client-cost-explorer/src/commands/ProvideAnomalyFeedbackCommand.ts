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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  ProvideAnomalyFeedbackRequest,
  ProvideAnomalyFeedbackRequestFilterSensitiveLog,
  ProvideAnomalyFeedbackResponse,
  ProvideAnomalyFeedbackResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ProvideAnomalyFeedbackCommand,
  serializeAws_json1_1ProvideAnomalyFeedbackCommand,
} from "../protocols/Aws_json1_1";

export interface ProvideAnomalyFeedbackCommandInput extends ProvideAnomalyFeedbackRequest {}
export interface ProvideAnomalyFeedbackCommandOutput extends ProvideAnomalyFeedbackResponse, __MetadataBearer {}

/**
 * <p>Modifies the feedback property of a given cost anomaly. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ProvideAnomalyFeedbackCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ProvideAnomalyFeedbackCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new ProvideAnomalyFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvideAnomalyFeedbackCommandInput} for command's `input` shape.
 * @see {@link ProvideAnomalyFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class ProvideAnomalyFeedbackCommand extends $Command<
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
  CostExplorerClientResolvedConfig
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

  constructor(readonly input: ProvideAnomalyFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ProvideAnomalyFeedbackCommandInput, ProvideAnomalyFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvideAnomalyFeedbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ProvideAnomalyFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvideAnomalyFeedbackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ProvideAnomalyFeedbackResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvideAnomalyFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ProvideAnomalyFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvideAnomalyFeedbackCommandOutput> {
    return deserializeAws_json1_1ProvideAnomalyFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
