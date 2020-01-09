import {
  ConfigServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConfigServiceClient";
import {
  GetConformancePackComplianceDetailsRequest,
  GetConformancePackComplianceDetailsResponse,
} from "../models/index";
import {
  deserializeAws_json1_1GetConformancePackComplianceDetailsCommand,
  serializeAws_json1_1GetConformancePackComplianceDetailsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type GetConformancePackComplianceDetailsCommandInput = GetConformancePackComplianceDetailsRequest;
export type GetConformancePackComplianceDetailsCommandOutput = GetConformancePackComplianceDetailsResponse;

export class GetConformancePackComplianceDetailsCommand extends $Command<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput, ConfigServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConformancePackComplianceDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConformancePackComplianceDetailsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetConformancePackComplianceDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetConformancePackComplianceDetailsCommandOutput> {
    return deserializeAws_json1_1GetConformancePackComplianceDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
