// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { UpdateService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {}

/**
 * <p>Updates the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateServiceCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateServiceCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateServiceRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   certificateArn: "STRING_VALUE",
 *   authType: "STRING_VALUE",
 *   idleTimeoutSeconds: Number("int"),
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   customDomainName: "STRING_VALUE",
 * //   certificateArn: "STRING_VALUE",
 * //   authType: "STRING_VALUE",
 * //   idleTimeoutSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class UpdateServiceCommand extends command<UpdateServiceCommandInput, UpdateServiceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateService",
  UpdateService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceRequest;
      output: UpdateServiceResponse;
    };
    sdk: {
      input: UpdateServiceCommandInput;
      output: UpdateServiceCommandOutput;
    };
  };
}
