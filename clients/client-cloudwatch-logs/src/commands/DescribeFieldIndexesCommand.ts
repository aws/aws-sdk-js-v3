// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFieldIndexesRequest, DescribeFieldIndexesResponse } from "../models/models_0";
import { DescribeFieldIndexes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFieldIndexesCommand}.
 */
export interface DescribeFieldIndexesCommandInput extends DescribeFieldIndexesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFieldIndexesCommand}.
 */
export interface DescribeFieldIndexesCommandOutput extends DescribeFieldIndexesResponse, __MetadataBearer {}

/**
 * Returns a list of field indexes discovered in log data. By default, the response includes the `DEFAULT`, `CUSTOM`, and `INACTIVE` index categories. To return indexes from other categories, use the `indexCategories` parameter.
 *
 * For more information about field index policies, see [PutIndexPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeFieldIndexesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeFieldIndexesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeFieldIndexesRequest
 *   logGroupIdentifiers: [ // DescribeFieldIndexesLogGroupIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   indexCategories: [ // IndexCategories
 *     "DEFAULT" || "CUSTOM" || "AUTO" || "INACTIVE",
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFieldIndexesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFieldIndexesResponse
 * //   fieldIndexes: [ // FieldIndexes
 * //     { // FieldIndex
 * //       logGroupIdentifier: "STRING_VALUE",
 * //       fieldIndexName: "STRING_VALUE",
 * //       lastScanTime: Number("long"),
 * //       firstEventTime: Number("long"),
 * //       lastEventTime: Number("long"),
 * //       type: "FACET" || "FIELD_INDEX",
 * //       indexCategory: "DEFAULT" || "CUSTOM" || "AUTO" || "INACTIVE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFieldIndexesCommandInput - {@link DescribeFieldIndexesCommandInput}
 * @returns {@link DescribeFieldIndexesCommandOutput}
 * @see {@link DescribeFieldIndexesCommandInput} for command's `input` shape.
 * @see {@link DescribeFieldIndexesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DescribeFieldIndexesCommand extends command<DescribeFieldIndexesCommandInput, DescribeFieldIndexesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFieldIndexes",
  DescribeFieldIndexes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFieldIndexesRequest;
      output: DescribeFieldIndexesResponse;
    };
    sdk: {
      input: DescribeFieldIndexesCommandInput;
      output: DescribeFieldIndexesCommandOutput;
    };
  };
}
