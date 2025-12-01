// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEventsConfigurationRequest, GetEventsConfigurationResponse } from "../models/models_0";
import { GetEventsConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventsConfigurationCommand}.
 */
export interface GetEventsConfigurationCommandInput extends GetEventsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEventsConfigurationCommand}.
 */
export interface GetEventsConfigurationCommandOutput extends GetEventsConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetEventsConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetEventsConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // GetEventsConfigurationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BotId: "STRING_VALUE", // required
 * };
 * const command = new GetEventsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEventsConfigurationResponse
 * //   EventsConfiguration: { // EventsConfiguration
 * //     BotId: "STRING_VALUE",
 * //     OutboundEventsHTTPSEndpoint: "STRING_VALUE",
 * //     LambdaFunctionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventsConfigurationCommandInput - {@link GetEventsConfigurationCommandInput}
 * @returns {@link GetEventsConfigurationCommandOutput}
 * @see {@link GetEventsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEventsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class GetEventsConfigurationCommand extends $Command
  .classBuilder<
    GetEventsConfigurationCommandInput,
    GetEventsConfigurationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "GetEventsConfiguration", {})
  .n("ChimeClient", "GetEventsConfigurationCommand")
  .sc(GetEventsConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventsConfigurationRequest;
      output: GetEventsConfigurationResponse;
    };
    sdk: {
      input: GetEventsConfigurationCommandInput;
      output: GetEventsConfigurationCommandOutput;
    };
  };
}
