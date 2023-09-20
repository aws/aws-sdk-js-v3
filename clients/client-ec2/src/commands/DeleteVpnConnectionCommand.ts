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
import { DeleteVpnConnectionRequest } from "../models/models_3";
import { de_DeleteVpnConnectionCommand, se_DeleteVpnConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpnConnectionCommand}.
 */
export interface DeleteVpnConnectionCommandInput extends DeleteVpnConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpnConnectionCommand}.
 */
export interface DeleteVpnConnectionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified VPN connection.</p>
 *          <p>If you're deleting the VPC and its associated components, we recommend that you detach
 *             the virtual private gateway from the VPC and delete the VPC before deleting the VPN
 *             connection. If you believe that the tunnel credentials for your VPN connection have been
 *             compromised, you can delete the VPN connection and create a new one that has new keys,
 *             without needing to delete the VPC or virtual private gateway. If you create a new VPN
 *             connection, you must reconfigure the customer gateway device using the new configuration
 *             information returned with the new VPN connection ID.</p>
 *          <p>For certificate-based authentication, delete all Certificate Manager (ACM) private
 *             certificates used for the Amazon Web Services-side tunnel endpoints for the VPN
 *             connection before deleting the VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVpnConnectionRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteVpnConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpnConnectionCommandInput - {@link DeleteVpnConnectionCommandInput}
 * @returns {@link DeleteVpnConnectionCommandOutput}
 * @see {@link DeleteVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteVpnConnectionCommand extends $Command<
  DeleteVpnConnectionCommandInput,
  DeleteVpnConnectionCommandOutput,
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
  constructor(readonly input: DeleteVpnConnectionCommandInput) {
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
  ): Handler<DeleteVpnConnectionCommandInput, DeleteVpnConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpnConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpnConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteVpnConnection",
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
  private serialize(input: DeleteVpnConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteVpnConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpnConnectionCommandOutput> {
    return de_DeleteVpnConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
