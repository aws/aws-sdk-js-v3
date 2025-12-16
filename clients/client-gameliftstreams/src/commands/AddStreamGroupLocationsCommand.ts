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
import type { AddStreamGroupLocationsInput, AddStreamGroupLocationsOutput } from "../models/models_0";
import { AddStreamGroupLocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddStreamGroupLocationsCommand}.
 */
export interface AddStreamGroupLocationsCommandInput extends AddStreamGroupLocationsInput {}
/**
 * @public
 *
 * The output of {@link AddStreamGroupLocationsCommand}.
 */
export interface AddStreamGroupLocationsCommandOutput extends AddStreamGroupLocationsOutput, __MetadataBearer {}

/**
 * <p> Add locations that can host stream sessions. To add a location, the stream group must be in <code>ACTIVE</code> status. You configure locations and their corresponding capacity for each stream group. Creating a stream group in a location that's nearest to your end users can help minimize latency and improve quality. </p> <p> This operation provisions stream capacity at the specified locations. By default, all locations have 1 or 2 capacity, depending on the stream class option: 2 for 'High' and 1 for 'Ultra' and 'Win2022'. This operation also copies the content files of all associated applications to an internal S3 bucket at each location. This allows Amazon GameLift Streams to host performant stream sessions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, AddStreamGroupLocationsCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, AddStreamGroupLocationsCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // AddStreamGroupLocationsInput
 *   Identifier: "STRING_VALUE", // required
 *   LocationConfigurations: [ // LocationConfigurations // required
 *     { // LocationConfiguration
 *       LocationName: "STRING_VALUE", // required
 *       AlwaysOnCapacity: Number("int"),
 *       OnDemandCapacity: Number("int"),
 *     },
 *   ],
 * };
 * const command = new AddStreamGroupLocationsCommand(input);
 * const response = await client.send(command);
 * // { // AddStreamGroupLocationsOutput
 * //   Identifier: "STRING_VALUE", // required
 * //   Locations: [ // LocationStates // required
 * //     { // LocationState
 * //       LocationName: "STRING_VALUE",
 * //       Status: "ACTIVATING" || "ACTIVE" || "ERROR" || "REMOVING",
 * //       AlwaysOnCapacity: Number("int"),
 * //       OnDemandCapacity: Number("int"),
 * //       RequestedCapacity: Number("int"),
 * //       AllocatedCapacity: Number("int"),
 * //       IdleCapacity: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddStreamGroupLocationsCommandInput - {@link AddStreamGroupLocationsCommandInput}
 * @returns {@link AddStreamGroupLocationsCommandOutput}
 * @see {@link AddStreamGroupLocationsCommandInput} for command's `input` shape.
 * @see {@link AddStreamGroupLocationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the resource to exceed an allowed service quota. Resolve the issue before you try again.</p>
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
export class AddStreamGroupLocationsCommand extends $Command
  .classBuilder<
    AddStreamGroupLocationsCommandInput,
    AddStreamGroupLocationsCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "AddStreamGroupLocations", {})
  .n("GameLiftStreamsClient", "AddStreamGroupLocationsCommand")
  .sc(AddStreamGroupLocations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddStreamGroupLocationsInput;
      output: AddStreamGroupLocationsOutput;
    };
    sdk: {
      input: AddStreamGroupLocationsCommandInput;
      output: AddStreamGroupLocationsCommandOutput;
    };
  };
}
