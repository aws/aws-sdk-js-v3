// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetFailbackReplicationConfigurationRequest,
  GetFailbackReplicationConfigurationResponse,
} from "../models/models_0";
import { GetFailbackReplicationConfiguration } from "../schemas/schemas_21_GetFailbackReplicationConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFailbackReplicationConfigurationCommand}.
 */
export interface GetFailbackReplicationConfigurationCommandInput extends GetFailbackReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetFailbackReplicationConfigurationCommand}.
 */
export interface GetFailbackReplicationConfigurationCommandOutput
  extends GetFailbackReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetFailbackReplicationConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetFailbackReplicationConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // GetFailbackReplicationConfigurationRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new GetFailbackReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetFailbackReplicationConfigurationResponse
 * //   recoveryInstanceID: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   bandwidthThrottling: Number("long"),
 * //   usePrivateIP: true || false,
 * // };
 *
 * ```
 *
 * @param GetFailbackReplicationConfigurationCommandInput - {@link GetFailbackReplicationConfigurationCommandInput}
 * @returns {@link GetFailbackReplicationConfigurationCommandOutput}
 * @see {@link GetFailbackReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFailbackReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
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
export class GetFailbackReplicationConfigurationCommand extends $Command
  .classBuilder<
    GetFailbackReplicationConfigurationCommandInput,
    GetFailbackReplicationConfigurationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "GetFailbackReplicationConfiguration", {})
  .n("DrsClient", "GetFailbackReplicationConfigurationCommand")
  .sc(GetFailbackReplicationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFailbackReplicationConfigurationRequest;
      output: GetFailbackReplicationConfigurationResponse;
    };
    sdk: {
      input: GetFailbackReplicationConfigurationCommandInput;
      output: GetFailbackReplicationConfigurationCommandOutput;
    };
  };
}
