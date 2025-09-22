// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReverseReplicationRequest, ReverseReplicationResponse } from "../models/models_0";
import { ReverseReplication } from "../schemas/schemas_16_Replication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReverseReplicationCommand}.
 */
export interface ReverseReplicationCommandInput extends ReverseReplicationRequest {}
/**
 * @public
 *
 * The output of {@link ReverseReplicationCommand}.
 */
export interface ReverseReplicationCommandOutput extends ReverseReplicationResponse, __MetadataBearer {}

/**
 * <p>Start replication to origin / target region - applies only to protected instances that originated in EC2.
 *             For recovery instances on target region - starts replication back to origin region.
 *             For failback instances on origin region - starts replication to target region to re-protect them.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ReverseReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ReverseReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ReverseReplicationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new ReverseReplicationCommand(input);
 * const response = await client.send(command);
 * // { // ReverseReplicationResponse
 * //   reversedDirectionSourceServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReverseReplicationCommandInput - {@link ReverseReplicationCommandInput}
 * @returns {@link ReverseReplicationCommandOutput}
 * @see {@link ReverseReplicationCommandInput} for command's `input` shape.
 * @see {@link ReverseReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class ReverseReplicationCommand extends $Command
  .classBuilder<
    ReverseReplicationCommandInput,
    ReverseReplicationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "ReverseReplication", {})
  .n("DrsClient", "ReverseReplicationCommand")
  .sc(ReverseReplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReverseReplicationRequest;
      output: ReverseReplicationResponse;
    };
    sdk: {
      input: ReverseReplicationCommandInput;
      output: ReverseReplicationCommandOutput;
    };
  };
}
