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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DescribeDatastoreRequest, DescribeDatastoreResponse } from "../models/models_0";
import { de_DescribeDatastoreCommand, se_DescribeDatastoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatastoreCommand}.
 */
export interface DescribeDatastoreCommandInput extends DescribeDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatastoreCommand}.
 */
export interface DescribeDatastoreCommandOutput extends DescribeDatastoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DescribeDatastoreRequest
 *   datastoreName: "STRING_VALUE", // required
 *   includeStatistics: true || false,
 * };
 * const command = new DescribeDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatastoreResponse
 * //   datastore: { // Datastore
 * //     name: "STRING_VALUE",
 * //     storage: { // DatastoreStorage Union: only one key present
 * //       serviceManagedS3: {},
 * //       customerManagedS3: { // CustomerManagedDatastoreS3Storage
 * //         bucket: "STRING_VALUE", // required
 * //         keyPrefix: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //       iotSiteWiseMultiLayerStorage: { // DatastoreIotSiteWiseMultiLayerStorage
 * //         customerManagedS3Storage: { // IotSiteWiseCustomerManagedDatastoreS3Storage
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     retentionPeriod: { // RetentionPeriod
 * //       unlimited: true || false,
 * //       numberOfDays: Number("int"),
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     lastMessageArrivalTime: new Date("TIMESTAMP"),
 * //     fileFormatConfiguration: { // FileFormatConfiguration
 * //       jsonConfiguration: {},
 * //       parquetConfiguration: { // ParquetConfiguration
 * //         schemaDefinition: { // SchemaDefinition
 * //           columns: [ // Columns
 * //             { // Column
 * //               name: "STRING_VALUE", // required
 * //               type: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     datastorePartitions: { // DatastorePartitions
 * //       partitions: [ // Partitions
 * //         { // DatastorePartition
 * //           attributePartition: { // Partition
 * //             attributeName: "STRING_VALUE", // required
 * //           },
 * //           timestampPartition: { // TimestampPartition
 * //             attributeName: "STRING_VALUE", // required
 * //             timestampFormat: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   statistics: { // DatastoreStatistics
 * //     size: { // EstimatedResourceSize
 * //       estimatedSizeInBytes: Number("double"),
 * //       estimatedOn: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatastoreCommandInput - {@link DescribeDatastoreCommandInput}
 * @returns {@link DescribeDatastoreCommandOutput}
 * @see {@link DescribeDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 */
export class DescribeDatastoreCommand extends $Command<
  DescribeDatastoreCommandInput,
  DescribeDatastoreCommandOutput,
  IoTAnalyticsClientResolvedConfig
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
  constructor(readonly input: DescribeDatastoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDatastoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "DescribeDatastoreCommand";
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
  private serialize(input: DescribeDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDatastoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatastoreCommandOutput> {
    return de_DescribeDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
