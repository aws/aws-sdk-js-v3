// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type {
  ListCodeSecurityScanConfigurationsRequest,
  ListCodeSecurityScanConfigurationsResponse,
} from "../models/models_0";
import { ListCodeSecurityScanConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodeSecurityScanConfigurationsCommand}.
 */
export interface ListCodeSecurityScanConfigurationsCommandInput extends ListCodeSecurityScanConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCodeSecurityScanConfigurationsCommand}.
 */
export interface ListCodeSecurityScanConfigurationsCommandOutput extends ListCodeSecurityScanConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists all code security scan configurations in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCodeSecurityScanConfigurationsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCodeSecurityScanConfigurationsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListCodeSecurityScanConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCodeSecurityScanConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeSecurityScanConfigurationsResponse
 * //   configurations: [ // CodeSecurityScanConfigurationSummaries
 * //     { // CodeSecurityScanConfigurationSummary
 * //       scanConfigurationArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //       periodicScanFrequency: "WEEKLY" || "MONTHLY" || "NEVER",
 * //       frequencyExpression: "STRING_VALUE",
 * //       continuousIntegrationScanSupportedEvents: [ // ContinuousIntegrationScanSupportedEvents
 * //         "PULL_REQUEST" || "PUSH",
 * //       ],
 * //       ruleSetCategories: [ // RuleSetCategories // required
 * //         "SAST" || "IAC" || "SCA",
 * //       ],
 * //       scopeSettings: { // ScopeSettings
 * //         projectSelectionScope: "ALL",
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeSecurityScanConfigurationsCommandInput - {@link ListCodeSecurityScanConfigurationsCommandInput}
 * @returns {@link ListCodeSecurityScanConfigurationsCommandOutput}
 * @see {@link ListCodeSecurityScanConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSecurityScanConfigurationsCommandOutput} for command's `response` shape.
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
export class ListCodeSecurityScanConfigurationsCommand extends $Command
  .classBuilder<
    ListCodeSecurityScanConfigurationsCommandInput,
    ListCodeSecurityScanConfigurationsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ListCodeSecurityScanConfigurations", {})
  .n("Inspector2Client", "ListCodeSecurityScanConfigurationsCommand")
  .sc(ListCodeSecurityScanConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeSecurityScanConfigurationsRequest;
      output: ListCodeSecurityScanConfigurationsResponse;
    };
    sdk: {
      input: ListCodeSecurityScanConfigurationsCommandInput;
      output: ListCodeSecurityScanConfigurationsCommandOutput;
    };
  };
}
