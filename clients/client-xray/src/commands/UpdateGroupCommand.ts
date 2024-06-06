// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGroupRequest, UpdateGroupResult } from "../models/models_0";
import { de_UpdateGroupCommand, se_UpdateGroupCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandInput extends UpdateGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandOutput extends UpdateGroupResult, __MetadataBearer {}

/**
 * <p>Updates a group resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateGroupCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateGroupCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // UpdateGroupRequest
 *   GroupName: "STRING_VALUE",
 *   GroupARN: "STRING_VALUE",
 *   FilterExpression: "STRING_VALUE",
 *   InsightsConfiguration: { // InsightsConfiguration
 *     InsightsEnabled: true || false,
 *     NotificationsEnabled: true || false,
 *   },
 * };
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGroupResult
 * //   Group: { // Group
 * //     GroupName: "STRING_VALUE",
 * //     GroupARN: "STRING_VALUE",
 * //     FilterExpression: "STRING_VALUE",
 * //     InsightsConfiguration: { // InsightsConfiguration
 * //       InsightsEnabled: true || false,
 * //       NotificationsEnabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGroupCommandInput - {@link UpdateGroupCommandInput}
 * @returns {@link UpdateGroupCommandOutput}
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 * @public
 */
export class UpdateGroupCommand extends $Command
  .classBuilder<
    UpdateGroupCommandInput,
    UpdateGroupCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "UpdateGroup", {})
  .n("XRayClient", "UpdateGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGroupCommand)
  .de(de_UpdateGroupCommand)
  .build() {}
