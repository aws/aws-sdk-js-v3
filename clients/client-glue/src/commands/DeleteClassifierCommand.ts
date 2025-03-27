// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteClassifierRequest, DeleteClassifierResponse } from "../models/models_1";
import { de_DeleteClassifierCommand, se_DeleteClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClassifierCommand}.
 */
export interface DeleteClassifierCommandInput extends DeleteClassifierRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClassifierCommand}.
 */
export interface DeleteClassifierCommandOutput extends DeleteClassifierResponse, __MetadataBearer {}

/**
 * <p>Removes a classifier from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteClassifierRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClassifierCommandInput - {@link DeleteClassifierCommandInput}
 * @returns {@link DeleteClassifierCommandOutput}
 * @see {@link DeleteClassifierCommandInput} for command's `input` shape.
 * @see {@link DeleteClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteClassifierCommand extends $Command
  .classBuilder<
    DeleteClassifierCommandInput,
    DeleteClassifierCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DeleteClassifier", {})
  .n("GlueClient", "DeleteClassifierCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClassifierCommand)
  .de(de_DeleteClassifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClassifierRequest;
      output: {};
    };
    sdk: {
      input: DeleteClassifierCommandInput;
      output: DeleteClassifierCommandOutput;
    };
  };
}
