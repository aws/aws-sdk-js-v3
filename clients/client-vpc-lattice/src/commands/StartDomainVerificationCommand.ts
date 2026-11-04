// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDomainVerificationRequest, StartDomainVerificationResponse } from "../models/models_0";
import { StartDomainVerification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDomainVerificationCommand}.
 */
export interface StartDomainVerificationCommandInput extends StartDomainVerificationRequest {}
/**
 * @public
 *
 * The output of {@link StartDomainVerificationCommand}.
 */
export interface StartDomainVerificationCommandOutput extends StartDomainVerificationResponse, __MetadataBearer {}

/**
 * Starts the domain verification process for a custom domain name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, StartDomainVerificationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, StartDomainVerificationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // StartDomainVerificationRequest
 *   clientToken: "STRING_VALUE",
 *   domainName: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartDomainVerificationCommand(input);
 * const response = await client.send(command);
 * // { // StartDomainVerificationResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   domainName: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   txtMethodConfig: { // TxtMethodConfig
 * //     value: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param StartDomainVerificationCommandInput - {@link StartDomainVerificationCommandInput}
 * @returns {@link StartDomainVerificationCommandOutput}
 * @see {@link StartDomainVerificationCommandInput} for command's `input` shape.
 * @see {@link StartDomainVerificationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link VPCLatticeServiceException}
 *
 * Base exception class for all service exceptions from VPCLattice service.
 *
 * @public
 */
export class StartDomainVerificationCommand extends command<StartDomainVerificationCommandInput, StartDomainVerificationCommandOutput>(
  _ep0,
  _mw0,
  "StartDomainVerification",
  StartDomainVerification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDomainVerificationRequest;
      output: StartDomainVerificationResponse;
    };
    sdk: {
      input: StartDomainVerificationCommandInput;
      output: StartDomainVerificationCommandOutput;
    };
  };
}
