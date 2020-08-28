import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateAccountCustomizationRequest, CreateAccountCustomizationResponse } from "../models/index";
import {
  deserializeAws_restJson1CreateAccountCustomizationCommand,
  serializeAws_restJson1CreateAccountCustomizationCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateAccountCustomizationCommandInput = CreateAccountCustomizationRequest;
export type CreateAccountCustomizationCommandOutput = CreateAccountCustomizationResponse & __MetadataBearer;

export class CreateAccountCustomizationCommand extends $Command<
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccountCustomizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccountCustomizationCommandInput, CreateAccountCustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateAccountCustomizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountCustomizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountCustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccountCustomizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccountCustomizationCommandOutput> {
    return deserializeAws_restJson1CreateAccountCustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
