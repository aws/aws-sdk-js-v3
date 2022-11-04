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
  DeregisterTransitGatewayMulticastGroupSourcesRequest,
  DeregisterTransitGatewayMulticastGroupSourcesRequestFilterSensitiveLog,
  DeregisterTransitGatewayMulticastGroupSourcesResult,
  DeregisterTransitGatewayMulticastGroupSourcesResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand,
  serializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand,
} from "../protocols/Aws_ec2";

export interface DeregisterTransitGatewayMulticastGroupSourcesCommandInput
  extends DeregisterTransitGatewayMulticastGroupSourcesRequest {}
export interface DeregisterTransitGatewayMulticastGroupSourcesCommandOutput
  extends DeregisterTransitGatewayMulticastGroupSourcesResult,
    __MetadataBearer {}

/**
 * <p>Deregisters the specified sources (network interfaces) from the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeregisterTransitGatewayMulticastGroupSourcesCommand extends $Command<
  DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
  DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
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

  constructor(readonly input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput) {
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
    DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    DeregisterTransitGatewayMulticastGroupSourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeregisterTransitGatewayMulticastGroupSourcesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterTransitGatewayMulticastGroupSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupSourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupSourcesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterTransitGatewayMulticastGroupSourcesCommandOutput> {
    return deserializeAws_ec2DeregisterTransitGatewayMulticastGroupSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
