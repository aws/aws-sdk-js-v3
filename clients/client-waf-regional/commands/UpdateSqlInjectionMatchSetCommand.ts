import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig,
} from "../WAFRegionalClient";
import {
  UpdateSqlInjectionMatchSetRequest,
  UpdateSqlInjectionMatchSetResponse,
} from "../models/index";
import {
  deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand,
  serializeAws_json1_1UpdateSqlInjectionMatchSetCommand,
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

export type UpdateSqlInjectionMatchSetCommandInput = UpdateSqlInjectionMatchSetRequest;
export type UpdateSqlInjectionMatchSetCommandOutput = UpdateSqlInjectionMatchSetResponse;

export class UpdateSqlInjectionMatchSetCommand extends $Command<UpdateSqlInjectionMatchSetCommandInput, UpdateSqlInjectionMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSqlInjectionMatchSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSqlInjectionMatchSetCommandInput, UpdateSqlInjectionMatchSetCommandOutput> {
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
    input: UpdateSqlInjectionMatchSetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSqlInjectionMatchSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateSqlInjectionMatchSetCommandOutput> {
    return deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
