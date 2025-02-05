// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAudienceModelRequest } from "../models/models_0";
import { de_DeleteAudienceModelCommand, se_DeleteAudienceModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAudienceModelCommand}.
 */
export interface DeleteAudienceModelCommandInput extends DeleteAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAudienceModelCommand}.
 */
export interface DeleteAudienceModelCommandOutput extends __MetadataBearer {}

/**
 * <p>Specifies an audience model that you want to delete. You can't delete an audience model if there are any configured audience models that depend on the audience model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteAudienceModelRequest
 *   audienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAudienceModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAudienceModelCommandInput - {@link DeleteAudienceModelCommandInput}
 * @returns {@link DeleteAudienceModelCommandOutput}
 * @see {@link DeleteAudienceModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAudienceModelCommandOutput} for command's `response` shape.
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
export class DeleteAudienceModelCommand extends $Command
  .classBuilder<
    DeleteAudienceModelCommandInput,
    DeleteAudienceModelCommandOutput,
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
  .s("AWSStarkControlService", "DeleteAudienceModel", {})
  .n("CleanRoomsMLClient", "DeleteAudienceModelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAudienceModelCommand)
  .de(de_DeleteAudienceModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAudienceModelRequest;
      output: {};
    };
    sdk: {
      input: DeleteAudienceModelCommandInput;
      output: DeleteAudienceModelCommandOutput;
    };
  };
}
