import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { BeginTransactionRequest, BeginTransactionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BeginTransactionCommand,
  serializeAws_restJson1BeginTransactionCommand,
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

export type BeginTransactionCommandInput = BeginTransactionRequest;
export type BeginTransactionCommandOutput = BeginTransactionResponse & __MetadataBearer;

/**
 * <p>Starts a SQL transaction.</p>
 *
 *         <important>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
 *                 rolled back automatically after 24 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes.
 *                 If a transaction times out before it's committed, it's rolled back
 *                 automatically.</p>
 *             <p>DDL statements inside a transaction cause an implicit commit. We recommend
 *                 that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
 *                 <code>continueAfterTimeout</code> enabled.</p>
 *         </important>
 */
export class BeginTransactionCommand extends $Command<
  BeginTransactionCommandInput,
  BeginTransactionCommandOutput,
  RDSDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BeginTransactionCommandInput) {
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
  ): Handler<BeginTransactionCommandInput, BeginTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "BeginTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BeginTransactionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BeginTransactionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BeginTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BeginTransactionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BeginTransactionCommandOutput> {
    return deserializeAws_restJson1BeginTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
