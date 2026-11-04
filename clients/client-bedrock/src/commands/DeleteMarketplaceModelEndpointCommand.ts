// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMarketplaceModelEndpointRequest, DeleteMarketplaceModelEndpointResponse } from "../models/models_0";
import { DeleteMarketplaceModelEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMarketplaceModelEndpointCommand}.
 */
export interface DeleteMarketplaceModelEndpointCommandInput extends DeleteMarketplaceModelEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMarketplaceModelEndpointCommand}.
 */
export interface DeleteMarketplaceModelEndpointCommandOutput extends DeleteMarketplaceModelEndpointResponse, __MetadataBearer {}

/**
 * Deletes an endpoint for a model from Amazon Bedrock Marketplace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteMarketplaceModelEndpointCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteMarketplaceModelEndpointCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteMarketplaceModelEndpointRequest
 *   endpointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMarketplaceModelEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMarketplaceModelEndpointCommandInput - {@link DeleteMarketplaceModelEndpointCommandInput}
 * @returns {@link DeleteMarketplaceModelEndpointCommandOutput}
 * @see {@link DeleteMarketplaceModelEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteMarketplaceModelEndpointCommandOutput} for command's `response` shape.
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
export class DeleteMarketplaceModelEndpointCommand extends command<DeleteMarketplaceModelEndpointCommandInput, DeleteMarketplaceModelEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMarketplaceModelEndpoint",
  DeleteMarketplaceModelEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMarketplaceModelEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteMarketplaceModelEndpointCommandInput;
      output: DeleteMarketplaceModelEndpointCommandOutput;
    };
  };
}
