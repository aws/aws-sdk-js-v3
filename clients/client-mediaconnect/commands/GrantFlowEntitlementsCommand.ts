import {
  MediaConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaConnectClient";
import {
  GrantFlowEntitlementsRequest,
  GrantFlowEntitlementsResponse
} from "../models/index";
import {
  deserializeAws_restJson1GrantFlowEntitlementsCommand,
  serializeAws_restJson1GrantFlowEntitlementsCommand
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type GrantFlowEntitlementsCommandInput = GrantFlowEntitlementsRequest;
export type GrantFlowEntitlementsCommandOutput = GrantFlowEntitlementsResponse &
  __MetadataBearer;

export class GrantFlowEntitlementsCommand extends $Command<
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GrantFlowEntitlementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GrantFlowEntitlementsCommandInput,
    GrantFlowEntitlementsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GrantFlowEntitlementsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GrantFlowEntitlementsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GrantFlowEntitlementsCommandOutput> {
    return deserializeAws_restJson1GrantFlowEntitlementsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
