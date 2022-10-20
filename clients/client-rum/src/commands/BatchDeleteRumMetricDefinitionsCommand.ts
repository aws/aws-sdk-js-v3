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
  BatchDeleteRumMetricDefinitionsRequest,
  BatchDeleteRumMetricDefinitionsRequestFilterSensitiveLog,
  BatchDeleteRumMetricDefinitionsResponse,
  BatchDeleteRumMetricDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand,
  serializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface BatchDeleteRumMetricDefinitionsCommandInput extends BatchDeleteRumMetricDefinitionsRequest {}
export interface BatchDeleteRumMetricDefinitionsCommandOutput
  extends BatchDeleteRumMetricDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specified metrics from being sent to an extended metrics destination.</p>
 *          <p>If some metric definition IDs specified in a <code>BatchDeleteRumMetricDefinitions</code> operations are not valid,
 *          those metric definitions fail and return errors, but all valid metric definition IDs in the same operation are still
 *          deleted.</p>
 *          <p>The maximum number of metric definitions that you can specify in one
 *          <code>BatchDeleteRumMetricDefinitions</code> operation is 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchDeleteRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchDeleteRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new BatchDeleteRumMetricDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteRumMetricDefinitionsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteRumMetricDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class BatchDeleteRumMetricDefinitionsCommand extends $Command<
  BatchDeleteRumMetricDefinitionsCommandInput,
  BatchDeleteRumMetricDefinitionsCommandOutput,
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

  constructor(readonly input: BatchDeleteRumMetricDefinitionsCommandInput) {
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
  ): Handler<BatchDeleteRumMetricDefinitionsCommandInput, BatchDeleteRumMetricDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteRumMetricDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "BatchDeleteRumMetricDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteRumMetricDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteRumMetricDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDeleteRumMetricDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteRumMetricDefinitionsCommandOutput> {
    return deserializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
