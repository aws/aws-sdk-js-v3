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
  DeleteNetworkInterfacePermissionRequest,
  DeleteNetworkInterfacePermissionRequestFilterSensitiveLog,
  DeleteNetworkInterfacePermissionResult,
  DeleteNetworkInterfacePermissionResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteNetworkInterfacePermissionCommand,
  serializeAws_ec2DeleteNetworkInterfacePermissionCommand,
} from "../protocols/Aws_ec2";

export interface DeleteNetworkInterfacePermissionCommandInput extends DeleteNetworkInterfacePermissionRequest {}
export interface DeleteNetworkInterfacePermissionCommandOutput
  extends DeleteNetworkInterfacePermissionResult,
    __MetadataBearer {}

/**
 * <p>Deletes a permission for a network interface. By default, you cannot delete the
 * 			permission if the account for which you're removing the permission has attached the
 * 			network interface to an instance. However, you can force delete the permission,
 * 			regardless of any attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteNetworkInterfacePermissionCommand extends $Command<
  DeleteNetworkInterfacePermissionCommandInput,
  DeleteNetworkInterfacePermissionCommandOutput,
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

  constructor(readonly input: DeleteNetworkInterfacePermissionCommandInput) {
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
  ): Handler<DeleteNetworkInterfacePermissionCommandInput, DeleteNetworkInterfacePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNetworkInterfacePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInterfacePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkInterfacePermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkInterfacePermissionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteNetworkInterfacePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNetworkInterfacePermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInterfacePermissionCommandOutput> {
    return deserializeAws_ec2DeleteNetworkInterfacePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
