// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  CreateCloudWatchAlarmTemplateGroupRequest,
  CreateCloudWatchAlarmTemplateGroupResponse,
} from "../models/models_2";
import { CreateCloudWatchAlarmTemplateGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudWatchAlarmTemplateGroupCommand}.
 */
export interface CreateCloudWatchAlarmTemplateGroupCommandInput extends CreateCloudWatchAlarmTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudWatchAlarmTemplateGroupCommand}.
 */
export interface CreateCloudWatchAlarmTemplateGroupCommandOutput
  extends CreateCloudWatchAlarmTemplateGroupResponse,
    __MetadataBearer {}

/**
 * Creates a cloudwatch alarm template group to group your cloudwatch alarm templates and to attach to signal maps for dynamically creating alarms.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateCloudWatchAlarmTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateCloudWatchAlarmTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreateCloudWatchAlarmTemplateGroupRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestId: "STRING_VALUE",
 * };
 * const command = new CreateCloudWatchAlarmTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudWatchAlarmTemplateGroupResponse
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
 * @param CreateCloudWatchAlarmTemplateGroupCommandInput - {@link CreateCloudWatchAlarmTemplateGroupCommandInput}
 * @returns {@link CreateCloudWatchAlarmTemplateGroupCommandOutput}
 * @see {@link CreateCloudWatchAlarmTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCloudWatchAlarmTemplateGroupCommandOutput} for command's `response` shape.
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
export class CreateCloudWatchAlarmTemplateGroupCommand extends $Command
  .classBuilder<
    CreateCloudWatchAlarmTemplateGroupCommandInput,
    CreateCloudWatchAlarmTemplateGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CreateCloudWatchAlarmTemplateGroup", {})
  .n("MediaLiveClient", "CreateCloudWatchAlarmTemplateGroupCommand")
  .sc(CreateCloudWatchAlarmTemplateGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudWatchAlarmTemplateGroupRequest;
      output: CreateCloudWatchAlarmTemplateGroupResponse;
    };
    sdk: {
      input: CreateCloudWatchAlarmTemplateGroupCommandInput;
      output: CreateCloudWatchAlarmTemplateGroupCommandOutput;
    };
  };
}
