import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFormationClient";
import {
  DetectStackResourceDriftInput,
  DetectStackResourceDriftOutput
} from "../models/index";
import {
  deserializeAws_queryDetectStackResourceDriftCommand,
  serializeAws_queryDetectStackResourceDriftCommand
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

export type DetectStackResourceDriftCommandInput = DetectStackResourceDriftInput;
export type DetectStackResourceDriftCommandOutput = DetectStackResourceDriftOutput &
  __MetadataBearer;

export class DetectStackResourceDriftCommand extends $Command<
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectStackResourceDriftCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DetectStackResourceDriftCommandInput,
    DetectStackResourceDriftCommandOutput
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
    input: DetectStackResourceDriftCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDetectStackResourceDriftCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetectStackResourceDriftCommandOutput> {
    return deserializeAws_queryDetectStackResourceDriftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
