import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { ExecuteStatementRequest, ExecuteStatementResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ExecuteStatementCommand,
  serializeAws_restJson1ExecuteStatementCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ExecuteStatementCommandInput = ExecuteStatementRequest;
export type ExecuteStatementCommandOutput = ExecuteStatementResponse & __MetadataBearer;

/**
 * <p>Runs a SQL statement against a database.</p>
 *         <important>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *         </important>
 *         <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  RDSDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "ExecuteStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteStatementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteStatementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExecuteStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return deserializeAws_restJson1ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
