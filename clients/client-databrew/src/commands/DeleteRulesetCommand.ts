// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRulesetRequest, DeleteRulesetResponse } from "../models/models_0";
import { de_DeleteRulesetCommand, se_DeleteRulesetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRulesetCommand}.
 */
export interface DeleteRulesetCommandInput extends DeleteRulesetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRulesetCommand}.
 */
export interface DeleteRulesetCommandOutput extends DeleteRulesetResponse, __MetadataBearer {}

/**
 * <p>Deletes a ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DeleteRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteRulesetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRulesetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteRulesetCommandInput - {@link DeleteRulesetCommandInput}
 * @returns {@link DeleteRulesetCommandOutput}
 * @see {@link DeleteRulesetCommandInput} for command's `input` shape.
 * @see {@link DeleteRulesetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DeleteRulesetCommand extends $Command
  .classBuilder<
    DeleteRulesetCommandInput,
    DeleteRulesetCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "DeleteRuleset", {})
  .n("DataBrewClient", "DeleteRulesetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRulesetCommand)
  .de(de_DeleteRulesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRulesetRequest;
      output: DeleteRulesetResponse;
    };
    sdk: {
      input: DeleteRulesetCommandInput;
      output: DeleteRulesetCommandOutput;
    };
  };
}
