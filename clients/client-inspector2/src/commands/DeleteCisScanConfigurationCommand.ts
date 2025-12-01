// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { DeleteCisScanConfigurationRequest, DeleteCisScanConfigurationResponse } from "../models/models_0";
import { DeleteCisScanConfiguration } from "../schemas/schemas_0";

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
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
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
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
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
 *
 * @example Sample DeleteCisScanConfiguration Call
 * ```javascript
 * //
 * const input = {
 *   scanConfigurationArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-configuration/624b746d-e080-44ae-8c1d-48e653365a38"
 * };
 * const command = new DeleteCisScanConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scanConfigurationArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-configuration/624b746d-e080-44ae-8c1d-48e653365a38"
 * }
 * *\/
 * ```
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "DeleteCisScanConfiguration", {})
  .n("Inspector2Client", "DeleteCisScanConfigurationCommand")
  .sc(DeleteCisScanConfiguration)
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
