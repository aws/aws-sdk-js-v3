// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSchedulingPoliciesRequest, ListSchedulingPoliciesResponse } from "../models/models_0";
import { ListSchedulingPolicies } from "../schemas/schemas_20_ListSchedulingPolicies";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchedulingPoliciesCommand}.
 */
export interface ListSchedulingPoliciesCommandInput extends ListSchedulingPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListSchedulingPoliciesCommand}.
 */
export interface ListSchedulingPoliciesCommandOutput extends ListSchedulingPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch scheduling policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListSchedulingPoliciesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListSchedulingPoliciesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // ListSchedulingPoliciesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSchedulingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListSchedulingPoliciesResponse
 * //   schedulingPolicies: [ // SchedulingPolicyListingDetailList
 * //     { // SchedulingPolicyListingDetail
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchedulingPoliciesCommandInput - {@link ListSchedulingPoliciesCommandInput}
 * @returns {@link ListSchedulingPoliciesCommandOutput}
 * @see {@link ListSchedulingPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulingPoliciesCommandOutput} for command's `response` shape.
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
export class ListSchedulingPoliciesCommand extends $Command
  .classBuilder<
    ListSchedulingPoliciesCommandInput,
    ListSchedulingPoliciesCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "ListSchedulingPolicies", {})
  .n("BatchClient", "ListSchedulingPoliciesCommand")
  .sc(ListSchedulingPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchedulingPoliciesRequest;
      output: ListSchedulingPoliciesResponse;
    };
    sdk: {
      input: ListSchedulingPoliciesCommandInput;
      output: ListSchedulingPoliciesCommandOutput;
    };
  };
}
