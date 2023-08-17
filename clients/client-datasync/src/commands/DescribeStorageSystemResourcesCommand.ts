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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeStorageSystemResourcesRequest, DescribeStorageSystemResourcesResponse } from "../models/models_0";
import {
  de_DescribeStorageSystemResourcesCommand,
  se_DescribeStorageSystemResourcesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageSystemResourcesCommand}.
 */
export interface DescribeStorageSystemResourcesCommandInput extends DescribeStorageSystemResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemResourcesCommand}.
 */
export interface DescribeStorageSystemResourcesCommandOutput
  extends DescribeStorageSystemResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information that DataSync Discovery collects about resources in your on-premises storage
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemResourcesCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemResourcesCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemResourcesRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 *   ResourceIds: [ // ResourceIds
 *     "STRING_VALUE",
 *   ],
 *   Filter: { // ResourceFilters
 *     "<keys>": [ // FilterMembers
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageSystemResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageSystemResourcesResponse
 * //   ResourceDetails: { // ResourceDetails
 * //     NetAppONTAPSVMs: [ // NetAppONTAPSVMs
 * //       { // NetAppONTAPSVM
 * //         ClusterUuid: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         SvmName: "STRING_VALUE",
 * //         CifsShareCount: Number("long"),
 * //         EnabledProtocols: [ // EnabledProtocols
 * //           "STRING_VALUE",
 * //         ],
 * //         TotalCapacityUsed: Number("long"),
 * //         TotalCapacityProvisioned: Number("long"),
 * //         TotalLogicalCapacityUsed: Number("long"),
 * //         MaxP95Performance: { // MaxP95Performance
 * //           IopsRead: Number("double"),
 * //           IopsWrite: Number("double"),
 * //           IopsOther: Number("double"),
 * //           IopsTotal: Number("double"),
 * //           ThroughputRead: Number("double"),
 * //           ThroughputWrite: Number("double"),
 * //           ThroughputOther: Number("double"),
 * //           ThroughputTotal: Number("double"),
 * //           LatencyRead: Number("double"),
 * //           LatencyWrite: Number("double"),
 * //           LatencyOther: Number("double"),
 * //         },
 * //         Recommendations: [ // Recommendations
 * //           { // Recommendation
 * //             StorageType: "STRING_VALUE",
 * //             StorageConfiguration: { // RecommendationsConfigMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             EstimatedMonthlyStorageCost: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NfsExportedVolumes: Number("long"),
 * //         RecommendationStatus: "NONE" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //         TotalSnapshotCapacityUsed: Number("long"),
 * //         LunCount: Number("long"),
 * //       },
 * //     ],
 * //     NetAppONTAPVolumes: [ // NetAppONTAPVolumes
 * //       { // NetAppONTAPVolume
 * //         VolumeName: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         CifsShareCount: Number("long"),
 * //         SecurityStyle: "STRING_VALUE",
 * //         SvmUuid: "STRING_VALUE",
 * //         SvmName: "STRING_VALUE",
 * //         CapacityUsed: Number("long"),
 * //         CapacityProvisioned: Number("long"),
 * //         LogicalCapacityUsed: Number("long"),
 * //         NfsExported: true || false,
 * //         SnapshotCapacityUsed: Number("long"),
 * //         MaxP95Performance: {
 * //           IopsRead: Number("double"),
 * //           IopsWrite: Number("double"),
 * //           IopsOther: Number("double"),
 * //           IopsTotal: Number("double"),
 * //           ThroughputRead: Number("double"),
 * //           ThroughputWrite: Number("double"),
 * //           ThroughputOther: Number("double"),
 * //           ThroughputTotal: Number("double"),
 * //           LatencyRead: Number("double"),
 * //           LatencyWrite: Number("double"),
 * //           LatencyOther: Number("double"),
 * //         },
 * //         Recommendations: [
 * //           {
 * //             StorageType: "STRING_VALUE",
 * //             StorageConfiguration: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             EstimatedMonthlyStorageCost: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RecommendationStatus: "NONE" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //         LunCount: Number("long"),
 * //       },
 * //     ],
 * //     NetAppONTAPClusters: [ // NetAppONTAPClusters
 * //       { // NetAppONTAPCluster
 * //         CifsShareCount: Number("long"),
 * //         NfsExportedVolumes: Number("long"),
 * //         ResourceId: "STRING_VALUE",
 * //         ClusterName: "STRING_VALUE",
 * //         MaxP95Performance: {
 * //           IopsRead: Number("double"),
 * //           IopsWrite: Number("double"),
 * //           IopsOther: Number("double"),
 * //           IopsTotal: Number("double"),
 * //           ThroughputRead: Number("double"),
 * //           ThroughputWrite: Number("double"),
 * //           ThroughputOther: Number("double"),
 * //           ThroughputTotal: Number("double"),
 * //           LatencyRead: Number("double"),
 * //           LatencyWrite: Number("double"),
 * //           LatencyOther: Number("double"),
 * //         },
 * //         ClusterBlockStorageSize: Number("long"),
 * //         ClusterBlockStorageUsed: Number("long"),
 * //         ClusterBlockStorageLogicalUsed: Number("long"),
 * //         Recommendations: [
 * //           {
 * //             StorageType: "STRING_VALUE",
 * //             StorageConfiguration: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             EstimatedMonthlyStorageCost: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RecommendationStatus: "NONE" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //         LunCount: Number("long"),
 * //         ClusterCloudStorageUsed: Number("long"),
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageSystemResourcesCommandInput - {@link DescribeStorageSystemResourcesCommandInput}
 * @returns {@link DescribeStorageSystemResourcesCommandOutput}
 * @see {@link DescribeStorageSystemResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemResourcesCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class DescribeStorageSystemResourcesCommand extends $Command<
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: DescribeStorageSystemResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStorageSystemResourcesCommandInput, DescribeStorageSystemResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStorageSystemResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeStorageSystemResourcesCommand";
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
    input: DescribeStorageSystemResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeStorageSystemResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStorageSystemResourcesCommandOutput> {
    return de_DescribeStorageSystemResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
