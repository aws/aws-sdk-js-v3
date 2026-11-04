// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterConnectorRequest, RegisterConnectorResponse } from "../models/models_0";
import { RegisterConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterConnectorCommand}.
 */
export interface RegisterConnectorCommandInput extends RegisterConnectorRequest {}
/**
 * @public
 *
 * The output of {@link RegisterConnectorCommand}.
 */
export interface RegisterConnectorCommandOutput extends RegisterConnectorResponse, __MetadataBearer {}

/**
 * Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, RegisterConnectorCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, RegisterConnectorCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // RegisterConnectorRequest
 *   connectorLabel: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   connectorProvisioningType: "LAMBDA",
 *   connectorProvisioningConfig: { // ConnectorProvisioningConfig
 *     lambda: { // LambdaConnectorProvisioningConfig
 *       lambdaArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RegisterConnectorCommand(input);
 * const response = await client.send(command);
 * // { // RegisterConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterConnectorCommandInput - {@link RegisterConnectorCommandInput}
 * @returns {@link RegisterConnectorCommandOutput}
 * @see {@link RegisterConnectorCommandInput} for command's `input` shape.
 * @see {@link RegisterConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * AppFlow/Requester has invalid or missing permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when processing the request (for example, a flow with the given name already exists within the account. Check for conflicting resource names and try again.
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *
 * An error occurred when authenticating with the connector endpoint.
 *
 * @throws {@link ConnectorServerException} (client fault)
 *
 * An error occurred when retrieving data from the connector endpoint.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request (such as the source or destination connector profile) is not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota (such as the number of flows) to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * API calls have exceeded the maximum allowed API request rate per account and per Region.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppflowServiceException}
 *
 * Base exception class for all service exceptions from Appflow service.
 *
 * @public
 */
export class RegisterConnectorCommand extends command<RegisterConnectorCommandInput, RegisterConnectorCommandOutput>(
  _ep0,
  _mw0,
  "RegisterConnector",
  RegisterConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterConnectorRequest;
      output: RegisterConnectorResponse;
    };
    sdk: {
      input: RegisterConnectorCommandInput;
      output: RegisterConnectorCommandOutput;
    };
  };
}
