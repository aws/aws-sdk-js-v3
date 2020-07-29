import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetTemplateSummaryInput, GetTemplateSummaryOutput } from "../models/index";
import {
  deserializeAws_queryGetTemplateSummaryCommand,
  serializeAws_queryGetTemplateSummaryCommand,
} from "../protocols/Aws_query";
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

export type GetTemplateSummaryCommandInput = GetTemplateSummaryInput;
export type GetTemplateSummaryCommandOutput = GetTemplateSummaryOutput & __MetadataBearer;

export class GetTemplateSummaryCommand extends $Command<
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTemplateSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput> {
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

  private serialize(input: GetTemplateSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetTemplateSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateSummaryCommandOutput> {
    return deserializeAws_queryGetTemplateSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
