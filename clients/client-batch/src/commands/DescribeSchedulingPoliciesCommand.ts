// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSchedulingPoliciesRequest, DescribeSchedulingPoliciesResponse } from "../models/models_0";
import { de_DescribeSchedulingPoliciesCommand, se_DescribeSchedulingPoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSchedulingPoliciesCommand}.
 */
export interface DescribeSchedulingPoliciesCommandInput extends DescribeSchedulingPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSchedulingPoliciesCommand}.
 */
export interface DescribeSchedulingPoliciesCommandOutput extends DescribeSchedulingPoliciesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your scheduling policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeSchedulingPoliciesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeSchedulingPoliciesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeSchedulingPoliciesRequest
 *   arns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSchedulingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSchedulingPoliciesResponse
 * //   schedulingPolicies: [ // SchedulingPolicyDetailList
 * //     { // SchedulingPolicyDetail
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       fairsharePolicy: { // FairsharePolicy
 * //         shareDecaySeconds: Number("int"),
 * //         computeReservation: Number("int"),
 * //         shareDistribution: [ // ShareAttributesList
 * //           { // ShareAttributes
 * //             shareIdentifier: "STRING_VALUE", // required
 * //             weightFactor: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSchedulingPoliciesCommandInput - {@link DescribeSchedulingPoliciesCommandInput}
 * @returns {@link DescribeSchedulingPoliciesCommandOutput}
 * @see {@link DescribeSchedulingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSchedulingPoliciesCommandOutput} for command's `response` shape.
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
export class DescribeSchedulingPoliciesCommand extends $Command
  .classBuilder<
    DescribeSchedulingPoliciesCommandInput,
    DescribeSchedulingPoliciesCommandOutput,
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
  .s("AWSBatchV20160810", "DescribeSchedulingPolicies", {})
  .n("BatchClient", "DescribeSchedulingPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSchedulingPoliciesCommand)
  .de(de_DescribeSchedulingPoliciesCommand)
  .build() {}
