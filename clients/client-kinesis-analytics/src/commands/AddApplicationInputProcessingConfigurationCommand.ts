// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputProcessingConfigurationResponse,
} from "../models/models_0";
import { AddApplicationInputProcessingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddApplicationInputProcessingConfigurationCommand}.
 */
export interface AddApplicationInputProcessingConfigurationCommandInput extends AddApplicationInputProcessingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationInputProcessingConfigurationCommand}.
 */
export interface AddApplicationInputProcessingConfigurationCommandOutput extends AddApplicationInputProcessingConfigurationResponse, __MetadataBearer {}

/**
 * > **Note:** This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see [Amazon Kinesis Data Analytics API V2 Documentation](/kinesisanalytics/latest/apiv2/Welcome.html).
 *
 *
 *
 * Adds an [InputProcessingConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html) to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is [AWS Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationInputProcessingConfigurationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // AddApplicationInputProcessingConfigurationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   InputId: "STRING_VALUE", // required
 *   InputProcessingConfiguration: { // InputProcessingConfiguration
 *     InputLambdaProcessor: { // InputLambdaProcessor
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new AddApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddApplicationInputProcessingConfigurationCommandInput - {@link AddApplicationInputProcessingConfigurationCommandInput}
 * @returns {@link AddApplicationInputProcessingConfigurationCommandOutput}
 * @see {@link AddApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
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
export class AddApplicationInputProcessingConfigurationCommand extends command<AddApplicationInputProcessingConfigurationCommandInput, AddApplicationInputProcessingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "AddApplicationInputProcessingConfiguration",
  AddApplicationInputProcessingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationInputProcessingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: AddApplicationInputProcessingConfigurationCommandInput;
      output: AddApplicationInputProcessingConfigurationCommandOutput;
    };
  };
}
