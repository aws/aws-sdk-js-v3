import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBProxyEndpointRequest, ModifyDBProxyEndpointResponse } from "../models/models_1";
import {
  deserializeAws_queryModifyDBProxyEndpointCommand,
  serializeAws_queryModifyDBProxyEndpointCommand,
} from "../protocols/Aws_query";
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

export type ModifyDBProxyEndpointCommandInput = ModifyDBProxyEndpointRequest;
export type ModifyDBProxyEndpointCommandOutput = ModifyDBProxyEndpointResponse & __MetadataBearer;

/**
 * <p>Changes the settings for an existing DB proxy endpoint.</p>
 */
export class ModifyDBProxyEndpointCommand extends $Command<
  ModifyDBProxyEndpointCommandInput,
  ModifyDBProxyEndpointCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBProxyEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBProxyEndpointCommandInput, ModifyDBProxyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBProxyEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBProxyEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBProxyEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBProxyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBProxyEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBProxyEndpointCommandOutput> {
    return deserializeAws_queryModifyDBProxyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
