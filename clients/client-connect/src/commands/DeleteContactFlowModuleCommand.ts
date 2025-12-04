// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteContactFlowModuleRequest, DeleteContactFlowModuleResponse } from "../models/models_0";
import { DeleteContactFlowModule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContactFlowModuleCommand}.
 */
export interface DeleteContactFlowModuleCommandInput extends DeleteContactFlowModuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactFlowModuleCommand}.
 */
export interface DeleteContactFlowModuleCommandOutput extends DeleteContactFlowModuleResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified flow module.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactFlowModuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactFlowModuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactFlowModuleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactFlowModuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactFlowModuleCommandInput - {@link DeleteContactFlowModuleCommandInput}
 * @returns {@link DeleteContactFlowModuleCommandOutput}
 * @see {@link DeleteContactFlowModuleCommandInput} for command's `input` shape.
 * @see {@link DeleteContactFlowModuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteContactFlowModuleCommand extends $Command
  .classBuilder<
    DeleteContactFlowModuleCommandInput,
    DeleteContactFlowModuleCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteContactFlowModule", {})
  .n("ConnectClient", "DeleteContactFlowModuleCommand")
  .sc(DeleteContactFlowModule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactFlowModuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactFlowModuleCommandInput;
      output: DeleteContactFlowModuleCommandOutput;
    };
  };
}
