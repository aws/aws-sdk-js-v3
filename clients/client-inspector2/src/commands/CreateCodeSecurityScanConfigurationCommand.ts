// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  CreateCodeSecurityScanConfigurationRequest,
  CreateCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import {
  de_CreateCodeSecurityScanConfigurationCommand,
  se_CreateCodeSecurityScanConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeSecurityScanConfigurationCommand}.
 */
export interface CreateCodeSecurityScanConfigurationCommandInput extends CreateCodeSecurityScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCodeSecurityScanConfigurationCommand}.
 */
export interface CreateCodeSecurityScanConfigurationCommandOutput
  extends CreateCodeSecurityScanConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a scan configuration for code security scanning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // CreateCodeSecurityScanConfigurationRequest
 *   name: "STRING_VALUE", // required
 *   level: "ORGANIZATION" || "ACCOUNT", // required
 *   configuration: { // CodeSecurityScanConfiguration
 *     periodicScanConfiguration: { // PeriodicScanConfiguration
 *       frequency: "WEEKLY" || "MONTHLY" || "NEVER",
 *       frequencyExpression: "STRING_VALUE",
 *     },
 *     continuousIntegrationScanConfiguration: { // ContinuousIntegrationScanConfiguration
 *       supportedEvents: [ // ContinuousIntegrationScanSupportedEvents // required
 *         "PULL_REQUEST" || "PUSH",
 *       ],
 *     },
 *     ruleSetCategories: [ // RuleSetCategories // required
 *       "SAST" || "IAC" || "SCA",
 *     ],
 *   },
 *   scopeSettings: { // ScopeSettings
 *     projectSelectionScope: "ALL",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCodeSecurityScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeSecurityScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCodeSecurityScanConfigurationCommandInput - {@link CreateCodeSecurityScanConfigurationCommandInput}
 * @returns {@link CreateCodeSecurityScanConfigurationCommandOutput}
 * @see {@link CreateCodeSecurityScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateCodeSecurityScanConfigurationCommandOutput} for command's `response` shape.
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
export class CreateCodeSecurityScanConfigurationCommand extends $Command
  .classBuilder<
    CreateCodeSecurityScanConfigurationCommandInput,
    CreateCodeSecurityScanConfigurationCommandOutput,
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
  .s("Inspector2", "CreateCodeSecurityScanConfiguration", {})
  .n("Inspector2Client", "CreateCodeSecurityScanConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCodeSecurityScanConfigurationCommand)
  .de(de_CreateCodeSecurityScanConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCodeSecurityScanConfigurationRequest;
      output: CreateCodeSecurityScanConfigurationResponse;
    };
    sdk: {
      input: CreateCodeSecurityScanConfigurationCommandInput;
      output: CreateCodeSecurityScanConfigurationCommandOutput;
    };
  };
}
