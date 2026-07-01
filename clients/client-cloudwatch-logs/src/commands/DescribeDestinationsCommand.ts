// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDestinationsRequest, DescribeDestinationsResponse } from "../models/models_0";
import { DescribeDestinations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDestinationsCommand}.
 */
export interface DescribeDestinationsCommandInput extends DescribeDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDestinationsCommand}.
 */
export interface DescribeDestinationsCommandOutput extends DescribeDestinationsResponse, __MetadataBearer {}

/**
 * <p>Lists all your destinations. The results are ASCII-sorted by destination
 *       name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDestinationsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDestinationsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeDestinationsRequest
 *   DestinationNamePrefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDestinationsResponse
 * //   destinations: [ // Destinations
 * //     { // Destination
 * //       destinationName: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       accessPolicy: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       creationTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDestinationsCommandInput - {@link DescribeDestinationsCommandInput}
 * @returns {@link DescribeDestinationsCommandOutput}
 * @see {@link DescribeDestinationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDestinationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeDestinationsCommand extends command<DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDestinations",
  DescribeDestinations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDestinationsRequest;
      output: DescribeDestinationsResponse;
    };
    sdk: {
      input: DescribeDestinationsCommandInput;
      output: DescribeDestinationsCommandOutput;
    };
  };
}
