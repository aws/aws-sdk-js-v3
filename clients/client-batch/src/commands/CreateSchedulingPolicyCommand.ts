// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSchedulingPolicyRequest, CreateSchedulingPolicyResponse } from "../models/models_0";
import { de_CreateSchedulingPolicyCommand, se_CreateSchedulingPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSchedulingPolicyCommand}.
 */
export interface CreateSchedulingPolicyCommandInput extends CreateSchedulingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateSchedulingPolicyCommand}.
 */
export interface CreateSchedulingPolicyCommandOutput extends CreateSchedulingPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an Batch scheduling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateSchedulingPolicyCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateSchedulingPolicyCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // CreateSchedulingPolicyRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSchedulingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchedulingPolicyResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSchedulingPolicyCommandInput - {@link CreateSchedulingPolicyCommandInput}
 * @returns {@link CreateSchedulingPolicyCommandOutput}
 * @see {@link CreateSchedulingPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateSchedulingPolicyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateSchedulingPolicyCommand extends $Command
  .classBuilder<
    CreateSchedulingPolicyCommandInput,
    CreateSchedulingPolicyCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "CreateSchedulingPolicy", {})
  .n("BatchClient", "CreateSchedulingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_CreateSchedulingPolicyCommand)
  .de(de_CreateSchedulingPolicyCommand)
  .build() {}
