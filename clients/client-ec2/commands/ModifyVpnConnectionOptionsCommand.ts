import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnConnectionOptionsRequest, ModifyVpnConnectionOptionsResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpnConnectionOptionsCommand,
  serializeAws_ec2ModifyVpnConnectionOptionsCommand,
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

export type ModifyVpnConnectionOptionsCommandInput = ModifyVpnConnectionOptionsRequest;
export type ModifyVpnConnectionOptionsCommandOutput = ModifyVpnConnectionOptionsResult & __MetadataBearer;

/**
 * <p>Modifies the connection options for your Site-to-Site VPN connection.</p>
 *         <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the AWS side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</p>
 */
export class ModifyVpnConnectionOptionsCommand extends $Command<
  ModifyVpnConnectionOptionsCommandInput,
  ModifyVpnConnectionOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpnConnectionOptionsCommandInput) {
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
  ): Handler<ModifyVpnConnectionOptionsCommandInput, ModifyVpnConnectionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnConnectionOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpnConnectionOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpnConnectionOptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVpnConnectionOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnConnectionOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpnConnectionOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpnConnectionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
