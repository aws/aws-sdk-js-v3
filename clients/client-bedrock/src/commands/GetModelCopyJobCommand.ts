// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetModelCopyJobRequest, GetModelCopyJobResponse } from "../models/models_1";
import { GetModelCopyJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetModelCopyJobCommand}.
 */
export interface GetModelCopyJobCommandInput extends GetModelCopyJobRequest {}
/**
 * @public
 *
 * The output of {@link GetModelCopyJobCommand}.
 */
export interface GetModelCopyJobCommandOutput extends GetModelCopyJobResponse, __MetadataBearer {}

/**
 * Retrieves information about a model copy job. For more information, see [Copy models to be used in other regions](https://docs.aws.amazon.com/bedrock/latest/userguide/copy-model.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelCopyJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelCopyJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetModelCopyJobRequest
 *   jobArn: "STRING_VALUE", // required
 * };
 * const command = new GetModelCopyJobCommand(input);
 * const response = await client.send(command);
 * // { // GetModelCopyJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   status: "InProgress" || "Completed" || "Failed", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   targetModelArn: "STRING_VALUE", // required
 * //   targetModelName: "STRING_VALUE",
 * //   sourceAccountId: "STRING_VALUE", // required
 * //   sourceModelArn: "STRING_VALUE", // required
 * //   targetModelKmsKeyArn: "STRING_VALUE",
 * //   targetModelTags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failureMessage: "STRING_VALUE",
 * //   sourceModelName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelCopyJobCommandInput - {@link GetModelCopyJobCommandInput}
 * @returns {@link GetModelCopyJobCommandOutput}
 * @see {@link GetModelCopyJobCommandInput} for command's `input` shape.
 * @see {@link GetModelCopyJobCommandOutput} for command's `response` shape.
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
export class GetModelCopyJobCommand extends command<GetModelCopyJobCommandInput, GetModelCopyJobCommandOutput>(
  _ep0,
  _mw0,
  "GetModelCopyJob",
  GetModelCopyJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelCopyJobRequest;
      output: GetModelCopyJobResponse;
    };
    sdk: {
      input: GetModelCopyJobCommandInput;
      output: GetModelCopyJobCommandOutput;
    };
  };
}
