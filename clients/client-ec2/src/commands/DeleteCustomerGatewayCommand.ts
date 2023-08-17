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
import { DeleteCustomerGatewayRequest } from "../models/models_2";
import { de_DeleteCustomerGatewayCommand, se_DeleteCustomerGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomerGatewayCommand}.
 */
export interface DeleteCustomerGatewayCommandInput extends DeleteCustomerGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomerGatewayCommand}.
 */
export interface DeleteCustomerGatewayCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified customer gateway. You must delete the VPN connection before you
 *             can delete the customer gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteCustomerGatewayRequest
 *   CustomerGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomerGatewayCommandInput - {@link DeleteCustomerGatewayCommandInput}
 * @returns {@link DeleteCustomerGatewayCommandOutput}
 * @see {@link DeleteCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To delete a customer gateway
 * ```javascript
 * // This example deletes the specified customer gateway.
 * const input = {
 *   "CustomerGatewayId": "cgw-0e11f167"
 * };
 * const command = new DeleteCustomerGatewayCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-customer-gateway-1
 * ```
 *
 */
export class DeleteCustomerGatewayCommand extends $Command<
  DeleteCustomerGatewayCommandInput,
  DeleteCustomerGatewayCommandOutput,
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
  constructor(readonly input: DeleteCustomerGatewayCommandInput) {
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
  ): Handler<DeleteCustomerGatewayCommandInput, DeleteCustomerGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomerGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteCustomerGatewayCommand";
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
  private serialize(input: DeleteCustomerGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCustomerGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomerGatewayCommandOutput> {
    return de_DeleteCustomerGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
