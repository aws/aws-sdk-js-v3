// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContactFlowAliasRequest, CreateContactFlowAliasResponse } from "../models/models_0";
import { CreateContactFlowAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContactFlowAliasCommand}.
 */
export interface CreateContactFlowAliasCommandInput extends CreateContactFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactFlowAliasCommand}.
 */
export interface CreateContactFlowAliasCommandOutput extends CreateContactFlowAliasResponse, __MetadataBearer {}

/**
 * <p>Creates a named alias that points to a specific version of a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateContactFlowAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE", // required
 *   ContactFlowVersion: Number("long"), // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new CreateContactFlowAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactFlowAliasResponse
 * //   ContactFlowArn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContactFlowAliasCommandInput - {@link CreateContactFlowAliasCommandInput}
 * @returns {@link CreateContactFlowAliasCommandOutput}
 * @see {@link CreateContactFlowAliasCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowAliasCommandOutput} for command's `response` shape.
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
export class CreateContactFlowAliasCommand extends command<CreateContactFlowAliasCommandInput, CreateContactFlowAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateContactFlowAlias",
  CreateContactFlowAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactFlowAliasRequest;
      output: CreateContactFlowAliasResponse;
    };
    sdk: {
      input: CreateContactFlowAliasCommandInput;
      output: CreateContactFlowAliasCommandOutput;
    };
  };
}
