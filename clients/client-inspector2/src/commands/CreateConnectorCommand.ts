// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectorRequest, CreateConnectorResponse } from "../models/models_0";
import { CreateConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends CreateConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateConnectorCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateConnectorCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // CreateConnectorRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   provider: "AZURE", // required
 *   description: "STRING_VALUE",
 *   providerDetail: { // ProviderDetailCreate Union: only one key present
 *     azure: { // AzureProviderDetailCreate
 *       awsConfigConnectorArn: "STRING_VALUE", // required
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
 *       azureRegions: [ // AzureRegionList // required
 *         "STRING_VALUE",
 *       ],
 *       autoInstallVMScanner: true || false,
 *     },
 *   },
 *   tags: { // ConnectorTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorResponse
 * //   connectorArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
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
 * @example Create an Azure customer-managed connector for VM scanning at SUBSCRIPTION scope
 * ```javascript
 * //
 * const input = {
 *   description: "Azure subscription scanner",
 *   name: "my-azure-connector",
 *   provider: "AZURE",
 *   providerDetail: {
 *     azure: {
 *       autoInstallVMScanner: true,
 *       awsConfigConnectorArn: "arn:aws:config:us-east-1:123456789012:connector/azure/a7bc5463-04ce-4b52-901e-f26f7292a4a7/2fbed4bd-5b95-4947-a751-8defc76ecdae",
 *       azureRegions: [
 *         "eastus"
 *       ],
 *       scopeConfiguration: {
 *         vmScanning: {
 *           scopeType: "SUBSCRIPTION",
 *           scopeValues: [
 *             "552802f5-1492-4184-bbae-7291c9939b16"
 *           ]
 *         }
 *       }
 *     }
 *   },
 *   tags: {
 *     env: "prod",
 *     owner: "security-team"
 *   }
 * };
 * const command = new CreateConnectorCommand(input);
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
export class CreateConnectorCommand extends command<CreateConnectorCommandInput, CreateConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnector",
  CreateConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorRequest;
      output: CreateConnectorResponse;
    };
    sdk: {
      input: CreateConnectorCommandInput;
      output: CreateConnectorCommandOutput;
    };
  };
}
