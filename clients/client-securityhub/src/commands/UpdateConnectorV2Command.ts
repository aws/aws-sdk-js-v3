// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConnectorV2Request, UpdateConnectorV2Response } from "../models/models_3";
import { UpdateConnectorV2 } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorV2Command}.
 */
export interface UpdateConnectorV2CommandInput extends UpdateConnectorV2Request {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorV2Command}.
 */
export interface UpdateConnectorV2CommandOutput extends UpdateConnectorV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to update a connectorV2 based on its id and input parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateConnectorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateConnectorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateConnectorV2Request
 *   ConnectorId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Provider: { // ProviderUpdateConfiguration Union: only one key present
 *     JiraCloud: { // JiraCloudUpdateConfiguration
 *       ProjectKey: "STRING_VALUE",
 *     },
 *     ServiceNow: { // ServiceNowUpdateConfiguration
 *       SecretArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateConnectorV2Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConnectorV2CommandInput - {@link UpdateConnectorV2CommandInput}
 * @returns {@link UpdateConnectorV2CommandOutput}
 * @see {@link UpdateConnectorV2CommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorV2CommandOutput} for command's `response` shape.
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
export class UpdateConnectorV2Command extends $Command
  .classBuilder<
    UpdateConnectorV2CommandInput,
    UpdateConnectorV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "UpdateConnectorV2", {})
  .n("SecurityHubClient", "UpdateConnectorV2Command")
  .sc(UpdateConnectorV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorV2Request;
      output: {};
    };
    sdk: {
      input: UpdateConnectorV2CommandInput;
      output: UpdateConnectorV2CommandOutput;
    };
  };
}
