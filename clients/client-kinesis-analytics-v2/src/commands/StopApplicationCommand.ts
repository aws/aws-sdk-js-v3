// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { StopApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopApplicationCommand}.
 */
export interface StopApplicationCommandInput extends StopApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopApplicationCommand}.
 */
export interface StopApplicationCommandOutput extends StopApplicationResponse, __MetadataBearer {}

/**
 * Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the `Force` parameter to `true`.
 *
 * You can use the DescribeApplication operation to find the application status.
 *
 * Managed Service for Apache Flink takes a snapshot when the application is stopped, unless `Force` is set to `true`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, StopApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, StopApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // StopApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new StopApplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopApplicationResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopApplicationCommandInput - {@link StopApplicationCommandInput}
 * @returns {@link StopApplicationCommandOutput}
 * @see {@link StopApplicationCommandInput} for command's `input` shape.
 * @see {@link StopApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *
 * The user-provided application configuration is not valid.
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
export class StopApplicationCommand extends command<StopApplicationCommandInput, StopApplicationCommandOutput>(
  _ep0,
  _mw0,
  "StopApplication",
  StopApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopApplicationRequest;
      output: StopApplicationResponse;
    };
    sdk: {
      input: StopApplicationCommandInput;
      output: StopApplicationCommandOutput;
    };
  };
}
