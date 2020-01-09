import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFClientResolvedConfig,
} from "../WAFClient";
import {
  UpdateRuleRequest,
  UpdateRuleResponse,
} from "../models/index";
import {
  deserializeAws_json1_1UpdateRuleCommand,
  serializeAws_json1_1UpdateRuleCommand,
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

export type UpdateRuleCommandInput = UpdateRuleRequest;
export type UpdateRuleCommandOutput = UpdateRuleResponse;

export class UpdateRuleCommand extends $Command<UpdateRuleCommandInput, UpdateRuleCommandOutput, WAFClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleCommandInput, UpdateRuleCommandOutput> {
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
    input: UpdateRuleCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateRuleCommandOutput> {
    return deserializeAws_json1_1UpdateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
