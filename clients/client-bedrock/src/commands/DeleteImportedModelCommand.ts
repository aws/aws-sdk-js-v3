// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImportedModelRequest, DeleteImportedModelResponse } from "../models/models_1";
import { DeleteImportedModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteImportedModelCommand}.
 */
export interface DeleteImportedModelCommandInput extends DeleteImportedModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImportedModelCommand}.
 */
export interface DeleteImportedModelCommandOutput extends DeleteImportedModelResponse, __MetadataBearer {}

/**
 * Deletes a custom model that you imported earlier. For more information, see [Import a customized model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteImportedModelCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteImportedModelCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteImportedModelRequest
 *   modelIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteImportedModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteImportedModelCommandInput - {@link DeleteImportedModelCommandInput}
 * @returns {@link DeleteImportedModelCommandOutput}
 * @see {@link DeleteImportedModelCommandInput} for command's `input` shape.
 * @see {@link DeleteImportedModelCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class DeleteImportedModelCommand extends command<DeleteImportedModelCommandInput, DeleteImportedModelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImportedModel",
  DeleteImportedModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImportedModelRequest;
      output: {};
    };
    sdk: {
      input: DeleteImportedModelCommandInput;
      output: DeleteImportedModelCommandOutput;
    };
  };
}
