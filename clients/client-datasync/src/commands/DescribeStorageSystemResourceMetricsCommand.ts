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
import {
  DescribeStorageSystemResourceMetricsRequest,
  DescribeStorageSystemResourceMetricsResponse,
} from "../models/models_0";
import {
  de_DescribeStorageSystemResourceMetricsCommand,
  se_DescribeStorageSystemResourceMetricsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageSystemResourceMetricsCommand}.
 */
export interface DescribeStorageSystemResourceMetricsCommandInput extends DescribeStorageSystemResourceMetricsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemResourceMetricsCommand}.
 */
export interface DescribeStorageSystemResourceMetricsCommandOutput
  extends DescribeStorageSystemResourceMetricsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information, including performance data and capacity usage, which DataSync Discovery
 *       collects about a specific resource in your-premises storage system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemResourceMetricsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemResourceMetricsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemResourceMetricsRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 *   ResourceId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageSystemResourceMetricsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageSystemResourceMetricsResponse
 * //   Metrics: [ // Metrics
 * //     { // ResourceMetrics
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       P95Metrics: { // P95Metrics
 * //         IOPS: { // IOPS
 * //           Read: Number("double"),
 * //           Write: Number("double"),
 * //           Other: Number("double"),
 * //           Total: Number("double"),
 * //         },
 * //         Throughput: { // Throughput
 * //           Read: Number("double"),
 * //           Write: Number("double"),
 * //           Other: Number("double"),
 * //           Total: Number("double"),
 * //         },
 * //         Latency: { // Latency
 * //           Read: Number("double"),
 * //           Write: Number("double"),
 * //           Other: Number("double"),
 * //         },
 * //       },
 * //       Capacity: { // Capacity
 * //         Used: Number("long"),
 * //         Provisioned: Number("long"),
 * //         LogicalUsed: Number("long"),
 * //         ClusterCloudStorageUsed: Number("long"),
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "SVM" || "VOLUME" || "CLUSTER",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageSystemResourceMetricsCommandInput - {@link DescribeStorageSystemResourceMetricsCommandInput}
 * @returns {@link DescribeStorageSystemResourceMetricsCommandOutput}
 * @see {@link DescribeStorageSystemResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemResourceMetricsCommandOutput} for command's `response` shape.
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
export class DescribeStorageSystemResourceMetricsCommand extends $Command<
  DescribeStorageSystemResourceMetricsCommandInput,
  DescribeStorageSystemResourceMetricsCommandOutput,
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
  constructor(readonly input: DescribeStorageSystemResourceMetricsCommandInput) {
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
  ): Handler<DescribeStorageSystemResourceMetricsCommandInput, DescribeStorageSystemResourceMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStorageSystemResourceMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeStorageSystemResourceMetricsCommand";
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
    input: DescribeStorageSystemResourceMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeStorageSystemResourceMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStorageSystemResourceMetricsCommandOutput> {
    return de_DescribeStorageSystemResourceMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
