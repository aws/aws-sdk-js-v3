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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisableTransitGatewayRouteTablePropagationRequest,
  DisableTransitGatewayRouteTablePropagationResult,
} from "../models/models_5";
import {
  de_DisableTransitGatewayRouteTablePropagationCommand,
  se_DisableTransitGatewayRouteTablePropagationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableTransitGatewayRouteTablePropagationCommand}.
 */
export interface DisableTransitGatewayRouteTablePropagationCommandInput
  extends DisableTransitGatewayRouteTablePropagationRequest {}
/**
 * @public
 *
 * The output of {@link DisableTransitGatewayRouteTablePropagationCommand}.
 */
export interface DisableTransitGatewayRouteTablePropagationCommandOutput
  extends DisableTransitGatewayRouteTablePropagationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disables the specified resource attachment from propagating routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableTransitGatewayRouteTablePropagationRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   DryRun: true || false,
 *   TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * };
 * const command = new DisableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * // { // DisableTransitGatewayRouteTablePropagationResult
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
 * @param DisableTransitGatewayRouteTablePropagationCommandInput - {@link DisableTransitGatewayRouteTablePropagationCommandInput}
 * @returns {@link DisableTransitGatewayRouteTablePropagationCommandOutput}
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableTransitGatewayRouteTablePropagationCommand extends $Command<
  DisableTransitGatewayRouteTablePropagationCommandInput,
  DisableTransitGatewayRouteTablePropagationCommandOutput,
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
  constructor(readonly input: DisableTransitGatewayRouteTablePropagationCommandInput) {
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
    DisableTransitGatewayRouteTablePropagationCommandInput,
    DisableTransitGatewayRouteTablePropagationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisableTransitGatewayRouteTablePropagationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableTransitGatewayRouteTablePropagationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableTransitGatewayRouteTablePropagation",
      },
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
    input: DisableTransitGatewayRouteTablePropagationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableTransitGatewayRouteTablePropagationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableTransitGatewayRouteTablePropagationCommandOutput> {
    return de_DisableTransitGatewayRouteTablePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
