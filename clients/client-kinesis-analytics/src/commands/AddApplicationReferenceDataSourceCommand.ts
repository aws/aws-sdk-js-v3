// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
} from "../models/models_0";
import { AddApplicationReferenceDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface AddApplicationReferenceDataSourceCommandOutput extends AddApplicationReferenceDataSourceResponse, __MetadataBearer {}

/**
 * > **Note:** This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see [Amazon Kinesis Data Analytics API V2 Documentation](/kinesisanalytics/latest/apiv2/Welcome.html).
 *
 *
 *
 * Adds a reference data source to an existing application.
 *
 *
 *
 * Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.
 *
 * For conceptual information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html). For the limits on data sources you can add to your application, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
 *
 * This operation requires permissions to perform the `kinesisanalytics:AddApplicationOutput` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationReferenceDataSourceCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationReferenceDataSourceCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // AddApplicationReferenceDataSourceRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   ReferenceDataSource: { // ReferenceDataSource
 *     TableName: "STRING_VALUE", // required
 *     S3ReferenceDataSource: { // S3ReferenceDataSource
 *       BucketARN: "STRING_VALUE", // required
 *       FileKey: "STRING_VALUE", // required
 *       ReferenceRoleARN: "STRING_VALUE", // required
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
 * // {};
 *
 * ```
 *
 * @param AddApplicationReferenceDataSourceCommandInput - {@link AddApplicationReferenceDataSourceCommandInput}
 * @returns {@link AddApplicationReferenceDataSourceCommandOutput}
 * @see {@link AddApplicationReferenceDataSourceCommandInput} for command's `input` shape.
 * @see {@link AddApplicationReferenceDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Specified input parameter value is invalid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * Application is not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Specified application can't be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KinesisAnalyticsServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalytics service.
 *
 * @public
 */
export class AddApplicationReferenceDataSourceCommand extends command<AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "AddApplicationReferenceDataSource",
  AddApplicationReferenceDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationReferenceDataSourceRequest;
      output: {};
    };
    sdk: {
      input: AddApplicationReferenceDataSourceCommandInput;
      output: AddApplicationReferenceDataSourceCommandOutput;
    };
  };
}
