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
import { GetVpnTunnelReplacementStatusRequest, GetVpnTunnelReplacementStatusResult } from "../models/models_5";
import { de_GetVpnTunnelReplacementStatusCommand, se_GetVpnTunnelReplacementStatusCommand } from "../protocols/Aws_ec2";

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
 * ```
 *
 * @param GetVpnTunnelReplacementStatusCommandInput - {@link GetVpnTunnelReplacementStatusCommandInput}
 * @returns {@link GetVpnTunnelReplacementStatusCommandOutput}
 * @see {@link GetVpnTunnelReplacementStatusCommandInput} for command's `input` shape.
 * @see {@link GetVpnTunnelReplacementStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
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
