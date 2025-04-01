// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContentRequest, DeleteContentResponse } from "../models/models_0";
import { de_DeleteContentCommand, se_DeleteContentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContentCommand}.
 */
export interface DeleteContentCommandInput extends DeleteContentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContentCommand}.
 */
export interface DeleteContentCommandOutput extends DeleteContentResponse, __MetadataBearer {}

/**
 * <p>Deletes the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteContentCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteContentCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // DeleteContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContentCommandInput - {@link DeleteContentCommandInput}
 * @returns {@link DeleteContentCommandOutput}
 * @see {@link DeleteContentCommandInput} for command's `input` shape.
 * @see {@link DeleteContentCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class DeleteContentCommand extends $Command
  .classBuilder<
    DeleteContentCommandInput,
    DeleteContentCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "DeleteContent", {})
  .n("WisdomClient", "DeleteContentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContentCommand)
  .de(de_DeleteContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContentRequest;
      output: {};
    };
    sdk: {
      input: DeleteContentCommandInput;
      output: DeleteContentCommandOutput;
    };
  };
}
