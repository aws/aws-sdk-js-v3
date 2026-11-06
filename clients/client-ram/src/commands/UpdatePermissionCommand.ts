// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePermissionRequest, UpdatePermissionResponse } from "../models/models_0";
import { UpdatePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePermissionCommand}.
 */
export interface UpdatePermissionCommandInput extends UpdatePermissionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePermissionCommand}.
 */
export interface UpdatePermissionCommandOutput extends UpdatePermissionResponse, __MetadataBearer {}

/**
 * <p>Updates the status of the specified customer managed permission.</p>
 *          <p>Setting the status to <code>DEPRECATED</code> prevents new resource share associations. Setting it to <code>ATTACHABLE</code> restores a previously deprecated permission. Existing resource shares that use the permission continue to function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UpdatePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UpdatePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // UpdatePermissionRequest
 *   permissionArn: "STRING_VALUE", // required
 *   status: "ATTACHABLE" || "DEPRECATED", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePermissionCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePermissionResponse
 * //   clientToken: "STRING_VALUE",
 * //   permissionStatus: "ATTACHABLE" || "DEPRECATED",
 * // };
 *
 * ```
 *
 * @param UpdatePermissionCommandInput - {@link UpdatePermissionCommandInput}
 * @returns {@link UpdatePermissionCommandOutput}
 * @see {@link UpdatePermissionCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link PermissionLimitExceededException} (client fault)
 *  <p>The operation failed because it would exceed the maximum number of permissions you can
 *             create in each Amazon Web Services Region. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @example Deprecate a managed permission
 * ```javascript
 * // Deprecates a customer managed permission so it can no longer be associated with new resource shares.
 * const input = {
 *   permissionArn: "arn:aws:ram:us-east-1:123456789012:permission/AnyCompanyImageBuilderPermission",
 *   status: "DEPRECATED"
 * };
 * const command = new UpdatePermissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   permissionStatus: "DEPRECATED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdatePermissionCommand extends command<UpdatePermissionCommandInput, UpdatePermissionCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePermission",
  UpdatePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePermissionRequest;
      output: UpdatePermissionResponse;
    };
    sdk: {
      input: UpdatePermissionCommandInput;
      output: UpdatePermissionCommandOutput;
    };
  };
}
