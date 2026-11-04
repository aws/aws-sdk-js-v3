// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectorRegistrationRequest, UpdateConnectorRegistrationResponse } from "../models/models_0";
import { UpdateConnectorRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectorRegistrationCommand}.
 */
export interface UpdateConnectorRegistrationCommandInput extends UpdateConnectorRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorRegistrationCommand}.
 */
export interface UpdateConnectorRegistrationCommandOutput extends UpdateConnectorRegistrationResponse, __MetadataBearer {}

/**
 * Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:
 *
 * - The latest version of the AWS Lambda function that's assigned to the connector
 * - A new AWS Lambda function that you specify
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UpdateConnectorRegistrationCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UpdateConnectorRegistrationCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // UpdateConnectorRegistrationRequest
 *   connectorLabel: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   connectorProvisioningConfig: { // ConnectorProvisioningConfig
 *     lambda: { // LambdaConnectorProvisioningConfig
 *       lambdaArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateConnectorRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectorRegistrationResponse
 * //   connectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectorRegistrationCommandInput - {@link UpdateConnectorRegistrationCommandInput}
 * @returns {@link UpdateConnectorRegistrationCommandOutput}
 * @see {@link UpdateConnectorRegistrationCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorRegistrationCommandOutput} for command's `response` shape.
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
export class UpdateConnectorRegistrationCommand extends command<UpdateConnectorRegistrationCommandInput, UpdateConnectorRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnectorRegistration",
  UpdateConnectorRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorRegistrationRequest;
      output: UpdateConnectorRegistrationResponse;
    };
    sdk: {
      input: UpdateConnectorRegistrationCommandInput;
      output: UpdateConnectorRegistrationCommandOutput;
    };
  };
}
