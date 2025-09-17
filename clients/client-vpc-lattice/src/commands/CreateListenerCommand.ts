// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateListenerRequest, CreateListenerResponse } from "../models/models_0";
import { de_CreateListenerCommand, se_CreateListenerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandInput extends CreateListenerRequest {}
/**
 * @public
 *
 * The output of {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandOutput extends CreateListenerResponse, __MetadataBearer {}

/**
 * <p>Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must
 *    add one or more listeners. A listener is a process that checks for connection requests to your
 *    services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the
 *    <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateListenerCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateListenerCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateListenerRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   protocol: "STRING_VALUE", // required
 *   port: Number("int"),
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
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * // { // CreateListenerResponse
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
 * @param CreateListenerCommandInput - {@link CreateListenerCommandInput}
 * @returns {@link CreateListenerCommandOutput}
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
 *
 * @public
 */
export class CreateListenerCommand extends $Command
  .classBuilder<
    CreateListenerCommandInput,
    CreateListenerCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "CreateListener", {})
  .n("VPCLatticeClient", "CreateListenerCommand")
  .f(void 0, void 0)
  .ser(se_CreateListenerCommand)
  .de(de_CreateListenerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListenerRequest;
      output: CreateListenerResponse;
    };
    sdk: {
      input: CreateListenerCommandInput;
      output: CreateListenerCommandOutput;
    };
  };
}
