// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { DeleteCisScanConfigurationRequest, DeleteCisScanConfigurationResponse } from "../models/models_0";
import { de_DeleteCisScanConfigurationCommand, se_DeleteCisScanConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCisScanConfigurationCommand}.
 */
export interface DeleteCisScanConfigurationCommandInput extends DeleteCisScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCisScanConfigurationCommand}.
 */
export interface DeleteCisScanConfigurationCommandOutput extends DeleteCisScanConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes a CIS scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DeleteCisScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DeleteCisScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Inspector2Client(config);
 * const input = { // DeleteCisScanConfigurationRequest
 *   scanConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCisScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCisScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteCisScanConfigurationCommandInput - {@link DeleteCisScanConfigurationCommandInput}
 * @returns {@link DeleteCisScanConfigurationCommandOutput}
 * @see {@link DeleteCisScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteCisScanConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class DeleteCisScanConfigurationCommand extends $Command
  .classBuilder<
    DeleteCisScanConfigurationCommandInput,
    DeleteCisScanConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "DeleteCisScanConfiguration", {})
  .n("Inspector2Client", "DeleteCisScanConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCisScanConfigurationCommand)
  .de(de_DeleteCisScanConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCisScanConfigurationRequest;
      output: DeleteCisScanConfigurationResponse;
    };
    sdk: {
      input: DeleteCisScanConfigurationCommandInput;
      output: DeleteCisScanConfigurationCommandOutput;
    };
  };
}
