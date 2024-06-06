// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContextRequest, DeleteContextResponse } from "../models/models_2";
import { de_DeleteContextCommand, se_DeleteContextCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContextCommand}.
 */
export interface DeleteContextCommandInput extends DeleteContextRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContextCommand}.
 */
export interface DeleteContextCommandOutput extends DeleteContextResponse, __MetadataBearer {}

/**
 * <p>Deletes an context.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteContextRequest
 *   ContextName: "STRING_VALUE", // required
 * };
 * const command = new DeleteContextCommand(input);
 * const response = await client.send(command);
 * // { // DeleteContextResponse
 * //   ContextArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteContextCommandInput - {@link DeleteContextCommandInput}
 * @returns {@link DeleteContextCommandOutput}
 * @see {@link DeleteContextCommandInput} for command's `input` shape.
 * @see {@link DeleteContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteContextCommand extends $Command
  .classBuilder<
    DeleteContextCommandInput,
    DeleteContextCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteContext", {})
  .n("SageMakerClient", "DeleteContextCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContextCommand)
  .de(de_DeleteContextCommand)
  .build() {}
