import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateGatewayRequest, CreateGatewayResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGatewayCommand,
  serializeAws_restJson1CreateGatewayCommand,
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

export type CreateGatewayCommandInput = CreateGatewayRequest;
export type CreateGatewayCommandOutput = CreateGatewayResponse & __MetadataBearer;

/**
 * <p>Creates a gateway, which is a virtual or edge device that delivers industrial data streams
 *       from local servers to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export class CreateGatewayCommand extends $Command<
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGatewayCommandInput, CreateGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreateGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGatewayCommandOutput> {
    return deserializeAws_restJson1CreateGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
