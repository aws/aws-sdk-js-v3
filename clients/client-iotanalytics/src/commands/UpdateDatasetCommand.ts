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
import { UpdateDatasetRequest } from "../models/models_0";
import { de_UpdateDatasetCommand, se_UpdateDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // UpdateDatasetRequest
 *   datasetName: "STRING_VALUE", // required
 *   actions: [ // DatasetActions // required
 *     { // DatasetAction
 *       actionName: "STRING_VALUE",
 *       queryAction: { // SqlQueryDatasetAction
 *         sqlQuery: "STRING_VALUE", // required
 *         filters: [ // QueryFilters
 *           { // QueryFilter
 *             deltaTime: { // DeltaTime
 *               offsetSeconds: Number("int"), // required
 *               timeExpression: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *       containerAction: { // ContainerDatasetAction
 *         image: "STRING_VALUE", // required
 *         executionRoleArn: "STRING_VALUE", // required
 *         resourceConfiguration: { // ResourceConfiguration
 *           computeType: "ACU_1" || "ACU_2", // required
 *           volumeSizeInGB: Number("int"), // required
 *         },
 *         variables: [ // Variables
 *           { // Variable
 *             name: "STRING_VALUE", // required
 *             stringValue: "STRING_VALUE",
 *             doubleValue: Number("double"),
 *             datasetContentVersionValue: { // DatasetContentVersionValue
 *               datasetName: "STRING_VALUE", // required
 *             },
 *             outputFileUriValue: { // OutputFileUriValue
 *               fileName: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   triggers: [ // DatasetTriggers
 *     { // DatasetTrigger
 *       schedule: { // Schedule
 *         expression: "STRING_VALUE",
 *       },
 *       dataset: { // TriggeringDataset
 *         name: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   contentDeliveryRules: [ // DatasetContentDeliveryRules
 *     { // DatasetContentDeliveryRule
 *       entryName: "STRING_VALUE",
 *       destination: { // DatasetContentDeliveryDestination
 *         iotEventsDestinationConfiguration: { // IotEventsDestinationConfiguration
 *           inputName: "STRING_VALUE", // required
 *           roleArn: "STRING_VALUE", // required
 *         },
 *         s3DestinationConfiguration: { // S3DestinationConfiguration
 *           bucket: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           glueConfiguration: { // GlueConfiguration
 *             tableName: "STRING_VALUE", // required
 *             databaseName: "STRING_VALUE", // required
 *           },
 *           roleArn: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   retentionPeriod: { // RetentionPeriod
 *     unlimited: true || false,
 *     numberOfDays: Number("int"),
 *   },
 *   versioningConfiguration: { // VersioningConfiguration
 *     unlimited: true || false,
 *     maxVersions: Number("int"),
 *   },
 *   lateDataRules: [ // LateDataRules
 *     { // LateDataRule
 *       ruleName: "STRING_VALUE",
 *       ruleConfiguration: { // LateDataRuleConfiguration
 *         deltaTimeSessionWindowConfiguration: { // DeltaTimeSessionWindowConfiguration
 *           timeoutInMinutes: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
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
export class UpdateDatasetCommand extends $Command<
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
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
  constructor(readonly input: UpdateDatasetCommandInput) {
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
  ): Handler<UpdateDatasetCommandInput, UpdateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "UpdateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTAnalytics",
        operation: "UpdateDataset",
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
  private serialize(input: UpdateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetCommandOutput> {
    return de_UpdateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
