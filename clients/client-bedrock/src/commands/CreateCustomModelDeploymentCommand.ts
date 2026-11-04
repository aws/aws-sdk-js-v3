// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomModelDeploymentRequest, CreateCustomModelDeploymentResponse } from "../models/models_0";
import { CreateCustomModelDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomModelDeploymentCommand}.
 */
export interface CreateCustomModelDeploymentCommandInput extends CreateCustomModelDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomModelDeploymentCommand}.
 */
export interface CreateCustomModelDeploymentCommandOutput extends CreateCustomModelDeploymentResponse, __MetadataBearer {}

/**
 * Deploys a custom model for on-demand inference in Amazon Bedrock. After you deploy your custom model, you use the deployment's Amazon Resource Name (ARN) as the `modelId` parameter when you submit prompts and generate responses with model inference.
 *
 * For more information about setting up on-demand inference for custom models, see [Set up inference for a custom model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html).
 *
 * The following actions are related to the `CreateCustomModelDeployment` operation:
 *
 * - [GetCustomModelDeployment](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModelDeployment.html)
 * - [ListCustomModelDeployments](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModelDeployments.html)
 * - [DeleteCustomModelDeployment](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModelDeployment.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateCustomModelDeploymentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateCustomModelDeploymentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // CreateCustomModelDeploymentRequest
 *   modelDeploymentName: "STRING_VALUE", // required
 *   modelArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateCustomModelDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomModelDeploymentResponse
 * //   customModelDeploymentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCustomModelDeploymentCommandInput - {@link CreateCustomModelDeploymentCommandInput}
 * @returns {@link CreateCustomModelDeploymentCommandOutput}
 * @see {@link CreateCustomModelDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateCustomModelDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request.
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
export class CreateCustomModelDeploymentCommand extends command<CreateCustomModelDeploymentCommandInput, CreateCustomModelDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomModelDeployment",
  CreateCustomModelDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomModelDeploymentRequest;
      output: CreateCustomModelDeploymentResponse;
    };
    sdk: {
      input: CreateCustomModelDeploymentCommandInput;
      output: CreateCustomModelDeploymentCommandOutput;
    };
  };
}
