// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/models_1";
import { de_DeleteMLTransformCommand, se_DeleteMLTransformCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMLTransformCommand}.
 */
export interface DeleteMLTransformCommandInput extends DeleteMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMLTransformCommand}.
 */
export interface DeleteMLTransformCommandOutput extends DeleteMLTransformResponse, __MetadataBearer {}

/**
 * <p>Deletes an Glue machine learning transform. Machine learning transforms are a special
 *       type of transform that use machine learning to learn the details of the transformation to be
 *       performed by learning from examples provided by humans. These transformations are then saved
 *       by Glue. If you no longer need a transform, you can delete it by calling
 *         <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted
 *       transform will no longer succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteMLTransformRequest
 *   TransformId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMLTransformCommandInput - {@link DeleteMLTransformCommandInput}
 * @returns {@link DeleteMLTransformCommandOutput}
 * @see {@link DeleteMLTransformCommandInput} for command's `input` shape.
 * @see {@link DeleteMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @public
 */
export class DeleteMLTransformCommand extends $Command
  .classBuilder<
    DeleteMLTransformCommandInput,
    DeleteMLTransformCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DeleteMLTransform", {})
  .n("GlueClient", "DeleteMLTransformCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMLTransformCommand)
  .de(de_DeleteMLTransformCommand)
  .build() {}
