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

import { DescribeDBProxyTargetGroupsRequest, DescribeDBProxyTargetGroupsResponse } from "../models/models_1";
import { de_DescribeDBProxyTargetGroupsCommand, se_DescribeDBProxyTargetGroupsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBProxyTargetGroupsCommand}.
 */
export interface DescribeDBProxyTargetGroupsCommandInput extends DescribeDBProxyTargetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBProxyTargetGroupsCommand}.
 */
export interface DescribeDBProxyTargetGroupsCommandOutput
  extends DescribeDBProxyTargetGroupsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyTargetGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBProxyTargetGroupsRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   TargetGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeDBProxyTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBProxyTargetGroupsResponse
 * //   TargetGroups: [ // TargetGroupList
 * //     { // DBProxyTargetGroup
 * //       DBProxyName: "STRING_VALUE",
 * //       TargetGroupName: "STRING_VALUE",
 * //       TargetGroupArn: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       Status: "STRING_VALUE",
 * //       ConnectionPoolConfig: { // ConnectionPoolConfigurationInfo
 * //         MaxConnectionsPercent: Number("int"),
 * //         MaxIdleConnectionsPercent: Number("int"),
 * //         ConnectionBorrowTimeout: Number("int"),
 * //         SessionPinningFilters: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         InitQuery: "STRING_VALUE",
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       UpdatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBProxyTargetGroupsCommandInput - {@link DescribeDBProxyTargetGroupsCommandInput}
 * @returns {@link DescribeDBProxyTargetGroupsCommandOutput}
 * @see {@link DescribeDBProxyTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DescribeDBProxyTargetGroupsCommand extends $Command<
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeDBProxyTargetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBProxyTargetGroupsCommandInput, DescribeDBProxyTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBProxyTargetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBProxyTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBProxyTargetGroups",
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
  private serialize(input: DescribeDBProxyTargetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBProxyTargetGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBProxyTargetGroupsCommandOutput> {
    return de_DescribeDBProxyTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
