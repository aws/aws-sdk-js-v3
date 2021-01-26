import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteAddonRequest, DeleteAddonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAddonCommand,
  serializeAws_restJson1DeleteAddonCommand,
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

export type DeleteAddonCommandInput = DeleteAddonRequest;
export type DeleteAddonCommandOutput = DeleteAddonResponse & __MetadataBearer;

/**
 * <p>Delete an Amazon EKS add-on.</p>
 *         <p>When you remove the add-on, it will also be deleted from the cluster. You can always
 *             manually start an add-on on the cluster using the Kubernetes API.</p>
 */
export class DeleteAddonCommand extends $Command<
  DeleteAddonCommandInput,
  DeleteAddonCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAddonCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAddonCommandInput, DeleteAddonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteAddonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAddonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAddonResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAddonCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAddonCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAddonCommandOutput> {
    return deserializeAws_restJson1DeleteAddonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
