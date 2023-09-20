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
import { DeleteClientVpnRouteRequest, DeleteClientVpnRouteResult } from "../models/models_2";
import { de_DeleteClientVpnRouteCommand, se_DeleteClientVpnRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteClientVpnRouteCommand}.
 */
export interface DeleteClientVpnRouteCommandInput extends DeleteClientVpnRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientVpnRouteCommand}.
 */
export interface DeleteClientVpnRouteCommandOutput extends DeleteClientVpnRouteResult, __MetadataBearer {}

/**
 * @public
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
 * const input = { // DeleteClientVpnRouteRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   TargetVpcSubnetId: "STRING_VALUE",
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClientVpnRouteResult
 * //   Status: { // ClientVpnRouteStatus
 * //     Code: "creating" || "active" || "failed" || "deleting",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteClientVpnRouteCommandInput - {@link DeleteClientVpnRouteCommandInput}
 * @returns {@link DeleteClientVpnRouteCommandOutput}
 * @see {@link DeleteClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteClientVpnRoute",
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
  private serialize(input: DeleteClientVpnRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClientVpnRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClientVpnRouteCommandOutput> {
    return de_DeleteClientVpnRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
