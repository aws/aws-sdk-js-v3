import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig,
} from "../WAFRegionalClient";
import {
  CreateXssMatchSetRequest,
  CreateXssMatchSetResponse,
} from "../models/index";
import {
  deserializeAws_json1_1CreateXssMatchSetCommand,
  serializeAws_json1_1CreateXssMatchSetCommand,
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

export type CreateXssMatchSetCommandInput = CreateXssMatchSetRequest;
export type CreateXssMatchSetCommandOutput = CreateXssMatchSetResponse;

export class CreateXssMatchSetCommand extends $Command<CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateXssMatchSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput> {
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
    input: CreateXssMatchSetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateXssMatchSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateXssMatchSetCommandOutput> {
    return deserializeAws_json1_1CreateXssMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
