// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import { de_AddApplicationInputCommand, se_AddApplicationInputCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationInputCommand}.
 */
export interface AddApplicationInputCommandInput extends AddApplicationInputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationInputCommand}.
 */
export interface AddApplicationInputCommandOutput extends AddApplicationInputResponse, __MetadataBearer {}

/**
 * <p>
 *       Adds a streaming source to your SQL-based Kinesis Data Analytics application.
 *     </p>
 *          <p>You can add a streaming source when you create an application, or you can use this
 *       operation to add a streaming source after you create an application. For more information, see
 *         <a>CreateApplication</a>.</p>
 *          <p>Any configuration update, including adding a streaming source using this operation,
 *       results in a new version of the application. You can use the <a>DescribeApplication</a> operation
 *       to find the current application version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationInputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   Input: { // Input
 *     NamePrefix: "STRING_VALUE", // required
 *     InputProcessingConfiguration: { // InputProcessingConfiguration
 *       InputLambdaProcessor: { // InputLambdaProcessor
 *         ResourceARN: "STRING_VALUE", // required
 *       },
 *     },
 *     KinesisStreamsInput: { // KinesisStreamsInput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseInput: { // KinesisFirehoseInput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     InputParallelism: { // InputParallelism
 *       Count: Number("int"),
 *     },
 *     InputSchema: { // SourceSchema
 *       RecordFormat: { // RecordFormat
 *         RecordFormatType: "JSON" || "CSV", // required
 *         MappingParameters: { // MappingParameters
 *           JSONMappingParameters: { // JSONMappingParameters
 *             RecordRowPath: "STRING_VALUE", // required
 *           },
 *           CSVMappingParameters: { // CSVMappingParameters
 *             RecordRowDelimiter: "STRING_VALUE", // required
 *             RecordColumnDelimiter: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       RecordEncoding: "STRING_VALUE",
 *       RecordColumns: [ // RecordColumns // required
 *         { // RecordColumn
 *           Name: "STRING_VALUE", // required
 *           Mapping: "STRING_VALUE",
 *           SqlType: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationInputResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   InputDescriptions: [ // InputDescriptions
 * //     { // InputDescription
 * //       InputId: "STRING_VALUE",
 * //       NamePrefix: "STRING_VALUE",
 * //       InAppStreamNames: [ // InAppStreamNames
 * //         "STRING_VALUE",
 * //       ],
 * //       InputProcessingConfigurationDescription: { // InputProcessingConfigurationDescription
 * //         InputLambdaProcessorDescription: { // InputLambdaProcessorDescription
 * //           ResourceARN: "STRING_VALUE", // required
 * //           RoleARN: "STRING_VALUE",
 * //         },
 * //       },
 * //       KinesisStreamsInputDescription: { // KinesisStreamsInputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       KinesisFirehoseInputDescription: { // KinesisFirehoseInputDescription
 * //         ResourceARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //       InputSchema: { // SourceSchema
 * //         RecordFormat: { // RecordFormat
 * //           RecordFormatType: "JSON" || "CSV", // required
 * //           MappingParameters: { // MappingParameters
 * //             JSONMappingParameters: { // JSONMappingParameters
 * //               RecordRowPath: "STRING_VALUE", // required
 * //             },
 * //             CSVMappingParameters: { // CSVMappingParameters
 * //               RecordRowDelimiter: "STRING_VALUE", // required
 * //               RecordColumnDelimiter: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //         RecordEncoding: "STRING_VALUE",
 * //         RecordColumns: [ // RecordColumns // required
 * //           { // RecordColumn
 * //             Name: "STRING_VALUE", // required
 * //             Mapping: "STRING_VALUE",
 * //             SqlType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       InputParallelism: { // InputParallelism
 * //         Count: Number("int"),
 * //       },
 * //       InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 * //         InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddApplicationInputCommandInput - {@link AddApplicationInputCommandInput}
 * @returns {@link AddApplicationInputCommandOutput}
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link CodeValidationException} (client fault)
 *  <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class AddApplicationInputCommand extends $Command
  .classBuilder<
    AddApplicationInputCommandInput,
    AddApplicationInputCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20180523", "AddApplicationInput", {})
  .n("KinesisAnalyticsV2Client", "AddApplicationInputCommand")
  .f(void 0, void 0)
  .ser(se_AddApplicationInputCommand)
  .de(de_AddApplicationInputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationInputRequest;
      output: AddApplicationInputResponse;
    };
    sdk: {
      input: AddApplicationInputCommandInput;
      output: AddApplicationInputCommandOutput;
    };
  };
}
