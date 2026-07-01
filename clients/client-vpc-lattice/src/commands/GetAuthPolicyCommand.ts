// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAuthPolicyRequest, GetAuthPolicyResponse } from "../models/models_0";
import { GetAuthPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAuthPolicyCommand}.
 */
export interface GetAuthPolicyCommandInput extends GetAuthPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthPolicyCommand}.
 */
export interface GetAuthPolicyCommandOutput extends GetAuthPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the auth policy for the specified service or service network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetAuthPolicyCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetAuthPolicyCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // GetAuthPolicyRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAuthPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthPolicyResponse
 * //   policy: "STRING_VALUE",
 * //   state: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAuthPolicyCommandInput - {@link GetAuthPolicyCommandInput}
 * @returns {@link GetAuthPolicyCommandOutput}
 * @see {@link GetAuthPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAuthPolicyCommandOutput} for command's `response` shape.
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
export class GetAuthPolicyCommand extends command<GetAuthPolicyCommandInput, GetAuthPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetAuthPolicy",
  GetAuthPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAuthPolicyRequest;
      output: GetAuthPolicyResponse;
    };
    sdk: {
      input: GetAuthPolicyCommandInput;
      output: GetAuthPolicyCommandOutput;
    };
  };
}
