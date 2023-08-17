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
import { TerminateClientVpnConnectionsRequest, TerminateClientVpnConnectionsResult } from "../models/models_7";
import { de_TerminateClientVpnConnectionsCommand, se_TerminateClientVpnConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TerminateClientVpnConnectionsCommand}.
 */
export interface TerminateClientVpnConnectionsCommandInput extends TerminateClientVpnConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link TerminateClientVpnConnectionsCommand}.
 */
export interface TerminateClientVpnConnectionsCommandOutput
  extends TerminateClientVpnConnectionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // TerminateClientVpnConnectionsRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   ConnectionId: "STRING_VALUE",
 *   Username: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new TerminateClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // TerminateClientVpnConnectionsResult
 * //   ClientVpnEndpointId: "STRING_VALUE",
 * //   Username: "STRING_VALUE",
 * //   ConnectionStatuses: [ // TerminateConnectionStatusSet
 * //     { // TerminateConnectionStatus
 * //       ConnectionId: "STRING_VALUE",
 * //       PreviousStatus: { // ClientVpnConnectionStatus
 * //         Code: "active" || "failed-to-terminate" || "terminating" || "terminated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CurrentStatus: {
 * //         Code: "active" || "failed-to-terminate" || "terminating" || "terminated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TerminateClientVpnConnectionsCommandInput - {@link TerminateClientVpnConnectionsCommandInput}
 * @returns {@link TerminateClientVpnConnectionsCommandOutput}
 * @see {@link TerminateClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link TerminateClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class TerminateClientVpnConnectionsCommand extends $Command<
  TerminateClientVpnConnectionsCommandInput,
  TerminateClientVpnConnectionsCommandOutput,
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
  constructor(readonly input: TerminateClientVpnConnectionsCommandInput) {
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
  ): Handler<TerminateClientVpnConnectionsCommandInput, TerminateClientVpnConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateClientVpnConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "TerminateClientVpnConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: TerminateClientVpnConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TerminateClientVpnConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateClientVpnConnectionsCommandOutput> {
    return de_TerminateClientVpnConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
