// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReplacePermissionAssociationsRequest, ReplacePermissionAssociationsResponse } from "../models/models_0";
import { ReplacePermissionAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReplacePermissionAssociationsCommand}.
 */
export interface ReplacePermissionAssociationsCommandInput extends ReplacePermissionAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ReplacePermissionAssociationsCommand}.
 */
export interface ReplacePermissionAssociationsCommandOutput extends ReplacePermissionAssociationsResponse, __MetadataBearer {}

/**
 * Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.
 *
 * You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the `fromPermissionArn` and `toPermissionArn` parameters.
 *
 * You can use the optional `fromPermissionVersion` parameter to update only those resources that use a specified version of the managed permission to the new managed permission.
 *
 * > **Important:** To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ReplacePermissionAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ReplacePermissionAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ReplacePermissionAssociationsRequest
 *   fromPermissionArn: "STRING_VALUE", // required
 *   fromPermissionVersion: Number("int"),
 *   toPermissionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ReplacePermissionAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ReplacePermissionAssociationsResponse
 * //   replacePermissionAssociationsWork: { // ReplacePermissionAssociationsWork
 * //     id: "STRING_VALUE",
 * //     fromPermissionArn: "STRING_VALUE",
 * //     fromPermissionVersion: "STRING_VALUE",
 * //     toPermissionArn: "STRING_VALUE",
 * //     toPermissionVersion: "STRING_VALUE",
 * //     status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //     statusMessage: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReplacePermissionAssociationsCommandInput - {@link ReplacePermissionAssociationsCommandInput}
 * @returns {@link ReplacePermissionAssociationsCommandOutput}
 * @see {@link ReplacePermissionAssociationsCommandInput} for command's `input` shape.
 * @see {@link ReplacePermissionAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The operation failed because the client token input parameter matched one that was used with a previous call to the operation, but at least one of the other input parameters is different from the previous call.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *
 * The operation failed because the specified client token isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class ReplacePermissionAssociationsCommand extends command<ReplacePermissionAssociationsCommandInput, ReplacePermissionAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ReplacePermissionAssociations",
  ReplacePermissionAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplacePermissionAssociationsRequest;
      output: ReplacePermissionAssociationsResponse;
    };
    sdk: {
      input: ReplacePermissionAssociationsCommandInput;
      output: ReplacePermissionAssociationsCommandOutput;
    };
  };
}
