// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactFlowAliasRequest, UpdateContactFlowAliasResponse } from "../models/models_3";
import { UpdateContactFlowAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowAliasCommand}.
 */
export interface UpdateContactFlowAliasCommandInput extends UpdateContactFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowAliasCommand}.
 */
export interface UpdateContactFlowAliasCommandOutput extends UpdateContactFlowAliasResponse, __MetadataBearer {}

/**
 * <p>Updates the name, description, or flow version associated with an alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   AliasId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ContactFlowVersion: Number("long"),
 * };
 * const command = new UpdateContactFlowAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowAliasCommandInput - {@link UpdateContactFlowAliasCommandInput}
 * @returns {@link UpdateContactFlowAliasCommandOutput}
 * @see {@link UpdateContactFlowAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowAliasCommandOutput} for command's `response` shape.
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
export class UpdateContactFlowAliasCommand extends command<UpdateContactFlowAliasCommandInput, UpdateContactFlowAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactFlowAlias",
  UpdateContactFlowAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowAliasRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowAliasCommandInput;
      output: UpdateContactFlowAliasCommandOutput;
    };
  };
}
