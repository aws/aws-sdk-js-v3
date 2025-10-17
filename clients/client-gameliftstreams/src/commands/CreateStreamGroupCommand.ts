// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { CreateStreamGroupInput, CreateStreamGroupOutput } from "../models/models_0";
import { de_CreateStreamGroupCommand, se_CreateStreamGroupCommand } from "../protocols/Aws_restJson1";

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
 * <p> Manage how Amazon GameLift Streams streams your applications by using a stream group. A stream group is a collection of resources that Amazon GameLift Streams uses to stream your application to end-users. When you create a stream group, you specify an application to stream by default and the type of hardware to use, such as the graphical processing unit (GPU). You can also link additional applications, which allows you to stream those applications using this stream group. Depending on your expected users, you also scale the number of concurrent streams you want to support at one time, and in what locations. </p> <p> Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. There are two types of capacity, always-on and on-demand: </p> <ul> <li> <p> <b>Always-on</b>: The streaming capacity that is allocated and ready to handle stream requests without delay. You pay for this capacity whether it's in use or not. Best for quickest time from streaming request to streaming session. Default is 1 (2 for high stream classes) when creating a stream group or adding a location. </p> </li> <li> <p> <b>On-demand</b>: The streaming capacity that Amazon GameLift Streams can allocate in response to stream requests, and then de-allocate when the session has terminated. This offers a cost control measure at the expense of a greater startup time (typically under 5 minutes). Default is 0 when creating a stream group or adding a location. </p> </li> </ul> <p>Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class.</p> <p> To adjust the capacity of any <code>ACTIVE</code> stream group, call <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateStreamGroup.html">UpdateStreamGroup</a>. </p> <p> If the request is successful, Amazon GameLift Streams begins creating the stream group. Amazon GameLift Streams assigns a unique ID to the stream group resource and sets the status to <code>ACTIVATING</code>. When the stream group reaches <code>ACTIVE</code> status, you can start stream sessions by using <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_StartStreamSession.html">StartStreamSession</a>. To check the stream group's status, call <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamGroup.html">GetStreamGroup</a>. </p>
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
 *   StreamClass: "gen4n_high" || "gen4n_ultra" || "gen4n_win2022" || "gen5n_high" || "gen5n_ultra" || "gen5n_win2022", // required
 *   DefaultApplicationIdentifier: "STRING_VALUE",
 *   LocationConfigurations: [ // LocationConfigurations
 *     { // LocationConfiguration
 *       LocationName: "STRING_VALUE", // required
 *       AlwaysOnCapacity: Number("int"),
 *       OnDemandCapacity: Number("int"),
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLiftStreams", "CreateStreamGroup", {})
  .n("GameLiftStreamsClient", "CreateStreamGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateStreamGroupCommand)
  .de(de_CreateStreamGroupCommand)
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
