// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCustomModelDeploymentRequest, GetCustomModelDeploymentResponse } from "../models/models_0";
import { de_GetCustomModelDeploymentCommand, se_GetCustomModelDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves information about a custom model deployment, including its status, configuration, and metadata. Use this operation to monitor the deployment status and retrieve details needed for inference requests.</p> <p>The following actions are related to the <code>GetCustomModelDeployment</code> operation:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateCustomModelDeployment.html">CreateCustomModelDeployment</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModelDeployments.html">ListCustomModelDeployments</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModelDeployment.html">DeleteCustomModelDeployment</a> </p> </li> </ul>
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class GetCustomModelDeploymentCommand extends $Command
  .classBuilder<
    GetCustomModelDeploymentCommandInput,
    GetCustomModelDeploymentCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "GetCustomModelDeployment", {})
  .n("BedrockClient", "GetCustomModelDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_GetCustomModelDeploymentCommand)
  .de(de_GetCustomModelDeploymentCommand)
  .build() {
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
