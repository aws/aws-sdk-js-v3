// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterMarketplaceModelEndpointRequest, RegisterMarketplaceModelEndpointResponse } from "../models/models_0";
import {
  de_RegisterMarketplaceModelEndpointCommand,
  se_RegisterMarketplaceModelEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterMarketplaceModelEndpointCommand}.
 */
export interface RegisterMarketplaceModelEndpointCommandInput extends RegisterMarketplaceModelEndpointRequest {}
/**
 * @public
 *
 * The output of {@link RegisterMarketplaceModelEndpointCommand}.
 */
export interface RegisterMarketplaceModelEndpointCommandOutput
  extends RegisterMarketplaceModelEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Registers an existing Amazon SageMaker endpoint with Amazon Bedrock Marketplace, allowing it to be used with
 *             Amazon Bedrock APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, RegisterMarketplaceModelEndpointCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, RegisterMarketplaceModelEndpointCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // RegisterMarketplaceModelEndpointRequest
 *   endpointIdentifier: "STRING_VALUE", // required
 *   modelSourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RegisterMarketplaceModelEndpointCommand(input);
 * const response = await client.send(command);
 * // { // RegisterMarketplaceModelEndpointResponse
 * //   marketplaceModelEndpoint: { // MarketplaceModelEndpoint
 * //     endpointArn: "STRING_VALUE", // required
 * //     modelSourceIdentifier: "STRING_VALUE", // required
 * //     status: "REGISTERED" || "INCOMPATIBLE_ENDPOINT",
 * //     statusMessage: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     endpointConfig: { // EndpointConfig Union: only one key present
 * //       sageMaker: { // SageMakerEndpoint
 * //         initialInstanceCount: Number("int"), // required
 * //         instanceType: "STRING_VALUE", // required
 * //         executionRole: "STRING_VALUE", // required
 * //         kmsEncryptionKey: "STRING_VALUE",
 * //         vpc: { // VpcConfig
 * //           subnetIds: [ // SubnetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroupIds: [ // SecurityGroupIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     endpointStatus: "STRING_VALUE", // required
 * //     endpointStatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterMarketplaceModelEndpointCommandInput - {@link RegisterMarketplaceModelEndpointCommandInput}
 * @returns {@link RegisterMarketplaceModelEndpointCommandOutput}
 * @see {@link RegisterMarketplaceModelEndpointCommandInput} for command's `input` shape.
 * @see {@link RegisterMarketplaceModelEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
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
 * @public
 */
export class RegisterMarketplaceModelEndpointCommand extends $Command
  .classBuilder<
    RegisterMarketplaceModelEndpointCommandInput,
    RegisterMarketplaceModelEndpointCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "RegisterMarketplaceModelEndpoint", {})
  .n("BedrockClient", "RegisterMarketplaceModelEndpointCommand")
  .f(void 0, void 0)
  .ser(se_RegisterMarketplaceModelEndpointCommand)
  .de(de_RegisterMarketplaceModelEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterMarketplaceModelEndpointRequest;
      output: RegisterMarketplaceModelEndpointResponse;
    };
    sdk: {
      input: RegisterMarketplaceModelEndpointCommandInput;
      output: RegisterMarketplaceModelEndpointCommandOutput;
    };
  };
}
