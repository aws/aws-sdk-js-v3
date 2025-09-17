// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteCustomEntityTypeRequest, DeleteCustomEntityTypeResponse } from "../models/models_1";
import { de_DeleteCustomEntityTypeCommand, se_DeleteCustomEntityTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomEntityTypeCommand}.
 */
export interface DeleteCustomEntityTypeCommandInput extends DeleteCustomEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomEntityTypeCommand}.
 */
export interface DeleteCustomEntityTypeCommandOutput extends DeleteCustomEntityTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes a custom pattern by specifying its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteCustomEntityTypeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCustomEntityTypeResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCustomEntityTypeCommandInput - {@link DeleteCustomEntityTypeCommandInput}
 * @returns {@link DeleteCustomEntityTypeCommandOutput}
 * @see {@link DeleteCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
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
export class DeleteCustomEntityTypeCommand extends $Command
  .classBuilder<
    DeleteCustomEntityTypeCommandInput,
    DeleteCustomEntityTypeCommandOutput,
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
  .s("AWSGlue", "DeleteCustomEntityType", {})
  .n("GlueClient", "DeleteCustomEntityTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomEntityTypeCommand)
  .de(de_DeleteCustomEntityTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomEntityTypeRequest;
      output: DeleteCustomEntityTypeResponse;
    };
    sdk: {
      input: DeleteCustomEntityTypeCommandInput;
      output: DeleteCustomEntityTypeCommandOutput;
    };
  };
}
