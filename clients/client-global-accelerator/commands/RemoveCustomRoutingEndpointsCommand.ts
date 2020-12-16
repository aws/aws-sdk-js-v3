import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { RemoveCustomRoutingEndpointsRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand,
  serializeAws_json1_1RemoveCustomRoutingEndpointsCommand,
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

export type RemoveCustomRoutingEndpointsCommandInput = RemoveCustomRoutingEndpointsRequest;
export type RemoveCustomRoutingEndpointsCommandOutput = __MetadataBearer;

/**
 * <p>Remove endpoints from a custom routing accelerator.</p>
 */
export class RemoveCustomRoutingEndpointsCommand extends $Command<
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveCustomRoutingEndpointsCommandInput) {
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
  ): Handler<RemoveCustomRoutingEndpointsCommandInput, RemoveCustomRoutingEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "RemoveCustomRoutingEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveCustomRoutingEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveCustomRoutingEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveCustomRoutingEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveCustomRoutingEndpointsCommandOutput> {
    return deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
