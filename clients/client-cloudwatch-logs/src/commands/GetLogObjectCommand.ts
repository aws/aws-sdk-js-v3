// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLogObjectRequest, GetLogObjectResponse } from "../models/models_0";
import { GetLogObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLogObjectCommand}.
 */
export interface GetLogObjectCommandInput extends GetLogObjectRequest {}
/**
 * @public
 *
 * The output of {@link GetLogObjectCommand}.
 */
export interface GetLogObjectCommandOutput extends GetLogObjectResponse, __MetadataBearer {}

/**
 * Retrieves a large logging object (LLO) and streams it back. This API is used to fetch the content of large portions of log events that have been ingested through the PutOpenTelemetryLogs API. When log events contain fields that would cause the total event size to exceed 1MB, CloudWatch Logs automatically processes up to 10 fields, starting with the largest fields. Each field is truncated as needed to keep the total event size as close to 1MB as possible. The excess portions are stored as Large Log Objects (LLOs) and these fields are processed separately and LLO reference system fields (in the format `@ptr.$[path.to.field]`) are added. The path in the reference field reflects the original JSON structure where the large field was located. For example, this could be `@ptr.$['input']['message']`, `@ptr.$['AAA']['BBB']['CCC']['DDD']`, `@ptr.$['AAA']`, or any other path matching your log structure.
 *
 * > **Note:** The `GetLogObject` API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to `streaming-logs.Region.amazonaws.com`, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to `stream-logs.Region.amazonaws.com`, which supports VPC endpoints. To set up a VPC endpoint for this API, see [Creating a VPC endpoint for CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cloudwatch-logs-and-interface-VPC.html#create-VPC-endpoint-for-CloudWatchLogs).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogObjectCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogObjectCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogObjectRequest
 *   unmask: true || false,
 *   logObjectPointer: "STRING_VALUE", // required
 * };
 * const command = new GetLogObjectCommand(input);
 * const response = await client.send(command);
 * // { // GetLogObjectResponse
 * //   fieldStream: { // GetLogObjectResponseStream Union: only one key present
 * //     fields: { // FieldsData
 * //       data: new Uint8Array(),
 * //     },
 * //     InternalStreamingException: { // InternalStreamingException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLogObjectCommandInput - {@link GetLogObjectCommandInput}
 * @returns {@link GetLogObjectCommandOutput}
 * @see {@link GetLogObjectCommandInput} for command's `input` shape.
 * @see {@link GetLogObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class GetLogObjectCommand extends command<GetLogObjectCommandInput, GetLogObjectCommandOutput>(
  _ep0,
  _mw0,
  "GetLogObject",
  GetLogObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogObjectRequest;
      output: GetLogObjectResponse;
    };
    sdk: {
      input: GetLogObjectCommandInput;
      output: GetLogObjectCommandOutput;
    };
  };
}
