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
import {
  DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  DescribeLocalGatewayRouteTableVpcAssociationsResult,
} from "../models/models_4";
import {
  de_DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  se_DescribeLocalGatewayRouteTableVpcAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}.
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandInput
  extends DescribeLocalGatewayRouteTableVpcAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}.
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  extends DescribeLocalGatewayRouteTableVpcAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayRouteTableVpcAssociationsRequest
 *   LocalGatewayRouteTableVpcAssociationIds: [ // LocalGatewayRouteTableVpcAssociationIdSet
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
 * const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayRouteTableVpcAssociationsResult
 * //   LocalGatewayRouteTableVpcAssociations: [ // LocalGatewayRouteTableVpcAssociationSet
 * //     { // LocalGatewayRouteTableVpcAssociation
 * //       LocalGatewayRouteTableVpcAssociationId: "STRING_VALUE",
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       LocalGatewayRouteTableArn: "STRING_VALUE",
 * //       LocalGatewayId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
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
 * @param DescribeLocalGatewayRouteTableVpcAssociationsCommandInput - {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput}
 * @returns {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput}
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeLocalGatewayRouteTableVpcAssociationsCommand extends $Command<
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
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
  constructor(readonly input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput) {
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
    DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeLocalGatewayRouteTableVpcAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayRouteTableVpcAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeLocalGatewayRouteTableVpcAssociations",
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
    input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLocalGatewayRouteTableVpcAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput> {
    return de_DescribeLocalGatewayRouteTableVpcAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
