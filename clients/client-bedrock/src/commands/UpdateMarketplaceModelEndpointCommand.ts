// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMarketplaceModelEndpointRequest, UpdateMarketplaceModelEndpointResponse } from "../models/models_0";
import { UpdateMarketplaceModelEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMarketplaceModelEndpointCommand}.
 */
export interface UpdateMarketplaceModelEndpointCommandInput extends UpdateMarketplaceModelEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMarketplaceModelEndpointCommand}.
 */
export interface UpdateMarketplaceModelEndpointCommandOutput extends UpdateMarketplaceModelEndpointResponse, __MetadataBearer {}

/**
 * Updates the configuration of an existing endpoint for a model from Amazon Bedrock Marketplace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateMarketplaceModelEndpointCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateMarketplaceModelEndpointCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // UpdateMarketplaceModelEndpointRequest
 *   endpointArn: "STRING_VALUE", // required
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
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateMarketplaceModelEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMarketplaceModelEndpointResponse
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
 * @param UpdateMarketplaceModelEndpointCommandInput - {@link UpdateMarketplaceModelEndpointCommandInput}
 * @returns {@link UpdateMarketplaceModelEndpointCommandOutput}
 * @see {@link UpdateMarketplaceModelEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateMarketplaceModelEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
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
export class UpdateMarketplaceModelEndpointCommand extends command<UpdateMarketplaceModelEndpointCommandInput, UpdateMarketplaceModelEndpointCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMarketplaceModelEndpoint",
  UpdateMarketplaceModelEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMarketplaceModelEndpointRequest;
      output: UpdateMarketplaceModelEndpointResponse;
    };
    sdk: {
      input: UpdateMarketplaceModelEndpointCommandInput;
      output: UpdateMarketplaceModelEndpointCommandOutput;
    };
  };
}
