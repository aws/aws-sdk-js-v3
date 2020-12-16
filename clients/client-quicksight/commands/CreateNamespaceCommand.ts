import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateNamespaceRequest, CreateNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateNamespaceCommand,
  serializeAws_restJson1CreateNamespaceCommand,
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

export type CreateNamespaceCommandInput = CreateNamespaceRequest;
export type CreateNamespaceCommandOutput = CreateNamespaceResponse & __MetadataBearer;

/**
 * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
 *         <p>A namespace allows you to isolate the QuickSight users and groups that are registered
 *             for that namespace. Users that access the namespace can share assets only with other
 *             users or groups in the same namespace. They can't see users and groups in other
 *             namespaces. You can create a namespace after your AWS account is subscribed to
 *             QuickSight. The namespace must be unique within the AWS account. By default, there is a
 *             limit of 100 namespaces per AWS account. To increase your limit, create a ticket with
 *             AWS Support. </p>
 */
export class CreateNamespaceCommand extends $Command<
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNamespaceCommandInput, CreateNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNamespaceCommandOutput> {
    return deserializeAws_restJson1CreateNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
