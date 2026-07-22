// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_1";
import { UpdateConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandOutput extends UpdateConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates the description or provider-specific configuration details of an existing connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateConnectorCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateConnectorCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateConnectorRequest
 *   connectorArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   providerDetail: { // ProviderDetailUpdate Union: only one key present
 *     azure: { // AzureProviderDetailUpdate
 *       azureRegions: [ // AzureRegionList
 *         "STRING_VALUE",
 *       ],
 *       scopeConfiguration: { // AzureScopeConfigurationInput
 *         vmScanning: { // ScopeConfigurationInput
 *           scopeType: "TENANT" || "SUBSCRIPTION", // required
 *           scopeValues: [ // ScopeValueList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         containerImageScanning: {
 *           scopeType: "TENANT" || "SUBSCRIPTION", // required
 *           scopeValues: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         serverlessScanning: {
 *           scopeType: "TENANT" || "SUBSCRIPTION", // required
 *           scopeValues: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       autoInstallVMScanner: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectorCommandInput - {@link UpdateConnectorCommandInput}
 * @returns {@link UpdateConnectorCommandOutput}
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
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
 * @example Expand the Azure regions covered by a connector
 * ```javascript
 * //
 * const input = {
 *   connectorArn: "arn:aws:inspector2:us-east-1:123456789012:connector/6ccf8549-b52b-57ca-bf52-a2266da3c53a",
 *   providerDetail: {
 *     azure: {
 *       azureRegions: [
 *         "eastus",
 *         "westus"
 *       ]
 *     }
 *   }
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   connectorArn: "arn:aws:inspector2:us-east-1:123456789012:connector/6ccf8549-b52b-57ca-bf52-a2266da3c53a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConnectorCommand extends command<UpdateConnectorCommandInput, UpdateConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnector",
  UpdateConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorRequest;
      output: UpdateConnectorResponse;
    };
    sdk: {
      input: UpdateConnectorCommandInput;
      output: UpdateConnectorCommandOutput;
    };
  };
}
