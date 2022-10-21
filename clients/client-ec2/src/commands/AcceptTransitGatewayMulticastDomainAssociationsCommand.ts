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
  AcceptTransitGatewayMulticastDomainAssociationsRequest,
  AcceptTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog,
  AcceptTransitGatewayMulticastDomainAssociationsResult,
  AcceptTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand,
  serializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand,
} from "../protocols/Aws_ec2";

export interface AcceptTransitGatewayMulticastDomainAssociationsCommandInput
  extends AcceptTransitGatewayMulticastDomainAssociationsRequest {}
export interface AcceptTransitGatewayMulticastDomainAssociationsCommandOutput
  extends AcceptTransitGatewayMulticastDomainAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Accepts a request to associate subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AcceptTransitGatewayMulticastDomainAssociationsCommand extends $Command<
  AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
  AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
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

  constructor(readonly input: AcceptTransitGatewayMulticastDomainAssociationsCommandInput) {
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
    AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    AcceptTransitGatewayMulticastDomainAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AcceptTransitGatewayMulticastDomainAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptTransitGatewayMulticastDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptTransitGatewayMulticastDomainAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptTransitGatewayMulticastDomainAssociationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptTransitGatewayMulticastDomainAssociationsCommandOutput> {
    return deserializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
