// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { RemoveLayerVersionPermissionRequest } from "../models/models_0";
import {
  de_RemoveLayerVersionPermissionCommand,
  se_RemoveLayerVersionPermissionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveLayerVersionPermissionCommand}.
 */
export interface RemoveLayerVersionPermissionCommandInput extends RemoveLayerVersionPermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveLayerVersionPermissionCommand}.
 */
export interface RemoveLayerVersionPermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. For more information, see
 *         <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, RemoveLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, RemoveLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LambdaClient(config);
 * const input = { // RemoveLayerVersionPermissionRequest
 *   LayerName: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 *   StatementId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE",
 * };
 * const command = new RemoveLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveLayerVersionPermissionCommandInput - {@link RemoveLayerVersionPermissionCommandInput}
 * @returns {@link RemoveLayerVersionPermissionCommandOutput}
 * @see {@link RemoveLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>For AddPermission and RemovePermission API operations:</b> Call <code>GetPolicy</code> to retrieve the latest RevisionId for your resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>For all other API operations:</b> Call <code>GetFunction</code> or <code>GetAlias</code> to retrieve the latest RevisionId for your resource.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
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
 * @public
 * @example To delete layer-version permissions
 * ```javascript
 * // The following example deletes permission for an account to configure a layer version.
 * const input = {
 *   "LayerName": "my-layer",
 *   "StatementId": "xaccount",
 *   "VersionNumber": 1
 * };
 * const command = new RemoveLayerVersionPermissionCommand(input);
 * await client.send(command);
 * // example id: to-delete-layer-version-permissions-1586491829416
 * ```
 *
 */
export class RemoveLayerVersionPermissionCommand extends $Command
  .classBuilder<
    RemoveLayerVersionPermissionCommandInput,
    RemoveLayerVersionPermissionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "RemoveLayerVersionPermission", {})
  .n("LambdaClient", "RemoveLayerVersionPermissionCommand")
  .f(void 0, void 0)
  .ser(se_RemoveLayerVersionPermissionCommand)
  .de(de_RemoveLayerVersionPermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveLayerVersionPermissionRequest;
      output: {};
    };
    sdk: {
      input: RemoveLayerVersionPermissionCommandInput;
      output: RemoveLayerVersionPermissionCommandOutput;
    };
  };
}
