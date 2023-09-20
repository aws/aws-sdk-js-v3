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
import { DisableVgwRoutePropagationRequest } from "../models/models_5";
import { de_DisableVgwRoutePropagationCommand, se_DisableVgwRoutePropagationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableVgwRoutePropagationCommand}.
 */
export interface DisableVgwRoutePropagationCommandInput extends DisableVgwRoutePropagationRequest {}
/**
 * @public
 *
 * The output of {@link DisableVgwRoutePropagationCommand}.
 */
export interface DisableVgwRoutePropagationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disables a virtual private gateway (VGW) from propagating routes to a specified route
 *             table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableVgwRoutePropagationRequest
 *   GatewayId: "STRING_VALUE", // required
 *   RouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableVgwRoutePropagationCommandInput - {@link DisableVgwRoutePropagationCommandInput}
 * @returns {@link DisableVgwRoutePropagationCommandOutput}
 * @see {@link DisableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To disable route propagation
 * ```javascript
 * // This example disables the specified virtual private gateway from propagating static routes to the specified route table.
 * const input = {
 *   "GatewayId": "vgw-9a4cacf3",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new DisableVgwRoutePropagationCommand(input);
 * await client.send(command);
 * // example id: ec2-disable-vgw-route-propagation-1
 * ```
 *
 */
export class DisableVgwRoutePropagationCommand extends $Command<
  DisableVgwRoutePropagationCommandInput,
  DisableVgwRoutePropagationCommandOutput,
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
  constructor(readonly input: DisableVgwRoutePropagationCommandInput) {
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
  ): Handler<DisableVgwRoutePropagationCommandInput, DisableVgwRoutePropagationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableVgwRoutePropagationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableVgwRoutePropagationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableVgwRoutePropagation",
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
  private serialize(input: DisableVgwRoutePropagationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableVgwRoutePropagationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableVgwRoutePropagationCommandOutput> {
    return de_DisableVgwRoutePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
