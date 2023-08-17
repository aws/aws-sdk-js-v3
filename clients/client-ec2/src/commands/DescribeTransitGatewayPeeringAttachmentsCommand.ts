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
  DescribeTransitGatewayPeeringAttachmentsRequest,
  DescribeTransitGatewayPeeringAttachmentsResult,
} from "../models/models_4";
import {
  de_DescribeTransitGatewayPeeringAttachmentsCommand,
  se_DescribeTransitGatewayPeeringAttachmentsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayPeeringAttachmentsCommand}.
 */
export interface DescribeTransitGatewayPeeringAttachmentsCommandInput
  extends DescribeTransitGatewayPeeringAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayPeeringAttachmentsCommand}.
 */
export interface DescribeTransitGatewayPeeringAttachmentsCommandOutput
  extends DescribeTransitGatewayPeeringAttachmentsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes your transit gateway peering attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayPeeringAttachmentsRequest
 *   TransitGatewayAttachmentIds: [ // TransitGatewayAttachmentIdStringList
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
 * const command = new DescribeTransitGatewayPeeringAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayPeeringAttachmentsResult
 * //   TransitGatewayPeeringAttachments: [ // TransitGatewayPeeringAttachmentList
 * //     { // TransitGatewayPeeringAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       AccepterTransitGatewayAttachmentId: "STRING_VALUE",
 * //       RequesterTgwInfo: { // PeeringTgwInfo
 * //         TransitGatewayId: "STRING_VALUE",
 * //         CoreNetworkId: "STRING_VALUE",
 * //         OwnerId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       AccepterTgwInfo: {
 * //         TransitGatewayId: "STRING_VALUE",
 * //         CoreNetworkId: "STRING_VALUE",
 * //         OwnerId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       Options: { // TransitGatewayPeeringAttachmentOptions
 * //         DynamicRouting: "enable" || "disable",
 * //       },
 * //       Status: { // PeeringAttachmentStatus
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
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
 * @param DescribeTransitGatewayPeeringAttachmentsCommandInput - {@link DescribeTransitGatewayPeeringAttachmentsCommandInput}
 * @returns {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput}
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command<
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayPeeringAttachmentsCommandInput) {
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
    DescribeTransitGatewayPeeringAttachmentsCommandInput,
    DescribeTransitGatewayPeeringAttachmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeTransitGatewayPeeringAttachmentsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayPeeringAttachmentsCommand";
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
    input: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayPeeringAttachmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput> {
    return de_DescribeTransitGatewayPeeringAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
