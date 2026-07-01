// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateCodeSecurityScanConfigurationRequest,
  UpdateCodeSecurityScanConfigurationResponse,
} from "../models/models_1";
import { UpdateCodeSecurityScanConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCodeSecurityScanConfigurationCommand}.
 */
export interface UpdateCodeSecurityScanConfigurationCommandInput extends UpdateCodeSecurityScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCodeSecurityScanConfigurationCommand}.
 */
export interface UpdateCodeSecurityScanConfigurationCommandOutput extends UpdateCodeSecurityScanConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates an existing code security scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateCodeSecurityScanConfigurationRequest
 *   scanConfigurationArn: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateCodeSecurityScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeSecurityScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCodeSecurityScanConfigurationCommandInput - {@link UpdateCodeSecurityScanConfigurationCommandInput}
 * @returns {@link UpdateCodeSecurityScanConfigurationCommandOutput}
 * @see {@link UpdateCodeSecurityScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeSecurityScanConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateCodeSecurityScanConfigurationCommand extends command<UpdateCodeSecurityScanConfigurationCommandInput, UpdateCodeSecurityScanConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCodeSecurityScanConfiguration",
  UpdateCodeSecurityScanConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCodeSecurityScanConfigurationRequest;
      output: UpdateCodeSecurityScanConfigurationResponse;
    };
    sdk: {
      input: UpdateCodeSecurityScanConfigurationCommandInput;
      output: UpdateCodeSecurityScanConfigurationCommandOutput;
    };
  };
}
