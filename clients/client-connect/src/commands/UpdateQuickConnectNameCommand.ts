// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQuickConnectNameRequest } from "../models/models_3";
import { UpdateQuickConnectName } from "../schemas/schemas_2_Quick";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuickConnectNameCommand}.
 */
export interface UpdateQuickConnectNameCommandInput extends UpdateQuickConnectNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuickConnectNameCommand}.
 */
export interface UpdateQuickConnectNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQuickConnectNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQuickConnectNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQuickConnectNameRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QuickConnectId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateQuickConnectNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQuickConnectNameCommandInput - {@link UpdateQuickConnectNameCommandInput}
 * @returns {@link UpdateQuickConnectNameCommandOutput}
 * @see {@link UpdateQuickConnectNameCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickConnectNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class UpdateQuickConnectNameCommand extends $Command
  .classBuilder<
    UpdateQuickConnectNameCommandInput,
    UpdateQuickConnectNameCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateQuickConnectName", {})
  .n("ConnectClient", "UpdateQuickConnectNameCommand")
  .sc(UpdateQuickConnectName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQuickConnectNameRequest;
      output: {};
    };
    sdk: {
      input: UpdateQuickConnectNameCommandInput;
      output: UpdateQuickConnectNameCommandOutput;
    };
  };
}
