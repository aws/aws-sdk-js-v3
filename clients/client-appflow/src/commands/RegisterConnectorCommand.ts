// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterConnectorRequest, RegisterConnectorResponse } from "../models/models_0";
import { de_RegisterConnectorCommand, se_RegisterConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Registers a new custom connector with your Amazon Web Services account. Before you can
 *       register the connector, you must deploy the associated AWS lambda function in your
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, RegisterConnectorCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, RegisterConnectorCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
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
 * @public
 */
export class RegisterConnectorCommand extends $Command
  .classBuilder<
    RegisterConnectorCommandInput,
    RegisterConnectorCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "RegisterConnector", {})
  .n("AppflowClient", "RegisterConnectorCommand")
  .f(void 0, void 0)
  .ser(se_RegisterConnectorCommand)
  .de(de_RegisterConnectorCommand)
  .build() {}
