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
  DescribeTransitGatewayConnectPeersRequest,
  DescribeTransitGatewayConnectPeersResult,
} from "../models/models_4";
import {
  de_DescribeTransitGatewayConnectPeersCommand,
  se_DescribeTransitGatewayConnectPeersCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayConnectPeersCommand}.
 */
export interface DescribeTransitGatewayConnectPeersCommandInput extends DescribeTransitGatewayConnectPeersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayConnectPeersCommand}.
 */
export interface DescribeTransitGatewayConnectPeersCommandOutput
  extends DescribeTransitGatewayConnectPeersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more Connect peers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayConnectPeersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayConnectPeersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayConnectPeersRequest
 *   TransitGatewayConnectPeerIds: [ // TransitGatewayConnectPeerIdStringList
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
 * const command = new DescribeTransitGatewayConnectPeersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayConnectPeersResult
 * //   TransitGatewayConnectPeers: [ // TransitGatewayConnectPeerList
 * //     { // TransitGatewayConnectPeer
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransitGatewayConnectPeerId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ConnectPeerConfiguration: { // TransitGatewayConnectPeerConfiguration
 * //         TransitGatewayAddress: "STRING_VALUE",
 * //         PeerAddress: "STRING_VALUE",
 * //         InsideCidrBlocks: [ // InsideCidrBlocksStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         Protocol: "gre",
 * //         BgpConfigurations: [ // TransitGatewayAttachmentBgpConfigurationList
 * //           { // TransitGatewayAttachmentBgpConfiguration
 * //             TransitGatewayAsn: Number("long"),
 * //             PeerAsn: Number("long"),
 * //             TransitGatewayAddress: "STRING_VALUE",
 * //             PeerAddress: "STRING_VALUE",
 * //             BgpStatus: "up" || "down",
 * //           },
 * //         ],
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
 * @param DescribeTransitGatewayConnectPeersCommandInput - {@link DescribeTransitGatewayConnectPeersCommandInput}
 * @returns {@link DescribeTransitGatewayConnectPeersCommandOutput}
 * @see {@link DescribeTransitGatewayConnectPeersCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayConnectPeersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewayConnectPeersCommand extends $Command<
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayConnectPeersCommandInput) {
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
  ): Handler<DescribeTransitGatewayConnectPeersCommandInput, DescribeTransitGatewayConnectPeersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTransitGatewayConnectPeersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayConnectPeersCommand";
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
    input: DescribeTransitGatewayConnectPeersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayConnectPeersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayConnectPeersCommandOutput> {
    return de_DescribeTransitGatewayConnectPeersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
