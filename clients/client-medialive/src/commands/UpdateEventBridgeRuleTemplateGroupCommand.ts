// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  UpdateEventBridgeRuleTemplateGroupRequest,
  UpdateEventBridgeRuleTemplateGroupResponse,
} from "../models/models_2";
import {
  de_UpdateEventBridgeRuleTemplateGroupCommand,
  se_UpdateEventBridgeRuleTemplateGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventBridgeRuleTemplateGroupCommand}.
 */
export interface UpdateEventBridgeRuleTemplateGroupCommandInput extends UpdateEventBridgeRuleTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventBridgeRuleTemplateGroupCommand}.
 */
export interface UpdateEventBridgeRuleTemplateGroupCommandOutput
  extends UpdateEventBridgeRuleTemplateGroupResponse,
    __MetadataBearer {}

/**
 * Updates the specified eventbridge rule template group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateEventBridgeRuleTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateEventBridgeRuleTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateEventBridgeRuleTemplateGroupRequest
 *   Description: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateEventBridgeRuleTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventBridgeRuleTemplateGroupResponse
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
 * @param UpdateEventBridgeRuleTemplateGroupCommandInput - {@link UpdateEventBridgeRuleTemplateGroupCommandInput}
 * @returns {@link UpdateEventBridgeRuleTemplateGroupCommandOutput}
 * @see {@link UpdateEventBridgeRuleTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateEventBridgeRuleTemplateGroupCommandOutput} for command's `response` shape.
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
export class UpdateEventBridgeRuleTemplateGroupCommand extends $Command
  .classBuilder<
    UpdateEventBridgeRuleTemplateGroupCommandInput,
    UpdateEventBridgeRuleTemplateGroupCommandOutput,
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
  .s("MediaLive", "UpdateEventBridgeRuleTemplateGroup", {})
  .n("MediaLiveClient", "UpdateEventBridgeRuleTemplateGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventBridgeRuleTemplateGroupCommand)
  .de(de_UpdateEventBridgeRuleTemplateGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventBridgeRuleTemplateGroupRequest;
      output: UpdateEventBridgeRuleTemplateGroupResponse;
    };
    sdk: {
      input: UpdateEventBridgeRuleTemplateGroupCommandInput;
      output: UpdateEventBridgeRuleTemplateGroupCommandOutput;
    };
  };
}
