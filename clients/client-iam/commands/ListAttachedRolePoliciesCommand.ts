import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient";
import {
  ListAttachedRolePoliciesRequest,
  ListAttachedRolePoliciesResponse
} from "../models/index";
import {
  deserializeAws_queryListAttachedRolePoliciesCommand,
  serializeAws_queryListAttachedRolePoliciesCommand
} from "../protocols/Aws_query";
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

export type ListAttachedRolePoliciesCommandInput = ListAttachedRolePoliciesRequest;
export type ListAttachedRolePoliciesCommandOutput = ListAttachedRolePoliciesResponse &
  __MetadataBearer;

export class ListAttachedRolePoliciesCommand extends $Command<
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttachedRolePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListAttachedRolePoliciesCommandInput,
    ListAttachedRolePoliciesCommandOutput
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
    input: ListAttachedRolePoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListAttachedRolePoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAttachedRolePoliciesCommandOutput> {
    return deserializeAws_queryListAttachedRolePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
