// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { ListApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandInput extends ListApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandOutput extends ListApplicationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Managed Service for Apache Flink applications in your account. For each
 *       application, the response includes the application name, Amazon Resource Name (ARN), and
 *       status. </p>
 *          <p>If you want detailed information about a specific application, use
 *       <a>DescribeApplication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ListApplicationsRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationsResponse
 * //   ApplicationSummaries: [ // ApplicationSummaries // required
 * //     { // ApplicationSummary
 * //       ApplicationName: "STRING_VALUE", // required
 * //       ApplicationARN: "STRING_VALUE", // required
 * //       ApplicationStatus: "DELETING" || "STARTING" || "STOPPING" || "READY" || "RUNNING" || "UPDATING" || "AUTOSCALING" || "FORCE_STOPPING" || "ROLLING_BACK" || "MAINTENANCE" || "ROLLED_BACK", // required
 * //       ApplicationVersionId: Number("long"), // required
 * //       RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18" || "FLINK-1_19" || "FLINK-1_20" || "FLINK-2_2" || "FLINK-2_3", // required
 * //       ApplicationMode: "STREAMING" || "INTERACTIVE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationsCommandInput - {@link ListApplicationsCommandInput}
 * @returns {@link ListApplicationsCommandOutput}
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class ListApplicationsCommand extends command<ListApplicationsCommandInput, ListApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplications",
  ListApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationsRequest;
      output: ListApplicationsResponse;
    };
    sdk: {
      input: ListApplicationsCommandInput;
      output: ListApplicationsCommandOutput;
    };
  };
}
