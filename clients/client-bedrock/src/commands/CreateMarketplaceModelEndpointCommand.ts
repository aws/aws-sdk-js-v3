// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMarketplaceModelEndpointRequest, CreateMarketplaceModelEndpointResponse } from "../models/models_0";
import {
  de_CreateMarketplaceModelEndpointCommand,
  se_CreateMarketplaceModelEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMarketplaceModelEndpointCommand}.
 */
export interface CreateMarketplaceModelEndpointCommandInput extends CreateMarketplaceModelEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateMarketplaceModelEndpointCommand}.
 */
export interface CreateMarketplaceModelEndpointCommandOutput
  extends CreateMarketplaceModelEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Creates an endpoint for a model from Amazon Bedrock Marketplace. The endpoint is hosted by
 *             Amazon SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateMarketplaceModelEndpointCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateMarketplaceModelEndpointCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockClient(config);
 * const input = { // CreateMarketplaceModelEndpointRequest
 *   modelSourceIdentifier: "STRING_VALUE", // required
 *   endpointConfig: { // EndpointConfig Union: only one key present
 *     sageMaker: { // SageMakerEndpoint
 *       initialInstanceCount: Number("int"), // required
 *       instanceType: "STRING_VALUE", // required
 *       executionRole: "STRING_VALUE", // required
 *       kmsEncryptionKey: "STRING_VALUE",
 *       vpc: { // VpcConfig
 *         subnetIds: [ // SubnetIds // required
 *           "STRING_VALUE",
 *         ],
 *         securityGroupIds: [ // SecurityGroupIds // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   acceptEula: true || false,
 *   endpointName: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMarketplaceModelEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateMarketplaceModelEndpointResponse
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
 * @param CreateMarketplaceModelEndpointCommandInput - {@link CreateMarketplaceModelEndpointCommandInput}
 * @returns {@link CreateMarketplaceModelEndpointCommandOutput}
 * @see {@link CreateMarketplaceModelEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateMarketplaceModelEndpointCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class CreateMarketplaceModelEndpointCommand extends $Command
  .classBuilder<
    CreateMarketplaceModelEndpointCommandInput,
    CreateMarketplaceModelEndpointCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "CreateMarketplaceModelEndpoint", {})
  .n("BedrockClient", "CreateMarketplaceModelEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateMarketplaceModelEndpointCommand)
  .de(de_CreateMarketplaceModelEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMarketplaceModelEndpointRequest;
      output: CreateMarketplaceModelEndpointResponse;
    };
    sdk: {
      input: CreateMarketplaceModelEndpointCommandInput;
      output: CreateMarketplaceModelEndpointCommandOutput;
    };
  };
}
