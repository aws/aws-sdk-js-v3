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
  DescribeLocalGatewayVirtualInterfaceGroupsRequest,
  DescribeLocalGatewayVirtualInterfaceGroupsResult,
} from "../models/models_4";
import {
  de_DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  se_DescribeLocalGatewayVirtualInterfaceGroupsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsCommandInput
  extends DescribeLocalGatewayVirtualInterfaceGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput
  extends DescribeLocalGatewayVirtualInterfaceGroupsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified local gateway virtual interface groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayVirtualInterfaceGroupsRequest
 *   LocalGatewayVirtualInterfaceGroupIds: [ // LocalGatewayVirtualInterfaceGroupIdSet
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
 * const command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayVirtualInterfaceGroupsResult
 * //   LocalGatewayVirtualInterfaceGroups: [ // LocalGatewayVirtualInterfaceGroupSet
 * //     { // LocalGatewayVirtualInterfaceGroup
 * //       LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //       LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       LocalGatewayId: "STRING_VALUE",
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
 * @param DescribeLocalGatewayVirtualInterfaceGroupsCommandInput - {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandInput}
 * @returns {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput}
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeLocalGatewayVirtualInterfaceGroupsCommand extends $Command<
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
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
  constructor(readonly input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput) {
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
    DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeLocalGatewayVirtualInterfaceGroupsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayVirtualInterfaceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeLocalGatewayVirtualInterfaceGroups",
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
    input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLocalGatewayVirtualInterfaceGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput> {
    return de_DescribeLocalGatewayVirtualInterfaceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
