// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { UpdateCodeSecurityIntegrationRequest, UpdateCodeSecurityIntegrationResponse } from "../models/models_1";
import { UpdateCodeSecurityIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCodeSecurityIntegrationCommand}.
 */
export interface UpdateCodeSecurityIntegrationCommandInput extends UpdateCodeSecurityIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCodeSecurityIntegrationCommand}.
 */
export interface UpdateCodeSecurityIntegrationCommandOutput extends UpdateCodeSecurityIntegrationResponse, __MetadataBearer {}

/**
 * <p>Updates an existing code security integration.</p>
 *          <p>After calling the <code>CreateCodeSecurityIntegration</code> operation, you complete
 *          authentication and authorization with your provider. Next you call the
 *             <code>UpdateCodeSecurityIntegration</code> operation to provide the <code>details</code>
 *          to complete the integration setup</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateCodeSecurityIntegrationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateCodeSecurityIntegrationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateCodeSecurityIntegrationRequest
 *   integrationArn: "STRING_VALUE", // required
 *   details: { // UpdateIntegrationDetails Union: only one key present
 *     gitlabSelfManaged: { // UpdateGitLabSelfManagedIntegrationDetail
 *       authCode: "STRING_VALUE", // required
 *     },
 *     github: { // UpdateGitHubIntegrationDetail
 *       code: "STRING_VALUE", // required
 *       installationId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateCodeSecurityIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeSecurityIntegrationResponse
 * //   integrationArn: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "ACTIVE" || "INACTIVE" || "DISABLING", // required
 * // };
 *
 * ```
 *
 * @param UpdateCodeSecurityIntegrationCommandInput - {@link UpdateCodeSecurityIntegrationCommandInput}
 * @returns {@link UpdateCodeSecurityIntegrationCommandOutput}
 * @see {@link UpdateCodeSecurityIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeSecurityIntegrationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred. This exception occurs when the same resource is being modified by
 *          concurrent requests.</p>
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
export class UpdateCodeSecurityIntegrationCommand extends $Command
  .classBuilder<
    UpdateCodeSecurityIntegrationCommandInput,
    UpdateCodeSecurityIntegrationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "UpdateCodeSecurityIntegration", {})
  .n("Inspector2Client", "UpdateCodeSecurityIntegrationCommand")
  .sc(UpdateCodeSecurityIntegration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCodeSecurityIntegrationRequest;
      output: UpdateCodeSecurityIntegrationResponse;
    };
    sdk: {
      input: UpdateCodeSecurityIntegrationCommandInput;
      output: UpdateCodeSecurityIntegrationCommandOutput;
    };
  };
}
