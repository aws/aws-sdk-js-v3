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
  CreateLocalGatewayRouteRequest,
  CreateLocalGatewayRouteRequestFilterSensitiveLog,
  CreateLocalGatewayRouteResult,
  CreateLocalGatewayRouteResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateLocalGatewayRouteCommand,
  serializeAws_ec2CreateLocalGatewayRouteCommand,
} from "../protocols/Aws_ec2";

export interface CreateLocalGatewayRouteCommandInput extends CreateLocalGatewayRouteRequest {}
export interface CreateLocalGatewayRouteCommandOutput extends CreateLocalGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Creates a static route for the specified local gateway route table. You must specify one of the
 *          following targets: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LocalGatewayVirtualInterfaceGroupId</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NetworkInterfaceId</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateLocalGatewayRouteCommand extends $Command<
  CreateLocalGatewayRouteCommandInput,
  CreateLocalGatewayRouteCommandOutput,
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

  constructor(readonly input: CreateLocalGatewayRouteCommandInput) {
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
  ): Handler<CreateLocalGatewayRouteCommandInput, CreateLocalGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLocalGatewayRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateLocalGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocalGatewayRouteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLocalGatewayRouteResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocalGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateLocalGatewayRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocalGatewayRouteCommandOutput> {
    return deserializeAws_ec2CreateLocalGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
