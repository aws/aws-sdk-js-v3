// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServerRequest, DeleteServerResponse } from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_DeleteServerCommand, se_DeleteServerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServerCommand}.
 */
export interface DeleteServerCommandInput extends DeleteServerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServerCommand}.
 */
export interface DeleteServerCommandOutput extends DeleteServerResponse, __MetadataBearer {}

/**
 * <p>
 *       Deletes the server and the underlying CloudFormation stacks
 *       (including the server's EC2 instance). When you run this command, the server state is updated
 *       to <code>DELETING</code>. After the server is deleted, it is no longer returned by
 *       <code>DescribeServer</code> requests. If the CloudFormation stack cannot be deleted, the server cannot be deleted.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       An <code>InvalidStateException</code> is thrown when a server deletion is already in progress.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 *          <p>
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DeleteServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DeleteServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DeleteServerRequest
 *   ServerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServerCommandInput - {@link DeleteServerCommandInput}
 * @returns {@link DeleteServerCommandOutput}
 * @see {@link DeleteServerCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class DeleteServerCommand extends $Command
  .classBuilder<
    DeleteServerCommandInput,
    DeleteServerCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "DeleteServer", {})
  .n("OpsWorksCMClient", "DeleteServerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServerCommand)
  .de(de_DeleteServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServerRequest;
      output: {};
    };
    sdk: {
      input: DeleteServerCommandInput;
      output: DeleteServerCommandOutput;
    };
  };
}
