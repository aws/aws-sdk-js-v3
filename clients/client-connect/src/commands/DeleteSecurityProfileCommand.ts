// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSecurityProfileRequest } from "../models/models_1";
import { de_DeleteSecurityProfileCommand, se_DeleteSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSecurityProfileCommand}.
 */
export interface DeleteSecurityProfileCommandInput extends DeleteSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityProfileCommand}.
 */
export interface DeleteSecurityProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteSecurityProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteSecurityProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteSecurityProfileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SecurityProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityProfileCommandInput - {@link DeleteSecurityProfileCommandInput}
 * @returns {@link DeleteSecurityProfileCommandOutput}
 * @see {@link DeleteSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use. Please try another.</p>
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
export class DeleteSecurityProfileCommand extends $Command
  .classBuilder<
    DeleteSecurityProfileCommandInput,
    DeleteSecurityProfileCommandOutput,
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
  .s("AmazonConnectService", "DeleteSecurityProfile", {})
  .n("ConnectClient", "DeleteSecurityProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSecurityProfileCommand)
  .de(de_DeleteSecurityProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteSecurityProfileCommandInput;
      output: DeleteSecurityProfileCommandOutput;
    };
  };
}
