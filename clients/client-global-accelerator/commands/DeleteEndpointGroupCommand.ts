import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DeleteEndpointGroupRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEndpointGroupCommand,
  serializeAws_json1_1DeleteEndpointGroupCommand,
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

export type DeleteEndpointGroupCommandInput = DeleteEndpointGroupRequest;
export type DeleteEndpointGroupCommandOutput = __MetadataBearer;

/**
 * <p>Delete an endpoint group from a listener.</p>
 */
export class DeleteEndpointGroupCommand extends $Command<
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEndpointGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DeleteEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEndpointGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEndpointGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointGroupCommandOutput> {
    return deserializeAws_json1_1DeleteEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
