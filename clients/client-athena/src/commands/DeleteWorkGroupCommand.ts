// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkGroupInput, DeleteWorkGroupOutput } from "../models/models_0";
import { de_DeleteWorkGroupCommand, se_DeleteWorkGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkGroupCommand}.
 */
export interface DeleteWorkGroupCommandInput extends DeleteWorkGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteWorkGroupCommand}.
 */
export interface DeleteWorkGroupCommandOutput extends DeleteWorkGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes the workgroup with the specified name. The primary workgroup cannot be
 *             deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // DeleteWorkGroupInput
 *   WorkGroup: "STRING_VALUE", // required
 *   RecursiveDeleteOption: true || false,
 * };
 * const command = new DeleteWorkGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkGroupCommandInput - {@link DeleteWorkGroupCommandInput}
 * @returns {@link DeleteWorkGroupCommandOutput}
 * @see {@link DeleteWorkGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class DeleteWorkGroupCommand extends $Command
  .classBuilder<
    DeleteWorkGroupCommandInput,
    DeleteWorkGroupCommandOutput,
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
  .s("AmazonAthena", "DeleteWorkGroup", {})
  .n("AthenaClient", "DeleteWorkGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkGroupCommand)
  .de(de_DeleteWorkGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkGroupInput;
      output: {};
    };
    sdk: {
      input: DeleteWorkGroupCommandInput;
      output: DeleteWorkGroupCommandOutput;
    };
  };
}
