// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventIntegrationRequest, CreateEventIntegrationResponse } from "../models/models_0";
import { CreateEventIntegration } from "../schemas/schemas_3_Integration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventIntegrationCommand}.
 */
export interface CreateEventIntegrationCommandInput extends CreateEventIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventIntegrationCommand}.
 */
export interface CreateEventIntegrationCommandOutput extends CreateEventIntegrationResponse, __MetadataBearer {}

/**
 * <p>Creates an EventIntegration, given a specified name, description, and a reference to an
 *         Amazon EventBridge bus in your account and a partner event source that pushes events to
 *       that bus. No objects are created in the your account, only metadata that is persisted on the
 *       EventIntegration control plane.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // CreateEventIntegrationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventFilter: { // EventFilter
 *     Source: "STRING_VALUE", // required
 *   },
 *   EventBridgeBus: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEventIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventIntegrationResponse
 * //   EventIntegrationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEventIntegrationCommandInput - {@link CreateEventIntegrationCommandInput}
 * @returns {@link CreateEventIntegrationCommandOutput}
 * @see {@link CreateEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceQuotaExceededException} (client fault)
 *  <p>The allowed quota for the resource has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class CreateEventIntegrationCommand extends $Command
  .classBuilder<
    CreateEventIntegrationCommandInput,
    CreateEventIntegrationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "CreateEventIntegration", {})
  .n("AppIntegrationsClient", "CreateEventIntegrationCommand")
  .sc(CreateEventIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventIntegrationRequest;
      output: CreateEventIntegrationResponse;
    };
    sdk: {
      input: CreateEventIntegrationCommandInput;
      output: CreateEventIntegrationCommandOutput;
    };
  };
}
