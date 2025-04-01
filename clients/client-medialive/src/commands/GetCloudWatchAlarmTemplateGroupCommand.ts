// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { GetCloudWatchAlarmTemplateGroupRequest, GetCloudWatchAlarmTemplateGroupResponse } from "../models/models_2";
import {
  de_GetCloudWatchAlarmTemplateGroupCommand,
  se_GetCloudWatchAlarmTemplateGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudWatchAlarmTemplateGroupCommand}.
 */
export interface GetCloudWatchAlarmTemplateGroupCommandInput extends GetCloudWatchAlarmTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudWatchAlarmTemplateGroupCommand}.
 */
export interface GetCloudWatchAlarmTemplateGroupCommandOutput
  extends GetCloudWatchAlarmTemplateGroupResponse,
    __MetadataBearer {}

/**
 * Retrieves the specified cloudwatch alarm template group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, GetCloudWatchAlarmTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, GetCloudWatchAlarmTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // GetCloudWatchAlarmTemplateGroupRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCloudWatchAlarmTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudWatchAlarmTemplateGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCloudWatchAlarmTemplateGroupCommandInput - {@link GetCloudWatchAlarmTemplateGroupCommandInput}
 * @returns {@link GetCloudWatchAlarmTemplateGroupCommandOutput}
 * @see {@link GetCloudWatchAlarmTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link GetCloudWatchAlarmTemplateGroupCommandOutput} for command's `response` shape.
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
export class GetCloudWatchAlarmTemplateGroupCommand extends $Command
  .classBuilder<
    GetCloudWatchAlarmTemplateGroupCommandInput,
    GetCloudWatchAlarmTemplateGroupCommandOutput,
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
  .s("MediaLive", "GetCloudWatchAlarmTemplateGroup", {})
  .n("MediaLiveClient", "GetCloudWatchAlarmTemplateGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetCloudWatchAlarmTemplateGroupCommand)
  .de(de_GetCloudWatchAlarmTemplateGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudWatchAlarmTemplateGroupRequest;
      output: GetCloudWatchAlarmTemplateGroupResponse;
    };
    sdk: {
      input: GetCloudWatchAlarmTemplateGroupCommandInput;
      output: GetCloudWatchAlarmTemplateGroupCommandOutput;
    };
  };
}
