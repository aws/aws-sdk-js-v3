// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePatchBaselineRequest, DeletePatchBaselineResult } from "../models/models_0";
import { DeletePatchBaseline } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePatchBaselineCommand}.
 */
export interface DeletePatchBaselineCommandInput extends DeletePatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link DeletePatchBaselineCommand}.
 */
export interface DeletePatchBaselineCommandOutput extends DeletePatchBaselineResult, __MetadataBearer {}

/**
 * <p>Deletes a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeletePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeletePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeletePatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 * };
 * const command = new DeletePatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // DeletePatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePatchBaselineCommandInput - {@link DeletePatchBaselineCommandInput}
 * @returns {@link DeletePatchBaselineCommandOutput}
 * @see {@link DeletePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DeletePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Error returned if an attempt is made to delete a patch baseline that is registered for a
 *    patch group.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeletePatchBaselineCommand extends $Command
  .classBuilder<
    DeletePatchBaselineCommandInput,
    DeletePatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeletePatchBaseline", {})
  .n("SSMClient", "DeletePatchBaselineCommand")
  .sc(DeletePatchBaseline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePatchBaselineRequest;
      output: DeletePatchBaselineResult;
    };
    sdk: {
      input: DeletePatchBaselineCommandInput;
      output: DeletePatchBaselineCommandOutput;
    };
  };
}
