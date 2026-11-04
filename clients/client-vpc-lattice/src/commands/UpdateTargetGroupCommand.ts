// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTargetGroupRequest, UpdateTargetGroupResponse } from "../models/models_0";
import { UpdateTargetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the specified target group.
 *
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
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
export class UpdateTargetGroupCommand extends command<UpdateTargetGroupCommandInput, UpdateTargetGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTargetGroup",
  UpdateTargetGroup$
) {
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
