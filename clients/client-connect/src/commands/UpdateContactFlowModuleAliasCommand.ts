// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactFlowModuleAliasRequest, UpdateContactFlowModuleAliasResponse } from "../models/models_3";
import { UpdateContactFlowModuleAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a specific Aliases metadata, including the version it’s tied to, it’s name, and description.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *
 * Request processing failed because dependent condition failed.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateContactFlowModuleAliasCommand extends command<UpdateContactFlowModuleAliasCommandInput, UpdateContactFlowModuleAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactFlowModuleAlias",
  UpdateContactFlowModuleAlias$
) {
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
