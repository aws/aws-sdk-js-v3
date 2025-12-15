// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import type {
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
} from "../models/models_0";
import { AddApplicationReferenceDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationReferenceDataSourceCommand}.
 */
export interface AddApplicationReferenceDataSourceCommandInput extends AddApplicationReferenceDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationReferenceDataSourceCommand}.
 */
export interface AddApplicationReferenceDataSourceCommandOutput
  extends AddApplicationReferenceDataSourceResponse,
    __MetadataBearer {}

/**
 * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p>
 *          <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an
 *       in-application table within your application. In the request, you provide the source (S3
 *       bucket name and object key name), name of the in-application table to create, and the
 *       necessary mapping information that describes how data in an Amazon S3 object maps to columns
 *       in the resulting in-application table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationReferenceDataSourceRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   ReferenceDataSource: { // ReferenceDataSource
 *     TableName: "STRING_VALUE", // required
 *     S3ReferenceDataSource: { // S3ReferenceDataSource
 *       BucketARN: "STRING_VALUE",
 *       FileKey: "STRING_VALUE",
 *     },
 *     ReferenceSchema: { // SourceSchema
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
 * const command = new AddApplicationReferenceDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationReferenceDataSourceResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   ReferenceDataSourceDescriptions: [ // ReferenceDataSourceDescriptions
 * //     { // ReferenceDataSourceDescription
 * //       ReferenceId: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       S3ReferenceDataSourceDescription: { // S3ReferenceDataSourceDescription
 * //         BucketARN: "STRING_VALUE", // required
 * //         FileKey: "STRING_VALUE", // required
 * //         ReferenceRoleARN: "STRING_VALUE",
 * //       },
 * //       ReferenceSchema: { // SourceSchema
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
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddApplicationReferenceDataSourceCommandInput - {@link AddApplicationReferenceDataSourceCommandInput}
 * @returns {@link AddApplicationReferenceDataSourceCommandOutput}
 * @see {@link AddApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
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
export class AddApplicationReferenceDataSourceCommand extends $Command
  .classBuilder<
    AddApplicationReferenceDataSourceCommandInput,
    AddApplicationReferenceDataSourceCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "AddApplicationReferenceDataSource", {})
  .n("KinesisAnalyticsV2Client", "AddApplicationReferenceDataSourceCommand")
  .sc(AddApplicationReferenceDataSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationReferenceDataSourceRequest;
      output: AddApplicationReferenceDataSourceResponse;
    };
    sdk: {
      input: AddApplicationReferenceDataSourceCommandInput;
      output: AddApplicationReferenceDataSourceCommandOutput;
    };
  };
}
