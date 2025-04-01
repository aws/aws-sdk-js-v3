// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { DeleteTypeRequest, DeleteTypeResponse } from "../models/models_0";
import { de_DeleteTypeCommand, se_DeleteTypeCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTypeCommand}.
 */
export interface DeleteTypeCommandInput extends DeleteTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTypeCommand}.
 */
export interface DeleteTypeCommandOutput extends DeleteTypeResponse, __MetadataBearer {}

/**
 * <p>
 *          The <code>DeleteType</code> operation deletes a user-defined type (UDT). You can only delete a type that is not used in a table
 *          or another UDT.
 *       </p>
 *          <p>To configure the required permissions, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-drop">Permissions to delete a UDT</a>
 *          in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, DeleteTypeCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, DeleteTypeCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // DeleteTypeRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   typeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTypeResponse
 * //   keyspaceArn: "STRING_VALUE", // required
 * //   typeName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteTypeCommandInput - {@link DeleteTypeCommandInput}
 * @returns {@link DeleteTypeCommandOutput}
 * @see {@link DeleteTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteTypeCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to
 *          perform an action and the same or a different action is already
 *          in progress, or if you try to create a resource that already exists. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly,
 *          or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 *
 * @public
 */
export class DeleteTypeCommand extends $Command
  .classBuilder<
    DeleteTypeCommandInput,
    DeleteTypeCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KeyspacesService", "DeleteType", {})
  .n("KeyspacesClient", "DeleteTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTypeCommand)
  .de(de_DeleteTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTypeRequest;
      output: DeleteTypeResponse;
    };
    sdk: {
      input: DeleteTypeCommandInput;
      output: DeleteTypeCommandOutput;
    };
  };
}
