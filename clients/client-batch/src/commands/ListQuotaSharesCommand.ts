// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListQuotaSharesRequest, ListQuotaSharesResponse } from "../models/models_0";
import { ListQuotaShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQuotaSharesCommand}.
 */
export interface ListQuotaSharesCommandInput extends ListQuotaSharesRequest {}
/**
 * @public
 *
 * The output of {@link ListQuotaSharesCommand}.
 */
export interface ListQuotaSharesCommandOutput extends ListQuotaSharesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch quota shares associated with a job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListQuotaSharesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListQuotaSharesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // ListQuotaSharesRequest
 *   jobQueue: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListQuotaSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListQuotaSharesResponse
 * //   quotaShares: [ // QuotaShareList
 * //     { // QuotaShareDetail
 * //       quotaShareName: "STRING_VALUE",
 * //       quotaShareArn: "STRING_VALUE",
 * //       jobQueueArn: "STRING_VALUE",
 * //       capacityLimits: [ // QuotaShareCapacityLimits
 * //         { // QuotaShareCapacityLimit
 * //           maxCapacity: Number("int"), // required
 * //           capacityUnit: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       resourceSharingConfiguration: { // QuotaShareResourceSharingConfiguration
 * //         strategy: "RESERVE" || "LEND" || "LEND_AND_BORROW", // required
 * //         borrowLimit: Number("int"),
 * //       },
 * //       preemptionConfiguration: { // QuotaSharePreemptionConfiguration
 * //         inSharePreemption: "ENABLED" || "DISABLED", // required
 * //       },
 * //       state: "ENABLED" || "DISABLED",
 * //       status: "CREATING" || "VALID" || "INVALID" || "UPDATING" || "DELETING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQuotaSharesCommandInput - {@link ListQuotaSharesCommandInput}
 * @returns {@link ListQuotaSharesCommandOutput}
 * @see {@link ListQuotaSharesCommandInput} for command's `input` shape.
 * @see {@link ListQuotaSharesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class ListQuotaSharesCommand extends $Command
  .classBuilder<
    ListQuotaSharesCommandInput,
    ListQuotaSharesCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "ListQuotaShares", {})
  .n("BatchClient", "ListQuotaSharesCommand")
  .sc(ListQuotaShares$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQuotaSharesRequest;
      output: ListQuotaSharesResponse;
    };
    sdk: {
      input: ListQuotaSharesCommandInput;
      output: ListQuotaSharesCommandOutput;
    };
  };
}
