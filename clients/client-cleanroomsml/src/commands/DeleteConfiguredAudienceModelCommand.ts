// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredAudienceModelRequest } from "../models/models_0";
import {
  de_DeleteConfiguredAudienceModelCommand,
  se_DeleteConfiguredAudienceModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredAudienceModelCommand}.
 */
export interface DeleteConfiguredAudienceModelCommandInput extends DeleteConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredAudienceModelCommand}.
 */
export interface DeleteConfiguredAudienceModelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified configured audience model. You can't delete a configured audience model if there are any lookalike models that use the configured audience model. If you delete a configured audience model, it will be removed from any collaborations that it is associated to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteConfiguredAudienceModelRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredAudienceModelCommandInput - {@link DeleteConfiguredAudienceModelCommandInput}
 * @returns {@link DeleteConfiguredAudienceModelCommandOutput}
 * @see {@link DeleteConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredAudienceModelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
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
export class DeleteConfiguredAudienceModelCommand extends $Command
  .classBuilder<
    DeleteConfiguredAudienceModelCommandInput,
    DeleteConfiguredAudienceModelCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "DeleteConfiguredAudienceModel", {})
  .n("CleanRoomsMLClient", "DeleteConfiguredAudienceModelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredAudienceModelCommand)
  .de(de_DeleteConfiguredAudienceModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredAudienceModelRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredAudienceModelCommandInput;
      output: DeleteConfiguredAudienceModelCommandOutput;
    };
  };
}
