// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMeteredProductRequest, DeleteMeteredProductResponse } from "../models/models_0";
import { DeleteMeteredProduct } from "../schemas/schemas_0";

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
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "DeleteMeteredProduct", {})
  .n("DeadlineClient", "DeleteMeteredProductCommand")
  .sc(DeleteMeteredProduct)
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
