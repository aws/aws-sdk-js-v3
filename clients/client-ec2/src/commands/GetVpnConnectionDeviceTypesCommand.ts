// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetVpnConnectionDeviceTypesRequest, GetVpnConnectionDeviceTypesResult } from "../models/models_2";
import {
  deserializeAws_ec2GetVpnConnectionDeviceTypesCommand,
  serializeAws_ec2GetVpnConnectionDeviceTypesCommand,
} from "../protocols/Aws_ec2";

export interface GetVpnConnectionDeviceTypesCommandInput extends GetVpnConnectionDeviceTypesRequest {}
export interface GetVpnConnectionDeviceTypesCommandOutput extends GetVpnConnectionDeviceTypesResult, __MetadataBearer {}

/**
 * <p>Obtain a list of customer gateway devices for which sample configuration
 *             files can be provided. The request has no additional parameters. You can also see the
 *             list of device types with sample configuration files available under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer gateway
 *                 device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnConnectionDeviceTypesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnConnectionDeviceTypesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetVpnConnectionDeviceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVpnConnectionDeviceTypesCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceTypesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetVpnConnectionDeviceTypesCommand extends $Command<
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVpnConnectionDeviceTypesCommandInput) {
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
  ): Handler<GetVpnConnectionDeviceTypesCommandInput, GetVpnConnectionDeviceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetVpnConnectionDeviceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVpnConnectionDeviceTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVpnConnectionDeviceTypesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVpnConnectionDeviceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetVpnConnectionDeviceTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVpnConnectionDeviceTypesCommandOutput> {
    return deserializeAws_ec2GetVpnConnectionDeviceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
