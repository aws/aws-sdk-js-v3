// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSchedulingPolicyRequest, UpdateSchedulingPolicyResponse } from "../models/models_0";
import { UpdateSchedulingPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSchedulingPolicyCommand}.
 */
export interface UpdateSchedulingPolicyCommandInput extends UpdateSchedulingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSchedulingPolicyCommand}.
 */
export interface UpdateSchedulingPolicyCommandOutput extends UpdateSchedulingPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates a scheduling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateSchedulingPolicyCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateSchedulingPolicyCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // UpdateSchedulingPolicyRequest
 *   arn: "STRING_VALUE", // required
 *   fairsharePolicy: { // FairsharePolicy
 *     shareDecaySeconds: Number("int"),
 *     computeReservation: Number("int"),
 *     shareDistribution: [ // ShareAttributesList
 *       { // ShareAttributes
 *         shareIdentifier: "STRING_VALUE", // required
 *         weightFactor: Number("float"),
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateSchedulingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSchedulingPolicyCommandInput - {@link UpdateSchedulingPolicyCommandInput}
 * @returns {@link UpdateSchedulingPolicyCommandOutput}
 * @see {@link UpdateSchedulingPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateSchedulingPolicyCommandOutput} for command's `response` shape.
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
export class UpdateSchedulingPolicyCommand extends $Command
  .classBuilder<
    UpdateSchedulingPolicyCommandInput,
    UpdateSchedulingPolicyCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "UpdateSchedulingPolicy", {})
  .n("BatchClient", "UpdateSchedulingPolicyCommand")
  .sc(UpdateSchedulingPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSchedulingPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateSchedulingPolicyCommandInput;
      output: UpdateSchedulingPolicyCommandOutput;
    };
  };
}
