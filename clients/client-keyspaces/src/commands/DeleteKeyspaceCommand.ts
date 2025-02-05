// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { DeleteKeyspaceRequest, DeleteKeyspaceResponse } from "../models/models_0";
import { de_DeleteKeyspaceCommand, se_DeleteKeyspaceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyspaceCommand}.
 */
export interface DeleteKeyspaceCommandInput extends DeleteKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyspaceCommand}.
 */
export interface DeleteKeyspaceCommandOutput extends DeleteKeyspaceResponse, __MetadataBearer {}

/**
 * <p>The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, DeleteKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, DeleteKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KeyspacesClient(config);
 * const input = { // DeleteKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeyspaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyspaceCommandInput - {@link DeleteKeyspaceCommandInput}
 * @returns {@link DeleteKeyspaceCommandOutput}
 * @see {@link DeleteKeyspaceCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyspaceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteKeyspaceCommand extends $Command
  .classBuilder<
    DeleteKeyspaceCommandInput,
    DeleteKeyspaceCommandOutput,
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
  .s("KeyspacesService", "DeleteKeyspace", {})
  .n("KeyspacesClient", "DeleteKeyspaceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKeyspaceCommand)
  .de(de_DeleteKeyspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyspaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteKeyspaceCommandInput;
      output: DeleteKeyspaceCommandOutput;
    };
  };
}
