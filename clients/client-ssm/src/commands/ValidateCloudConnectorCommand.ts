// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidateCloudConnectorRequest, ValidateCloudConnectorResult } from "../models/models_1";
import { ValidateCloudConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidateCloudConnectorCommand}.
 */
export interface ValidateCloudConnectorCommandInput extends ValidateCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link ValidateCloudConnectorCommand}.
 */
export interface ValidateCloudConnectorCommandOutput extends ValidateCloudConnectorResult, __MetadataBearer {}

/**
 * <p>Validates the configuration and connectivity of a cloud connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ValidateCloudConnectorCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ValidateCloudConnectorCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ValidateCloudConnectorRequest
 *   CloudConnectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ValidateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // ValidateCloudConnectorResult
 * //   ValidationFindings: [ // ValidationFindingList
 * //     { // ValidationFinding
 * //       Type: "INFO" || "WARN" || "ERROR",
 * //       Code: "TargetInaccessible" || "TargetUnusable" || "TargetStateWarning" || "AwsRoleAssumptionFailed" || "WebIdentityTokenFailed" || "OutboundWebIdentityFederationDisabled" || "ProviderCredentialCreationFailed" || "TenantSummary" || "SubscriptionAccessible",
 * //       Message: "STRING_VALUE",
 * //       ProviderMessage: "STRING_VALUE",
 * //       Scope: { // ValidationFindingScope
 * //         Type: "azure:tenant" || "azure:subscription",
 * //         Id: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ValidateCloudConnectorCommandInput - {@link ValidateCloudConnectorCommandInput}
 * @returns {@link ValidateCloudConnectorCommandOutput}
 * @see {@link ValidateCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link ValidateCloudConnectorCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ValidateCloudConnectorCommand extends command<ValidateCloudConnectorCommandInput, ValidateCloudConnectorCommandOutput>(
  _ep0,
  _mw0,
  "ValidateCloudConnector",
  ValidateCloudConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateCloudConnectorRequest;
      output: ValidateCloudConnectorResult;
    };
    sdk: {
      input: ValidateCloudConnectorCommandInput;
      output: ValidateCloudConnectorCommandOutput;
    };
  };
}
