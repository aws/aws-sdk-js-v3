// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/models_1";
import { DeleteMLTransform$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling `DeleteMLTransforms`. However, any Glue jobs that still reference the deleted transform will no longer succeed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteMLTransformCommand extends command<DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMLTransform",
  DeleteMLTransform$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMLTransformRequest;
      output: DeleteMLTransformResponse;
    };
    sdk: {
      input: DeleteMLTransformCommandInput;
      output: DeleteMLTransformCommandOutput;
    };
  };
}
