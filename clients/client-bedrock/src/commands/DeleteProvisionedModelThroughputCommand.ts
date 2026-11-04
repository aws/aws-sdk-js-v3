// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteProvisionedModelThroughputRequest,
  DeleteProvisionedModelThroughputResponse,
} from "../models/models_1";
import { DeleteProvisionedModelThroughput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProvisionedModelThroughputCommand}.
 */
export interface DeleteProvisionedModelThroughputCommandInput extends DeleteProvisionedModelThroughputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisionedModelThroughputCommand}.
 */
export interface DeleteProvisionedModelThroughputCommandOutput extends DeleteProvisionedModelThroughputResponse, __MetadataBearer {}

/**
 * Deletes a Provisioned Throughput. You can't delete a Provisioned Throughput before the commitment term is over. For more information, see [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteProvisionedModelThroughputRequest
 *   provisionedModelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisionedModelThroughputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisionedModelThroughputCommandInput - {@link DeleteProvisionedModelThroughputCommandInput}
 * @returns {@link DeleteProvisionedModelThroughputCommandOutput}
 * @see {@link DeleteProvisionedModelThroughputCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedModelThroughputCommandOutput} for command's `response` shape.
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
export class DeleteProvisionedModelThroughputCommand extends command<DeleteProvisionedModelThroughputCommandInput, DeleteProvisionedModelThroughputCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProvisionedModelThroughput",
  DeleteProvisionedModelThroughput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProvisionedModelThroughputRequest;
      output: {};
    };
    sdk: {
      input: DeleteProvisionedModelThroughputCommandInput;
      output: DeleteProvisionedModelThroughputCommandOutput;
    };
  };
}
