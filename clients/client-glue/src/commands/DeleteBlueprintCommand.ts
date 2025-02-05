// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteBlueprintRequest, DeleteBlueprintResponse } from "../models/models_1";
import { de_DeleteBlueprintCommand, se_DeleteBlueprintCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBlueprintCommand}.
 */
export interface DeleteBlueprintCommandInput extends DeleteBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBlueprintCommand}.
 */
export interface DeleteBlueprintCommandOutput extends DeleteBlueprintResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // DeleteBlueprintRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBlueprintResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBlueprintCommandInput - {@link DeleteBlueprintCommandInput}
 * @returns {@link DeleteBlueprintCommandOutput}
 * @see {@link DeleteBlueprintCommandInput} for command's `input` shape.
 * @see {@link DeleteBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @public
 */
export class DeleteBlueprintCommand extends $Command
  .classBuilder<
    DeleteBlueprintCommandInput,
    DeleteBlueprintCommandOutput,
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
  .s("AWSGlue", "DeleteBlueprint", {})
  .n("GlueClient", "DeleteBlueprintCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBlueprintCommand)
  .de(de_DeleteBlueprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBlueprintRequest;
      output: DeleteBlueprintResponse;
    };
    sdk: {
      input: DeleteBlueprintCommandInput;
      output: DeleteBlueprintCommandOutput;
    };
  };
}
