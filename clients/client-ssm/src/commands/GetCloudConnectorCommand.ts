// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCloudConnectorRequest, GetCloudConnectorResult } from "../models/models_0";
import { GetCloudConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCloudConnectorCommand}.
 */
export interface GetCloudConnectorCommandInput extends GetCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudConnectorCommand}.
 */
export interface GetCloudConnectorCommandOutput extends GetCloudConnectorResult, __MetadataBearer {}

/**
 * <p>Returns detailed information about a cloud connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCloudConnectorCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCloudConnectorCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetCloudConnectorRequest
 *   CloudConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudConnectorResult
 * //   CloudConnectorArn: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   Configuration: { // CloudConnectorConfiguration Union: only one key present
 * //     AzureConfiguration: { // AzureConfiguration
 * //       TenantId: "STRING_VALUE", // required
 * //       TenantDisplayName: "STRING_VALUE",
 * //       ApplicationId: "STRING_VALUE", // required
 * //       ApplicationDisplayName: "STRING_VALUE",
 * //       Targets: { // ConfigurationTargets Union: only one key present
 * //         Subscriptions: [ // AzureSubscriptionList
 * //           { // AzureSubscription
 * //             Id: "STRING_VALUE", // required
 * //             DisplayName: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   ConfigConnectorArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCloudConnectorCommandInput - {@link GetCloudConnectorCommandInput}
 * @returns {@link GetCloudConnectorCommandOutput}
 * @see {@link GetCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link GetCloudConnectorCommandOutput} for command's `response` shape.
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
export class GetCloudConnectorCommand extends command<GetCloudConnectorCommandInput, GetCloudConnectorCommandOutput>(
  _ep0,
  _mw0,
  "GetCloudConnector",
  GetCloudConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudConnectorRequest;
      output: GetCloudConnectorResult;
    };
    sdk: {
      input: GetCloudConnectorCommandInput;
      output: GetCloudConnectorCommandOutput;
    };
  };
}
