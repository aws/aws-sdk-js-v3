// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomModelDeploymentRequest, GetCustomModelDeploymentResponse } from "../models/models_0";
import { GetCustomModelDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomModelDeploymentCommand}.
 */
export interface GetCustomModelDeploymentCommandInput extends GetCustomModelDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomModelDeploymentCommand}.
 */
export interface GetCustomModelDeploymentCommandOutput extends GetCustomModelDeploymentResponse, __MetadataBearer {}

/**
 * Retrieves information about a custom model deployment, including its status, configuration, and metadata. Use this operation to monitor the deployment status and retrieve details needed for inference requests.
 *
 * The following actions are related to the `GetCustomModelDeployment` operation:
 *
 * - [CreateCustomModelDeployment](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateCustomModelDeployment.html)
 * - [ListCustomModelDeployments](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModelDeployments.html)
 * - [DeleteCustomModelDeployment](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModelDeployment.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetCustomModelDeploymentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetCustomModelDeploymentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetCustomModelDeploymentRequest
 *   customModelDeploymentIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCustomModelDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomModelDeploymentResponse
 * //   customModelDeploymentArn: "STRING_VALUE", // required
 * //   modelDeploymentName: "STRING_VALUE", // required
 * //   modelArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "Creating" || "Active" || "Failed", // required
 * //   description: "STRING_VALUE",
 * //   updateDetails: { // CustomModelDeploymentUpdateDetails
 * //     modelArn: "STRING_VALUE", // required
 * //     updateStatus: "Updating" || "UpdateCompleted" || "UpdateFailed", // required
 * //   },
 * //   failureMessage: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCustomModelDeploymentCommandInput - {@link GetCustomModelDeploymentCommandInput}
 * @returns {@link GetCustomModelDeploymentCommandOutput}
 * @see {@link GetCustomModelDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetCustomModelDeploymentCommandOutput} for command's `response` shape.
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
export class GetCustomModelDeploymentCommand extends command<GetCustomModelDeploymentCommandInput, GetCustomModelDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomModelDeployment",
  GetCustomModelDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomModelDeploymentRequest;
      output: GetCustomModelDeploymentResponse;
    };
    sdk: {
      input: GetCustomModelDeploymentCommandInput;
      output: GetCustomModelDeploymentCommandOutput;
    };
  };
}
