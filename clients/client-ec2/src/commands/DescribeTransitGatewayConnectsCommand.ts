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
import { DescribeTransitGatewayConnectsRequest, DescribeTransitGatewayConnectsResult } from "../models/models_4";
import {
  de_DescribeTransitGatewayConnectsCommand,
  se_DescribeTransitGatewayConnectsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayConnectsCommand}.
 */
export interface DescribeTransitGatewayConnectsCommandInput extends DescribeTransitGatewayConnectsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayConnectsCommand}.
 */
export interface DescribeTransitGatewayConnectsCommandOutput
  extends DescribeTransitGatewayConnectsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more Connect attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayConnectsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayConnectsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayConnectsRequest
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
 * const command = new DescribeTransitGatewayConnectsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayConnectsResult
 * //   TransitGatewayConnects: [ // TransitGatewayConnectList
 * //     { // TransitGatewayConnect
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransportTransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Options: { // TransitGatewayConnectOptions
 * //         Protocol: "gre",
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
 * @param DescribeTransitGatewayConnectsCommandInput - {@link DescribeTransitGatewayConnectsCommandInput}
 * @returns {@link DescribeTransitGatewayConnectsCommandOutput}
 * @see {@link DescribeTransitGatewayConnectsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayConnectsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewayConnectsCommand extends $Command<
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayConnectsCommandInput) {
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
  ): Handler<DescribeTransitGatewayConnectsCommandInput, DescribeTransitGatewayConnectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTransitGatewayConnectsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayConnectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeTransitGatewayConnects",
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
    input: DescribeTransitGatewayConnectsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayConnectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayConnectsCommandOutput> {
    return de_DescribeTransitGatewayConnectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
