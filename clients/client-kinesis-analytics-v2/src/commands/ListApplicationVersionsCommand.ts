// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import type { ListApplicationVersionsRequest, ListApplicationVersionsResponse } from "../models/models_0";
import { ListApplicationVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationVersionsCommand}.
 */
export interface ListApplicationVersionsCommandInput extends ListApplicationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationVersionsCommand}.
 */
export interface ListApplicationVersionsCommandOutput extends ListApplicationVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration
 *       associated with each version.</p>
 *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
 *          <note>
 *             <p>This operation is supported only for Managed Service for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationVersionsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationVersionsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ListApplicationVersionsRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationVersionsResponse
 * //   ApplicationVersionSummaries: [ // ApplicationVersionSummaries
 * //     { // ApplicationVersionSummary
 * //       ApplicationVersionId: Number("long"), // required
 * //       ApplicationStatus: "DELETING" || "STARTING" || "STOPPING" || "READY" || "RUNNING" || "UPDATING" || "AUTOSCALING" || "FORCE_STOPPING" || "ROLLING_BACK" || "MAINTENANCE" || "ROLLED_BACK", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationVersionsCommandInput - {@link ListApplicationVersionsCommandInput}
 * @returns {@link ListApplicationVersionsCommandOutput}
 * @see {@link ListApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class ListApplicationVersionsCommand extends $Command
  .classBuilder<
    ListApplicationVersionsCommandInput,
    ListApplicationVersionsCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "ListApplicationVersions", {})
  .n("KinesisAnalyticsV2Client", "ListApplicationVersionsCommand")
  .sc(ListApplicationVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationVersionsRequest;
      output: ListApplicationVersionsResponse;
    };
    sdk: {
      input: ListApplicationVersionsCommandInput;
      output: ListApplicationVersionsCommandOutput;
    };
  };
}
