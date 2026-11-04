// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCodeSecurityScanConfigurationRequest,
  GetCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import { GetCodeSecurityScanConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about a code security scan configuration.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access an invalid resource. Make sure the resource is specified correctly.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class GetCodeSecurityScanConfigurationCommand extends command<GetCodeSecurityScanConfigurationCommandInput, GetCodeSecurityScanConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetCodeSecurityScanConfiguration",
  GetCodeSecurityScanConfiguration$
) {
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
