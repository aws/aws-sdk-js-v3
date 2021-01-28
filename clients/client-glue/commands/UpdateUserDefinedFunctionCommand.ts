import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateUserDefinedFunctionRequest, UpdateUserDefinedFunctionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateUserDefinedFunctionCommand,
  serializeAws_json1_1UpdateUserDefinedFunctionCommand,
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

export type UpdateUserDefinedFunctionCommandInput = UpdateUserDefinedFunctionRequest;
export type UpdateUserDefinedFunctionCommandOutput = UpdateUserDefinedFunctionResponse & __MetadataBearer;

/**
 * <p>Updates an existing function definition in the Data Catalog.</p>
 */
export class UpdateUserDefinedFunctionCommand extends $Command<
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserDefinedFunctionCommandInput) {
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
  ): Handler<UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateUserDefinedFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserDefinedFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserDefinedFunctionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserDefinedFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUserDefinedFunctionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateUserDefinedFunctionCommandOutput> {
    return deserializeAws_json1_1UpdateUserDefinedFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
