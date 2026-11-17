// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectorInput, CreateConnectorOutput } from "../models/models_0";
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
export interface CreateConnectorCommandInput extends CreateConnectorInput {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends CreateConnectorOutput, __MetadataBearer {}

/**
 * <p>Creates a connector to a third-party cloud provider. With a connector, you can discover resources in the provider and collect their telemetry. Currently, Microsoft Azure is the only supported provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, CreateConnectorCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, CreateConnectorCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // CreateConnectorInput
 *   ConnectorConfiguration: { // ConnectorConfiguration Union: only one key present
 *     Azure: { // AzureConnectorConfiguration
 *       TenantIdentifier: "STRING_VALUE", // required
 *       ClientIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorOutput
 * //   Connector: { // Connector
 * //     Arn: "STRING_VALUE", // required
 * //     Provider: "AZURE", // required
 * //     ConnectorConfiguration: { // ConnectorConfiguration Union: only one key present
 * //       Azure: { // AzureConnectorConfiguration
 * //         TenantIdentifier: "STRING_VALUE", // required
 * //         ClientIdentifier: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     RoleArn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     CreatedTimeStamp: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
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
      input: CreateConnectorInput;
      output: CreateConnectorOutput;
    };
    sdk: {
      input: CreateConnectorCommandInput;
      output: CreateConnectorCommandOutput;
    };
  };
}
