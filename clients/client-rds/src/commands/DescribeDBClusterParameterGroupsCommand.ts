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

import { DBClusterParameterGroupsMessage, DescribeDBClusterParameterGroupsMessage } from "../models/models_0";
import {
  de_DescribeDBClusterParameterGroupsCommand,
  se_DescribeDBClusterParameterGroupsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterParameterGroupsCommand}.
 */
export interface DescribeDBClusterParameterGroupsCommandInput extends DescribeDBClusterParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterParameterGroupsCommand}.
 */
export interface DescribeDBClusterParameterGroupsCommandOutput
  extends DBClusterParameterGroupsMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
 *             <code>DBClusterParameterGroupName</code> parameter is specified,
 *             the list will contain only the description of the specified DB cluster parameter group.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterParameterGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterParameterGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterParameterGroupsMessage
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterParameterGroups: [ // DBClusterParameterGroupList
 * //     { // DBClusterParameterGroup
 * //       DBClusterParameterGroupName: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DBClusterParameterGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterParameterGroupsCommandInput - {@link DescribeDBClusterParameterGroupsCommandInput}
 * @returns {@link DescribeDBClusterParameterGroupsCommandOutput}
 * @see {@link DescribeDBClusterParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe DB cluster parameter groups
 * ```javascript
 * // The following example retrieves details for your DB cluster parameter groups.
 * const input = {};
 * const command = new DescribeDBClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterParameterGroups": [
 *     {
 *       "DBClusterParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:cluster-pg:default.aurora-mysql5.7",
 *       "DBClusterParameterGroupName": "default.aurora-mysql5.7",
 *       "DBParameterGroupFamily": "aurora-mysql5.7",
 *       "Description": "Default cluster parameter group for aurora-mysql5.7"
 *     },
 *     {
 *       "DBClusterParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:cluster-pg:default.aurora-postgresql9.6",
 *       "DBClusterParameterGroupName": "default.aurora-postgresql9.6",
 *       "DBParameterGroupFamily": "aurora-postgresql9.6",
 *       "Description": "Default cluster parameter group for aurora-postgresql9.6"
 *     },
 *     {
 *       "DBClusterParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:cluster-pg:default.aurora5.6",
 *       "DBClusterParameterGroupName": "default.aurora5.6",
 *       "DBParameterGroupFamily": "aurora5.6",
 *       "Description": "Default cluster parameter group for aurora5.6"
 *     },
 *     {
 *       "DBClusterParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterpg",
 *       "DBClusterParameterGroupName": "mydbclusterpg",
 *       "DBParameterGroupFamily": "aurora-mysql5.7",
 *       "Description": "My DB cluster parameter group"
 *     },
 *     {
 *       "DBClusterParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterpgcopy",
 *       "DBClusterParameterGroupName": "mydbclusterpgcopy",
 *       "DBParameterGroupFamily": "aurora-mysql5.7",
 *       "Description": "Copy of mydbclusterpg parameter group"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-db-cluster-parameter-groups-1680213090883
 * ```
 *
 */
export class DescribeDBClusterParameterGroupsCommand extends $Command<
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
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
  constructor(readonly input: DescribeDBClusterParameterGroupsCommandInput) {
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
  ): Handler<DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterParameterGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterParameterGroupsCommand";
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
    input: DescribeDBClusterParameterGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDBClusterParameterGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput> {
    return de_DescribeDBClusterParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
