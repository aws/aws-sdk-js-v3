// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateProvisionedModelThroughputRequest,
  UpdateProvisionedModelThroughputResponse,
} from "../models/models_1";
import { UpdateProvisionedModelThroughput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProvisionedModelThroughputCommand}.
 */
export interface UpdateProvisionedModelThroughputCommandInput extends UpdateProvisionedModelThroughputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProvisionedModelThroughputCommand}.
 */
export interface UpdateProvisionedModelThroughputCommandOutput extends UpdateProvisionedModelThroughputResponse, __MetadataBearer {}

/**
 * Updates the name or associated model for a Provisioned Throughput. For more information, see [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // UpdateProvisionedModelThroughputRequest
 *   provisionedModelId: "STRING_VALUE", // required
 *   desiredProvisionedModelName: "STRING_VALUE",
 *   desiredModelId: "STRING_VALUE",
 * };
 * const command = new UpdateProvisionedModelThroughputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateProvisionedModelThroughputCommandInput - {@link UpdateProvisionedModelThroughputCommandInput}
 * @returns {@link UpdateProvisionedModelThroughputCommandOutput}
 * @see {@link UpdateProvisionedModelThroughputCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedModelThroughputCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
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
export class UpdateProvisionedModelThroughputCommand extends command<UpdateProvisionedModelThroughputCommandInput, UpdateProvisionedModelThroughputCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProvisionedModelThroughput",
  UpdateProvisionedModelThroughput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProvisionedModelThroughputRequest;
      output: {};
    };
    sdk: {
      input: UpdateProvisionedModelThroughputCommandInput;
      output: UpdateProvisionedModelThroughputCommandOutput;
    };
  };
}
