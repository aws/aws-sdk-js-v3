// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContactFlowAliasRequest, DeleteContactFlowAliasResponse } from "../models/models_1";
import { DeleteContactFlowAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContactFlowAliasCommand}.
 */
export interface DeleteContactFlowAliasCommandInput extends DeleteContactFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactFlowAliasCommand}.
 */
export interface DeleteContactFlowAliasCommandOutput extends DeleteContactFlowAliasResponse, __MetadataBearer {}

/**
 * <p>Deletes an alias from a flow without deleting the version that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactFlowAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactFlowAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactFlowAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactFlowAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactFlowAliasCommandInput - {@link DeleteContactFlowAliasCommandInput}
 * @returns {@link DeleteContactFlowAliasCommandOutput}
 * @see {@link DeleteContactFlowAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteContactFlowAliasCommandOutput} for command's `response` shape.
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
export class DeleteContactFlowAliasCommand extends command<DeleteContactFlowAliasCommandInput, DeleteContactFlowAliasCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContactFlowAlias",
  DeleteContactFlowAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactFlowAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactFlowAliasCommandInput;
      output: DeleteContactFlowAliasCommandOutput;
    };
  };
}
