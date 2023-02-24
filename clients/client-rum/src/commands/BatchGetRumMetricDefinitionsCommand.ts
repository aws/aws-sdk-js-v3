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
  BatchGetRumMetricDefinitionsRequest,
  BatchGetRumMetricDefinitionsRequestFilterSensitiveLog,
  BatchGetRumMetricDefinitionsResponse,
  BatchGetRumMetricDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetRumMetricDefinitionsCommand,
  serializeAws_restJson1BatchGetRumMetricDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface BatchGetRumMetricDefinitionsCommandInput extends BatchGetRumMetricDefinitionsRequest {}
export interface BatchGetRumMetricDefinitionsCommandOutput
  extends BatchGetRumMetricDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the list of metrics and dimensions that a RUM app monitor is sending to a single destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchGetRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchGetRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new BatchGetRumMetricDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetRumMetricDefinitionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetRumMetricDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class BatchGetRumMetricDefinitionsCommand extends $Command<
  BatchGetRumMetricDefinitionsCommandInput,
  BatchGetRumMetricDefinitionsCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: BatchGetRumMetricDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetRumMetricDefinitionsCommandInput, BatchGetRumMetricDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetRumMetricDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "BatchGetRumMetricDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetRumMetricDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetRumMetricDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetRumMetricDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetRumMetricDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetRumMetricDefinitionsCommandOutput> {
    return deserializeAws_restJson1BatchGetRumMetricDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
