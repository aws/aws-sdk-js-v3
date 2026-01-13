// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type {
  GetCodeSecurityScanConfigurationRequest,
  GetCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import { GetCodeSecurityScanConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCodeSecurityScanConfigurationCommand}.
 */
export interface GetCodeSecurityScanConfigurationCommandInput extends GetCodeSecurityScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetCodeSecurityScanConfigurationCommand}.
 */
export interface GetCodeSecurityScanConfigurationCommandOutput extends GetCodeSecurityScanConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a code security scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // GetCodeSecurityScanConfigurationRequest
 *   scanConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new GetCodeSecurityScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeSecurityScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   configuration: { // CodeSecurityScanConfiguration
 * //     periodicScanConfiguration: { // PeriodicScanConfiguration
 * //       frequency: "WEEKLY" || "MONTHLY" || "NEVER",
 * //       frequencyExpression: "STRING_VALUE",
 * //     },
 * //     continuousIntegrationScanConfiguration: { // ContinuousIntegrationScanConfiguration
 * //       supportedEvents: [ // ContinuousIntegrationScanSupportedEvents // required
 * //         "PULL_REQUEST" || "PUSH",
 * //       ],
 * //     },
 * //     ruleSetCategories: [ // RuleSetCategories // required
 * //       "SAST" || "IAC" || "SCA",
 * //     ],
 * //   },
 * //   level: "ORGANIZATION" || "ACCOUNT",
 * //   scopeSettings: { // ScopeSettings
 * //     projectSelectionScope: "ALL",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCodeSecurityScanConfigurationCommandInput - {@link GetCodeSecurityScanConfigurationCommandInput}
 * @returns {@link GetCodeSecurityScanConfigurationCommandOutput}
 * @see {@link GetCodeSecurityScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCodeSecurityScanConfigurationCommandOutput} for command's `response` shape.
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
export class GetCodeSecurityScanConfigurationCommand extends $Command
  .classBuilder<
    GetCodeSecurityScanConfigurationCommandInput,
    GetCodeSecurityScanConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "GetCodeSecurityScanConfiguration", {})
  .n("Inspector2Client", "GetCodeSecurityScanConfigurationCommand")
  .sc(GetCodeSecurityScanConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeSecurityScanConfigurationRequest;
      output: GetCodeSecurityScanConfigurationResponse;
    };
    sdk: {
      input: GetCodeSecurityScanConfigurationCommandInput;
      output: GetCodeSecurityScanConfigurationCommandOutput;
    };
  };
}
