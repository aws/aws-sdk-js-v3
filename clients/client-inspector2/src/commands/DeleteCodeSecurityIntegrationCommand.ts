// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { DeleteCodeSecurityIntegrationRequest, DeleteCodeSecurityIntegrationResponse } from "../models/models_0";
import { DeleteCodeSecurityIntegration } from "../schemas/schemas_7_CodeSecurity";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCodeSecurityIntegrationCommand}.
 */
export interface DeleteCodeSecurityIntegrationCommandInput extends DeleteCodeSecurityIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCodeSecurityIntegrationCommand}.
 */
export interface DeleteCodeSecurityIntegrationCommandOutput
  extends DeleteCodeSecurityIntegrationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a code security integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DeleteCodeSecurityIntegrationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DeleteCodeSecurityIntegrationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // DeleteCodeSecurityIntegrationRequest
 *   integrationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCodeSecurityIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCodeSecurityIntegrationResponse
 * //   integrationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCodeSecurityIntegrationCommandInput - {@link DeleteCodeSecurityIntegrationCommandInput}
 * @returns {@link DeleteCodeSecurityIntegrationCommandOutput}
 * @see {@link DeleteCodeSecurityIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeSecurityIntegrationCommandOutput} for command's `response` shape.
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
export class DeleteCodeSecurityIntegrationCommand extends $Command
  .classBuilder<
    DeleteCodeSecurityIntegrationCommandInput,
    DeleteCodeSecurityIntegrationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "DeleteCodeSecurityIntegration", {})
  .n("Inspector2Client", "DeleteCodeSecurityIntegrationCommand")
  .sc(DeleteCodeSecurityIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCodeSecurityIntegrationRequest;
      output: DeleteCodeSecurityIntegrationResponse;
    };
    sdk: {
      input: DeleteCodeSecurityIntegrationCommandInput;
      output: DeleteCodeSecurityIntegrationCommandOutput;
    };
  };
}
