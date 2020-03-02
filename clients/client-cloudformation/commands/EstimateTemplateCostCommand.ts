import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFormationClient";
import {
  EstimateTemplateCostInput,
  EstimateTemplateCostOutput
} from "../models/index";
import {
  deserializeAws_queryEstimateTemplateCostCommand,
  serializeAws_queryEstimateTemplateCostCommand
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

export type EstimateTemplateCostCommandInput = EstimateTemplateCostInput;
export type EstimateTemplateCostCommandOutput = EstimateTemplateCostOutput &
  __MetadataBearer;

export class EstimateTemplateCostCommand extends $Command<
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EstimateTemplateCostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EstimateTemplateCostCommandInput,
    EstimateTemplateCostCommandOutput
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
    input: EstimateTemplateCostCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryEstimateTemplateCostCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EstimateTemplateCostCommandOutput> {
    return deserializeAws_queryEstimateTemplateCostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
