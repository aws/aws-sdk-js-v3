// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCodeSecurityScanConfigurationRequest,
  CreateCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import { CreateCodeSecurityScanConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateCodeSecurityScanConfigurationCommandOutput extends CreateCodeSecurityScanConfigurationResponse, __MetadataBearer {}

/**
 * Creates a scan configuration for code security scanning.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred. This exception occurs when the same resource is being modified by concurrent requests.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.
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
export class CreateCodeSecurityScanConfigurationCommand extends command<CreateCodeSecurityScanConfigurationCommandInput, CreateCodeSecurityScanConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateCodeSecurityScanConfiguration",
  CreateCodeSecurityScanConfiguration$
) {
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
