// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTargetGroupRequest, DeleteTargetGroupResponse } from "../models/models_0";
import { DeleteTargetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTargetGroupCommand}.
 */
export interface DeleteTargetGroupCommandInput extends DeleteTargetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTargetGroupCommand}.
 */
export interface DeleteTargetGroupCommandOutput extends DeleteTargetGroupResponse, __MetadataBearer {}

/**
 * Deletes a target group. You can't delete a target group if it is used in a listener rule or if the target group creation is in progress.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteTargetGroupCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteTargetGroupCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteTargetGroupRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTargetGroupResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTargetGroupCommandInput - {@link DeleteTargetGroupCommandInput}
 * @returns {@link DeleteTargetGroupCommandOutput}
 * @see {@link DeleteTargetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
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
export class DeleteTargetGroupCommand extends command<DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTargetGroup",
  DeleteTargetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTargetGroupRequest;
      output: DeleteTargetGroupResponse;
    };
    sdk: {
      input: DeleteTargetGroupCommandInput;
      output: DeleteTargetGroupCommandOutput;
    };
  };
}
