import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeClientVpnIngressRequest, RevokeClientVpnIngressResult } from "../models/models_5";
import {
  deserializeAws_ec2RevokeClientVpnIngressCommand,
  serializeAws_ec2RevokeClientVpnIngressCommand,
} from "../protocols/Aws_ec2";
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

export type RevokeClientVpnIngressCommandInput = RevokeClientVpnIngressRequest;
export type RevokeClientVpnIngressCommandOutput = RevokeClientVpnIngressResult & __MetadataBearer;

/**
 * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
 */
export class RevokeClientVpnIngressCommand extends $Command<
  RevokeClientVpnIngressCommandInput,
  RevokeClientVpnIngressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeClientVpnIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RevokeClientVpnIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeClientVpnIngressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeClientVpnIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeClientVpnIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RevokeClientVpnIngressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeClientVpnIngressCommandOutput> {
    return deserializeAws_ec2RevokeClientVpnIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
