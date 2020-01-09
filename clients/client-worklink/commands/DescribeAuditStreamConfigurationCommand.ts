import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkLinkClientResolvedConfig
} from "../WorkLinkClient";
import {
  DescribeAuditStreamConfigurationRequest,
  DescribeAuditStreamConfigurationResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeAuditStreamConfigurationCommand,
  serializeAws_restJson1_1DescribeAuditStreamConfigurationCommand
} from "../protocols/Aws_restJson1_1";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeAuditStreamConfigurationCommandInput = DescribeAuditStreamConfigurationRequest;
export type DescribeAuditStreamConfigurationCommandOutput = DescribeAuditStreamConfigurationResponse;

export class DescribeAuditStreamConfigurationCommand extends $Command<
  DescribeAuditStreamConfigurationCommandInput,
  DescribeAuditStreamConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAuditStreamConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAuditStreamConfigurationCommandInput,
    DescribeAuditStreamConfigurationCommandOutput
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
    input: DescribeAuditStreamConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeAuditStreamConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeAuditStreamConfigurationCommandOutput> {
    return deserializeAws_restJson1_1DescribeAuditStreamConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
