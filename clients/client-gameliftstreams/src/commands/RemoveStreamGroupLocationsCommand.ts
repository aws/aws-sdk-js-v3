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
import type { RemoveStreamGroupLocationsInput } from "../models/models_0";
import { RemoveStreamGroupLocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveStreamGroupLocationsCommand}.
 */
export interface RemoveStreamGroupLocationsCommandInput extends RemoveStreamGroupLocationsInput {}
/**
 * @public
 *
 * The output of {@link RemoveStreamGroupLocationsCommand}.
 */
export interface RemoveStreamGroupLocationsCommandOutput extends __MetadataBearer {}

/**
 * <p> Removes a set of remote locations from this stream group. To remove a location, the stream group must be in <code>ACTIVE</code> status. When you remove a location, Amazon GameLift Streams releases allocated compute resources in that location. Stream sessions can no longer start from removed locations in a stream group. Amazon GameLift Streams also deletes the content files of all associated applications that were in Amazon GameLift Streams's internal Amazon S3 bucket at this location. </p> <p> You cannot remove the Amazon Web Services Region location where you initially created this stream group, known as the primary location. However, you can set the stream capacity to zero to avoid incurring costs for allocated compute resources in that location. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, RemoveStreamGroupLocationsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, RemoveStreamGroupLocationsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // RemoveStreamGroupLocationsInput
 *   Identifier: "STRING_VALUE", // required
 *   Locations: [ // LocationsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveStreamGroupLocationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveStreamGroupLocationsCommandInput - {@link RemoveStreamGroupLocationsCommandInput}
 * @returns {@link RemoveStreamGroupLocationsCommandOutput}
 * @see {@link RemoveStreamGroupLocationsCommandInput} for command's `input` shape.
 * @see {@link RemoveStreamGroupLocationsCommandOutput} for command's `response` shape.
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
export class RemoveStreamGroupLocationsCommand extends $Command
  .classBuilder<
    RemoveStreamGroupLocationsCommandInput,
    RemoveStreamGroupLocationsCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "RemoveStreamGroupLocations", {})
  .n("GameLiftStreamsClient", "RemoveStreamGroupLocationsCommand")
  .sc(RemoveStreamGroupLocations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveStreamGroupLocationsInput;
      output: {};
    };
    sdk: {
      input: RemoveStreamGroupLocationsCommandInput;
      output: RemoveStreamGroupLocationsCommandOutput;
    };
  };
}
