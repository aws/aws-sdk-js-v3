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
  DescribeTransitGatewayRouteTableAnnouncementsRequest,
  DescribeTransitGatewayRouteTableAnnouncementsResult,
} from "../models/models_4";
import {
  de_DescribeTransitGatewayRouteTableAnnouncementsCommand,
  se_DescribeTransitGatewayRouteTableAnnouncementsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}.
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsCommandInput
  extends DescribeTransitGatewayRouteTableAnnouncementsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}.
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsCommandOutput
  extends DescribeTransitGatewayRouteTableAnnouncementsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more transit gateway route table advertisements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayRouteTableAnnouncementsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayRouteTableAnnouncementsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayRouteTableAnnouncementsRequest
 *   TransitGatewayRouteTableAnnouncementIds: [ // TransitGatewayRouteTableAnnouncementIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeTransitGatewayRouteTableAnnouncementsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayRouteTableAnnouncementsResult
 * //   TransitGatewayRouteTableAnnouncements: [ // TransitGatewayRouteTableAnnouncementList
 * //     { // TransitGatewayRouteTableAnnouncement
 * //       TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       PeerTransitGatewayId: "STRING_VALUE",
 * //       PeerCoreNetworkId: "STRING_VALUE",
 * //       PeeringAttachmentId: "STRING_VALUE",
 * //       AnnouncementDirection: "outgoing" || "incoming",
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       State: "available" || "pending" || "failing" || "failed" || "deleting" || "deleted",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTransitGatewayRouteTableAnnouncementsCommandInput - {@link DescribeTransitGatewayRouteTableAnnouncementsCommandInput}
 * @returns {@link DescribeTransitGatewayRouteTableAnnouncementsCommandOutput}
 * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewayRouteTableAnnouncementsCommand extends $Command<
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayRouteTableAnnouncementsCommandInput) {
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
    DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    DescribeTransitGatewayRouteTableAnnouncementsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeTransitGatewayRouteTableAnnouncementsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayRouteTableAnnouncementsCommand";
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
    input: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayRouteTableAnnouncementsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayRouteTableAnnouncementsCommandOutput> {
    return de_DescribeTransitGatewayRouteTableAnnouncementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
