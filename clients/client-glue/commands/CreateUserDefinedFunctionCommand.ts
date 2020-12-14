import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateUserDefinedFunctionRequest, CreateUserDefinedFunctionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateUserDefinedFunctionCommand,
  serializeAws_json1_1CreateUserDefinedFunctionCommand,
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

export type CreateUserDefinedFunctionCommandInput = CreateUserDefinedFunctionRequest;
export type CreateUserDefinedFunctionCommandOutput = CreateUserDefinedFunctionResponse & __MetadataBearer;

/**
 * <p>Creates a new function definition in the Data Catalog.</p>
 */
export class CreateUserDefinedFunctionCommand extends $Command<
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserDefinedFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateUserDefinedFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserDefinedFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUserDefinedFunctionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserDefinedFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUserDefinedFunctionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUserDefinedFunctionCommandOutput> {
    return deserializeAws_json1_1CreateUserDefinedFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
