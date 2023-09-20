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
import { ModifyTransitGatewayRequest, ModifyTransitGatewayResult } from "../models/models_6";
import { de_ModifyTransitGatewayCommand, se_ModifyTransitGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayCommand}.
 */
export interface ModifyTransitGatewayCommandInput extends ModifyTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayCommand}.
 */
export interface ModifyTransitGatewayCommandOutput extends ModifyTransitGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayRequest
 *   TransitGatewayId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Options: { // ModifyTransitGatewayOptions
 *     AddTransitGatewayCidrBlocks: [ // TransitGatewayCidrBlockStringList
 *       "STRING_VALUE",
 *     ],
 *     RemoveTransitGatewayCidrBlocks: [
 *       "STRING_VALUE",
 *     ],
 *     VpnEcmpSupport: "enable" || "disable",
 *     DnsSupport: "enable" || "disable",
 *     AutoAcceptSharedAttachments: "enable" || "disable",
 *     DefaultRouteTableAssociation: "enable" || "disable",
 *     AssociationDefaultRouteTableId: "STRING_VALUE",
 *     DefaultRouteTablePropagation: "enable" || "disable",
 *     PropagationDefaultRouteTableId: "STRING_VALUE",
 *     AmazonSideAsn: Number("long"),
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayResult
 * //   TransitGateway: { // TransitGateway
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayOptions
 * //       AmazonSideAsn: Number("long"),
 * //       TransitGatewayCidrBlocks: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AutoAcceptSharedAttachments: "enable" || "disable",
 * //       DefaultRouteTableAssociation: "enable" || "disable",
 * //       AssociationDefaultRouteTableId: "STRING_VALUE",
 * //       DefaultRouteTablePropagation: "enable" || "disable",
 * //       PropagationDefaultRouteTableId: "STRING_VALUE",
 * //       VpnEcmpSupport: "enable" || "disable",
 * //       DnsSupport: "enable" || "disable",
 * //       MulticastSupport: "enable" || "disable",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayCommandInput - {@link ModifyTransitGatewayCommandInput}
 * @returns {@link ModifyTransitGatewayCommandOutput}
 * @see {@link ModifyTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyTransitGatewayCommand extends $Command<
  ModifyTransitGatewayCommandInput,
  ModifyTransitGatewayCommandOutput,
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
  constructor(readonly input: ModifyTransitGatewayCommandInput) {
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
  ): Handler<ModifyTransitGatewayCommandInput, ModifyTransitGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTransitGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTransitGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyTransitGateway",
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
  private serialize(input: ModifyTransitGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyTransitGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyTransitGatewayCommandOutput> {
    return de_ModifyTransitGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
