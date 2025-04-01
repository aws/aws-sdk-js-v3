// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ReplacePermissionAssociationsRequest, ReplacePermissionAssociationsResponse } from "../models/models_0";
import {
  de_ReplacePermissionAssociationsCommand,
  se_ReplacePermissionAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ReplacePermissionAssociationsCommandOutput
  extends ReplacePermissionAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Updates all resource shares that use a managed permission to a different managed
 *             permission. This operation always applies the default version of the target managed
 *             permission. You can optionally specify that the update applies to only resource shares that
 *             currently use a specified version. This enables you to update to the latest version,
 *             without changing the which managed permission is used.</p>
 *          <p>You can use this operation to update all of your resource shares to use the current
 *             default version of the permission by specifying the same value for the
 *                 <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p>
 *          <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only
 *             those resources that use a specified version of the managed permission to the new managed
 *             permission.</p>
 *          <important>
 *             <p>To successfully perform this operation, you must have permission to update the
 *                 resource-based policy on all affected resource types.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ReplacePermissionAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ReplacePermissionAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
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
 * @public
 */
export class ReplacePermissionAssociationsCommand extends $Command
  .classBuilder<
    ReplacePermissionAssociationsCommandInput,
    ReplacePermissionAssociationsCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "ReplacePermissionAssociations", {})
  .n("RAMClient", "ReplacePermissionAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ReplacePermissionAssociationsCommand)
  .de(de_ReplacePermissionAssociationsCommand)
  .build() {
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
