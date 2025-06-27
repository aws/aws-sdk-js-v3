// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterMarketplaceModelEndpointRequest,
  DeregisterMarketplaceModelEndpointResponse,
} from "../models/models_0";
import {
  de_DeregisterMarketplaceModelEndpointCommand,
  se_DeregisterMarketplaceModelEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterMarketplaceModelEndpointCommand}.
 */
export interface DeregisterMarketplaceModelEndpointCommandInput extends DeregisterMarketplaceModelEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterMarketplaceModelEndpointCommand}.
 */
export interface DeregisterMarketplaceModelEndpointCommandOutput
  extends DeregisterMarketplaceModelEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Deregisters an endpoint for a model from Amazon Bedrock Marketplace. This operation removes the endpoint's association with Amazon Bedrock but does not delete the underlying Amazon SageMaker endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeregisterMarketplaceModelEndpointCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeregisterMarketplaceModelEndpointCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // DeregisterMarketplaceModelEndpointRequest
 *   endpointArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterMarketplaceModelEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterMarketplaceModelEndpointCommandInput - {@link DeregisterMarketplaceModelEndpointCommandInput}
 * @returns {@link DeregisterMarketplaceModelEndpointCommandOutput}
 * @see {@link DeregisterMarketplaceModelEndpointCommandInput} for command's `input` shape.
 * @see {@link DeregisterMarketplaceModelEndpointCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeregisterMarketplaceModelEndpointCommand extends $Command
  .classBuilder<
    DeregisterMarketplaceModelEndpointCommandInput,
    DeregisterMarketplaceModelEndpointCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "DeregisterMarketplaceModelEndpoint", {})
  .n("BedrockClient", "DeregisterMarketplaceModelEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterMarketplaceModelEndpointCommand)
  .de(de_DeregisterMarketplaceModelEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterMarketplaceModelEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeregisterMarketplaceModelEndpointCommandInput;
      output: DeregisterMarketplaceModelEndpointCommandOutput;
    };
  };
}
