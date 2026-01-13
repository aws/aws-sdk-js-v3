// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateFailbackReplicationConfigurationRequest } from "../models/models_0";
import { UpdateFailbackReplicationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFailbackReplicationConfigurationCommand}.
 */
export interface UpdateFailbackReplicationConfigurationCommandInput extends UpdateFailbackReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFailbackReplicationConfigurationCommand}.
 */
export interface UpdateFailbackReplicationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Allows you to update the failback replication configuration of a Recovery Instance by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateFailbackReplicationConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateFailbackReplicationConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateFailbackReplicationConfigurationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   bandwidthThrottling: Number("long"),
 *   usePrivateIP: true || false,
 * };
 * const command = new UpdateFailbackReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFailbackReplicationConfigurationCommandInput - {@link UpdateFailbackReplicationConfigurationCommandInput}
 * @returns {@link UpdateFailbackReplicationConfigurationCommandOutput}
 * @see {@link UpdateFailbackReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFailbackReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class UpdateFailbackReplicationConfigurationCommand extends $Command
  .classBuilder<
    UpdateFailbackReplicationConfigurationCommandInput,
    UpdateFailbackReplicationConfigurationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "UpdateFailbackReplicationConfiguration", {})
  .n("DrsClient", "UpdateFailbackReplicationConfigurationCommand")
  .sc(UpdateFailbackReplicationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFailbackReplicationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateFailbackReplicationConfigurationCommandInput;
      output: UpdateFailbackReplicationConfigurationCommandOutput;
    };
  };
}
