// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStudioInput } from "../models/models_0";
import { de_DeleteStudioCommand, se_DeleteStudioCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandInput extends DeleteStudioInput {}
/**
 * @public
 *
 * The output of {@link DeleteStudioCommand}.
 */
export interface DeleteStudioCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes an Amazon EMR Studio from the Studio metadata store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DeleteStudioInput
 *   StudioId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStudioCommandInput - {@link DeleteStudioCommandInput}
 * @returns {@link DeleteStudioCommandOutput}
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class DeleteStudioCommand extends $Command
  .classBuilder<
    DeleteStudioCommandInput,
    DeleteStudioCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "DeleteStudio", {})
  .n("EMRClient", "DeleteStudioCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStudioCommand)
  .de(de_DeleteStudioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStudioInput;
      output: {};
    };
    sdk: {
      input: DeleteStudioCommandInput;
      output: DeleteStudioCommandOutput;
    };
  };
}
