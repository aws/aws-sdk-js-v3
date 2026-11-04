// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSecurityKeyRequest, AssociateSecurityKeyResponse } from "../models/models_0";
import { AssociateSecurityKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSecurityKeyCommand}.
 */
export interface AssociateSecurityKeyCommandInput extends AssociateSecurityKeyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSecurityKeyCommand}.
 */
export interface AssociateSecurityKeyCommandOutput extends AssociateSecurityKeyResponse, __MetadataBearer {}

/**
 * This API is in preview release for Connect Customer and is subject to change.
 *
 * Associates a security key to the instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateSecurityKeyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateSecurityKeyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateSecurityKeyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateSecurityKeyCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSecurityKeyResponse
 * //   AssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateSecurityKeyCommandInput - {@link AssociateSecurityKeyCommandInput}
 * @returns {@link AssociateSecurityKeyCommandOutput}
 * @see {@link AssociateSecurityKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityKeyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class AssociateSecurityKeyCommand extends command<AssociateSecurityKeyCommandInput, AssociateSecurityKeyCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSecurityKey",
  AssociateSecurityKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSecurityKeyRequest;
      output: AssociateSecurityKeyResponse;
    };
    sdk: {
      input: AssociateSecurityKeyCommandInput;
      output: AssociateSecurityKeyCommandOutput;
    };
  };
}
