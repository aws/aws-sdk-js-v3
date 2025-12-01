// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTagsLogGroupRequest, ListTagsLogGroupResponse } from "../models/models_0";
import { ListTagsLogGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsLogGroupCommand}.
 */
export interface ListTagsLogGroupCommandInput extends ListTagsLogGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsLogGroupCommand}.
 */
export interface ListTagsLogGroupCommandOutput extends ListTagsLogGroupResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use
 *           <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p>
 *          </important>
 *          <p>Lists the tags for the specified log group.</p>
 *
 * @deprecated Please use the generic tagging API ListTagsForResource
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListTagsLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListTagsLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListTagsLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 * };
 * const command = new ListTagsLogGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsLogGroupResponse
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsLogGroupCommandInput - {@link ListTagsLogGroupCommandInput}
 * @returns {@link ListTagsLogGroupCommandOutput}
 * @see {@link ListTagsLogGroupCommandInput} for command's `input` shape.
 * @see {@link ListTagsLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class ListTagsLogGroupCommand extends $Command
  .classBuilder<
    ListTagsLogGroupCommandInput,
    ListTagsLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListTagsLogGroup", {})
  .n("CloudWatchLogsClient", "ListTagsLogGroupCommand")
  .sc(ListTagsLogGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsLogGroupRequest;
      output: ListTagsLogGroupResponse;
    };
    sdk: {
      input: ListTagsLogGroupCommandInput;
      output: ListTagsLogGroupCommandOutput;
    };
  };
}
