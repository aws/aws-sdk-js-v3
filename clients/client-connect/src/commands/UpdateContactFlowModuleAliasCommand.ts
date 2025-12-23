// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateContactFlowModuleAliasRequest, UpdateContactFlowModuleAliasResponse } from "../models/models_3";
import { UpdateContactFlowModuleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowModuleAliasCommand}.
 */
export interface UpdateContactFlowModuleAliasCommandInput extends UpdateContactFlowModuleAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowModuleAliasCommand}.
 */
export interface UpdateContactFlowModuleAliasCommandOutput extends UpdateContactFlowModuleAliasResponse, __MetadataBearer {}

/**
 * <p>Updates a specific Aliases metadata, including the version it’s tied to, it’s name, and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowModuleAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowModuleAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowModuleAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   AliasId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ContactFlowModuleVersion: Number("long"),
 * };
 * const command = new UpdateContactFlowModuleAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowModuleAliasCommandInput - {@link UpdateContactFlowModuleAliasCommandInput}
 * @returns {@link UpdateContactFlowModuleAliasCommandOutput}
 * @see {@link UpdateContactFlowModuleAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowModuleAliasCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *  <p>Request processing failed because dependent condition failed.</p>
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
export class UpdateContactFlowModuleAliasCommand extends $Command
  .classBuilder<
    UpdateContactFlowModuleAliasCommandInput,
    UpdateContactFlowModuleAliasCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateContactFlowModuleAlias", {})
  .n("ConnectClient", "UpdateContactFlowModuleAliasCommand")
  .sc(UpdateContactFlowModuleAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowModuleAliasRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowModuleAliasCommandInput;
      output: UpdateContactFlowModuleAliasCommandOutput;
    };
  };
}
