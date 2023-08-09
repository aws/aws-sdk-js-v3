// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetVpnConnectionDeviceSampleConfigurationRequest,
  GetVpnConnectionDeviceSampleConfigurationResult,
  GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog,
} from "../models/models_5";
import {
  de_GetVpnConnectionDeviceSampleConfigurationCommand,
  se_GetVpnConnectionDeviceSampleConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVpnConnectionDeviceSampleConfigurationCommand}.
 */
export interface GetVpnConnectionDeviceSampleConfigurationCommandInput
  extends GetVpnConnectionDeviceSampleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnConnectionDeviceSampleConfigurationCommand}.
 */
export interface GetVpnConnectionDeviceSampleConfigurationCommandOutput
  extends GetVpnConnectionDeviceSampleConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Download an Amazon Web Services-provided sample configuration file to be used with the customer
 *             gateway device specified for your Site-to-Site VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetVpnConnectionDeviceSampleConfigurationRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnConnectionDeviceTypeId: "STRING_VALUE", // required
 *   InternetKeyExchangeVersion: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVpnConnectionDeviceSampleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnConnectionDeviceSampleConfigurationResult
 * //   VpnConnectionDeviceSampleConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpnConnectionDeviceSampleConfigurationCommandInput - {@link GetVpnConnectionDeviceSampleConfigurationCommandInput}
 * @returns {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput}
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetVpnConnectionDeviceSampleConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetVpnConnectionDeviceSampleConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVpnConnectionDeviceSampleConfigurationCommandOutput> {
    return de_GetVpnConnectionDeviceSampleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
