import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateDataflowEndpointGroupRequest, DataflowEndpointGroupIdResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDataflowEndpointGroupCommand,
  serializeAws_restJson1CreateDataflowEndpointGroupCommand,
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

export type CreateDataflowEndpointGroupCommandInput = CreateDataflowEndpointGroupRequest;
export type CreateDataflowEndpointGroupCommandOutput = DataflowEndpointGroupIdResponse & __MetadataBearer;

/**
 * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p>
 *          <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code>
 *          to specify which endpoints to use during a contact.</p>
 *          <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code>
 *          must match a <code>DataflowEndpoint</code> in the same group.</p>
 */
export class CreateDataflowEndpointGroupCommand extends $Command<
  CreateDataflowEndpointGroupCommandInput,
  CreateDataflowEndpointGroupCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataflowEndpointGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataflowEndpointGroupCommandInput, CreateDataflowEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateDataflowEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataflowEndpointGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DataflowEndpointGroupIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataflowEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDataflowEndpointGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDataflowEndpointGroupCommandOutput> {
    return deserializeAws_restJson1CreateDataflowEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
