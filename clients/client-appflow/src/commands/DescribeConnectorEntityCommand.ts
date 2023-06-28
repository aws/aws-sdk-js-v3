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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeConnectorEntityRequest, DescribeConnectorEntityResponse } from "../models/models_0";
import { de_DescribeConnectorEntityCommand, se_DescribeConnectorEntityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectorEntityCommand}.
 */
export interface DescribeConnectorEntityCommandInput extends DescribeConnectorEntityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectorEntityCommand}.
 */
export interface DescribeConnectorEntityCommandOutput extends DescribeConnectorEntityResponse, __MetadataBearer {}

/**
 * @public
 * <p> Provides details regarding the entity used with the connector, with a description of the
 *       data model for each field in that entity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorEntityCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorEntityCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // DescribeConnectorEntityRequest
 *   connectorEntityName: "STRING_VALUE", // required
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 *   connectorProfileName: "STRING_VALUE",
 *   apiVersion: "STRING_VALUE",
 * };
 * const command = new DescribeConnectorEntityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectorEntityResponse
 * //   connectorEntityFields: [ // ConnectorEntityFieldList // required
 * //     { // ConnectorEntityField
 * //       identifier: "STRING_VALUE", // required
 * //       parentIdentifier: "STRING_VALUE",
 * //       label: "STRING_VALUE",
 * //       isPrimaryKey: true || false,
 * //       defaultValue: "STRING_VALUE",
 * //       isDeprecated: true || false,
 * //       supportedFieldTypeDetails: { // SupportedFieldTypeDetails
 * //         v1: { // FieldTypeDetails
 * //           fieldType: "STRING_VALUE", // required
 * //           filterOperators: [ // FilterOperatorList // required
 * //             "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "CONTAINS" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 * //           ],
 * //           supportedValues: [ // SupportedValueList
 * //             "STRING_VALUE",
 * //           ],
 * //           valueRegexPattern: "STRING_VALUE",
 * //           supportedDateFormat: "STRING_VALUE",
 * //           fieldValueRange: { // Range
 * //             maximum: Number("double"),
 * //             minimum: Number("double"),
 * //           },
 * //           fieldLengthRange: {
 * //             maximum: Number("double"),
 * //             minimum: Number("double"),
 * //           },
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       sourceProperties: { // SourceFieldProperties
 * //         isRetrievable: true || false,
 * //         isQueryable: true || false,
 * //         isTimestampFieldForIncrementalQueries: true || false,
 * //       },
 * //       destinationProperties: { // DestinationFieldProperties
 * //         isCreatable: true || false,
 * //         isNullable: true || false,
 * //         isUpsertable: true || false,
 * //         isUpdatable: true || false,
 * //         isDefaultedOnCreate: true || false,
 * //         supportedWriteOperations: [ // SupportedWriteOperationList
 * //           "INSERT" || "UPSERT" || "UPDATE" || "DELETE",
 * //         ],
 * //       },
 * //       customProperties: { // CustomProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConnectorEntityCommandInput - {@link DescribeConnectorEntityCommandInput}
 * @returns {@link DescribeConnectorEntityCommandOutput}
 * @see {@link DescribeConnectorEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorEntityCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link ConnectorServerException} (client fault)
 *  <p> An error occurred when retrieving data from the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class DescribeConnectorEntityCommand extends $Command<
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: DescribeConnectorEntityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorEntityCommandInput, DescribeConnectorEntityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectorEntityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeConnectorEntityCommand";
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
  private serialize(input: DescribeConnectorEntityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConnectorEntityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectorEntityCommandOutput> {
    return de_DescribeConnectorEntityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
