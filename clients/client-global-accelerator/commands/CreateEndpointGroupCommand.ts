import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { CreateEndpointGroupRequest, CreateEndpointGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEndpointGroupCommand,
  serializeAws_json1_1CreateEndpointGroupCommand,
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

export type CreateEndpointGroupCommandInput = CreateEndpointGroupRequest;
export type CreateEndpointGroupCommandOutput = CreateEndpointGroupResponse & __MetadataBearer;

/**
 * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS
 * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
 */
export class CreateEndpointGroupCommand extends $Command<
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEndpointGroupCommandInput) {
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
  ): Handler<CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEndpointGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEndpointGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointGroupCommandOutput> {
    return deserializeAws_json1_1CreateEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
