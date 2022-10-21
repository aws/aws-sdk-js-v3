// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
import {
  GetVpnConnectionDeviceSampleConfigurationRequest,
  GetVpnConnectionDeviceSampleConfigurationRequestFilterSensitiveLog,
  GetVpnConnectionDeviceSampleConfigurationResult,
  GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetVpnConnectionDeviceSampleConfigurationCommand,
  serializeAws_ec2GetVpnConnectionDeviceSampleConfigurationCommand,
} from "../protocols/Aws_ec2";

export interface GetVpnConnectionDeviceSampleConfigurationCommandInput
  extends GetVpnConnectionDeviceSampleConfigurationRequest {}
export interface GetVpnConnectionDeviceSampleConfigurationCommandOutput
  extends GetVpnConnectionDeviceSampleConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Download an Amazon Web Services-provided sample configuration file to be used with the customer
 *             gateway device specified for your Site-to-Site VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetVpnConnectionDeviceSampleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetVpnConnectionDeviceSampleConfigurationCommand extends $Command<
  GetVpnConnectionDeviceSampleConfigurationCommandInput,
  GetVpnConnectionDeviceSampleConfigurationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: GetVpnConnectionDeviceSampleConfigurationCommandInput) {
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
  ): Handler<
    GetVpnConnectionDeviceSampleConfigurationCommandInput,
    GetVpnConnectionDeviceSampleConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetVpnConnectionDeviceSampleConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetVpnConnectionDeviceSampleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVpnConnectionDeviceSampleConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetVpnConnectionDeviceSampleConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVpnConnectionDeviceSampleConfigurationCommandOutput> {
    return deserializeAws_ec2GetVpnConnectionDeviceSampleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
