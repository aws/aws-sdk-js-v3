// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCloudConnectorRequest, UpdateCloudConnectorResult } from "../models/models_1";
import { UpdateCloudConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCloudConnectorCommand}.
 */
export interface UpdateCloudConnectorCommandInput extends UpdateCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCloudConnectorCommand}.
 */
export interface UpdateCloudConnectorCommandOutput extends UpdateCloudConnectorResult, __MetadataBearer {}

/**
 * <p>Updates an existing cloud connector with new configuration details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateCloudConnectorCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateCloudConnectorCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateCloudConnectorRequest
 *   CloudConnectorId: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
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
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloudConnectorResult
 * //   CloudConnectorId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCloudConnectorCommandInput - {@link UpdateCloudConnectorCommandInput}
 * @returns {@link UpdateCloudConnectorCommandOutput}
 * @see {@link UpdateCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudConnectorCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because of a conflict with a concurrent request or the current state of
 *    the resource. Retry your request.</p>
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
export class UpdateCloudConnectorCommand extends command<UpdateCloudConnectorCommandInput, UpdateCloudConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCloudConnector",
  UpdateCloudConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudConnectorRequest;
      output: UpdateCloudConnectorResult;
    };
    sdk: {
      input: UpdateCloudConnectorCommandInput;
      output: UpdateCloudConnectorCommandOutput;
    };
  };
}
