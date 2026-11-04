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
 * Adds an InputProcessingConfiguration to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is [Amazon Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputProcessingConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationInputProcessingConfigurationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   InputId: "STRING_VALUE", // required
 *   InputProcessingConfiguration: { // InputProcessingConfiguration
 *     InputLambdaProcessor: { // InputLambdaProcessor
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new AddApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // AddApplicationInputProcessingConfigurationResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   InputId: "STRING_VALUE",
 * //   InputProcessingConfigurationDescription: { // InputProcessingConfigurationDescription
 * //     InputLambdaProcessorDescription: { // InputLambdaProcessorDescription
 * //       ResourceARN: "STRING_VALUE", // required
 * //       RoleARN: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param AddApplicationInputProcessingConfigurationCommandInput - {@link AddApplicationInputProcessingConfigurationCommandInput}
 * @returns {@link AddApplicationInputProcessingConfigurationCommandOutput}
 * @see {@link AddApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The specified input parameter value is not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request JSON is not valid for the operation.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The application is not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Specified application can't be found.
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalyticsV2 service.
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
      output: AddApplicationInputProcessingConfigurationResponse;
    };
    sdk: {
      input: AddApplicationInputProcessingConfigurationCommandInput;
      output: AddApplicationInputProcessingConfigurationCommandOutput;
    };
  };
}
