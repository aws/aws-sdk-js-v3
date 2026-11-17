// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRemoteSourceActionJobRequest, StartRemoteSourceActionJobResponse } from "../models/models_0";
import { StartRemoteSourceActionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRemoteSourceActionJobCommand}.
 */
export interface StartRemoteSourceActionJobCommandInput extends StartRemoteSourceActionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartRemoteSourceActionJobCommand}.
 */
export interface StartRemoteSourceActionJobCommandOutput extends StartRemoteSourceActionJobResponse, __MetadataBearer {}

/**
 * <p>Starts a job that runs a source action on source servers through a connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartRemoteSourceActionJobCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartRemoteSourceActionJobCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartRemoteSourceActionJobRequest
 *   remoteSourceActionArns: [ // RemoteSourceActionArns // required
 *     "STRING_VALUE",
 *   ],
 *   connectorArn: "STRING_VALUE", // required
 *   sourceServerArns: [ // SourceServerArns // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new StartRemoteSourceActionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartRemoteSourceActionJobResponse
 * //   remoteSourceActionJob: { // RemoteSourceActionJob
 * //     remoteSourceActionJobID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     sourceServerArns: [ // SourceServerArns
 * //       "STRING_VALUE",
 * //     ],
 * //     remoteSourceActionArns: [ // RemoteSourceActionArns
 * //       "STRING_VALUE",
 * //     ],
 * //     connectorArn: "STRING_VALUE",
 * //     startedAt: new Date("TIMESTAMP"),
 * //     endedAt: new Date("TIMESTAMP"),
 * //     statusReason: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartRemoteSourceActionJobCommandInput - {@link StartRemoteSourceActionJobCommandInput}
 * @returns {@link StartRemoteSourceActionJobCommandOutput}
 * @see {@link StartRemoteSourceActionJobCommandInput} for command's `input` shape.
 * @see {@link StartRemoteSourceActionJobCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because it exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class StartRemoteSourceActionJobCommand extends command<StartRemoteSourceActionJobCommandInput, StartRemoteSourceActionJobCommandOutput>(
  _ep0,
  _mw0,
  "StartRemoteSourceActionJob",
  StartRemoteSourceActionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRemoteSourceActionJobRequest;
      output: StartRemoteSourceActionJobResponse;
    };
    sdk: {
      input: StartRemoteSourceActionJobCommandInput;
      output: StartRemoteSourceActionJobCommandOutput;
    };
  };
}
