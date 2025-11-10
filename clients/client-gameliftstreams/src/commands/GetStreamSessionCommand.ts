// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { GetStreamSessionInput, GetStreamSessionOutput } from "../models/models_0";
import { GetStreamSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStreamSessionCommand}.
 */
export interface GetStreamSessionCommandInput extends GetStreamSessionInput {}
/**
 * @public
 *
 * The output of {@link GetStreamSessionCommand}.
 */
export interface GetStreamSessionCommandOutput extends GetStreamSessionOutput, __MetadataBearer {}

/**
 * <p>Retrieves properties for a Amazon GameLift Streams stream session resource. Specify the Amazon Resource Name (ARN) of the stream session that you want to retrieve and its stream group ARN. If the operation is successful, it returns properties for the requested resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, GetStreamSessionCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, GetStreamSessionCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // GetStreamSessionInput
 *   Identifier: "STRING_VALUE", // required
 *   StreamSessionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetStreamSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamSessionOutput
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   StreamGroupId: "STRING_VALUE",
 * //   UserId: "STRING_VALUE",
 * //   Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 * //   StatusReason: "internalError" || "invalidSignalRequest" || "placementTimeout" || "applicationLogS3DestinationError" || "applicationExit" || "connectionTimeout" || "reconnectionTimeout" || "maxSessionLengthTimeout" || "idleTimeout" || "apiTerminated",
 * //   Protocol: "WebRTC",
 * //   Location: "STRING_VALUE",
 * //   SignalRequest: "STRING_VALUE",
 * //   SignalResponse: "STRING_VALUE",
 * //   ConnectionTimeoutSeconds: Number("int"),
 * //   SessionLengthSeconds: Number("int"),
 * //   AdditionalLaunchArgs: [ // GameLaunchArgList
 * //     "STRING_VALUE",
 * //   ],
 * //   AdditionalEnvironmentVariables: { // EnvironmentVariables
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LogFileLocationUri: "STRING_VALUE",
 * //   WebSdkProtocolUrl: "STRING_VALUE",
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ApplicationArn: "STRING_VALUE",
 * //   ExportFilesMetadata: { // ExportFilesMetadata
 * //     Status: "SUCCEEDED" || "FAILED" || "PENDING",
 * //     StatusReason: "STRING_VALUE",
 * //     OutputUri: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamSessionCommandInput - {@link GetStreamSessionCommandInput}
 * @returns {@link GetStreamSessionCommandOutput}
 * @see {@link GetStreamSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamSessionCommandOutput} for command's `response` shape.
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
export class GetStreamSessionCommand extends $Command
  .classBuilder<
    GetStreamSessionCommandInput,
    GetStreamSessionCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "GetStreamSession", {})
  .n("GameLiftStreamsClient", "GetStreamSessionCommand")
  .sc(GetStreamSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamSessionInput;
      output: GetStreamSessionOutput;
    };
    sdk: {
      input: GetStreamSessionCommandInput;
      output: GetStreamSessionCommandOutput;
    };
  };
}
