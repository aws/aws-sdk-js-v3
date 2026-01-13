// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateSecurityKeyRequest, AssociateSecurityKeyResponse } from "../models/models_0";
import { AssociateSecurityKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a security key to the instance.</p>
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
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class AssociateSecurityKeyCommand extends $Command
  .classBuilder<
    AssociateSecurityKeyCommandInput,
    AssociateSecurityKeyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateSecurityKey", {})
  .n("ConnectClient", "AssociateSecurityKeyCommand")
  .sc(AssociateSecurityKey$)
  .build() {
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
