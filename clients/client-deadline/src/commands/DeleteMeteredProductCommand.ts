// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMeteredProductRequest, DeleteMeteredProductResponse } from "../models/models_1";
import { de_DeleteMeteredProductCommand, se_DeleteMeteredProductCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMeteredProductCommand}.
 */
export interface DeleteMeteredProductCommandInput extends DeleteMeteredProductRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMeteredProductCommand}.
 */
export interface DeleteMeteredProductCommandOutput extends DeleteMeteredProductResponse, __MetadataBearer {}

/**
 * <p>Deletes a metered product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteMeteredProductCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteMeteredProductCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // DeleteMeteredProductRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMeteredProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMeteredProductCommandInput - {@link DeleteMeteredProductCommandInput}
 * @returns {@link DeleteMeteredProductCommandOutput}
 * @see {@link DeleteMeteredProductCommandInput} for command's `input` shape.
 * @see {@link DeleteMeteredProductCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteMeteredProductCommand extends $Command
  .classBuilder<
    DeleteMeteredProductCommandInput,
    DeleteMeteredProductCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "DeleteMeteredProduct", {})
  .n("DeadlineClient", "DeleteMeteredProductCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMeteredProductCommand)
  .de(de_DeleteMeteredProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMeteredProductRequest;
      output: {};
    };
    sdk: {
      input: DeleteMeteredProductCommandInput;
      output: DeleteMeteredProductCommandOutput;
    };
  };
}
