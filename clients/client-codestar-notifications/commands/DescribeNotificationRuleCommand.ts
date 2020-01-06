import {
  ServiceInputTypes,
  ServiceOutputTypes,
  codestarnotificationsClientResolvedConfig
} from "../codestarnotificationsClient";
import {
  DescribeNotificationRuleRequest,
  DescribeNotificationRuleResult
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeNotificationRuleCommand,
  serializeAws_restJson1_1DescribeNotificationRuleCommand
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

export type DescribeNotificationRuleCommandInput = DescribeNotificationRuleRequest;
export type DescribeNotificationRuleCommandOutput = DescribeNotificationRuleResult;

export class DescribeNotificationRuleCommand extends $Command<
  DescribeNotificationRuleCommandInput,
  DescribeNotificationRuleCommandOutput,
  codestarnotificationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: codestarnotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeNotificationRuleCommandInput,
    DescribeNotificationRuleCommandOutput
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
    input: DescribeNotificationRuleCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeNotificationRuleCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeNotificationRuleCommandOutput> {
    return deserializeAws_restJson1_1DescribeNotificationRuleCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
