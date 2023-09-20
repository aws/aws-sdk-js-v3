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
import { ModifyTransitGatewayVpcAttachmentRequest, ModifyTransitGatewayVpcAttachmentResult } from "../models/models_6";
import {
  de_ModifyTransitGatewayVpcAttachmentCommand,
  se_ModifyTransitGatewayVpcAttachmentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayVpcAttachmentCommand}.
 */
export interface ModifyTransitGatewayVpcAttachmentCommandInput extends ModifyTransitGatewayVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayVpcAttachmentCommand}.
 */
export interface ModifyTransitGatewayVpcAttachmentCommandOutput
  extends ModifyTransitGatewayVpcAttachmentResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayVpcAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   AddSubnetIds: [ // TransitGatewaySubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   Options: { // ModifyTransitGatewayVpcAttachmentRequestOptions
 *     DnsSupport: "enable" || "disable",
 *     Ipv6Support: "enable" || "disable",
 *     ApplianceModeSupport: "enable" || "disable",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayVpcAttachmentResult
 * //   TransitGatewayVpcAttachment: { // TransitGatewayVpcAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     VpcOwnerId: "STRING_VALUE",
 * //     State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //     SubnetIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayVpcAttachmentOptions
 * //       DnsSupport: "enable" || "disable",
 * //       Ipv6Support: "enable" || "disable",
 * //       ApplianceModeSupport: "enable" || "disable",
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
 * @param ModifyTransitGatewayVpcAttachmentCommandInput - {@link ModifyTransitGatewayVpcAttachmentCommandInput}
 * @returns {@link ModifyTransitGatewayVpcAttachmentCommandOutput}
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyTransitGatewayVpcAttachmentCommand extends $Command<
  ModifyTransitGatewayVpcAttachmentCommandInput,
  ModifyTransitGatewayVpcAttachmentCommandOutput,
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
  constructor(readonly input: ModifyTransitGatewayVpcAttachmentCommandInput) {
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
  ): Handler<ModifyTransitGatewayVpcAttachmentCommandInput, ModifyTransitGatewayVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTransitGatewayVpcAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTransitGatewayVpcAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyTransitGatewayVpcAttachment",
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
    input: ModifyTransitGatewayVpcAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyTransitGatewayVpcAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTransitGatewayVpcAttachmentCommandOutput> {
    return de_ModifyTransitGatewayVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
