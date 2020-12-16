import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowVpcInterfaceRequest, RemoveFlowVpcInterfaceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveFlowVpcInterfaceCommand,
  serializeAws_restJson1RemoveFlowVpcInterfaceCommand,
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

export type RemoveFlowVpcInterfaceCommandInput = RemoveFlowVpcInterfaceRequest;
export type RemoveFlowVpcInterfaceCommandOutput = RemoveFlowVpcInterfaceResponse & __MetadataBearer;

/**
 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
 */
export class RemoveFlowVpcInterfaceCommand extends $Command<
  RemoveFlowVpcInterfaceCommandInput,
  RemoveFlowVpcInterfaceCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFlowVpcInterfaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFlowVpcInterfaceCommandInput, RemoveFlowVpcInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RemoveFlowVpcInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFlowVpcInterfaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFlowVpcInterfaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFlowVpcInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveFlowVpcInterfaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFlowVpcInterfaceCommandOutput> {
    return deserializeAws_restJson1RemoveFlowVpcInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
