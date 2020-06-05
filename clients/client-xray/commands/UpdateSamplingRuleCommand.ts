import {
  ServiceInputTypes,
  ServiceOutputTypes,
  XRayClientResolvedConfig
} from "../XRayClient";
import {
  UpdateSamplingRuleRequest,
  UpdateSamplingRuleResult
} from "../models/index";
import {
  deserializeAws_restJson1UpdateSamplingRuleCommand,
  serializeAws_restJson1UpdateSamplingRuleCommand
} from "../protocols/Aws_restJson1";
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

export type UpdateSamplingRuleCommandInput = UpdateSamplingRuleRequest;
export type UpdateSamplingRuleCommandOutput = UpdateSamplingRuleResult &
  __MetadataBearer;

export class UpdateSamplingRuleCommand extends $Command<
  UpdateSamplingRuleCommandInput,
  UpdateSamplingRuleCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSamplingRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput> {
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
    input: UpdateSamplingRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSamplingRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSamplingRuleCommandOutput> {
    return deserializeAws_restJson1UpdateSamplingRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
