// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectorV2Request, GetConnectorV2Response } from "../models/models_2";
import { GetConnectorV2 } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorV2Command}.
 */
export interface GetConnectorV2CommandInput extends GetConnectorV2Request {}
/**
 * @public
 *
 * The output of {@link GetConnectorV2Command}.
 */
export interface GetConnectorV2CommandOutput extends GetConnectorV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to retrieve details for a connectorV2 based on connector id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetConnectorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetConnectorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetConnectorV2Request
 *   ConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorV2Command(input);
 * const response = await client.send(command);
 * // { // GetConnectorV2Response
 * //   ConnectorArn: "STRING_VALUE",
 * //   ConnectorId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Health: { // HealthCheck
 * //     ConnectorStatus: "CONNECTED" || "FAILED_TO_CONNECT" || "PENDING_CONFIGURATION" || "PENDING_AUTHORIZATION", // required
 * //     Message: "STRING_VALUE",
 * //     LastCheckedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   ProviderDetail: { // ProviderDetail Union: only one key present
 * //     JiraCloud: { // JiraCloudDetail
 * //       CloudId: "STRING_VALUE",
 * //       ProjectKey: "STRING_VALUE",
 * //       Domain: "STRING_VALUE",
 * //       AuthUrl: "STRING_VALUE",
 * //       AuthStatus: "ACTIVE" || "FAILED",
 * //     },
 * //     ServiceNow: { // ServiceNowDetail
 * //       InstanceName: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE", // required
 * //       AuthStatus: "ACTIVE" || "FAILED", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectorV2CommandInput - {@link GetConnectorV2CommandInput}
 * @returns {@link GetConnectorV2CommandOutput}
 * @see {@link GetConnectorV2CommandInput} for command's `input` shape.
 * @see {@link GetConnectorV2CommandOutput} for command's `response` shape.
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
export class GetConnectorV2Command extends $Command
  .classBuilder<
    GetConnectorV2CommandInput,
    GetConnectorV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetConnectorV2", {})
  .n("SecurityHubClient", "GetConnectorV2Command")
  .sc(GetConnectorV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorV2Request;
      output: GetConnectorV2Response;
    };
    sdk: {
      input: GetConnectorV2CommandInput;
      output: GetConnectorV2CommandOutput;
    };
  };
}
