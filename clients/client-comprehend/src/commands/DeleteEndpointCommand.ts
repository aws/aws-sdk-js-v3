// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEndpointRequest, DeleteEndpointResponse } from "../models/models_0";
import { DeleteEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEndpointCommand}.
 */
export interface DeleteEndpointCommandInput extends DeleteEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointCommand}.
 */
export interface DeleteEndpointCommandOutput extends DeleteEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a model-specific endpoint for a previously-trained custom model. All endpoints
 *       must be deleted in order for the model to be deleted.
 *       For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DeleteEndpointCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DeleteEndpointCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DeleteEndpointRequest
 *   EndpointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEndpointCommandInput - {@link DeleteEndpointCommandInput}
 * @returns {@link DeleteEndpointCommandOutput}
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DeleteEndpointCommand extends $Command
  .classBuilder<
    DeleteEndpointCommandInput,
    DeleteEndpointCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "DeleteEndpoint", {})
  .n("ComprehendClient", "DeleteEndpointCommand")
  .sc(DeleteEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteEndpointCommandInput;
      output: DeleteEndpointCommandOutput;
    };
  };
}
