// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLinkInput, DeleteLinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_DeleteLinkCommand, se_DeleteLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLinkCommand}.
 */
export interface DeleteLinkCommandInput extends DeleteLinkInput {}
/**
 * @public
 *
 * The output of {@link DeleteLinkCommand}.
 */
export interface DeleteLinkCommandOutput extends DeleteLinkOutput, __MetadataBearer {}

/**
 * <p>Deletes a link between a monitoring account sink and a source account. You must run this operation
 *       in the source account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, DeleteLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, DeleteLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // DeleteLinkInput
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteLinkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLinkCommandInput - {@link DeleteLinkCommandInput}
 * @returns {@link DeleteLinkCommandOutput}
 * @see {@link DeleteLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class DeleteLinkCommand extends $Command
  .classBuilder<
    DeleteLinkCommandInput,
    DeleteLinkCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("oamservice", "DeleteLink", {})
  .n("OAMClient", "DeleteLinkCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLinkCommand)
  .de(de_DeleteLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLinkInput;
      output: {};
    };
    sdk: {
      input: DeleteLinkCommandInput;
      output: DeleteLinkCommandOutput;
    };
  };
}
