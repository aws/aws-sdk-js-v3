import {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticBeanstalkClient";
import {
  RetrieveEnvironmentInfoMessage,
  RetrieveEnvironmentInfoResultMessage
} from "../models/index";
import {
  deserializeAws_queryRetrieveEnvironmentInfoCommand,
  serializeAws_queryRetrieveEnvironmentInfoCommand
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

export type RetrieveEnvironmentInfoCommandInput = RetrieveEnvironmentInfoMessage;
export type RetrieveEnvironmentInfoCommandOutput = RetrieveEnvironmentInfoResultMessage &
  __MetadataBearer;

export class RetrieveEnvironmentInfoCommand extends $Command<
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetrieveEnvironmentInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RetrieveEnvironmentInfoCommandInput,
    RetrieveEnvironmentInfoCommandOutput
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
    input: RetrieveEnvironmentInfoCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRetrieveEnvironmentInfoCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RetrieveEnvironmentInfoCommandOutput> {
    return deserializeAws_queryRetrieveEnvironmentInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
