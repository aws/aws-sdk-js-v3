// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeQuotaShareRequest, DescribeQuotaShareResponse } from "../models/models_0";
import { DescribeQuotaShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQuotaShareCommand}.
 */
export interface DescribeQuotaShareCommandInput extends DescribeQuotaShareRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQuotaShareCommand}.
 */
export interface DescribeQuotaShareCommandOutput extends DescribeQuotaShareResponse, __MetadataBearer {}

/**
 * <p>Returns a description of the specified quota share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeQuotaShareCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeQuotaShareCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // DescribeQuotaShareRequest
 *   quotaShareArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeQuotaShareCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQuotaShareResponse
 * //   quotaShareName: "STRING_VALUE",
 * //   quotaShareArn: "STRING_VALUE",
 * //   jobQueueArn: "STRING_VALUE",
 * //   capacityLimits: [ // QuotaShareCapacityLimits
 * //     { // QuotaShareCapacityLimit
 * //       maxCapacity: Number("int"), // required
 * //       capacityUnit: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   resourceSharingConfiguration: { // QuotaShareResourceSharingConfiguration
 * //     strategy: "RESERVE" || "LEND" || "LEND_AND_BORROW", // required
 * //     borrowLimit: Number("int"),
 * //   },
 * //   preemptionConfiguration: { // QuotaSharePreemptionConfiguration
 * //     inSharePreemption: "ENABLED" || "DISABLED", // required
 * //   },
 * //   state: "ENABLED" || "DISABLED",
 * //   status: "CREATING" || "VALID" || "INVALID" || "UPDATING" || "DELETING",
 * //   tags: { // TagrisTagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeQuotaShareCommandInput - {@link DescribeQuotaShareCommandInput}
 * @returns {@link DescribeQuotaShareCommandOutput}
 * @see {@link DescribeQuotaShareCommandInput} for command's `input` shape.
 * @see {@link DescribeQuotaShareCommandOutput} for command's `response` shape.
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
export class DescribeQuotaShareCommand extends $Command
  .classBuilder<
    DescribeQuotaShareCommandInput,
    DescribeQuotaShareCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "DescribeQuotaShare", {})
  .n("BatchClient", "DescribeQuotaShareCommand")
  .sc(DescribeQuotaShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQuotaShareRequest;
      output: DescribeQuotaShareResponse;
    };
    sdk: {
      input: DescribeQuotaShareCommandInput;
      output: DescribeQuotaShareCommandOutput;
    };
  };
}
