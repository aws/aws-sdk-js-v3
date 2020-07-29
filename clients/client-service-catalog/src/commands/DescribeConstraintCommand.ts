import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeConstraintInput, DescribeConstraintOutput } from "../models/index";
import {
  deserializeAws_json1_1DescribeConstraintCommand,
  serializeAws_json1_1DescribeConstraintCommand,
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

export type DescribeConstraintCommandInput = DescribeConstraintInput;
export type DescribeConstraintCommandOutput = DescribeConstraintOutput & __MetadataBearer;

export class DescribeConstraintCommand extends $Command<
  DescribeConstraintCommandInput,
  DescribeConstraintCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConstraintCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConstraintCommandInput, DescribeConstraintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConstraintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConstraintCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConstraintCommandOutput> {
    return deserializeAws_json1_1DescribeConstraintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
