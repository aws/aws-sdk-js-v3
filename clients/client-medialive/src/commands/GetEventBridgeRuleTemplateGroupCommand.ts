// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type {
  GetEventBridgeRuleTemplateGroupRequest,
  GetEventBridgeRuleTemplateGroupResponse,
} from "../models/models_1";
import { GetEventBridgeRuleTemplateGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventBridgeRuleTemplateGroupCommand}.
 */
export interface GetEventBridgeRuleTemplateGroupCommandInput extends GetEventBridgeRuleTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetEventBridgeRuleTemplateGroupCommand}.
 */
export interface GetEventBridgeRuleTemplateGroupCommandOutput extends GetEventBridgeRuleTemplateGroupResponse, __MetadataBearer {}

/**
 * Retrieves the specified eventbridge rule template group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, GetEventBridgeRuleTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, GetEventBridgeRuleTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // GetEventBridgeRuleTemplateGroupRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEventBridgeRuleTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetEventBridgeRuleTemplateGroupResponse
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
 * @param GetEventBridgeRuleTemplateGroupCommandInput - {@link GetEventBridgeRuleTemplateGroupCommandInput}
 * @returns {@link GetEventBridgeRuleTemplateGroupCommandOutput}
 * @see {@link GetEventBridgeRuleTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link GetEventBridgeRuleTemplateGroupCommandOutput} for command's `response` shape.
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
export class GetEventBridgeRuleTemplateGroupCommand extends $Command
  .classBuilder<
    GetEventBridgeRuleTemplateGroupCommandInput,
    GetEventBridgeRuleTemplateGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "GetEventBridgeRuleTemplateGroup", {})
  .n("MediaLiveClient", "GetEventBridgeRuleTemplateGroupCommand")
  .sc(GetEventBridgeRuleTemplateGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventBridgeRuleTemplateGroupRequest;
      output: GetEventBridgeRuleTemplateGroupResponse;
    };
    sdk: {
      input: GetEventBridgeRuleTemplateGroupCommandInput;
      output: GetEventBridgeRuleTemplateGroupCommandOutput;
    };
  };
}
