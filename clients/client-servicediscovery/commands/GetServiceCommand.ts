import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetServiceRequest, GetServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetServiceCommand,
  serializeAws_json1_1GetServiceCommand,
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

export type GetServiceCommandInput = GetServiceRequest;
export type GetServiceCommandOutput = GetServiceResponse & __MetadataBearer;

/**
 * <p>Gets the settings for a specified service.</p>
 */
export class GetServiceCommand extends $Command<
  GetServiceCommandInput,
  GetServiceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceCommandInput, GetServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceCommandOutput> {
    return deserializeAws_json1_1GetServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
