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
import { DeleteSubnetRequest } from "../models/models_3";
import { deserializeAws_ec2DeleteSubnetCommand, serializeAws_ec2DeleteSubnetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteSubnetCommand}.
 */
export interface DeleteSubnetCommandInput extends DeleteSubnetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubnetCommand}.
 */
export interface DeleteSubnetCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSubnetRequest
 *   SubnetId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteSubnetCommandInput - {@link DeleteSubnetCommandInput}
 * @returns {@link DeleteSubnetCommandOutput}
 * @see {@link DeleteSubnetCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To delete a subnet
 * ```javascript
 * // This example deletes the specified subnet.
 * const input = {
 *   "SubnetId": "subnet-9d4a7b6c"
 * };
 * const command = new DeleteSubnetCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-subnet-1
 * ```
 *
 */
export class DeleteSubnetCommand extends $Command<
  DeleteSubnetCommandInput,
  DeleteSubnetCommandOutput,
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
  constructor(readonly input: DeleteSubnetCommandInput) {
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
  ): Handler<DeleteSubnetCommandInput, DeleteSubnetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteSubnetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteSubnetCommand";
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
  private serialize(input: DeleteSubnetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteSubnetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSubnetCommandOutput> {
    return deserializeAws_ec2DeleteSubnetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
