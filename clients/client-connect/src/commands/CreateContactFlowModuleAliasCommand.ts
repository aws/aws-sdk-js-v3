// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateContactFlowModuleAliasRequest, CreateContactFlowModuleAliasResponse } from "../models/models_0";
import { CreateContactFlowModuleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContactFlowModuleAliasCommand}.
 */
export interface CreateContactFlowModuleAliasCommandInput extends CreateContactFlowModuleAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactFlowModuleAliasCommand}.
 */
export interface CreateContactFlowModuleAliasCommandOutput extends CreateContactFlowModuleAliasResponse, __MetadataBearer {}

/**
 * <p>Creates a named alias that points to a specific version of a contact flow module.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowModuleAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowModuleAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateContactFlowModuleAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   ContactFlowModuleVersion: Number("long"), // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new CreateContactFlowModuleAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactFlowModuleAliasResponse
 * //   ContactFlowModuleArn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContactFlowModuleAliasCommandInput - {@link CreateContactFlowModuleAliasCommandInput}
 * @returns {@link CreateContactFlowModuleAliasCommandOutput}
 * @see {@link CreateContactFlowModuleAliasCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowModuleAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class CreateContactFlowModuleAliasCommand extends $Command
  .classBuilder<
    CreateContactFlowModuleAliasCommandInput,
    CreateContactFlowModuleAliasCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateContactFlowModuleAlias", {})
  .n("ConnectClient", "CreateContactFlowModuleAliasCommand")
  .sc(CreateContactFlowModuleAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactFlowModuleAliasRequest;
      output: CreateContactFlowModuleAliasResponse;
    };
    sdk: {
      input: CreateContactFlowModuleAliasCommandInput;
      output: CreateContactFlowModuleAliasCommandOutput;
    };
  };
}
