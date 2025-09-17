// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTargetGroupRequest, CreateTargetGroupResponse } from "../models/models_0";
import { de_CreateTargetGroupCommand, se_CreateTargetGroupCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTargetGroupCommand}.
 */
export interface CreateTargetGroupCommandInput extends CreateTargetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateTargetGroupCommand}.
 */
export interface CreateTargetGroupCommandOutput extends CreateTargetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a target group. A target group is a collection of targets, or compute resources,
 *    that run your application or service. A target group can only be used by a single service.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the
 *     <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateTargetGroupCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateTargetGroupCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateTargetGroupRequest
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   config: { // TargetGroupConfig
 *     port: Number("int"),
 *     protocol: "STRING_VALUE",
 *     protocolVersion: "STRING_VALUE",
 *     ipAddressType: "STRING_VALUE",
 *     vpcIdentifier: "STRING_VALUE",
 *     healthCheck: { // HealthCheckConfig
 *       enabled: true || false,
 *       protocol: "STRING_VALUE",
 *       protocolVersion: "STRING_VALUE",
 *       port: Number("int"),
 *       path: "STRING_VALUE",
 *       healthCheckIntervalSeconds: Number("int"),
 *       healthCheckTimeoutSeconds: Number("int"),
 *       healthyThresholdCount: Number("int"),
 *       unhealthyThresholdCount: Number("int"),
 *       matcher: { // Matcher Union: only one key present
 *         httpCode: "STRING_VALUE",
 *       },
 *     },
 *     lambdaEventStructureVersion: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateTargetGroupResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   config: { // TargetGroupConfig
 * //     port: Number("int"),
 * //     protocol: "STRING_VALUE",
 * //     protocolVersion: "STRING_VALUE",
 * //     ipAddressType: "STRING_VALUE",
 * //     vpcIdentifier: "STRING_VALUE",
 * //     healthCheck: { // HealthCheckConfig
 * //       enabled: true || false,
 * //       protocol: "STRING_VALUE",
 * //       protocolVersion: "STRING_VALUE",
 * //       port: Number("int"),
 * //       path: "STRING_VALUE",
 * //       healthCheckIntervalSeconds: Number("int"),
 * //       healthCheckTimeoutSeconds: Number("int"),
 * //       healthyThresholdCount: Number("int"),
 * //       unhealthyThresholdCount: Number("int"),
 * //       matcher: { // Matcher Union: only one key present
 * //         httpCode: "STRING_VALUE",
 * //       },
 * //     },
 * //     lambdaEventStructureVersion: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTargetGroupCommandInput - {@link CreateTargetGroupCommandInput}
 * @returns {@link CreateTargetGroupCommandOutput}
 * @see {@link CreateTargetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateTargetGroupCommandOutput} for command's `response` shape.
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
export class CreateTargetGroupCommand extends $Command
  .classBuilder<
    CreateTargetGroupCommandInput,
    CreateTargetGroupCommandOutput,
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
  .s("MercuryControlPlane", "CreateTargetGroup", {})
  .n("VPCLatticeClient", "CreateTargetGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateTargetGroupCommand)
  .de(de_CreateTargetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTargetGroupRequest;
      output: CreateTargetGroupResponse;
    };
    sdk: {
      input: CreateTargetGroupCommandInput;
      output: CreateTargetGroupCommandOutput;
    };
  };
}
