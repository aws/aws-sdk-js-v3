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
  DescribeTransitGatewayMulticastDomainsRequest,
  DescribeTransitGatewayMulticastDomainsResult,
} from "../models/models_4";
import {
  de_DescribeTransitGatewayMulticastDomainsCommand,
  se_DescribeTransitGatewayMulticastDomainsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayMulticastDomainsCommand}.
 */
export interface DescribeTransitGatewayMulticastDomainsCommandInput
  extends DescribeTransitGatewayMulticastDomainsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayMulticastDomainsCommand}.
 */
export interface DescribeTransitGatewayMulticastDomainsCommandOutput
  extends DescribeTransitGatewayMulticastDomainsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more transit gateway multicast domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayMulticastDomainsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayMulticastDomainsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayMulticastDomainsRequest
 *   TransitGatewayMulticastDomainIds: [ // TransitGatewayMulticastDomainIdStringList
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
 * const command = new DescribeTransitGatewayMulticastDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayMulticastDomainsResult
 * //   TransitGatewayMulticastDomains: [ // TransitGatewayMulticastDomainList
 * //     { // TransitGatewayMulticastDomain
 * //       TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       TransitGatewayMulticastDomainArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Options: { // TransitGatewayMulticastDomainOptions
 * //         Igmpv2Support: "enable" || "disable",
 * //         StaticSourcesSupport: "enable" || "disable",
 * //         AutoAcceptSharedAssociations: "enable" || "disable",
 * //       },
 * //       State: "pending" || "available" || "deleting" || "deleted",
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
 * @param DescribeTransitGatewayMulticastDomainsCommandInput - {@link DescribeTransitGatewayMulticastDomainsCommandInput}
 * @returns {@link DescribeTransitGatewayMulticastDomainsCommandOutput}
 * @see {@link DescribeTransitGatewayMulticastDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayMulticastDomainsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTransitGatewayMulticastDomainsCommand extends $Command<
  DescribeTransitGatewayMulticastDomainsCommandInput,
  DescribeTransitGatewayMulticastDomainsCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayMulticastDomainsCommandInput) {
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
  ): Handler<DescribeTransitGatewayMulticastDomainsCommandInput, DescribeTransitGatewayMulticastDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTransitGatewayMulticastDomainsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayMulticastDomainsCommand";
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
    input: DescribeTransitGatewayMulticastDomainsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayMulticastDomainsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayMulticastDomainsCommandOutput> {
    return de_DescribeTransitGatewayMulticastDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
