// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type {
  DeleteCodeSecurityScanConfigurationRequest,
  DeleteCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import { DeleteCodeSecurityScanConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCodeSecurityScanConfigurationCommand}.
 */
export interface DeleteCodeSecurityScanConfigurationCommandInput extends DeleteCodeSecurityScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCodeSecurityScanConfigurationCommand}.
 */
export interface DeleteCodeSecurityScanConfigurationCommandOutput
  extends DeleteCodeSecurityScanConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a code security scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DeleteCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DeleteCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // DeleteCodeSecurityScanConfigurationRequest
 *   scanConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCodeSecurityScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCodeSecurityScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCodeSecurityScanConfigurationCommandInput - {@link DeleteCodeSecurityScanConfigurationCommandInput}
 * @returns {@link DeleteCodeSecurityScanConfigurationCommandOutput}
 * @see {@link DeleteCodeSecurityScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeSecurityScanConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteCodeSecurityScanConfigurationCommand extends $Command
  .classBuilder<
    DeleteCodeSecurityScanConfigurationCommandInput,
    DeleteCodeSecurityScanConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "DeleteCodeSecurityScanConfiguration", {})
  .n("Inspector2Client", "DeleteCodeSecurityScanConfigurationCommand")
  .sc(DeleteCodeSecurityScanConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCodeSecurityScanConfigurationRequest;
      output: DeleteCodeSecurityScanConfigurationResponse;
    };
    sdk: {
      input: DeleteCodeSecurityScanConfigurationCommandInput;
      output: DeleteCodeSecurityScanConfigurationCommandOutput;
    };
  };
}
