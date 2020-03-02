import {
  RedshiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RedshiftClient";
import {
  DescribeHsmConfigurationsMessage,
  HsmConfigurationMessage
} from "../models/index";
import {
  deserializeAws_queryDescribeHsmConfigurationsCommand,
  serializeAws_queryDescribeHsmConfigurationsCommand
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

export type DescribeHsmConfigurationsCommandInput = DescribeHsmConfigurationsMessage;
export type DescribeHsmConfigurationsCommandOutput = HsmConfigurationMessage &
  __MetadataBearer;

export class DescribeHsmConfigurationsCommand extends $Command<
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHsmConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeHsmConfigurationsCommandInput,
    DescribeHsmConfigurationsCommandOutput
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
    input: DescribeHsmConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeHsmConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHsmConfigurationsCommandOutput> {
    return deserializeAws_queryDescribeHsmConfigurationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
