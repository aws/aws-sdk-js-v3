import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetUserDefinedFunctionCommand,
  serializeAws_json1_1GetUserDefinedFunctionCommand,
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

export type GetUserDefinedFunctionCommandInput = GetUserDefinedFunctionRequest;
export type GetUserDefinedFunctionCommandOutput = GetUserDefinedFunctionResponse & __MetadataBearer;

/**
 * <p>Retrieves a specified function definition from the Data Catalog.</p>
 */
export class GetUserDefinedFunctionCommand extends $Command<
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserDefinedFunctionCommandInput) {
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
  ): Handler<GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUserDefinedFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserDefinedFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserDefinedFunctionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserDefinedFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserDefinedFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserDefinedFunctionCommandOutput> {
    return deserializeAws_json1_1GetUserDefinedFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
