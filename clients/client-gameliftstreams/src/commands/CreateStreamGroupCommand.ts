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
import type { CreateStreamGroupInput, CreateStreamGroupOutput } from "../models/models_0";
import { CreateStreamGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamGroupCommand}.
 */
export interface CreateStreamGroupCommandInput extends CreateStreamGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamGroupCommand}.
 */
export interface CreateStreamGroupCommandOutput extends CreateStreamGroupOutput, __MetadataBearer {}

/**
 * <p> Stream groups manage how Amazon GameLift Streams allocates resources and handles concurrent streams, allowing you to effectively manage capacity and costs. Within a stream group, you specify an application to stream, streaming locations and their capacity, and the stream class you want to use when streaming applications to your end-users. A stream class defines the hardware configuration of the compute resources that Amazon GameLift Streams will use when streaming, such as the CPU, GPU, and memory. </p> <p> Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available: </p> <ul> <li> <p> <b>Always-on capacity</b>: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle. </p> </li> <li> <p> <b>Maximum capacity</b>: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released. </p> </li> <li> <p> <b>Target-idle capacity</b>: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state. </p> </li> </ul> <p>Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class.</p> <p> To adjust the capacity of any <code>ACTIVE</code> stream group, call <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateStreamGroup.html">UpdateStreamGroup</a>. </p> <p> If the <code>CreateStreamGroup</code> request is successful, Amazon GameLift Streams assigns a unique ID to the stream group resource and sets the status to <code>ACTIVATING</code>. It can take a few minutes for Amazon GameLift Streams to finish creating the stream group while it searches for unallocated compute resources and provisions them. When complete, the stream group status will be <code>ACTIVE</code> and you can start stream sessions by using <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_StartStreamSession.html">StartStreamSession</a>. To check the stream group's status, call <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamGroup.html">GetStreamGroup</a>. </p> <p>Stream groups should be recreated every 3-4 weeks to pick up important service updates and fixes. Stream groups that are older than 180 days can no longer be updated with new application associations. Stream groups expire when they are 365 days old, at which point they can no longer stream sessions. The exact expiration date is indicated by the date value in the <code>ExpiresAt</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, CreateStreamGroupCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, CreateStreamGroupCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // CreateStreamGroupInput
 *   Description: "STRING_VALUE", // required
 *   StreamClass: "gen4n_high" || "gen4n_ultra" || "gen4n_win2022" || "gen5n_high" || "gen5n_ultra" || "gen5n_win2022" || "gen6n_small" || "gen6n_medium" || "gen6n_high" || "gen6n_ultra" || "gen6n_ultra_win2022" || "gen6n_pro" || "gen6n_pro_win2022", // required
 *   DefaultApplicationIdentifier: "STRING_VALUE",
 *   LocationConfigurations: [ // LocationConfigurations
 *     { // LocationConfiguration
 *       LocationName: "STRING_VALUE", // required
 *       AlwaysOnCapacity: Number("int"),
 *       OnDemandCapacity: Number("int"),
 *       TargetIdleCapacity: Number("int"),
 *       MaximumCapacity: Number("int"),
 *     },
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateStreamGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamGroupOutput
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
 * //       TargetIdleCapacity: Number("int"),
 * //       MaximumCapacity: Number("int"),
 * //       RequestedCapacity: Number("int"),
 * //       AllocatedCapacity: Number("int"),
 * //       IdleCapacity: Number("int"),
 * //     },
 * //   ],
 * //   StreamClass: "gen4n_high" || "gen4n_ultra" || "gen4n_win2022" || "gen5n_high" || "gen5n_ultra" || "gen5n_win2022" || "gen6n_small" || "gen6n_medium" || "gen6n_high" || "gen6n_ultra" || "gen6n_ultra_win2022" || "gen6n_pro" || "gen6n_pro_win2022",
 * //   Id: "STRING_VALUE",
 * //   Status: "ACTIVATING" || "UPDATING_LOCATIONS" || "ACTIVE" || "ACTIVE_WITH_ERRORS" || "ERROR" || "DELETING" || "EXPIRED",
 * //   StatusReason: "internalError" || "noAvailableInstances",
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * //   AssociatedApplications: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateStreamGroupCommandInput - {@link CreateStreamGroupCommandInput}
 * @returns {@link CreateStreamGroupCommandOutput}
 * @see {@link CreateStreamGroupCommandInput} for command's `input` shape.
 * @see {@link CreateStreamGroupCommandOutput} for command's `response` shape.
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
export class CreateStreamGroupCommand extends $Command
  .classBuilder<
    CreateStreamGroupCommandInput,
    CreateStreamGroupCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "CreateStreamGroup", {})
  .n("GameLiftStreamsClient", "CreateStreamGroupCommand")
  .sc(CreateStreamGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamGroupInput;
      output: CreateStreamGroupOutput;
    };
    sdk: {
      input: CreateStreamGroupCommandInput;
      output: CreateStreamGroupCommandOutput;
    };
  };
}
