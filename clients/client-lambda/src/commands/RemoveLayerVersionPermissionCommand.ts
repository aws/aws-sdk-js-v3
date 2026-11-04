// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveLayerVersionPermissionRequest } from "../models/models_0";
import { RemoveLayerVersionPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes a statement from the permissions policy for a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). For more information, see AddLayerVersionPermission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, RemoveLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, RemoveLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
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
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.
 *
 * - **For AddPermission and RemovePermission API operations:** Call `GetPolicy` to retrieve the latest RevisionId for your resource.
 * - **For all other API operations:** Call `GetFunction` or `GetAlias` to retrieve the latest RevisionId for your resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To delete layer-version permissions
 * ```javascript
 * // The following example deletes permission for an account to configure a layer version.
 * const input = {
 *   LayerName: "my-layer",
 *   StatementId: "xaccount",
 *   VersionNumber: 1
 * };
 * const command = new RemoveLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveLayerVersionPermissionCommand extends command<RemoveLayerVersionPermissionCommandInput, RemoveLayerVersionPermissionCommandOutput>(
  _ep0,
  _mw0,
  "RemoveLayerVersionPermission",
  RemoveLayerVersionPermission$
) {
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
