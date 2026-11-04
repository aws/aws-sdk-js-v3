// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventIntegrationRequest, GetEventIntegrationResponse } from "../models/models_0";
import { GetEventIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventIntegrationCommand}.
 */
export interface GetEventIntegrationCommandInput extends GetEventIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetEventIntegrationCommand}.
 */
export interface GetEventIntegrationCommandOutput extends GetEventIntegrationResponse, __MetadataBearer {}

/**
 * Returns information about the event integration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, GetEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, GetEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // GetEventIntegrationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetEventIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetEventIntegrationResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EventIntegrationArn: "STRING_VALUE",
 * //   EventBridgeBus: "STRING_VALUE",
 * //   EventFilter: { // EventFilter
 * //     Source: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventIntegrationCommandInput - {@link GetEventIntegrationCommandInput}
 * @returns {@link GetEventIntegrationCommandOutput}
 * @see {@link GetEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * Request processing failed due to an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link AppIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from AppIntegrations service.
 *
 * @public
 */
export class GetEventIntegrationCommand extends command<GetEventIntegrationCommandInput, GetEventIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "GetEventIntegration",
  GetEventIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventIntegrationRequest;
      output: GetEventIntegrationResponse;
    };
    sdk: {
      input: GetEventIntegrationCommandInput;
      output: GetEventIntegrationCommandOutput;
    };
  };
}
