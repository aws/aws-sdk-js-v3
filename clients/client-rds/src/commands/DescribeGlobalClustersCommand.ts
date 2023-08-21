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

import { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/models_1";
import { de_DescribeGlobalClustersCommand, se_DescribeGlobalClustersCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeGlobalClustersCommand}.
 */
export interface DescribeGlobalClustersCommandInput extends DescribeGlobalClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalClustersCommand}.
 */
export interface DescribeGlobalClustersCommandOutput extends GlobalClustersMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about Aurora global database clusters. This API supports pagination.</p>
 *          <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeGlobalClustersMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
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
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * // { // GlobalClustersMessage
 * //   Marker: "STRING_VALUE",
 * //   GlobalClusters: [ // GlobalClusterList
 * //     { // GlobalCluster
 * //       GlobalClusterIdentifier: "STRING_VALUE",
 * //       GlobalClusterResourceId: "STRING_VALUE",
 * //       GlobalClusterArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       DeletionProtection: true || false,
 * //       GlobalClusterMembers: [ // GlobalClusterMemberList
 * //         { // GlobalClusterMember
 * //           DBClusterArn: "STRING_VALUE",
 * //           Readers: [ // ReadersArnList
 * //             "STRING_VALUE",
 * //           ],
 * //           IsWriter: true || false,
 * //           GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //           SynchronizationStatus: "connected" || "pending-resync",
 * //         },
 * //       ],
 * //       FailoverState: { // FailoverState
 * //         Status: "pending" || "failing-over" || "cancelling",
 * //         FromDbClusterArn: "STRING_VALUE",
 * //         ToDbClusterArn: "STRING_VALUE",
 * //         IsDataLossAllowed: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeGlobalClustersCommandInput - {@link DescribeGlobalClustersCommandInput}
 * @returns {@link DescribeGlobalClustersCommandOutput}
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe global DB clusters
 * ```javascript
 * // The following example lists Aurora global DB clusters in the current AWS Region.
 * const input = {};
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GlobalClusters": [
 *     {
 *       "DeletionProtection": false,
 *       "Engine": "aurora-mysql",
 *       "EngineVersion": "5.7.mysql_aurora.2.07.2",
 *       "GlobalClusterArn": "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *       "GlobalClusterIdentifier": "myglobalcluster",
 *       "GlobalClusterMembers": [],
 *       "GlobalClusterResourceId": "cluster-f5982077e3b5aabb",
 *       "Status": "available",
 *       "StorageEncrypted": false
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-global-db-clusters-1680282459184
 * ```
 *
 */
export class DescribeGlobalClustersCommand extends $Command<
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
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
  constructor(readonly input: DescribeGlobalClustersCommandInput) {
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
  ): Handler<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeGlobalClustersCommand";
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
  private serialize(input: DescribeGlobalClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGlobalClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalClustersCommandOutput> {
    return de_DescribeGlobalClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
