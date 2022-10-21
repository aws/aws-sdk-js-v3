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
  CreateTransitGatewayRouteTableAnnouncementRequest,
  CreateTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog,
  CreateTransitGatewayRouteTableAnnouncementResult,
  CreateTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateTransitGatewayRouteTableAnnouncementCommand,
  serializeAws_ec2CreateTransitGatewayRouteTableAnnouncementCommand,
} from "../protocols/Aws_ec2";

export interface CreateTransitGatewayRouteTableAnnouncementCommandInput
  extends CreateTransitGatewayRouteTableAnnouncementRequest {}
export interface CreateTransitGatewayRouteTableAnnouncementCommandOutput
  extends CreateTransitGatewayRouteTableAnnouncementResult,
    __MetadataBearer {}

/**
 * <p>Advertises a new transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayRouteTableAnnouncementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayRouteTableAnnouncementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayRouteTableAnnouncementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayRouteTableAnnouncementCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayRouteTableAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateTransitGatewayRouteTableAnnouncementCommand extends $Command<
  CreateTransitGatewayRouteTableAnnouncementCommandInput,
  CreateTransitGatewayRouteTableAnnouncementCommandOutput,
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

  constructor(readonly input: CreateTransitGatewayRouteTableAnnouncementCommandInput) {
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
    CreateTransitGatewayRouteTableAnnouncementCommandInput,
    CreateTransitGatewayRouteTableAnnouncementCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateTransitGatewayRouteTableAnnouncementCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayRouteTableAnnouncementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayRouteTableAnnouncementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayRouteTableAnnouncementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayRouteTableAnnouncementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayRouteTableAnnouncementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayRouteTableAnnouncementCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayRouteTableAnnouncementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
