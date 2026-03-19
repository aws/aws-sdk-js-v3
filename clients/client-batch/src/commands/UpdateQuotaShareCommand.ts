// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateQuotaShareRequest, UpdateQuotaShareResponse } from "../models/models_0";
import { UpdateQuotaShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuotaShareCommand}.
 */
export interface UpdateQuotaShareCommandInput extends UpdateQuotaShareRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuotaShareCommand}.
 */
export interface UpdateQuotaShareCommandOutput extends UpdateQuotaShareResponse, __MetadataBearer {}

/**
 * <p>Updates a quota share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateQuotaShareCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateQuotaShareCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // UpdateQuotaShareRequest
 *   quotaShareArn: "STRING_VALUE", // required
 *   capacityLimits: [ // QuotaShareCapacityLimits
 *     { // QuotaShareCapacityLimit
 *       maxCapacity: Number("int"), // required
 *       capacityUnit: "STRING_VALUE", // required
 *     },
 *   ],
 *   resourceSharingConfiguration: { // QuotaShareResourceSharingConfiguration
 *     strategy: "RESERVE" || "LEND" || "LEND_AND_BORROW", // required
 *     borrowLimit: Number("int"),
 *   },
 *   preemptionConfiguration: { // QuotaSharePreemptionConfiguration
 *     inSharePreemption: "ENABLED" || "DISABLED", // required
 *   },
 *   state: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateQuotaShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQuotaShareResponse
 * //   quotaShareName: "STRING_VALUE",
 * //   quotaShareArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateQuotaShareCommandInput - {@link UpdateQuotaShareCommandInput}
 * @returns {@link UpdateQuotaShareCommandOutput}
 * @see {@link UpdateQuotaShareCommandInput} for command's `input` shape.
 * @see {@link UpdateQuotaShareCommandOutput} for command's `response` shape.
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
export class UpdateQuotaShareCommand extends $Command
  .classBuilder<
    UpdateQuotaShareCommandInput,
    UpdateQuotaShareCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "UpdateQuotaShare", {})
  .n("BatchClient", "UpdateQuotaShareCommand")
  .sc(UpdateQuotaShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQuotaShareRequest;
      output: UpdateQuotaShareResponse;
    };
    sdk: {
      input: UpdateQuotaShareCommandInput;
      output: UpdateQuotaShareCommandOutput;
    };
  };
}
