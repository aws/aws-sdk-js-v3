// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSpotInstanceRequestsRequest, CancelSpotInstanceRequestsResult } from "../models/models_0";
import { de_CancelSpotInstanceRequestsCommand, se_CancelSpotInstanceRequestsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSpotInstanceRequestsCommand}.
 */
export interface CancelSpotInstanceRequestsCommandInput extends CancelSpotInstanceRequestsRequest {}
/**
 * @public
 *
 * The output of {@link CancelSpotInstanceRequestsCommand}.
 */
export interface CancelSpotInstanceRequestsCommandOutput extends CancelSpotInstanceRequestsResult, __MetadataBearer {}

/**
 * <p>Cancels one or more Spot Instance requests.</p>
 *          <important>
 *             <p>Canceling a Spot Instance request does not terminate running Spot Instances
 *                 associated with the request.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelSpotInstanceRequestsRequest
 *   DryRun: true || false,
 *   SpotInstanceRequestIds: [ // SpotInstanceRequestIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * // { // CancelSpotInstanceRequestsResult
 * //   CancelledSpotInstanceRequests: [ // CancelledSpotInstanceRequestList
 * //     { // CancelledSpotInstanceRequest
 * //       SpotInstanceRequestId: "STRING_VALUE",
 * //       State: "active" || "open" || "closed" || "cancelled" || "completed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelSpotInstanceRequestsCommandInput - {@link CancelSpotInstanceRequestsCommandInput}
 * @returns {@link CancelSpotInstanceRequestsCommandOutput}
 * @see {@link CancelSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To cancel Spot Instance requests
 * ```javascript
 * // This example cancels a Spot Instance request.
 * const input = {
 *   "SpotInstanceRequestIds": [
 *     "sir-08b93456"
 *   ]
 * };
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CancelledSpotInstanceRequests": [
 *     {
 *       "SpotInstanceRequestId": "sir-08b93456",
 *       "State": "cancelled"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-cancel-spot-instance-requests-1
 * ```
 *
 */
export class CancelSpotInstanceRequestsCommand extends $Command
  .classBuilder<
    CancelSpotInstanceRequestsCommandInput,
    CancelSpotInstanceRequestsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CancelSpotInstanceRequests", {})
  .n("EC2Client", "CancelSpotInstanceRequestsCommand")
  .f(void 0, void 0)
  .ser(se_CancelSpotInstanceRequestsCommand)
  .de(de_CancelSpotInstanceRequestsCommand)
  .build() {}
