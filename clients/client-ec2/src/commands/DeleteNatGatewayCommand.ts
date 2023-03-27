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
import { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteNatGatewayCommand,
  serializeAws_ec2DeleteNatGatewayCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteNatGatewayCommand}.
 */
export interface DeleteNatGatewayCommandInput extends DeleteNatGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNatGatewayCommand}.
 */
export interface DeleteNatGatewayCommandOutput extends DeleteNatGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address,
 *           but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway
 *           routes in your route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNatGatewayRequest
 *   DryRun: true || false,
 *   NatGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteNatGatewayCommandInput - {@link DeleteNatGatewayCommandInput}
 * @returns {@link DeleteNatGatewayCommandOutput}
 * @see {@link DeleteNatGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To delete a NAT gateway
 * ```javascript
 * // This example deletes the specified NAT gateway.
 * const input = {
 *   "NatGatewayId": "nat-04ae55e711cec5680"
 * };
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NatGatewayId": "nat-04ae55e711cec5680"
 * }
 * *\/
 * // example id: ec2-delete-nat-gateway-1
 * ```
 *
 */
export class DeleteNatGatewayCommand extends $Command<
  DeleteNatGatewayCommandInput,
  DeleteNatGatewayCommandOutput,
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
  constructor(readonly input: DeleteNatGatewayCommandInput) {
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
  ): Handler<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNatGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNatGatewayCommand";
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
  private serialize(input: DeleteNatGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNatGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNatGatewayCommandOutput> {
    return deserializeAws_ec2DeleteNatGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
