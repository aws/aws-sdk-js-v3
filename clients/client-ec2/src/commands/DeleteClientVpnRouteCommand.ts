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
  DeleteClientVpnRouteRequest,
  DeleteClientVpnRouteRequestFilterSensitiveLog,
  DeleteClientVpnRouteResult,
  DeleteClientVpnRouteResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteClientVpnRouteCommand,
  serializeAws_ec2DeleteClientVpnRouteCommand,
} from "../protocols/Aws_ec2";

export interface DeleteClientVpnRouteCommandInput extends DeleteClientVpnRouteRequest {}
export interface DeleteClientVpnRouteCommandOutput extends DeleteClientVpnRouteResult, __MetadataBearer {}

/**
 * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using
 * 			the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were
 * 			automatically added when associating a subnet. To remove routes that have been automatically added,
 * 			disassociate the target subnet from the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteClientVpnRouteCommand extends $Command<
  DeleteClientVpnRouteCommandInput,
  DeleteClientVpnRouteCommandOutput,
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

  constructor(readonly input: DeleteClientVpnRouteCommandInput) {
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
  ): Handler<DeleteClientVpnRouteCommandInput, DeleteClientVpnRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClientVpnRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteClientVpnRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClientVpnRouteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteClientVpnRouteResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClientVpnRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteClientVpnRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClientVpnRouteCommandOutput> {
    return deserializeAws_ec2DeleteClientVpnRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
