// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrailStatusRequest, GetTrailStatusResponse } from "../models/models_0";
import { GetTrailStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrailStatusCommand}.
 */
export interface GetTrailStatusCommandInput extends GetTrailStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTrailStatusCommand}.
 */
export interface GetTrailStatusCommandOutput extends GetTrailStatusResponse, __MetadataBearer {}

/**
 * Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single Region. To return trail status from all Regions, you must call the operation on each Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetTrailStatusCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetTrailStatusCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetTrailStatusRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetTrailStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTrailStatusResponse
 * //   IsLogging: true || false,
 * //   LatestDeliveryError: "STRING_VALUE",
 * //   LatestNotificationError: "STRING_VALUE",
 * //   LatestDeliveryTime: new Date("TIMESTAMP"),
 * //   LatestNotificationTime: new Date("TIMESTAMP"),
 * //   StartLoggingTime: new Date("TIMESTAMP"),
 * //   StopLoggingTime: new Date("TIMESTAMP"),
 * //   LatestCloudWatchLogsDeliveryError: "STRING_VALUE",
 * //   LatestCloudWatchLogsDeliveryTime: new Date("TIMESTAMP"),
 * //   LatestDigestDeliveryTime: new Date("TIMESTAMP"),
 * //   LatestDigestDeliveryError: "STRING_VALUE",
 * //   LatestDeliveryAttemptTime: "STRING_VALUE",
 * //   LatestNotificationAttemptTime: "STRING_VALUE",
 * //   LatestNotificationAttemptSucceeded: "STRING_VALUE",
 * //   LatestDeliveryAttemptSucceeded: "STRING_VALUE",
 * //   TimeLoggingStarted: "STRING_VALUE",
 * //   TimeLoggingStopped: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrailStatusCommandInput - {@link GetTrailStatusCommandInput}
 * @returns {@link GetTrailStatusCommandOutput}
 * @see {@link GetTrailStatusCommandInput} for command's `input` shape.
 * @see {@link GetTrailStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *
 * This exception is thrown when an operation is called with an ARN that is not valid.
 *
 * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
 *
 * The following is the format of an event data store ARN: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
 *
 * The following is the format of a dashboard ARN: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
 *
 * The following is the format of a channel ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *
 * This exception is thrown when the trail with the given name is not found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class GetTrailStatusCommand extends command<GetTrailStatusCommandInput, GetTrailStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetTrailStatus",
  GetTrailStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrailStatusRequest;
      output: GetTrailStatusResponse;
    };
    sdk: {
      input: GetTrailStatusCommandInput;
      output: GetTrailStatusCommandOutput;
    };
  };
}
