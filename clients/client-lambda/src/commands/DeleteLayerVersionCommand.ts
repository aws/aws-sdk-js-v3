// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { DeleteLayerVersionRequest } from "../models/models_0";
import { DeleteLayerVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLayerVersionCommand}.
 */
export interface DeleteLayerVersionCommandInput extends DeleteLayerVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLayerVersionCommand}.
 */
export interface DeleteLayerVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // DeleteLayerVersionRequest
 *   LayerName: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 * };
 * const command = new DeleteLayerVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLayerVersionCommandInput - {@link DeleteLayerVersionCommandInput}
 * @returns {@link DeleteLayerVersionCommandOutput}
 * @see {@link DeleteLayerVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @example To delete a version of a Lambda layer
 * ```javascript
 * // The following example deletes version 2 of a layer named my-layer.
 * const input = {
 *   LayerName: "my-layer",
 *   VersionNumber: 2
 * };
 * const command = new DeleteLayerVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLayerVersionCommand extends $Command
  .classBuilder<
    DeleteLayerVersionCommandInput,
    DeleteLayerVersionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "DeleteLayerVersion", {})
  .n("LambdaClient", "DeleteLayerVersionCommand")
  .sc(DeleteLayerVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLayerVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteLayerVersionCommandInput;
      output: DeleteLayerVersionCommandOutput;
    };
  };
}
