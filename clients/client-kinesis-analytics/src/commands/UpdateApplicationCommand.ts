// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { de_UpdateApplicationCommand, se_UpdateApplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Updates an existing Amazon Kinesis Analytics application. Using this API,
 *             you can update application code, input configuration, and
 *             output configuration. </p>
 *         <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code>
 *             each time you update your application. </p>
 *         <p>This operation requires permission for the
 *             <code>kinesisanalytics:UpdateApplication</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, UpdateApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, UpdateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // UpdateApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   ApplicationUpdate: { // ApplicationUpdate
 *     InputUpdates: [ // InputUpdates
 *       { // InputUpdate
 *         InputId: "STRING_VALUE", // required
 *         NamePrefixUpdate: "STRING_VALUE",
 *         InputProcessingConfigurationUpdate: { // InputProcessingConfigurationUpdate
 *           InputLambdaProcessorUpdate: { // InputLambdaProcessorUpdate
 *             ResourceARNUpdate: "STRING_VALUE",
 *             RoleARNUpdate: "STRING_VALUE",
 *           },
 *         },
 *         KinesisStreamsInputUpdate: { // KinesisStreamsInputUpdate
 *           ResourceARNUpdate: "STRING_VALUE",
 *           RoleARNUpdate: "STRING_VALUE",
 *         },
 *         KinesisFirehoseInputUpdate: { // KinesisFirehoseInputUpdate
 *           ResourceARNUpdate: "STRING_VALUE",
 *           RoleARNUpdate: "STRING_VALUE",
 *         },
 *         InputSchemaUpdate: { // InputSchemaUpdate
 *           RecordFormatUpdate: { // RecordFormat
 *             RecordFormatType: "JSON" || "CSV", // required
 *             MappingParameters: { // MappingParameters
 *               JSONMappingParameters: { // JSONMappingParameters
 *                 RecordRowPath: "STRING_VALUE", // required
 *               },
 *               CSVMappingParameters: { // CSVMappingParameters
 *                 RecordRowDelimiter: "STRING_VALUE", // required
 *                 RecordColumnDelimiter: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *           RecordEncodingUpdate: "STRING_VALUE",
 *           RecordColumnUpdates: [ // RecordColumns
 *             { // RecordColumn
 *               Name: "STRING_VALUE", // required
 *               Mapping: "STRING_VALUE",
 *               SqlType: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         InputParallelismUpdate: { // InputParallelismUpdate
 *           CountUpdate: Number("int"),
 *         },
 *       },
 *     ],
 *     ApplicationCodeUpdate: "STRING_VALUE",
 *     OutputUpdates: [ // OutputUpdates
 *       { // OutputUpdate
 *         OutputId: "STRING_VALUE", // required
 *         NameUpdate: "STRING_VALUE",
 *         KinesisStreamsOutputUpdate: { // KinesisStreamsOutputUpdate
 *           ResourceARNUpdate: "STRING_VALUE",
 *           RoleARNUpdate: "STRING_VALUE",
 *         },
 *         KinesisFirehoseOutputUpdate: { // KinesisFirehoseOutputUpdate
 *           ResourceARNUpdate: "STRING_VALUE",
 *           RoleARNUpdate: "STRING_VALUE",
 *         },
 *         LambdaOutputUpdate: { // LambdaOutputUpdate
 *           ResourceARNUpdate: "STRING_VALUE",
 *           RoleARNUpdate: "STRING_VALUE",
 *         },
 *         DestinationSchemaUpdate: { // DestinationSchema
 *           RecordFormatType: "JSON" || "CSV", // required
 *         },
 *       },
 *     ],
 *     ReferenceDataSourceUpdates: [ // ReferenceDataSourceUpdates
 *       { // ReferenceDataSourceUpdate
 *         ReferenceId: "STRING_VALUE", // required
 *         TableNameUpdate: "STRING_VALUE",
 *         S3ReferenceDataSourceUpdate: { // S3ReferenceDataSourceUpdate
 *           BucketARNUpdate: "STRING_VALUE",
 *           FileKeyUpdate: "STRING_VALUE",
 *           ReferenceRoleARNUpdate: "STRING_VALUE",
 *         },
 *         ReferenceSchemaUpdate: { // SourceSchema
 *           RecordFormat: {
 *             RecordFormatType: "JSON" || "CSV", // required
 *             MappingParameters: {
 *               JSONMappingParameters: {
 *                 RecordRowPath: "STRING_VALUE", // required
 *               },
 *               CSVMappingParameters: {
 *                 RecordRowDelimiter: "STRING_VALUE", // required
 *                 RecordColumnDelimiter: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *           RecordEncoding: "STRING_VALUE",
 *           RecordColumns: [ // required
 *             {
 *               Name: "STRING_VALUE", // required
 *               Mapping: "STRING_VALUE",
 *               SqlType: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     CloudWatchLoggingOptionUpdates: [ // CloudWatchLoggingOptionUpdates
 *       { // CloudWatchLoggingOptionUpdate
 *         CloudWatchLoggingOptionId: "STRING_VALUE", // required
 *         LogStreamARNUpdate: "STRING_VALUE",
 *         RoleARNUpdate: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link CodeValidationException} (client fault)
 *  <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Specified input parameter value is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 *
 * @throws {@link KinesisAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalytics service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20150814", "UpdateApplication", {})
  .n("KinesisAnalyticsClient", "UpdateApplicationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApplicationCommand)
  .de(de_UpdateApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: {};
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
