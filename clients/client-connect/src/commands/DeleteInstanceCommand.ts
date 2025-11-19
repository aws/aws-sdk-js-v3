// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInstanceRequest } from "../models/models_0";
import { DeleteInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceCommand}.
 */
export interface DeleteInstanceCommandInput extends DeleteInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceCommand}.
 */
export interface DeleteInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Deletes the Amazon Connect instance. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-connect-instance.html">Delete your
 *      Amazon Connect instance</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
 * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
 * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInstanceCommandInput - {@link DeleteInstanceCommandInput}
 * @returns {@link DeleteInstanceCommandOutput}
 * @see {@link DeleteInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteInstanceCommand extends $Command
  .classBuilder<
    DeleteInstanceCommandInput,
    DeleteInstanceCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteInstance", {})
  .n("ConnectClient", "DeleteInstanceCommand")
  .sc(DeleteInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteInstanceCommandInput;
      output: DeleteInstanceCommandOutput;
    };
  };
}
