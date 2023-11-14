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
import { ReplaceVpnTunnelRequest, ReplaceVpnTunnelResult } from "../models/models_6";
import { de_ReplaceVpnTunnelCommand, se_ReplaceVpnTunnelCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplaceVpnTunnelCommand}.
 */
export interface ReplaceVpnTunnelCommandInput extends ReplaceVpnTunnelRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceVpnTunnelCommand}.
 */
export interface ReplaceVpnTunnelCommandOutput extends ReplaceVpnTunnelResult, __MetadataBearer {}

/**
 * @public
 * <p>Trigger replacement of specified VPN tunnel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceVpnTunnelCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceVpnTunnelCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceVpnTunnelRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnTunnelOutsideIpAddress: "STRING_VALUE", // required
 *   ApplyPendingMaintenance: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ReplaceVpnTunnelCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceVpnTunnelResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ReplaceVpnTunnelCommandInput - {@link ReplaceVpnTunnelCommandInput}
 * @returns {@link ReplaceVpnTunnelCommandOutput}
 * @see {@link ReplaceVpnTunnelCommandInput} for command's `input` shape.
 * @see {@link ReplaceVpnTunnelCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ReplaceVpnTunnelCommand extends $Command<
  ReplaceVpnTunnelCommandInput,
  ReplaceVpnTunnelCommandOutput,
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
  constructor(readonly input: ReplaceVpnTunnelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReplaceVpnTunnelCommandInput, ReplaceVpnTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplaceVpnTunnelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceVpnTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ReplaceVpnTunnel",
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
  private serialize(input: ReplaceVpnTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplaceVpnTunnelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceVpnTunnelCommandOutput> {
    return de_ReplaceVpnTunnelCommand(output, context);
  }
}
