// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInferenceProfileRequest, GetInferenceProfileResponse } from "../models/models_1";
import { GetInferenceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInferenceProfileCommand}.
 */
export interface GetInferenceProfileCommandInput extends GetInferenceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetInferenceProfileCommand}.
 */
export interface GetInferenceProfileCommandOutput extends GetInferenceProfileResponse, __MetadataBearer {}

/**
 * Gets information about an inference profile. For more information, see [Increase throughput and resilience with cross-region inference in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html). in the Amazon Bedrock User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetInferenceProfileCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetInferenceProfileCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetInferenceProfileRequest
 *   inferenceProfileIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetInferenceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetInferenceProfileResponse
 * //   inferenceProfileName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   inferenceProfileArn: "STRING_VALUE", // required
 * //   models: [ // InferenceProfileModels // required
 * //     { // InferenceProfileModel
 * //       modelArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   inferenceProfileId: "STRING_VALUE", // required
 * //   status: "ACTIVE", // required
 * //   type: "SYSTEM_DEFINED" || "APPLICATION", // required
 * // };
 *
 * ```
 *
 * @param GetInferenceProfileCommandInput - {@link GetInferenceProfileCommandInput}
 * @returns {@link GetInferenceProfileCommandOutput}
 * @see {@link GetInferenceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInferenceProfileCommandOutput} for command's `response` shape.
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
export class GetInferenceProfileCommand extends command<GetInferenceProfileCommandInput, GetInferenceProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetInferenceProfile",
  GetInferenceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInferenceProfileRequest;
      output: GetInferenceProfileResponse;
    };
    sdk: {
      input: GetInferenceProfileCommandInput;
      output: GetInferenceProfileCommandOutput;
    };
  };
}
