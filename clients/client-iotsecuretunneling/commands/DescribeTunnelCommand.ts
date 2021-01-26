import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTunnelCommand,
  serializeAws_json1_1DescribeTunnelCommand,
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

export type DescribeTunnelCommandInput = DescribeTunnelRequest;
export type DescribeTunnelCommandOutput = DescribeTunnelResponse & __MetadataBearer;

/**
 * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
 */
export class DescribeTunnelCommand extends $Command<
  DescribeTunnelCommandInput,
  DescribeTunnelCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTunnelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTunnelCommandInput, DescribeTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "DescribeTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTunnelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTunnelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTunnelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTunnelCommandOutput> {
    return deserializeAws_json1_1DescribeTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
