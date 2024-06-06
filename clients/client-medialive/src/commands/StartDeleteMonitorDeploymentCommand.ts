// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { StartDeleteMonitorDeploymentRequest, StartDeleteMonitorDeploymentResponse } from "../models/models_2";
import {
  de_StartDeleteMonitorDeploymentCommand,
  se_StartDeleteMonitorDeploymentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDeleteMonitorDeploymentCommand}.
 */
export interface StartDeleteMonitorDeploymentCommandInput extends StartDeleteMonitorDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StartDeleteMonitorDeploymentCommand}.
 */
export interface StartDeleteMonitorDeploymentCommandOutput
  extends StartDeleteMonitorDeploymentResponse,
    __MetadataBearer {}

/**
 * Initiates a deployment to delete the monitor of the specified signal map.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartDeleteMonitorDeploymentCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartDeleteMonitorDeploymentCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // StartDeleteMonitorDeploymentRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new StartDeleteMonitorDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // StartDeleteMonitorDeploymentResponse
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
 * @param StartDeleteMonitorDeploymentCommandInput - {@link StartDeleteMonitorDeploymentCommandInput}
 * @returns {@link StartDeleteMonitorDeploymentCommandOutput}
 * @see {@link StartDeleteMonitorDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeleteMonitorDeploymentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartDeleteMonitorDeploymentCommand extends $Command
  .classBuilder<
    StartDeleteMonitorDeploymentCommandInput,
    StartDeleteMonitorDeploymentCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "StartDeleteMonitorDeployment", {})
  .n("MediaLiveClient", "StartDeleteMonitorDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_StartDeleteMonitorDeploymentCommand)
  .de(de_StartDeleteMonitorDeploymentCommand)
  .build() {}
