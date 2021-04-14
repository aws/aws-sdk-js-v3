import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DisableHostedZoneDNSSECRequest, DisableHostedZoneDNSSECResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDisableHostedZoneDNSSECCommand,
  serializeAws_restXmlDisableHostedZoneDNSSECCommand,
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

export type DisableHostedZoneDNSSECCommandInput = DisableHostedZoneDNSSECRequest;
export type DisableHostedZoneDNSSECCommandOutput = DisableHostedZoneDNSSECResponse & __MetadataBearer;

/**
 * <p>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs)
 * 		that are active in the hosted zone.</p>
 */
export class DisableHostedZoneDNSSECCommand extends $Command<
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableHostedZoneDNSSECCommandInput) {
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
  ): Handler<DisableHostedZoneDNSSECCommandInput, DisableHostedZoneDNSSECCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DisableHostedZoneDNSSECCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableHostedZoneDNSSECRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableHostedZoneDNSSECResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableHostedZoneDNSSECCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDisableHostedZoneDNSSECCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableHostedZoneDNSSECCommandOutput> {
    return deserializeAws_restXmlDisableHostedZoneDNSSECCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
