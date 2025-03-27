// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNotebookInput, UpdateNotebookOutput } from "../models/models_0";
import { de_UpdateNotebookCommand, se_UpdateNotebookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotebookCommand}.
 */
export interface UpdateNotebookCommandInput extends UpdateNotebookInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotebookCommand}.
 */
export interface UpdateNotebookCommandOutput extends UpdateNotebookOutput, __MetadataBearer {}

/**
 * <p>Updates the contents of a Spark notebook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // UpdateNotebookInput
 *   NotebookId: "STRING_VALUE", // required
 *   Payload: "STRING_VALUE", // required
 *   Type: "IPYNB", // required
 *   SessionId: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateNotebookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotebookCommandInput - {@link UpdateNotebookCommandInput}
 * @returns {@link UpdateNotebookCommandOutput}
 * @see {@link UpdateNotebookCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class UpdateNotebookCommand extends $Command
  .classBuilder<
    UpdateNotebookCommandInput,
    UpdateNotebookCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "UpdateNotebook", {})
  .n("AthenaClient", "UpdateNotebookCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNotebookCommand)
  .de(de_UpdateNotebookCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotebookInput;
      output: {};
    };
    sdk: {
      input: UpdateNotebookCommandInput;
      output: UpdateNotebookCommandOutput;
    };
  };
}
