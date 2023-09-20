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

import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/models_0";
import { de_DescribeDBClusterEndpointsCommand, se_DescribeDBClusterEndpointsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterEndpointsCommand}.
 */
export interface DescribeDBClusterEndpointsCommandInput extends DescribeDBClusterEndpointsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterEndpointsCommand}.
 */
export interface DescribeDBClusterEndpointsCommandOutput extends DBClusterEndpointMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterEndpointsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterEndpointsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterEndpointsMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   DBClusterEndpointIdentifier: "STRING_VALUE",
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
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterEndpointMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterEndpoints: [ // DBClusterEndpointList
 * //     { // DBClusterEndpoint
 * //       DBClusterEndpointIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       EndpointType: "STRING_VALUE",
 * //       CustomEndpointType: "STRING_VALUE",
 * //       StaticMembers: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ExcludedMembers: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterEndpointArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterEndpointsCommandInput - {@link DescribeDBClusterEndpointsCommandInput}
 * @returns {@link DescribeDBClusterEndpointsCommandOutput}
 * @see {@link DescribeDBClusterEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterEndpointsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe DB cluster endpoints
 * ```javascript
 * // The following example retrieves details for your DB cluster endpoints. The most common kinds of Aurora clusters have two endpoints. One endpoint has type WRITER. You can use this endpoint for all SQL statements. The other endpoint has type READER. You can use this endpoint only for SELECT and other read-only SQL statements.
 * const input = {};
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterEndpoints": [
 *     {
 *       "DBClusterIdentifier": "my-database-1",
 *       "Endpoint": "my-database-1.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "WRITER",
 *       "Status": "creating"
 *     },
 *     {
 *       "DBClusterIdentifier": "my-database-1",
 *       "Endpoint": "my-database-1.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "READER",
 *       "Status": "creating"
 *     },
 *     {
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Endpoint": "mydbcluster.cluster-cnpexamle.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "WRITER",
 *       "Status": "available"
 *     },
 *     {
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Endpoint": "mydbcluster.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "READER",
 *       "Status": "available"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-db-cluster-endpoints-1680212701970
 * ```
 *
 * @example To describe DB cluster endpoints of a single DB cluster
 * ```javascript
 * // The following example retrieves details for the DB cluster endpoints of a single specified DB cluster. Aurora Serverless clusters have only a single endpoint with a type of WRITER.
 * const input = {
 *   "DBClusterIdentifier": "serverless-cluster"
 * };
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterEndpoints": [
 *     {
 *       "DBClusterIdentifier": "serverless-cluster",
 *       "Endpoint": "serverless-cluster.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "WRITER",
 *       "Status": "available"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-db-cluster-endpoints-of-a-single-db-cluster-1680212863842
 * ```
 *
 */
export class DescribeDBClusterEndpointsCommand extends $Command<
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
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
  constructor(readonly input: DescribeDBClusterEndpointsCommandInput) {
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
  ): Handler<DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterEndpoints",
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
  private serialize(input: DescribeDBClusterEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClusterEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterEndpointsCommandOutput> {
    return de_DescribeDBClusterEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
