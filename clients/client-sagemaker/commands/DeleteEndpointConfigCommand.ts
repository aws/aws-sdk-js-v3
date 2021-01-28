import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteEndpointConfigInput } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteEndpointConfigCommand,
  serializeAws_json1_1DeleteEndpointConfigCommand,
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

export type DeleteEndpointConfigCommandInput = DeleteEndpointConfigInput;
export type DeleteEndpointConfigCommandOutput = __MetadataBearer;

/**
 * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
 *             deletes only the specified configuration. It does not delete endpoints created using the
 *             configuration. </p>
 *         <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *             live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations
 *             are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an
 *             endpoint that is active or being created or updated you may lose visibility into the
 *             instance type the endpoint is using. The endpoint must be deleted in order to stop
 *             incurring charges.</p>
 */
export class DeleteEndpointConfigCommand extends $Command<
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEndpointConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteEndpointConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEndpointConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEndpointConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEndpointConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointConfigCommandOutput> {
    return deserializeAws_json1_1DeleteEndpointConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
