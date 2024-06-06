// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredAudienceModelPolicyRequest } from "../models/models_0";
import {
  de_DeleteConfiguredAudienceModelPolicyCommand,
  se_DeleteConfiguredAudienceModelPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredAudienceModelPolicyCommand}.
 */
export interface DeleteConfiguredAudienceModelPolicyCommandInput extends DeleteConfiguredAudienceModelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredAudienceModelPolicyCommand}.
 */
export interface DeleteConfiguredAudienceModelPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified configured audience model policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteConfiguredAudienceModelPolicyCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteConfiguredAudienceModelPolicyCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteConfiguredAudienceModelPolicyRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredAudienceModelPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredAudienceModelPolicyCommandInput - {@link DeleteConfiguredAudienceModelPolicyCommandInput}
 * @returns {@link DeleteConfiguredAudienceModelPolicyCommandOutput}
 * @see {@link DeleteConfiguredAudienceModelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredAudienceModelPolicyCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class DeleteConfiguredAudienceModelPolicyCommand extends $Command
  .classBuilder<
    DeleteConfiguredAudienceModelPolicyCommandInput,
    DeleteConfiguredAudienceModelPolicyCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "DeleteConfiguredAudienceModelPolicy", {})
  .n("CleanRoomsMLClient", "DeleteConfiguredAudienceModelPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredAudienceModelPolicyCommand)
  .de(de_DeleteConfiguredAudienceModelPolicyCommand)
  .build() {}
