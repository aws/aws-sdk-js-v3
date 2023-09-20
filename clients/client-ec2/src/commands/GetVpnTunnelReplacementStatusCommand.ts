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
import { GetVpnTunnelReplacementStatusRequest, GetVpnTunnelReplacementStatusResult } from "../models/models_6";
import { de_GetVpnTunnelReplacementStatusCommand, se_GetVpnTunnelReplacementStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVpnTunnelReplacementStatusCommand}.
 */
export interface GetVpnTunnelReplacementStatusCommandInput extends GetVpnTunnelReplacementStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnTunnelReplacementStatusCommand}.
 */
export interface GetVpnTunnelReplacementStatusCommandOutput
  extends GetVpnTunnelReplacementStatusResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Get details of available tunnel endpoint maintenance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnTunnelReplacementStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnTunnelReplacementStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetVpnTunnelReplacementStatusRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnTunnelOutsideIpAddress: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetVpnTunnelReplacementStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnTunnelReplacementStatusResult
 * //   VpnConnectionId: "STRING_VALUE",
 * //   TransitGatewayId: "STRING_VALUE",
 * //   CustomerGatewayId: "STRING_VALUE",
 * //   VpnGatewayId: "STRING_VALUE",
 * //   VpnTunnelOutsideIpAddress: "STRING_VALUE",
 * //   MaintenanceDetails: { // MaintenanceDetails
 * //     PendingMaintenance: "STRING_VALUE",
 * //     MaintenanceAutoAppliedAfter: new Date("TIMESTAMP"),
 * //     LastMaintenanceApplied: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVpnTunnelReplacementStatusCommandInput - {@link GetVpnTunnelReplacementStatusCommandInput}
 * @returns {@link GetVpnTunnelReplacementStatusCommandOutput}
 * @see {@link GetVpnTunnelReplacementStatusCommandInput} for command's `input` shape.
 * @see {@link GetVpnTunnelReplacementStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetVpnTunnelReplacementStatusCommand extends $Command<
  GetVpnTunnelReplacementStatusCommandInput,
  GetVpnTunnelReplacementStatusCommandOutput,
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
  constructor(readonly input: GetVpnTunnelReplacementStatusCommandInput) {
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
  ): Handler<GetVpnTunnelReplacementStatusCommandInput, GetVpnTunnelReplacementStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVpnTunnelReplacementStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetVpnTunnelReplacementStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetVpnTunnelReplacementStatus",
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
  private serialize(input: GetVpnTunnelReplacementStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVpnTunnelReplacementStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVpnTunnelReplacementStatusCommandOutput> {
    return de_GetVpnTunnelReplacementStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
