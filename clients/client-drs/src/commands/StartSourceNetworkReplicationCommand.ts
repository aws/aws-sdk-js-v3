// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSourceNetworkReplicationRequest, StartSourceNetworkReplicationResponse } from "../models/models_0";
import { StartSourceNetworkReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartSourceNetworkReplicationCommandOutput extends StartSourceNetworkReplicationResponse, __MetadataBearer {}

/**
 * Starts replication for a Source Network. This action would make the Source Network protected.
 *
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
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class StartSourceNetworkReplicationCommand extends command<StartSourceNetworkReplicationCommandInput, StartSourceNetworkReplicationCommandOutput>(
  _ep0,
  _mw0,
  "StartSourceNetworkReplication",
  StartSourceNetworkReplication$
) {
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
