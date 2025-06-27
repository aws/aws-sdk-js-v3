// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  ListCloudWatchAlarmTemplateGroupsRequest,
  ListCloudWatchAlarmTemplateGroupsResponse,
} from "../models/models_2";
import {
  de_ListCloudWatchAlarmTemplateGroupsCommand,
  se_ListCloudWatchAlarmTemplateGroupsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCloudWatchAlarmTemplateGroupsCommand}.
 */
export interface ListCloudWatchAlarmTemplateGroupsCommandInput extends ListCloudWatchAlarmTemplateGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListCloudWatchAlarmTemplateGroupsCommand}.
 */
export interface ListCloudWatchAlarmTemplateGroupsCommandOutput
  extends ListCloudWatchAlarmTemplateGroupsResponse,
    __MetadataBearer {}

/**
 * Lists cloudwatch alarm template groups.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListCloudWatchAlarmTemplateGroupsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListCloudWatchAlarmTemplateGroupsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListCloudWatchAlarmTemplateGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Scope: "STRING_VALUE",
 *   SignalMapIdentifier: "STRING_VALUE",
 * };
 * const command = new ListCloudWatchAlarmTemplateGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudWatchAlarmTemplateGroupsResponse
 * //   CloudWatchAlarmTemplateGroups: [ // __listOfCloudWatchAlarmTemplateGroupSummary
 * //     { // CloudWatchAlarmTemplateGroupSummary
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Id: "STRING_VALUE", // required
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TemplateCount: Number("int"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCloudWatchAlarmTemplateGroupsCommandInput - {@link ListCloudWatchAlarmTemplateGroupsCommandInput}
 * @returns {@link ListCloudWatchAlarmTemplateGroupsCommandOutput}
 * @see {@link ListCloudWatchAlarmTemplateGroupsCommandInput} for command's `input` shape.
 * @see {@link ListCloudWatchAlarmTemplateGroupsCommandOutput} for command's `response` shape.
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
export class ListCloudWatchAlarmTemplateGroupsCommand extends $Command
  .classBuilder<
    ListCloudWatchAlarmTemplateGroupsCommandInput,
    ListCloudWatchAlarmTemplateGroupsCommandOutput,
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
  .s("MediaLive", "ListCloudWatchAlarmTemplateGroups", {})
  .n("MediaLiveClient", "ListCloudWatchAlarmTemplateGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListCloudWatchAlarmTemplateGroupsCommand)
  .de(de_ListCloudWatchAlarmTemplateGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudWatchAlarmTemplateGroupsRequest;
      output: ListCloudWatchAlarmTemplateGroupsResponse;
    };
    sdk: {
      input: ListCloudWatchAlarmTemplateGroupsCommandInput;
      output: ListCloudWatchAlarmTemplateGroupsCommandOutput;
    };
  };
}
