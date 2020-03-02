import {
  ConfigServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ConfigServiceClient";
import {
  DescribeConfigRulesRequest,
  DescribeConfigRulesResponse
} from "../models/index";
import {
  deserializeAws_json1_1DescribeConfigRulesCommand,
  serializeAws_json1_1DescribeConfigRulesCommand
} from "../protocols/Aws_json1_1";
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

export type DescribeConfigRulesCommandInput = DescribeConfigRulesRequest;
export type DescribeConfigRulesCommandOutput = DescribeConfigRulesResponse &
  __MetadataBearer;

export class DescribeConfigRulesCommand extends $Command<
  DescribeConfigRulesCommandInput,
  DescribeConfigRulesCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeConfigRulesCommandInput,
    DescribeConfigRulesCommandOutput
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
    input: DescribeConfigRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigRulesCommandOutput> {
    return deserializeAws_json1_1DescribeConfigRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
