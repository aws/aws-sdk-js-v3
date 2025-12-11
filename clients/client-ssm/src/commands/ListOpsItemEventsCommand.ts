// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOpsItemEventsRequest, ListOpsItemEventsResponse } from "../models/models_1";
import { ListOpsItemEvents } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOpsItemEventsCommand}.
 */
export interface ListOpsItemEventsCommandInput extends ListOpsItemEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListOpsItemEventsCommand}.
 */
export interface ListOpsItemEventsCommandOutput extends ListOpsItemEventsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can
 *    limit the results to events associated with specific OpsItems by specifying a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemEventsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListOpsItemEventsRequest
 *   Filters: [ // OpsItemEventFilters
 *     { // OpsItemEventFilter
 *       Key: "OpsItemId", // required
 *       Values: [ // OpsItemEventFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOpsItemEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListOpsItemEventsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Summaries: [ // OpsItemEventSummaries
 * //     { // OpsItemEventSummary
 * //       OpsItemId: "STRING_VALUE",
 * //       EventId: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DetailType: "STRING_VALUE",
 * //       Detail: "STRING_VALUE",
 * //       CreatedBy: { // OpsItemIdentity
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOpsItemEventsCommandInput - {@link ListOpsItemEventsCommandInput}
 * @returns {@link ListOpsItemEventsCommandOutput}
 * @see {@link ListOpsItemEventsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListOpsItemEventsCommand extends $Command
  .classBuilder<
    ListOpsItemEventsCommandInput,
    ListOpsItemEventsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListOpsItemEvents", {})
  .n("SSMClient", "ListOpsItemEventsCommand")
  .sc(ListOpsItemEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOpsItemEventsRequest;
      output: ListOpsItemEventsResponse;
    };
    sdk: {
      input: ListOpsItemEventsCommandInput;
      output: ListOpsItemEventsCommandOutput;
    };
  };
}
