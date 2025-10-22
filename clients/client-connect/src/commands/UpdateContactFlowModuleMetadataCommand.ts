// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContactFlowModuleMetadataRequest, UpdateContactFlowModuleMetadataResponse } from "../models/models_3";
import {
  de_UpdateContactFlowModuleMetadataCommand,
  se_UpdateContactFlowModuleMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowModuleMetadataCommand}.
 */
export interface UpdateContactFlowModuleMetadataCommandInput extends UpdateContactFlowModuleMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowModuleMetadataCommand}.
 */
export interface UpdateContactFlowModuleMetadataCommandOutput
  extends UpdateContactFlowModuleMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Updates metadata about specified flow module.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowModuleMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowModuleMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowModuleMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   State: "ACTIVE" || "ARCHIVED",
 * };
 * const command = new UpdateContactFlowModuleMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowModuleMetadataCommandInput - {@link UpdateContactFlowModuleMetadataCommandInput}
 * @returns {@link UpdateContactFlowModuleMetadataCommandOutput}
 * @see {@link UpdateContactFlowModuleMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowModuleMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
export class UpdateContactFlowModuleMetadataCommand extends $Command
  .classBuilder<
    UpdateContactFlowModuleMetadataCommandInput,
    UpdateContactFlowModuleMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateContactFlowModuleMetadata", {})
  .n("ConnectClient", "UpdateContactFlowModuleMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContactFlowModuleMetadataCommand)
  .de(de_UpdateContactFlowModuleMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowModuleMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowModuleMetadataCommandInput;
      output: UpdateContactFlowModuleMetadataCommandOutput;
    };
  };
}
