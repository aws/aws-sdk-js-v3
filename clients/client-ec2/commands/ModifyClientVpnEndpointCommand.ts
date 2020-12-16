import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyClientVpnEndpointRequest, ModifyClientVpnEndpointResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyClientVpnEndpointCommand,
  serializeAws_ec2ModifyClientVpnEndpointCommand,
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

export type ModifyClientVpnEndpointCommandInput = ModifyClientVpnEndpointRequest;
export type ModifyClientVpnEndpointCommandOutput = ModifyClientVpnEndpointResult & __MetadataBearer;

/**
 * <p>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</p>
 */
export class ModifyClientVpnEndpointCommand extends $Command<
  ModifyClientVpnEndpointCommandInput,
  ModifyClientVpnEndpointCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClientVpnEndpointCommandInput) {
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
  ): Handler<ModifyClientVpnEndpointCommandInput, ModifyClientVpnEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyClientVpnEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClientVpnEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClientVpnEndpointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClientVpnEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyClientVpnEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClientVpnEndpointCommandOutput> {
    return deserializeAws_ec2ModifyClientVpnEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
