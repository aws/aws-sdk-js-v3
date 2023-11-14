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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetVpnConnectionDeviceTypesRequest, GetVpnConnectionDeviceTypesResult } from "../models/models_6";
import { de_GetVpnConnectionDeviceTypesCommand, se_GetVpnConnectionDeviceTypesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVpnConnectionDeviceTypesCommand}.
 */
export interface GetVpnConnectionDeviceTypesCommandInput extends GetVpnConnectionDeviceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnConnectionDeviceTypesCommand}.
 */
export interface GetVpnConnectionDeviceTypesCommandOutput extends GetVpnConnectionDeviceTypesResult, __MetadataBearer {}

/**
 * @public
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
 * const input = { // GetVpnConnectionDeviceTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVpnConnectionDeviceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnConnectionDeviceTypesResult
 * //   VpnConnectionDeviceTypes: [ // VpnConnectionDeviceTypeList
 * //     { // VpnConnectionDeviceType
 * //       VpnConnectionDeviceTypeId: "STRING_VALUE",
 * //       Vendor: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       Software: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpnConnectionDeviceTypesCommandInput - {@link GetVpnConnectionDeviceTypesCommandInput}
 * @returns {@link GetVpnConnectionDeviceTypesCommandOutput}
 * @see {@link GetVpnConnectionDeviceTypesCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceTypesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetVpnConnectionDeviceTypesCommand extends $Command<
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: GetVpnConnectionDeviceTypesCommandInput) {
    super();
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVpnConnectionDeviceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetVpnConnectionDeviceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetVpnConnectionDeviceTypes",
      },
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
  private serialize(input: GetVpnConnectionDeviceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVpnConnectionDeviceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVpnConnectionDeviceTypesCommandOutput> {
    return de_GetVpnConnectionDeviceTypesCommand(output, context);
  }
}
