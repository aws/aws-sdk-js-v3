// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  CreateEventBridgeRuleTemplateGroupRequest,
  CreateEventBridgeRuleTemplateGroupResponse,
} from "../models/models_2";
import {
  de_CreateEventBridgeRuleTemplateGroupCommand,
  se_CreateEventBridgeRuleTemplateGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventBridgeRuleTemplateGroupCommand}.
 */
export interface CreateEventBridgeRuleTemplateGroupCommandInput extends CreateEventBridgeRuleTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventBridgeRuleTemplateGroupCommand}.
 */
export interface CreateEventBridgeRuleTemplateGroupCommandOutput
  extends CreateEventBridgeRuleTemplateGroupResponse,
    __MetadataBearer {}

/**
 * Creates an eventbridge rule template group to group your eventbridge rule templates and to attach to signal maps for dynamically creating notification rules.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateEventBridgeRuleTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateEventBridgeRuleTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // CreateEventBridgeRuleTemplateGroupRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestId: "STRING_VALUE",
 * };
 * const command = new CreateEventBridgeRuleTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventBridgeRuleTemplateGroupResponse
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
 * @param CreateEventBridgeRuleTemplateGroupCommandInput - {@link CreateEventBridgeRuleTemplateGroupCommandInput}
 * @returns {@link CreateEventBridgeRuleTemplateGroupCommandOutput}
 * @see {@link CreateEventBridgeRuleTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateEventBridgeRuleTemplateGroupCommandOutput} for command's `response` shape.
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
export class CreateEventBridgeRuleTemplateGroupCommand extends $Command
  .classBuilder<
    CreateEventBridgeRuleTemplateGroupCommandInput,
    CreateEventBridgeRuleTemplateGroupCommandOutput,
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
  .s("MediaLive", "CreateEventBridgeRuleTemplateGroup", {})
  .n("MediaLiveClient", "CreateEventBridgeRuleTemplateGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventBridgeRuleTemplateGroupCommand)
  .de(de_CreateEventBridgeRuleTemplateGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventBridgeRuleTemplateGroupRequest;
      output: CreateEventBridgeRuleTemplateGroupResponse;
    };
    sdk: {
      input: CreateEventBridgeRuleTemplateGroupCommandInput;
      output: CreateEventBridgeRuleTemplateGroupCommandOutput;
    };
  };
}
