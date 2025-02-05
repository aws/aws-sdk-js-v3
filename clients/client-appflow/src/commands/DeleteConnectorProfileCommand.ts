// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConnectorProfileRequest, DeleteConnectorProfileResponse } from "../models/models_0";
import { de_DeleteConnectorProfileCommand, se_DeleteConnectorProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectorProfileCommand}.
 */
export interface DeleteConnectorProfileCommandInput extends DeleteConnectorProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorProfileCommand}.
 */
export interface DeleteConnectorProfileCommandOutput extends DeleteConnectorProfileResponse, __MetadataBearer {}

/**
 * <p> Enables you to delete an existing connector profile. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DeleteConnectorProfileCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DeleteConnectorProfileCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppflowClient(config);
 * const input = { // DeleteConnectorProfileRequest
 *   connectorProfileName: "STRING_VALUE", // required
 *   forceDelete: true || false,
 * };
 * const command = new DeleteConnectorProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectorProfileCommandInput - {@link DeleteConnectorProfileCommandInput}
 * @returns {@link DeleteConnectorProfileCommandOutput}
 * @see {@link DeleteConnectorProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorProfileCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 * @public
 */
export class DeleteConnectorProfileCommand extends $Command
  .classBuilder<
    DeleteConnectorProfileCommandInput,
    DeleteConnectorProfileCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "DeleteConnectorProfile", {})
  .n("AppflowClient", "DeleteConnectorProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectorProfileCommand)
  .de(de_DeleteConnectorProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectorProfileCommandInput;
      output: DeleteConnectorProfileCommandOutput;
    };
  };
}
