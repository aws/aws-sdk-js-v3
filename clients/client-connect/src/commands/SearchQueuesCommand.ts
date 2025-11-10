// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchQueuesResponse } from "../models/models_2";
import { SearchQueuesRequest } from "../models/models_3";
import { SearchQueues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchQueuesCommand}.
 */
export interface SearchQueuesCommandInput extends SearchQueuesRequest {}
/**
 * @public
 *
 * The output of {@link SearchQueuesCommand}.
 */
export interface SearchQueuesCommandOutput extends SearchQueuesResponse, __MetadataBearer {}

/**
 * <p>Searches queues in an Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // QueueSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // QueueSearchCriteria
 *     OrConditions: [ // QueueSearchConditionList
 *       {
 *         OrConditions: [
 *           "<QueueSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<QueueSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         QueueTypeCondition: "STANDARD",
 *       },
 *     ],
 *     AndConditions: [
 *       "<QueueSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     QueueTypeCondition: "STANDARD",
 *   },
 * };
 * const command = new SearchQueuesCommand(input);
 * const response = await client.send(command);
 * // { // SearchQueuesResponse
 * //   Queues: [ // QueueSearchSummaryList
 * //     { // Queue
 * //       Name: "STRING_VALUE",
 * //       QueueArn: "STRING_VALUE",
 * //       QueueId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       OutboundCallerConfig: { // OutboundCallerConfig
 * //         OutboundCallerIdName: "STRING_VALUE",
 * //         OutboundCallerIdNumberId: "STRING_VALUE",
 * //         OutboundFlowId: "STRING_VALUE",
 * //       },
 * //       OutboundEmailConfig: { // OutboundEmailConfig
 * //         OutboundEmailAddressId: "STRING_VALUE",
 * //       },
 * //       HoursOfOperationId: "STRING_VALUE",
 * //       MaxContacts: Number("int"),
 * //       Status: "ENABLED" || "DISABLED",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchQueuesCommandInput - {@link SearchQueuesCommandInput}
 * @returns {@link SearchQueuesCommandOutput}
 * @see {@link SearchQueuesCommandInput} for command's `input` shape.
 * @see {@link SearchQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchQueuesCommand extends $Command
  .classBuilder<
    SearchQueuesCommandInput,
    SearchQueuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchQueues", {})
  .n("ConnectClient", "SearchQueuesCommand")
  .sc(SearchQueues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchQueuesRequest;
      output: SearchQueuesResponse;
    };
    sdk: {
      input: SearchQueuesCommandInput;
      output: SearchQueuesCommandOutput;
    };
  };
}
