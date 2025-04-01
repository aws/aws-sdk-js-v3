// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { StartUpdateSignalMapRequest, StartUpdateSignalMapResponse } from "../models/models_2";
import { de_StartUpdateSignalMapCommand, se_StartUpdateSignalMapCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartUpdateSignalMapCommand}.
 */
export interface StartUpdateSignalMapCommandInput extends StartUpdateSignalMapRequest {}
/**
 * @public
 *
 * The output of {@link StartUpdateSignalMapCommand}.
 */
export interface StartUpdateSignalMapCommandOutput extends StartUpdateSignalMapResponse, __MetadataBearer {}

/**
 * Initiates an update for the specified signal map. Will discover a new signal map if a changed discoveryEntryPointArn is provided.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartUpdateSignalMapCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartUpdateSignalMapCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // StartUpdateSignalMapRequest
 *   CloudWatchAlarmTemplateGroupIdentifiers: [ // __listOf__stringPatternS
 *     "STRING_VALUE",
 *   ],
 *   Description: "STRING_VALUE",
 *   DiscoveryEntryPointArn: "STRING_VALUE",
 *   EventBridgeRuleTemplateGroupIdentifiers: [
 *     "STRING_VALUE",
 *   ],
 *   ForceRediscovery: true || false,
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new StartUpdateSignalMapCommand(input);
 * const response = await client.send(command);
 * // { // StartUpdateSignalMapResponse
 * //   Arn: "STRING_VALUE",
 * //   CloudWatchAlarmTemplateGroupIds: [ // __listOf__stringMin7Max11PatternAws097
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   DiscoveryEntryPointArn: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * //   EventBridgeRuleTemplateGroupIds: [
 * //     "STRING_VALUE",
 * //   ],
 * //   FailedMediaResourceMap: { // FailedMediaResourceMap
 * //     "<keys>": { // MediaResource
 * //       Destinations: [ // __listOfMediaResourceNeighbor
 * //         { // MediaResourceNeighbor
 * //           Arn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       Sources: [
 * //         {
 * //           Arn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Id: "STRING_VALUE",
 * //   LastDiscoveredAt: new Date("TIMESTAMP"),
 * //   LastSuccessfulMonitorDeployment: { // SuccessfulMonitorDeployment
 * //     DetailsUri: "STRING_VALUE", // required
 * //     Status: "NOT_DEPLOYED" || "DRY_RUN_DEPLOYMENT_COMPLETE" || "DRY_RUN_DEPLOYMENT_FAILED" || "DRY_RUN_DEPLOYMENT_IN_PROGRESS" || "DEPLOYMENT_COMPLETE" || "DEPLOYMENT_FAILED" || "DEPLOYMENT_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "DELETE_IN_PROGRESS", // required
 * //   },
 * //   MediaResourceMap: { // MediaResourceMap
 * //     "<keys>": {
 * //       Destinations: [
 * //         {
 * //           Arn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       Sources: [
 * //         {
 * //           Arn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   MonitorChangesPendingDeployment: true || false,
 * //   MonitorDeployment: { // MonitorDeployment
 * //     DetailsUri: "STRING_VALUE",
 * //     ErrorMessage: "STRING_VALUE",
 * //     Status: "NOT_DEPLOYED" || "DRY_RUN_DEPLOYMENT_COMPLETE" || "DRY_RUN_DEPLOYMENT_FAILED" || "DRY_RUN_DEPLOYMENT_IN_PROGRESS" || "DEPLOYMENT_COMPLETE" || "DEPLOYMENT_FAILED" || "DEPLOYMENT_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "DELETE_IN_PROGRESS", // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_REVERTED" || "UPDATE_FAILED" || "READY" || "NOT_READY",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartUpdateSignalMapCommandInput - {@link StartUpdateSignalMapCommandInput}
 * @returns {@link StartUpdateSignalMapCommandOutput}
 * @see {@link StartUpdateSignalMapCommandInput} for command's `input` shape.
 * @see {@link StartUpdateSignalMapCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class StartUpdateSignalMapCommand extends $Command
  .classBuilder<
    StartUpdateSignalMapCommandInput,
    StartUpdateSignalMapCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "StartUpdateSignalMap", {})
  .n("MediaLiveClient", "StartUpdateSignalMapCommand")
  .f(void 0, void 0)
  .ser(se_StartUpdateSignalMapCommand)
  .de(de_StartUpdateSignalMapCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartUpdateSignalMapRequest;
      output: StartUpdateSignalMapResponse;
    };
    sdk: {
      input: StartUpdateSignalMapCommandInput;
      output: StartUpdateSignalMapCommandOutput;
    };
  };
}
