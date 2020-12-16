import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteSnapshotCopyGrantMessage } from "../models/models_0";
import {
  deserializeAws_queryDeleteSnapshotCopyGrantCommand,
  serializeAws_queryDeleteSnapshotCopyGrantCommand,
} from "../protocols/Aws_query";
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

export type DeleteSnapshotCopyGrantCommandInput = DeleteSnapshotCopyGrantMessage;
export type DeleteSnapshotCopyGrantCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified snapshot copy grant.</p>
 */
export class DeleteSnapshotCopyGrantCommand extends $Command<
  DeleteSnapshotCopyGrantCommandInput,
  DeleteSnapshotCopyGrantCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSnapshotCopyGrantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSnapshotCopyGrantCommandInput, DeleteSnapshotCopyGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteSnapshotCopyGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSnapshotCopyGrantMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSnapshotCopyGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSnapshotCopyGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotCopyGrantCommandOutput> {
    return deserializeAws_queryDeleteSnapshotCopyGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
