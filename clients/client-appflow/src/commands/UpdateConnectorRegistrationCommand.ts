// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConnectorRegistrationRequest, UpdateConnectorRegistrationResponse } from "../models/models_0";
import { UpdateConnectorRegistration } from "../schemas/schemas_3_Connector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateConnectorRegistrationCommandOutput
  extends UpdateConnectorRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a custom connector that you've previously registered. This operation updates the
 *       connector with one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The latest version of the AWS Lambda function that's assigned to the connector</p>
 *             </li>
 *             <li>
 *                <p>A new AWS Lambda function that you specify</p>
 *             </li>
 *          </ul>
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
 *  <p>AppFlow/Requester has invalid or missing permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link ConnectorAuthenticationException} (client fault)
 *  <p> An error occurred when authenticating with the connector endpoint. </p>
 *
 * @throws {@link ConnectorServerException} (client fault)
 *  <p> An error occurred when retrieving data from the connector endpoint. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 *
 * @public
 */
export class UpdateConnectorRegistrationCommand extends $Command
  .classBuilder<
    UpdateConnectorRegistrationCommandInput,
    UpdateConnectorRegistrationCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SandstoneConfigurationServiceLambda", "UpdateConnectorRegistration", {})
  .n("AppflowClient", "UpdateConnectorRegistrationCommand")
  .sc(UpdateConnectorRegistration)
  .build() {
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
