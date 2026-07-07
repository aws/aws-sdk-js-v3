// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCloudConnectorRequest, CreateCloudConnectorResult } from "../models/models_0";
import { CreateCloudConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCloudConnectorCommand}.
 */
export interface CreateCloudConnectorCommandInput extends CreateCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudConnectorCommand}.
 */
export interface CreateCloudConnectorCommandOutput extends CreateCloudConnectorResult, __MetadataBearer {}

/**
 * <p>Creates a cloud connector that establishes a connection between Systems Manager and a third-party
 *    cloud environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateCloudConnectorCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateCloudConnectorCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateCloudConnectorRequest
 *   DisplayName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Configuration: { // CloudConnectorConfiguration Union: only one key present
 *     AzureConfiguration: { // AzureConfiguration
 *       TenantId: "STRING_VALUE", // required
 *       TenantDisplayName: "STRING_VALUE",
 *       ApplicationId: "STRING_VALUE", // required
 *       ApplicationDisplayName: "STRING_VALUE",
 *       Targets: { // ConfigurationTargets Union: only one key present
 *         Subscriptions: [ // AzureSubscriptionList
 *           { // AzureSubscription
 *             Id: "STRING_VALUE", // required
 *             DisplayName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   ConfigConnectorArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudConnectorResult
 * //   CloudConnectorId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCloudConnectorCommandInput - {@link CreateCloudConnectorCommandInput}
 * @returns {@link CreateCloudConnectorCommandOutput}
 * @see {@link CreateCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateCloudConnectorCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because of a conflict with a concurrent request or the current state of
 *    the resource. Retry your request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota. Service quotas, also referred to as limits, are the
 *    maximum number of service resources or operations for your Amazon Web Services account.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class CreateCloudConnectorCommand extends command<CreateCloudConnectorCommandInput, CreateCloudConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateCloudConnector",
  CreateCloudConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudConnectorRequest;
      output: CreateCloudConnectorResult;
    };
    sdk: {
      input: CreateCloudConnectorCommandInput;
      output: CreateCloudConnectorCommandOutput;
    };
  };
}
