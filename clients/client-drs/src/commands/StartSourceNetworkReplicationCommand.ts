// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartSourceNetworkReplicationRequest, StartSourceNetworkReplicationResponse } from "../models/models_0";
import { StartSourceNetworkReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSourceNetworkReplicationCommand}.
 */
export interface StartSourceNetworkReplicationCommandInput extends StartSourceNetworkReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartSourceNetworkReplicationCommand}.
 */
export interface StartSourceNetworkReplicationCommandOutput
  extends StartSourceNetworkReplicationResponse,
    __MetadataBearer {}

/**
 * <p>Starts replication for a Source Network. This action would make the Source Network protected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartSourceNetworkReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartSourceNetworkReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // StartSourceNetworkReplicationRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new StartSourceNetworkReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartSourceNetworkReplicationResponse
 * //   sourceNetwork: { // SourceNetwork
 * //     sourceNetworkID: "STRING_VALUE",
 * //     sourceVpcID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     replicationStatus: "STRING_VALUE",
 * //     replicationStatusDetails: "STRING_VALUE",
 * //     cfnStackName: "STRING_VALUE",
 * //     sourceRegion: "STRING_VALUE",
 * //     sourceAccountID: "STRING_VALUE",
 * //     lastRecovery: { // RecoveryLifeCycle
 * //       apiCallDateTime: new Date("TIMESTAMP"),
 * //       jobID: "STRING_VALUE",
 * //       lastRecoveryResult: "STRING_VALUE",
 * //     },
 * //     launchedVpcID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSourceNetworkReplicationCommandInput - {@link StartSourceNetworkReplicationCommandInput}
 * @returns {@link StartSourceNetworkReplicationCommandOutput}
 * @see {@link StartSourceNetworkReplicationCommandInput} for command's `input` shape.
 * @see {@link StartSourceNetworkReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
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
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class StartSourceNetworkReplicationCommand extends $Command
  .classBuilder<
    StartSourceNetworkReplicationCommandInput,
    StartSourceNetworkReplicationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "StartSourceNetworkReplication", {})
  .n("DrsClient", "StartSourceNetworkReplicationCommand")
  .sc(StartSourceNetworkReplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSourceNetworkReplicationRequest;
      output: StartSourceNetworkReplicationResponse;
    };
    sdk: {
      input: StartSourceNetworkReplicationCommandInput;
      output: StartSourceNetworkReplicationCommandOutput;
    };
  };
}
