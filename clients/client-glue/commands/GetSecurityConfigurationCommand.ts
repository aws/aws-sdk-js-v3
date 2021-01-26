import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSecurityConfigurationRequest, GetSecurityConfigurationResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetSecurityConfigurationCommand,
  serializeAws_json1_1GetSecurityConfigurationCommand,
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

export type GetSecurityConfigurationCommandInput = GetSecurityConfigurationRequest;
export type GetSecurityConfigurationCommandOutput = GetSecurityConfigurationResponse & __MetadataBearer;

/**
 * <p>Retrieves a specified security configuration.</p>
 */
export class GetSecurityConfigurationCommand extends $Command<
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSecurityConfigurationCommandInput) {
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
  ): Handler<GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSecurityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSecurityConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSecurityConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSecurityConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSecurityConfigurationCommandOutput> {
    return deserializeAws_json1_1GetSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
