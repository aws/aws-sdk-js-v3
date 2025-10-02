// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTargetGroupRequest, UpdateTargetGroupResponse } from "../models/models_0";
import { de_UpdateTargetGroupCommand, se_UpdateTargetGroupCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTargetGroupCommand}.
 */
export interface UpdateTargetGroupCommandInput extends UpdateTargetGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTargetGroupCommand}.
 */
export interface UpdateTargetGroupCommandOutput extends UpdateTargetGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateTargetGroupCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateTargetGroupCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateTargetGroupRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   healthCheck: { // HealthCheckConfig
 *     enabled: true || false,
 *     protocol: "STRING_VALUE",
 *     protocolVersion: "STRING_VALUE",
 *     port: Number("int"),
 *     path: "STRING_VALUE",
 *     healthCheckIntervalSeconds: Number("int"),
 *     healthCheckTimeoutSeconds: Number("int"),
 *     healthyThresholdCount: Number("int"),
 *     unhealthyThresholdCount: Number("int"),
 *     matcher: { // Matcher Union: only one key present
 *       httpCode: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateTargetGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTargetGroupResponse
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
 * @param UpdateTargetGroupCommandInput - {@link UpdateTargetGroupCommandInput}
 * @returns {@link UpdateTargetGroupCommandOutput}
 * @see {@link UpdateTargetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateTargetGroupCommandOutput} for command's `response` shape.
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
export class UpdateTargetGroupCommand extends $Command
  .classBuilder<
    UpdateTargetGroupCommandInput,
    UpdateTargetGroupCommandOutput,
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
  .s("MercuryControlPlane", "UpdateTargetGroup", {})
  .n("VPCLatticeClient", "UpdateTargetGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTargetGroupCommand)
  .de(de_UpdateTargetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTargetGroupRequest;
      output: UpdateTargetGroupResponse;
    };
    sdk: {
      input: UpdateTargetGroupCommandInput;
      output: UpdateTargetGroupCommandOutput;
    };
  };
}
