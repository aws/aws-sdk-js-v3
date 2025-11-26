// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConnectionFunctionRequest } from "../models/models_0";
import { DeleteConnectionFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionFunctionCommand}.
 */
export interface DeleteConnectionFunctionCommandInput extends DeleteConnectionFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionFunctionCommand}.
 */
export interface DeleteConnectionFunctionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a connection function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteConnectionFunctionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionFunctionCommandInput - {@link DeleteConnectionFunctionCommandInput}
 * @returns {@link DeleteConnectionFunctionCommandOutput}
 * @see {@link DeleteConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *  <p>The entity cannot be deleted while it is in use.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionFunctionCommand extends $Command
  .classBuilder<
    DeleteConnectionFunctionCommandInput,
    DeleteConnectionFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteConnectionFunction", {})
  .n("CloudFrontClient", "DeleteConnectionFunctionCommand")
  .sc(DeleteConnectionFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionFunctionCommandInput;
      output: DeleteConnectionFunctionCommandOutput;
    };
  };
}
