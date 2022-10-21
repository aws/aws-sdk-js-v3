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
  DeleteLocalGatewayRouteRequest,
  DeleteLocalGatewayRouteRequestFilterSensitiveLog,
  DeleteLocalGatewayRouteResult,
  DeleteLocalGatewayRouteResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteLocalGatewayRouteCommand,
  serializeAws_ec2DeleteLocalGatewayRouteCommand,
} from "../protocols/Aws_ec2";

export interface DeleteLocalGatewayRouteCommandInput extends DeleteLocalGatewayRouteRequest {}
export interface DeleteLocalGatewayRouteCommandOutput extends DeleteLocalGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Deletes the specified route from the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteLocalGatewayRouteCommand extends $Command<
  DeleteLocalGatewayRouteCommandInput,
  DeleteLocalGatewayRouteCommandOutput,
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

  constructor(readonly input: DeleteLocalGatewayRouteCommandInput) {
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
  ): Handler<DeleteLocalGatewayRouteCommandInput, DeleteLocalGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLocalGatewayRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLocalGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLocalGatewayRouteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLocalGatewayRouteResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLocalGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteLocalGatewayRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLocalGatewayRouteCommandOutput> {
    return deserializeAws_ec2DeleteLocalGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
