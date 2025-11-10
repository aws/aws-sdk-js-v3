// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessLogSubscriptionsRequest, ListAccessLogSubscriptionsResponse } from "../models/models_0";
import { ListAccessLogSubscriptions } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessLogSubscriptionsCommand}.
 */
export interface ListAccessLogSubscriptionsCommandInput extends ListAccessLogSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessLogSubscriptionsCommand}.
 */
export interface ListAccessLogSubscriptionsCommandOutput extends ListAccessLogSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Lists the access log subscriptions for the specified service network or service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListAccessLogSubscriptionsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListAccessLogSubscriptionsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // ListAccessLogSubscriptionsRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccessLogSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessLogSubscriptionsResponse
 * //   items: [ // AccessLogSubscriptionList // required
 * //     { // AccessLogSubscriptionSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       resourceId: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //       destinationArn: "STRING_VALUE", // required
 * //       serviceNetworkLogType: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessLogSubscriptionsCommandInput - {@link ListAccessLogSubscriptionsCommandInput}
 * @returns {@link ListAccessLogSubscriptionsCommandOutput}
 * @see {@link ListAccessLogSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListAccessLogSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class ListAccessLogSubscriptionsCommand extends $Command
  .classBuilder<
    ListAccessLogSubscriptionsCommandInput,
    ListAccessLogSubscriptionsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "ListAccessLogSubscriptions", {})
  .n("VPCLatticeClient", "ListAccessLogSubscriptionsCommand")
  .sc(ListAccessLogSubscriptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessLogSubscriptionsRequest;
      output: ListAccessLogSubscriptionsResponse;
    };
    sdk: {
      input: ListAccessLogSubscriptionsCommandInput;
      output: ListAccessLogSubscriptionsCommandOutput;
    };
  };
}
