// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePermissionRequest, DeletePermissionResponse } from "../models/models_0";
import { de_DeletePermissionCommand, se_DeletePermissionCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePermissionCommand}.
 */
export interface DeletePermissionCommandInput extends DeletePermissionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePermissionCommand}.
 */
export interface DeletePermissionCommandOutput extends DeletePermissionResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You
 *             can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all
 *             versions associated with the customer managed permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeletePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeletePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // DeletePermissionRequest
 *   permissionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeletePermissionCommand(input);
 * const response = await client.send(command);
 * // { // DeletePermissionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * //   permissionStatus: "ATTACHABLE" || "UNATTACHABLE" || "DELETING" || "DELETED",
 * // };
 *
 * ```
 *
 * @param DeletePermissionCommandInput - {@link DeletePermissionCommandInput}
 * @returns {@link DeletePermissionCommandOutput}
 * @see {@link DeletePermissionCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionCommandOutput} for command's `response` shape.
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
export class DeletePermissionCommand extends $Command
  .classBuilder<
    DeletePermissionCommandInput,
    DeletePermissionCommandOutput,
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
  .s("AmazonResourceSharing", "DeletePermission", {})
  .n("RAMClient", "DeletePermissionCommand")
  .f(void 0, void 0)
  .ser(se_DeletePermissionCommand)
  .de(de_DeletePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePermissionRequest;
      output: DeletePermissionResponse;
    };
    sdk: {
      input: DeletePermissionCommandInput;
      output: DeletePermissionCommandOutput;
    };
  };
}
