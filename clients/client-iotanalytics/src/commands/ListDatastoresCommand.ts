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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { ListDatastoresRequest, ListDatastoresResponse } from "../models/models_0";
import { de_ListDatastoresCommand, se_ListDatastoresCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDatastoresCommand}.
 */
export interface ListDatastoresCommandInput extends ListDatastoresRequest {}
/**
 * @public
 *
 * The output of {@link ListDatastoresCommand}.
 */
export interface ListDatastoresCommandOutput extends ListDatastoresResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of data stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatastoresCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatastoresCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // ListDatastoresRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatastoresCommand(input);
 * const response = await client.send(command);
 * // { // ListDatastoresResponse
 * //   datastoreSummaries: [ // DatastoreSummaries
 * //     { // DatastoreSummary
 * //       datastoreName: "STRING_VALUE",
 * //       datastoreStorage: { // DatastoreStorageSummary
 * //         serviceManagedS3: {},
 * //         customerManagedS3: { // CustomerManagedDatastoreS3StorageSummary
 * //           bucket: "STRING_VALUE",
 * //           keyPrefix: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //         iotSiteWiseMultiLayerStorage: { // DatastoreIotSiteWiseMultiLayerStorageSummary
 * //           customerManagedS3Storage: { // IotSiteWiseCustomerManagedDatastoreS3StorageSummary
 * //             bucket: "STRING_VALUE",
 * //             keyPrefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       status: "CREATING" || "ACTIVE" || "DELETING",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       lastMessageArrivalTime: new Date("TIMESTAMP"),
 * //       fileFormatType: "JSON" || "PARQUET",
 * //       datastorePartitions: { // DatastorePartitions
 * //         partitions: [ // Partitions
 * //           { // DatastorePartition
 * //             attributePartition: { // Partition
 * //               attributeName: "STRING_VALUE", // required
 * //             },
 * //             timestampPartition: { // TimestampPartition
 * //               attributeName: "STRING_VALUE", // required
 * //               timestampFormat: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatastoresCommandInput - {@link ListDatastoresCommandInput}
 * @returns {@link ListDatastoresCommandOutput}
 * @see {@link ListDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListDatastoresCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
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
export class ListDatastoresCommand extends $Command<
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
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
  constructor(readonly input: ListDatastoresCommandInput) {
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
  ): Handler<ListDatastoresCommandInput, ListDatastoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatastoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "ListDatastoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTAnalytics",
        operation: "ListDatastores",
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
  private serialize(input: ListDatastoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDatastoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatastoresCommandOutput> {
    return de_ListDatastoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
