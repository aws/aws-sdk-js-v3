// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { UpdateStreamGroupInput, UpdateStreamGroupOutput } from "../models/models_0";
import { de_UpdateStreamGroupCommand, se_UpdateStreamGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStreamGroupCommand}.
 */
export interface UpdateStreamGroupCommandInput extends UpdateStreamGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateStreamGroupCommand}.
 */
export interface UpdateStreamGroupCommandOutput extends UpdateStreamGroupOutput, __MetadataBearer {}

/**
 * <p> Updates the configuration settings for an Amazon GameLift Streams stream group resource. You can change the description, the set of locations, and the requested capacity of a stream group per location. If you want to change the stream class, create a new stream group. </p> <p> Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. There are two types of capacity, always-on and on-demand: </p> <ul> <li> <p> <b>Always-on</b>: The streaming capacity that is allocated and ready to handle stream requests without delay. You pay for this capacity whether it's in use or not. Best for quickest time from streaming request to streaming session. Default is 1 when creating a stream group or adding a location. </p> </li> <li> <p> <b>On-demand</b>: The streaming capacity that Amazon GameLift Streams can allocate in response to stream requests, and then de-allocate when the session has terminated. This offers a cost control measure at the expense of a greater startup time (typically under 5 minutes). Default is 0 when creating a stream group or adding a location. </p> </li> </ul> <p>To update a stream group, specify the stream group's Amazon Resource Name (ARN) and provide the new values. If the request is successful, Amazon GameLift Streams returns the complete updated metadata for the stream group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, UpdateStreamGroupCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, UpdateStreamGroupCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * const client = new GameLiftStreamsClient(config);
 * const input = { // UpdateStreamGroupInput
 *   Identifier: "STRING_VALUE", // required
 *   LocationConfigurations: [ // LocationConfigurations
 *     { // LocationConfiguration
 *       LocationName: "STRING_VALUE", // required
 *       AlwaysOnCapacity: Number("int"),
 *       OnDemandCapacity: Number("int"),
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   DefaultApplicationIdentifier: "STRING_VALUE",
 * };
 * const command = new UpdateStreamGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStreamGroupOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   DefaultApplication: { // DefaultApplication
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   LocationStates: [ // LocationStates
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
 * //   StreamClass: "gen4n_high" || "gen4n_ultra" || "gen4n_win2022" || "gen5n_high" || "gen5n_ultra" || "gen5n_win2022",
 * //   Id: "STRING_VALUE",
 * //   Status: "ACTIVATING" || "UPDATING_LOCATIONS" || "ACTIVE" || "ACTIVE_WITH_ERRORS" || "ERROR" || "DELETING",
 * //   StatusReason: "internalError" || "noAvailableInstances",
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AssociatedApplications: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateStreamGroupCommandInput - {@link UpdateStreamGroupCommandInput}
 * @returns {@link UpdateStreamGroupCommandOutput}
 * @see {@link UpdateStreamGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>
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
export class UpdateStreamGroupCommand extends $Command
  .classBuilder<
    UpdateStreamGroupCommandInput,
    UpdateStreamGroupCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLiftStreams", "UpdateStreamGroup", {})
  .n("GameLiftStreamsClient", "UpdateStreamGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStreamGroupCommand)
  .de(de_UpdateStreamGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamGroupInput;
      output: UpdateStreamGroupOutput;
    };
    sdk: {
      input: UpdateStreamGroupCommandInput;
      output: UpdateStreamGroupCommandOutput;
    };
  };
}
