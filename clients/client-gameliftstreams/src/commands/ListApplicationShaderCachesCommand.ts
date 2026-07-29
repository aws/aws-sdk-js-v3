// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationShaderCachesInput, ListApplicationShaderCachesOutput } from "../models/models_0";
import { ListApplicationShaderCaches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationShaderCachesCommand}.
 */
export interface ListApplicationShaderCachesCommandInput extends ListApplicationShaderCachesInput {}
/**
 * @public
 *
 * The output of {@link ListApplicationShaderCachesCommand}.
 */
export interface ListApplicationShaderCachesCommandOutput extends ListApplicationShaderCachesOutput, __MetadataBearer {}

/**
 * <p>Lists the shader caches associated with an Amazon GameLift Streams application. Each shader cache entry includes its status, associated stream groups, and size in bytes.</p> <p>Returns shader caches associated with the specified Amazon GameLift Streams application in all statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, ListApplicationShaderCachesCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, ListApplicationShaderCachesCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // ListApplicationShaderCachesInput
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new ListApplicationShaderCachesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationShaderCachesOutput
 * //   Items: [ // ShaderCacheSummaryList
 * //     { // ShaderCacheSummary
 * //       Identifier: "STRING_VALUE", // required
 * //       ApplicationArn: "STRING_VALUE", // required
 * //       Status: "INITIALIZED" || "PROCESSING" || "READY" || "DELETING" || "ERROR",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       StorageBytes: Number("long"),
 * //       AssociatedStreamGroups: [ // ArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListApplicationShaderCachesCommandInput - {@link ListApplicationShaderCachesCommandInput}
 * @returns {@link ListApplicationShaderCachesCommandOutput}
 * @see {@link ListApplicationShaderCachesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationShaderCachesCommandOutput} for command's `response` shape.
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
export class ListApplicationShaderCachesCommand extends command<ListApplicationShaderCachesCommandInput, ListApplicationShaderCachesCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationShaderCaches",
  ListApplicationShaderCaches$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationShaderCachesInput;
      output: ListApplicationShaderCachesOutput;
    };
    sdk: {
      input: ListApplicationShaderCachesCommandInput;
      output: ListApplicationShaderCachesCommandOutput;
    };
  };
}
