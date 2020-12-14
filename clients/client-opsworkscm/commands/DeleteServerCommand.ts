import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DeleteServerRequest, DeleteServerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteServerCommand,
  serializeAws_json1_1DeleteServerCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteServerCommandInput = DeleteServerRequest;
export type DeleteServerCommandOutput = DeleteServerResponse & __MetadataBearer;

/**
 * <p>
 *       Deletes the server and the underlying AWS CloudFormation stacks
 *       (including the server's EC2 instance). When you run this command, the server state is updated
 *       to <code>DELETING</code>. After the server is deleted, it is no longer returned by
 *       <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       An <code>InvalidStateException</code> is thrown when a server deletion is already in progress.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 *          <p>
 *     </p>
 */
export class DeleteServerCommand extends $Command<
  DeleteServerCommandInput,
  DeleteServerCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteServerCommandInput, DeleteServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DeleteServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteServerCommandOutput> {
    return deserializeAws_json1_1DeleteServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
