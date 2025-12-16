// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeConnectorEntityRequest, DescribeConnectorEntityResponse } from "../models/models_0";
import { DescribeConnectorEntity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Provides details regarding the entity used with the connector, with a description of the
 *       data model for each field in that entity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorEntityCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorEntityCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
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
 *
 * @public
 */
export class DescribeConnectorEntityCommand extends $Command
  .classBuilder<
    DescribeConnectorEntityCommandInput,
    DescribeConnectorEntityCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SandstoneConfigurationServiceLambda", "DescribeConnectorEntity", {})
  .n("AppflowClient", "DescribeConnectorEntityCommand")
  .sc(DescribeConnectorEntity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectorEntityRequest;
      output: DescribeConnectorEntityResponse;
    };
    sdk: {
      input: DescribeConnectorEntityCommandInput;
      output: DescribeConnectorEntityCommandOutput;
    };
  };
}
