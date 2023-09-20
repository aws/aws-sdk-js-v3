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
import { ModifyLocalGatewayRouteRequest, ModifyLocalGatewayRouteResult } from "../models/models_6";
import { de_ModifyLocalGatewayRouteCommand, se_ModifyLocalGatewayRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyLocalGatewayRouteCommand}.
 */
export interface ModifyLocalGatewayRouteCommandInput extends ModifyLocalGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link ModifyLocalGatewayRouteCommand}.
 */
export interface ModifyLocalGatewayRouteCommandOutput extends ModifyLocalGatewayRouteResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified local gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyLocalGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
 *   LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE",
 *   DryRun: true || false,
 *   DestinationPrefixListId: "STRING_VALUE",
 * };
 * const command = new ModifyLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLocalGatewayRouteResult
 * //   Route: { // LocalGatewayRoute
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     Type: "static" || "propagated",
 * //     State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     CoipPoolId: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     DestinationPrefixListId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyLocalGatewayRouteCommandInput - {@link ModifyLocalGatewayRouteCommandInput}
 * @returns {@link ModifyLocalGatewayRouteCommandOutput}
 * @see {@link ModifyLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link ModifyLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyLocalGatewayRouteCommand extends $Command<
  ModifyLocalGatewayRouteCommandInput,
  ModifyLocalGatewayRouteCommandOutput,
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
  constructor(readonly input: ModifyLocalGatewayRouteCommandInput) {
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
  ): Handler<ModifyLocalGatewayRouteCommandInput, ModifyLocalGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyLocalGatewayRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyLocalGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyLocalGatewayRoute",
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
  private serialize(input: ModifyLocalGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyLocalGatewayRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyLocalGatewayRouteCommandOutput> {
    return de_ModifyLocalGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
