import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  ModifyVpnTunnelOptionsRequest,
  ModifyVpnTunnelOptionsResult
} from "../models/index";
import {
  deserializeAws_ec2ModifyVpnTunnelOptionsCommand,
  serializeAws_ec2ModifyVpnTunnelOptionsCommand
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type ModifyVpnTunnelOptionsCommandInput = ModifyVpnTunnelOptionsRequest;
export type ModifyVpnTunnelOptionsCommandOutput = ModifyVpnTunnelOptionsResult &
  __MetadataBearer;

export class ModifyVpnTunnelOptionsCommand extends $Command<
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpnTunnelOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyVpnTunnelOptionsCommandInput,
    ModifyVpnTunnelOptionsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpnTunnelOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnTunnelOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpnTunnelOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpnTunnelOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
