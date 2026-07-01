// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessLogSubscriptionRequest, GetAccessLogSubscriptionResponse } from "../models/models_0";
import { GetAccessLogSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
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
 * //   serviceNetworkLogType: "STRING_VALUE",
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class GetAccessLogSubscriptionCommand extends command<GetAccessLogSubscriptionCommandInput, GetAccessLogSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessLogSubscription",
  GetAccessLogSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessLogSubscriptionRequest;
      output: GetAccessLogSubscriptionResponse;
    };
    sdk: {
      input: GetAccessLogSubscriptionCommandInput;
      output: GetAccessLogSubscriptionCommandOutput;
    };
  };
}
