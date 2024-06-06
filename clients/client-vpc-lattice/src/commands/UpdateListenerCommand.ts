// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateListenerRequest, UpdateListenerResponse } from "../models/models_0";
import { de_UpdateListenerCommand, se_UpdateListenerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateListenerCommand}.
 */
export interface UpdateListenerCommandInput extends UpdateListenerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateListenerCommand}.
 */
export interface UpdateListenerCommandOutput extends UpdateListenerResponse, __MetadataBearer {}

/**
 * <p>Updates the specified listener for the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateListenerCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateListenerCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateListenerRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   listenerIdentifier: "STRING_VALUE", // required
 *   defaultAction: { // RuleAction Union: only one key present
 *     forward: { // ForwardAction
 *       targetGroups: [ // WeightedTargetGroupList // required
 *         { // WeightedTargetGroup
 *           targetGroupIdentifier: "STRING_VALUE", // required
 *           weight: Number("int"),
 *         },
 *       ],
 *     },
 *     fixedResponse: { // FixedResponseAction
 *       statusCode: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new UpdateListenerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateListenerResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   protocol: "STRING_VALUE",
 * //   port: Number("int"),
 * //   serviceArn: "STRING_VALUE",
 * //   serviceId: "STRING_VALUE",
 * //   defaultAction: { // RuleAction Union: only one key present
 * //     forward: { // ForwardAction
 * //       targetGroups: [ // WeightedTargetGroupList // required
 * //         { // WeightedTargetGroup
 * //           targetGroupIdentifier: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     fixedResponse: { // FixedResponseAction
 * //       statusCode: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateListenerCommandInput - {@link UpdateListenerCommandInput}
 * @returns {@link UpdateListenerCommandOutput}
 * @see {@link UpdateListenerCommandInput} for command's `input` shape.
 * @see {@link UpdateListenerCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
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
export class UpdateListenerCommand extends $Command
  .classBuilder<
    UpdateListenerCommandInput,
    UpdateListenerCommandOutput,
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
  .s("MercuryControlPlane", "UpdateListener", {})
  .n("VPCLatticeClient", "UpdateListenerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateListenerCommand)
  .de(de_UpdateListenerCommand)
  .build() {}
