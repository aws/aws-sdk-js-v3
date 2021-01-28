import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBInstanceMessage, DeleteDBInstanceResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteDBInstanceCommand,
  serializeAws_queryDeleteDBInstanceCommand,
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

export type DeleteDBInstanceCommandInput = DeleteDBInstanceMessage;
export type DeleteDBInstanceCommandOutput = DeleteDBInstanceResult & __MetadataBearer;

/**
 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete
 *       a DB instance, all automated backups for that instance are deleted and can't be recovered.
 *       Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not
 *       deleted.</p>
 *          <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is
 *       <code>deleting</code> until the DB snapshot is created. The API action
 *       <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action
 *       can't be canceled or reverted once submitted.</p>
 *          <p>Note that when a DB instance is in a failure state and has a status of
 *       <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>,
 *       you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to
 *       <code>true</code>.</p>
 *          <p>You can't delete a DB instance if it is the only instance in the DB cluster, or
 *       if it has deletion protection enabled.</p>
 */
export class DeleteDBInstanceCommand extends $Command<
  DeleteDBInstanceCommandInput,
  DeleteDBInstanceCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DeleteDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBInstanceCommandOutput> {
    return deserializeAws_queryDeleteDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
