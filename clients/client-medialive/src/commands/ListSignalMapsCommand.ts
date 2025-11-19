// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListSignalMapsRequest, ListSignalMapsResponse } from "../models/models_1";
import { ListSignalMaps } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSignalMapsCommand}.
 */
export interface ListSignalMapsCommandInput extends ListSignalMapsRequest {}
/**
 * @public
 *
 * The output of {@link ListSignalMapsCommand}.
 */
export interface ListSignalMapsCommandOutput extends ListSignalMapsResponse, __MetadataBearer {}

/**
 * Lists signal maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListSignalMapsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListSignalMapsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListSignalMapsRequest
 *   CloudWatchAlarmTemplateGroupIdentifier: "STRING_VALUE",
 *   EventBridgeRuleTemplateGroupIdentifier: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSignalMapsCommand(input);
 * const response = await client.send(command);
 * // { // ListSignalMapsResponse
 * //   NextToken: "STRING_VALUE",
 * //   SignalMaps: [ // __listOfSignalMapSummary
 * //     { // SignalMapSummary
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Id: "STRING_VALUE", // required
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       MonitorDeploymentStatus: "NOT_DEPLOYED" || "DRY_RUN_DEPLOYMENT_COMPLETE" || "DRY_RUN_DEPLOYMENT_FAILED" || "DRY_RUN_DEPLOYMENT_IN_PROGRESS" || "DEPLOYMENT_COMPLETE" || "DEPLOYMENT_FAILED" || "DEPLOYMENT_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "DELETE_IN_PROGRESS", // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_REVERTED" || "UPDATE_FAILED" || "READY" || "NOT_READY", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSignalMapsCommandInput - {@link ListSignalMapsCommandInput}
 * @returns {@link ListSignalMapsCommandOutput}
 * @see {@link ListSignalMapsCommandInput} for command's `input` shape.
 * @see {@link ListSignalMapsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
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
export class ListSignalMapsCommand extends $Command
  .classBuilder<
    ListSignalMapsCommandInput,
    ListSignalMapsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListSignalMaps", {})
  .n("MediaLiveClient", "ListSignalMapsCommand")
  .sc(ListSignalMaps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSignalMapsRequest;
      output: ListSignalMapsResponse;
    };
    sdk: {
      input: ListSignalMapsCommandInput;
      output: ListSignalMapsCommandOutput;
    };
  };
}
