// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePermissionVersionRequest, DeletePermissionVersionResponse } from "../models/models_0";
import { de_DeletePermissionVersionCommand, se_DeletePermissionVersionCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePermissionVersionCommand}.
 */
export interface DeletePermissionVersionCommandInput extends DeletePermissionVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePermissionVersionCommand}.
 */
export interface DeletePermissionVersionCommandOutput extends DeletePermissionVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes one version of a customer managed permission. The version you specify must not be attached to any
 *             resource share and must not be the default version for the permission.</p>
 *          <p>If a customer managed permission has the maximum of 5 versions, then you must delete at
 *             least one version before you can create another.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeletePermissionVersionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeletePermissionVersionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // DeletePermissionVersionRequest
 *   permissionArn: "STRING_VALUE", // required
 *   permissionVersion: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeletePermissionVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeletePermissionVersionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * //   permissionStatus: "ATTACHABLE" || "UNATTACHABLE" || "DELETING" || "DELETED",
 * // };
 *
 * ```
 *
 * @param DeletePermissionVersionCommandInput - {@link DeletePermissionVersionCommandInput}
 * @returns {@link DeletePermissionVersionCommandOutput}
 * @see {@link DeletePermissionVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionVersionCommandOutput} for command's `response` shape.
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
export class DeletePermissionVersionCommand extends $Command
  .classBuilder<
    DeletePermissionVersionCommandInput,
    DeletePermissionVersionCommandOutput,
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
  .s("AmazonResourceSharing", "DeletePermissionVersion", {})
  .n("RAMClient", "DeletePermissionVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeletePermissionVersionCommand)
  .de(de_DeletePermissionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePermissionVersionRequest;
      output: DeletePermissionVersionResponse;
    };
    sdk: {
      input: DeletePermissionVersionCommandInput;
      output: DeletePermissionVersionCommandOutput;
    };
  };
}
