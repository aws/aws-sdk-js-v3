// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateConnectorV2Request, CreateConnectorV2Response } from "../models/models_2";
import { CreateConnectorV2 } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorV2Command}.
 */
export interface CreateConnectorV2CommandInput extends CreateConnectorV2Request {}
/**
 * @public
 *
 * The output of {@link CreateConnectorV2Command}.
 */
export interface CreateConnectorV2CommandOutput extends CreateConnectorV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to create a connectorV2 based on input parameters. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateConnectorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateConnectorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CreateConnectorV2Request
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Provider: { // ProviderConfiguration Union: only one key present
 *     JiraCloud: { // JiraCloudProviderConfiguration
 *       ProjectKey: "STRING_VALUE",
 *     },
 *     ServiceNow: { // ServiceNowProviderConfiguration
 *       InstanceName: "STRING_VALUE", // required
 *       ClientId: "STRING_VALUE", // required
 *       ClientSecret: "STRING_VALUE", // required
 *     },
 *   },
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectorV2Command(input);
 * const response = await client.send(command);
 * // { // CreateConnectorV2Response
 * //   ConnectorArn: "STRING_VALUE",
 * //   ConnectorId: "STRING_VALUE", // required
 * //   AuthUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectorV2CommandInput - {@link CreateConnectorV2CommandInput}
 * @returns {@link CreateConnectorV2CommandOutput}
 * @see {@link CreateConnectorV2CommandInput} for command's `input` shape.
 * @see {@link CreateConnectorV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class CreateConnectorV2Command extends $Command
  .classBuilder<
    CreateConnectorV2CommandInput,
    CreateConnectorV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "CreateConnectorV2", {})
  .n("SecurityHubClient", "CreateConnectorV2Command")
  .sc(CreateConnectorV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorV2Request;
      output: CreateConnectorV2Response;
    };
    sdk: {
      input: CreateConnectorV2CommandInput;
      output: CreateConnectorV2CommandOutput;
    };
  };
}
