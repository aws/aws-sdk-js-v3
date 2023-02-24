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
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequestFilterSensitiveLog,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  serializeAws_ec2DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
} from "../protocols/Aws_ec2";

export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput
  extends DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest {}
export interface DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput
  extends DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult,
    __MetadataBearer {}

/**
 * <p>
 *       Deletes a local gateway route table virtual interface group association.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand extends $Command<
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
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

  constructor(readonly input: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput) {
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
  ): Handler<
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput> {
    return deserializeAws_ec2DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
