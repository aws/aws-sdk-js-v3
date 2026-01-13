// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GameLiftStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GameLiftStreamsClient";
import type { UpdateApplicationInput, UpdateApplicationOutput } from "../models/models_0";
import { UpdateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationInput {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationOutput, __MetadataBearer {}

/**
 * <p> Updates the mutable configuration settings for a Amazon GameLift Streams application resource. You can change the <code>Description</code>, <code>ApplicationLogOutputUri</code>, and <code>ApplicationLogPaths</code>. </p> <p>To update application settings, specify the application ID and provide the new values. If the operation is successful, it returns the complete updated set of settings for the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, UpdateApplicationCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, UpdateApplicationCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // UpdateApplicationInput
 *   Identifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ApplicationLogPaths: [ // FilePaths
 *     "STRING_VALUE",
 *   ],
 *   ApplicationLogOutputUri: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   RuntimeEnvironment: { // RuntimeEnvironment
 * //     Type: "PROTON" || "WINDOWS" || "UBUNTU", // required
 * //     Version: "STRING_VALUE", // required
 * //   },
 * //   ExecutablePath: "STRING_VALUE",
 * //   ApplicationLogPaths: [ // FilePaths
 * //     "STRING_VALUE",
 * //   ],
 * //   ApplicationLogOutputUri: "STRING_VALUE",
 * //   ApplicationSourceUri: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Status: "INITIALIZED" || "PROCESSING" || "READY" || "DELETING" || "ERROR",
 * //   StatusReason: "internalError" || "accessDenied",
 * //   ReplicationStatuses: [ // ReplicationStatuses
 * //     { // ReplicationStatus
 * //       Location: "STRING_VALUE",
 * //       Status: "REPLICATING" || "COMPLETED",
 * //     },
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   AssociatedStreamGroups: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "UpdateApplication", {})
  .n("GameLiftStreamsClient", "UpdateApplicationCommand")
  .sc(UpdateApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationInput;
      output: UpdateApplicationOutput;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
