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
import { DescribeTransitGatewaysRequest, DescribeTransitGatewaysResult } from "../models/models_4";
import { de_DescribeTransitGatewaysCommand, se_DescribeTransitGatewaysCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewaysCommand}.
 */
export interface DescribeTransitGatewaysCommandInput extends DescribeTransitGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewaysCommand}.
 */
export interface DescribeTransitGatewaysCommandOutput extends DescribeTransitGatewaysResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can
 *          filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewaysRequest
 *   TransitGatewayIds: [ // TransitGatewayIdStringList
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
 * const command = new DescribeTransitGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewaysResult
 * //   TransitGateways: [ // TransitGatewayList
 * //     { // TransitGateway
 * //       TransitGatewayId: "STRING_VALUE",
 * //       TransitGatewayArn: "STRING_VALUE",
 * //       State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //       OwnerId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Options: { // TransitGatewayOptions
 * //         AmazonSideAsn: Number("long"),
 * //         TransitGatewayCidrBlocks: [ // ValueStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         AutoAcceptSharedAttachments: "enable" || "disable",
 * //         DefaultRouteTableAssociation: "enable" || "disable",
 * //         AssociationDefaultRouteTableId: "STRING_VALUE",
 * //         DefaultRouteTablePropagation: "enable" || "disable",
 * //         PropagationDefaultRouteTableId: "STRING_VALUE",
 * //         VpnEcmpSupport: "enable" || "disable",
 * //         DnsSupport: "enable" || "disable",
 * //         MulticastSupport: "enable" || "disable",
 * //       },
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
 * @param DescribeTransitGatewaysCommandInput - {@link DescribeTransitGatewaysCommandInput}
 * @returns {@link DescribeTransitGatewaysCommandOutput}
 * @see {@link DescribeTransitGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewaysCommand extends $Command<
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewaysCommandInput) {
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
  ): Handler<DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTransitGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeTransitGateways",
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
  private serialize(input: DescribeTransitGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTransitGatewaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTransitGatewaysCommandOutput> {
    return de_DescribeTransitGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
