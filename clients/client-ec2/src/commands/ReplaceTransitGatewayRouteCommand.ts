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
import { ReplaceTransitGatewayRouteRequest, ReplaceTransitGatewayRouteResult } from "../models/models_6";
import {
  deserializeAws_ec2ReplaceTransitGatewayRouteCommand,
  serializeAws_ec2ReplaceTransitGatewayRouteCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ReplaceTransitGatewayRouteCommand}.
 */
export interface ReplaceTransitGatewayRouteCommandInput extends ReplaceTransitGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceTransitGatewayRouteCommand}.
 */
export interface ReplaceTransitGatewayRouteCommandOutput extends ReplaceTransitGatewayRouteResult, __MetadataBearer {}

/**
 * @public
 * <p>Replaces the specified route in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceTransitGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ReplaceTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ReplaceTransitGatewayRouteCommandInput - {@link ReplaceTransitGatewayRouteCommandInput}
 * @returns {@link ReplaceTransitGatewayRouteCommandOutput}
 * @see {@link ReplaceTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link ReplaceTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ReplaceTransitGatewayRouteCommand extends $Command<
  ReplaceTransitGatewayRouteCommandInput,
  ReplaceTransitGatewayRouteCommandOutput,
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
  constructor(readonly input: ReplaceTransitGatewayRouteCommandInput) {
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
  ): Handler<ReplaceTransitGatewayRouteCommandInput, ReplaceTransitGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplaceTransitGatewayRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceTransitGatewayRouteCommand";
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
  private serialize(input: ReplaceTransitGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceTransitGatewayRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceTransitGatewayRouteCommandOutput> {
    return deserializeAws_ec2ReplaceTransitGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
