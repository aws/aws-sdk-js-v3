// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessLogSubscriptionRequest, GetAccessLogSubscriptionResponse } from "../models/models_0";
import { de_GetAccessLogSubscriptionCommand, se_GetAccessLogSubscriptionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessLogSubscriptionCommand}.
 */
export interface GetAccessLogSubscriptionCommandInput extends GetAccessLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessLogSubscriptionCommand}.
 */
export interface GetAccessLogSubscriptionCommandOutput extends GetAccessLogSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified access log subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // GetAccessLogSubscriptionRequest
 *   accessLogSubscriptionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAccessLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessLogSubscriptionResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   resourceId: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   destinationArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAccessLogSubscriptionCommandInput - {@link GetAccessLogSubscriptionCommandInput}
 * @returns {@link GetAccessLogSubscriptionCommandOutput}
 * @see {@link GetAccessLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetAccessLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class GetAccessLogSubscriptionCommand extends $Command
  .classBuilder<
    GetAccessLogSubscriptionCommandInput,
    GetAccessLogSubscriptionCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "GetAccessLogSubscription", {})
  .n("VPCLatticeClient", "GetAccessLogSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessLogSubscriptionCommand)
  .de(de_GetAccessLogSubscriptionCommand)
  .build() {}
