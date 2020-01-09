import {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import {
  ListResolverEndpointIpAddressesRequest,
  ListResolverEndpointIpAddressesResponse,
} from "../models/index";
import {
  deserializeAws_json1_1ListResolverEndpointIpAddressesCommand,
  serializeAws_json1_1ListResolverEndpointIpAddressesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type ListResolverEndpointIpAddressesCommandInput = ListResolverEndpointIpAddressesRequest;
export type ListResolverEndpointIpAddressesCommandOutput = ListResolverEndpointIpAddressesResponse;

export class ListResolverEndpointIpAddressesCommand extends $Command<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput, Route53ResolverClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResolverEndpointIpAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListResolverEndpointIpAddressesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverEndpointIpAddressesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListResolverEndpointIpAddressesCommandOutput> {
    return deserializeAws_json1_1ListResolverEndpointIpAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
