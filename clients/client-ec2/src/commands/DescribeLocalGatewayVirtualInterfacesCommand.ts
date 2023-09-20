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
  DescribeLocalGatewayVirtualInterfacesRequest,
  DescribeLocalGatewayVirtualInterfacesResult,
} from "../models/models_4";
import {
  de_DescribeLocalGatewayVirtualInterfacesCommand,
  se_DescribeLocalGatewayVirtualInterfacesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayVirtualInterfacesCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfacesCommandInput
  extends DescribeLocalGatewayVirtualInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayVirtualInterfacesCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfacesCommandOutput
  extends DescribeLocalGatewayVirtualInterfacesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified local gateway virtual interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayVirtualInterfacesRequest
 *   LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
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
 * const command = new DescribeLocalGatewayVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayVirtualInterfacesResult
 * //   LocalGatewayVirtualInterfaces: [ // LocalGatewayVirtualInterfaceSet
 * //     { // LocalGatewayVirtualInterface
 * //       LocalGatewayVirtualInterfaceId: "STRING_VALUE",
 * //       LocalGatewayId: "STRING_VALUE",
 * //       Vlan: Number("int"),
 * //       LocalAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       LocalBgpAsn: Number("int"),
 * //       PeerBgpAsn: Number("int"),
 * //       OwnerId: "STRING_VALUE",
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
 * @param DescribeLocalGatewayVirtualInterfacesCommandInput - {@link DescribeLocalGatewayVirtualInterfacesCommandInput}
 * @returns {@link DescribeLocalGatewayVirtualInterfacesCommandOutput}
 * @see {@link DescribeLocalGatewayVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeLocalGatewayVirtualInterfacesCommand extends $Command<
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput,
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
  constructor(readonly input: DescribeLocalGatewayVirtualInterfacesCommandInput) {
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
  ): Handler<DescribeLocalGatewayVirtualInterfacesCommandInput, DescribeLocalGatewayVirtualInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocalGatewayVirtualInterfacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayVirtualInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeLocalGatewayVirtualInterfaces",
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
    input: DescribeLocalGatewayVirtualInterfacesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLocalGatewayVirtualInterfacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayVirtualInterfacesCommandOutput> {
    return de_DescribeLocalGatewayVirtualInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
