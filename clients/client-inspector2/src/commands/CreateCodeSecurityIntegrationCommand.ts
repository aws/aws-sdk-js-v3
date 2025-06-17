// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  CreateCodeSecurityIntegrationRequest,
  CreateCodeSecurityIntegrationRequestFilterSensitiveLog,
  CreateCodeSecurityIntegrationResponse,
  CreateCodeSecurityIntegrationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateCodeSecurityIntegrationCommand,
  se_CreateCodeSecurityIntegrationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeSecurityIntegrationCommand}.
 */
export interface CreateCodeSecurityIntegrationCommandInput extends CreateCodeSecurityIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCodeSecurityIntegrationCommand}.
 */
export interface CreateCodeSecurityIntegrationCommandOutput
  extends CreateCodeSecurityIntegrationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a code security integration with a source code repository provider.</p>
 *          <p>After calling the <code>CreateCodeSecurityIntegration</code> operation, you complete
 *          authentication and authorization with your provider. Next you call the
 *             <code>UpdateCodeSecurityIntegration</code> operation to provide the <code>details</code>
 *          to complete the integration setup</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateCodeSecurityIntegrationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateCodeSecurityIntegrationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // CreateCodeSecurityIntegrationRequest
 *   name: "STRING_VALUE", // required
 *   type: "GITLAB_SELF_MANAGED" || "GITHUB", // required
 *   details: { // CreateIntegrationDetail Union: only one key present
 *     gitlabSelfManaged: { // CreateGitLabSelfManagedIntegrationDetail
 *       instanceUrl: "STRING_VALUE", // required
 *       accessToken: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCodeSecurityIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeSecurityIntegrationResponse
 * //   integrationArn: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "ACTIVE" || "INACTIVE" || "DISABLING", // required
 * //   authorizationUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCodeSecurityIntegrationCommandInput - {@link CreateCodeSecurityIntegrationCommandInput}
 * @returns {@link CreateCodeSecurityIntegrationCommandOutput}
 * @see {@link CreateCodeSecurityIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateCodeSecurityIntegrationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota. To perform the requested action, remove some of
 *          the relevant resources, or use Service Quotas to request a service quota increase.</p>
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
export class CreateCodeSecurityIntegrationCommand extends $Command
  .classBuilder<
    CreateCodeSecurityIntegrationCommandInput,
    CreateCodeSecurityIntegrationCommandOutput,
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
  .s("Inspector2", "CreateCodeSecurityIntegration", {})
  .n("Inspector2Client", "CreateCodeSecurityIntegrationCommand")
  .f(CreateCodeSecurityIntegrationRequestFilterSensitiveLog, CreateCodeSecurityIntegrationResponseFilterSensitiveLog)
  .ser(se_CreateCodeSecurityIntegrationCommand)
  .de(de_CreateCodeSecurityIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeSecurityIntegrationRequest;
      output: CreateCodeSecurityIntegrationResponse;
    };
    sdk: {
      input: CreateCodeSecurityIntegrationCommandInput;
      output: CreateCodeSecurityIntegrationCommandOutput;
    };
  };
}
