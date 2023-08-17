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
import { RejectTransitGatewayVpcAttachmentRequest, RejectTransitGatewayVpcAttachmentResult } from "../models/models_6";
import {
  de_RejectTransitGatewayVpcAttachmentCommand,
  se_RejectTransitGatewayVpcAttachmentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectTransitGatewayVpcAttachmentCommand}.
 */
export interface RejectTransitGatewayVpcAttachmentCommandInput extends RejectTransitGatewayVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectTransitGatewayVpcAttachmentCommand}.
 */
export interface RejectTransitGatewayVpcAttachmentCommandOutput
  extends RejectTransitGatewayVpcAttachmentResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Rejects a request to attach a VPC to a transit gateway.</p>
 *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
 *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
 *          Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectTransitGatewayVpcAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RejectTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // RejectTransitGatewayVpcAttachmentResult
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
 * @param RejectTransitGatewayVpcAttachmentCommandInput - {@link RejectTransitGatewayVpcAttachmentCommandInput}
 * @returns {@link RejectTransitGatewayVpcAttachmentCommandOutput}
 * @see {@link RejectTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RejectTransitGatewayVpcAttachmentCommand extends $Command<
  RejectTransitGatewayVpcAttachmentCommandInput,
  RejectTransitGatewayVpcAttachmentCommandOutput,
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
  constructor(readonly input: RejectTransitGatewayVpcAttachmentCommandInput) {
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
  ): Handler<RejectTransitGatewayVpcAttachmentCommandInput, RejectTransitGatewayVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectTransitGatewayVpcAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectTransitGatewayVpcAttachmentCommand";
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
    input: RejectTransitGatewayVpcAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RejectTransitGatewayVpcAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayVpcAttachmentCommandOutput> {
    return de_RejectTransitGatewayVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
