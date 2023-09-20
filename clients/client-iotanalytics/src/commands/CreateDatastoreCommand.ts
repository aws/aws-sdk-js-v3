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
import { CreateDatastoreRequest, CreateDatastoreResponse } from "../models/models_0";
import { de_CreateDatastoreCommand, se_CreateDatastoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDatastoreCommand}.
 */
export interface CreateDatastoreCommandInput extends CreateDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatastoreCommand}.
 */
export interface CreateDatastoreCommandOutput extends CreateDatastoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a data store, which is a repository for messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // CreateDatastoreRequest
 *   datastoreName: "STRING_VALUE", // required
 *   datastoreStorage: { // DatastoreStorage Union: only one key present
 *     serviceManagedS3: {},
 *     customerManagedS3: { // CustomerManagedDatastoreS3Storage
 *       bucket: "STRING_VALUE", // required
 *       keyPrefix: "STRING_VALUE",
 *       roleArn: "STRING_VALUE", // required
 *     },
 *     iotSiteWiseMultiLayerStorage: { // DatastoreIotSiteWiseMultiLayerStorage
 *       customerManagedS3Storage: { // IotSiteWiseCustomerManagedDatastoreS3Storage
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   retentionPeriod: { // RetentionPeriod
 *     unlimited: true || false,
 *     numberOfDays: Number("int"),
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   fileFormatConfiguration: { // FileFormatConfiguration
 *     jsonConfiguration: {},
 *     parquetConfiguration: { // ParquetConfiguration
 *       schemaDefinition: { // SchemaDefinition
 *         columns: [ // Columns
 *           { // Column
 *             name: "STRING_VALUE", // required
 *             type: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   datastorePartitions: { // DatastorePartitions
 *     partitions: [ // Partitions
 *       { // DatastorePartition
 *         attributePartition: { // Partition
 *           attributeName: "STRING_VALUE", // required
 *         },
 *         timestampPartition: { // TimestampPartition
 *           attributeName: "STRING_VALUE", // required
 *           timestampFormat: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatastoreResponse
 * //   datastoreName: "STRING_VALUE",
 * //   datastoreArn: "STRING_VALUE",
 * //   retentionPeriod: { // RetentionPeriod
 * //     unlimited: true || false,
 * //     numberOfDays: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDatastoreCommandInput - {@link CreateDatastoreCommandInput}
 * @returns {@link CreateDatastoreCommandOutput}
 * @see {@link CreateDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The command caused an internal limit to be exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name already exists.</p>
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
export class CreateDatastoreCommand extends $Command<
  CreateDatastoreCommandInput,
  CreateDatastoreCommandOutput,
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
  constructor(readonly input: CreateDatastoreCommandInput) {
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
  ): Handler<CreateDatastoreCommandInput, CreateDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatastoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "CreateDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTAnalytics",
        operation: "CreateDatastore",
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
  private serialize(input: CreateDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDatastoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatastoreCommandOutput> {
    return de_CreateDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
