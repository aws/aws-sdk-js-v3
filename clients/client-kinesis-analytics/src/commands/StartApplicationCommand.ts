// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartApplicationRequest, StartApplicationResponse } from "../models/models_0";
import { StartApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandInput extends StartApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandOutput extends StartApplicationResponse, __MetadataBearer {}

/**
 * > **Note:** This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see [Amazon Kinesis Data Analytics API V2 Documentation](/kinesisanalytics/latest/apiv2/Welcome.html).
 *
 *
 *
 * Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.
 *
 * After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.
 *
 * The application status must be `READY` for you to start an application. You can get the application status in the console or using the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation.
 *
 * After you start the application, you can stop the application from processing the input by calling the [StopApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html) operation.
 *
 * This operation requires permissions to perform the `kinesisanalytics:StartApplication` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, StartApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, StartApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // StartApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   InputConfigurations: [ // InputConfigurations // required
 *     { // InputConfiguration
 *       Id: "STRING_VALUE", // required
 *       InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 *         InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 *       },
 *     },
 *   ],
 * };
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartApplicationCommandInput - {@link StartApplicationCommandInput}
 * @returns {@link StartApplicationCommandOutput}
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *
 * User-provided application configuration is not valid.
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
export class StartApplicationCommand extends command<StartApplicationCommandInput, StartApplicationCommandOutput>(
  _ep0,
  _mw0,
  "StartApplication",
  StartApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartApplicationRequest;
      output: {};
    };
    sdk: {
      input: StartApplicationCommandInput;
      output: StartApplicationCommandOutput;
    };
  };
}
