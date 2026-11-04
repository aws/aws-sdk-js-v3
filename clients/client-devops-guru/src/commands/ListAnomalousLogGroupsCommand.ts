// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnomalousLogGroupsRequest, ListAnomalousLogGroupsResponse } from "../models/models_0";
import { ListAnomalousLogGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAnomalousLogGroupsCommand}.
 */
export interface ListAnomalousLogGroupsCommandInput extends ListAnomalousLogGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalousLogGroupsCommand}.
 */
export interface ListAnomalousLogGroupsCommandOutput extends ListAnomalousLogGroupsResponse, __MetadataBearer {}

/**
 * Returns the list of log groups that contain log anomalies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListAnomalousLogGroupsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListAnomalousLogGroupsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListAnomalousLogGroupsRequest
 *   InsightId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalousLogGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalousLogGroupsResponse
 * //   InsightId: "STRING_VALUE", // required
 * //   AnomalousLogGroups: [ // AnomalousLogGroups // required
 * //     { // AnomalousLogGroup
 * //       LogGroupName: "STRING_VALUE",
 * //       ImpactStartTime: new Date("TIMESTAMP"),
 * //       ImpactEndTime: new Date("TIMESTAMP"),
 * //       NumberOfLogLinesScanned: Number("int"),
 * //       LogAnomalyShowcases: [ // LogAnomalyShowcases
 * //         { // LogAnomalyShowcase
 * //           LogAnomalyClasses: [ // LogAnomalyClasses
 * //             { // LogAnomalyClass
 * //               LogStreamName: "STRING_VALUE",
 * //               LogAnomalyType: "KEYWORD" || "KEYWORD_TOKEN" || "FORMAT" || "HTTP_CODE" || "BLOCK_FORMAT" || "NUMERICAL_POINT" || "NUMERICAL_NAN" || "NEW_FIELD_NAME",
 * //               LogAnomalyToken: "STRING_VALUE",
 * //               LogEventId: "STRING_VALUE",
 * //               Explanation: "STRING_VALUE",
 * //               NumberOfLogLinesOccurrences: Number("int"),
 * //               LogEventTimestamp: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomalousLogGroupsCommandInput - {@link ListAnomalousLogGroupsCommandInput}
 * @returns {@link ListAnomalousLogGroupsCommandOutput}
 * @see {@link ListAnomalousLogGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalousLogGroupsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource could not be found
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class ListAnomalousLogGroupsCommand extends command<ListAnomalousLogGroupsCommandInput, ListAnomalousLogGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListAnomalousLogGroups",
  ListAnomalousLogGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomalousLogGroupsRequest;
      output: ListAnomalousLogGroupsResponse;
    };
    sdk: {
      input: ListAnomalousLogGroupsCommandInput;
      output: ListAnomalousLogGroupsCommandOutput;
    };
  };
}
