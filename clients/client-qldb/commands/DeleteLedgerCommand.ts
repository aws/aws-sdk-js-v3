import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { DeleteLedgerRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLedgerCommand,
  serializeAws_restJson1DeleteLedgerCommand,
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

export type DeleteLedgerCommandInput = DeleteLedgerRequest;
export type DeleteLedgerCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a ledger and all of its contents. This action is irreversible.</p>
 *          <p>If deletion protection is enabled, you must first disable it before you can delete the
 *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
 *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
 *          console disables deletion protection for you when you use it to delete a ledger.</p>
 */
export class DeleteLedgerCommand extends $Command<
  DeleteLedgerCommandInput,
  DeleteLedgerCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLedgerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLedgerCommandInput, DeleteLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "DeleteLedgerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLedgerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLedgerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLedgerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLedgerCommandOutput> {
    return deserializeAws_restJson1DeleteLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
