// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  EnableTransitGatewayRouteTablePropagationRequest,
  EnableTransitGatewayRouteTablePropagationResult,
} from "../models/models_5";
import {
  de_EnableTransitGatewayRouteTablePropagationCommand,
  se_EnableTransitGatewayRouteTablePropagationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableTransitGatewayRouteTablePropagationCommand}.
 */
export interface EnableTransitGatewayRouteTablePropagationCommandInput
  extends EnableTransitGatewayRouteTablePropagationRequest {}
/**
 * @public
 *
 * The output of {@link EnableTransitGatewayRouteTablePropagationCommand}.
 */
export interface EnableTransitGatewayRouteTablePropagationCommandOutput
  extends EnableTransitGatewayRouteTablePropagationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables the specified attachment to propagate routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableTransitGatewayRouteTablePropagationRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   DryRun: true || false,
 *   TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * };
 * const command = new EnableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * // { // EnableTransitGatewayRouteTablePropagationResult
 * //   Propagation: { // TransitGatewayPropagation
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     State: "enabling" || "enabled" || "disabling" || "disabled",
 * //     TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableTransitGatewayRouteTablePropagationCommandInput - {@link EnableTransitGatewayRouteTablePropagationCommandInput}
 * @returns {@link EnableTransitGatewayRouteTablePropagationCommandOutput}
 * @see {@link EnableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableTransitGatewayRouteTablePropagationCommand extends $Command<
  EnableTransitGatewayRouteTablePropagationCommandInput,
  EnableTransitGatewayRouteTablePropagationCommandOutput,
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
  constructor(readonly input: EnableTransitGatewayRouteTablePropagationCommandInput) {
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
    EnableTransitGatewayRouteTablePropagationCommandInput,
    EnableTransitGatewayRouteTablePropagationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        EnableTransitGatewayRouteTablePropagationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableTransitGatewayRouteTablePropagationCommand";
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
  private serialize(
    input: EnableTransitGatewayRouteTablePropagationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableTransitGatewayRouteTablePropagationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableTransitGatewayRouteTablePropagationCommandOutput> {
    return de_EnableTransitGatewayRouteTablePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
