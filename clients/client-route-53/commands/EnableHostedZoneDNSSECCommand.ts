import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse } from "../models/models_0";
import {
  deserializeAws_restXmlEnableHostedZoneDNSSECCommand,
  serializeAws_restXmlEnableHostedZoneDNSSECCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type EnableHostedZoneDNSSECCommandInput = EnableHostedZoneDNSSECRequest;
export type EnableHostedZoneDNSSECCommandOutput = EnableHostedZoneDNSSECResponse & __MetadataBearer;

/**
 * <p>Enables DNSSEC signing in a specific hosted zone.</p>
 */
export class EnableHostedZoneDNSSECCommand extends $Command<
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableHostedZoneDNSSECCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableHostedZoneDNSSECCommandInput, EnableHostedZoneDNSSECCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "EnableHostedZoneDNSSECCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableHostedZoneDNSSECRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableHostedZoneDNSSECResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableHostedZoneDNSSECCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlEnableHostedZoneDNSSECCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableHostedZoneDNSSECCommandOutput> {
    return deserializeAws_restXmlEnableHostedZoneDNSSECCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
