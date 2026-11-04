// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventsConfigurationRequest, GetEventsConfigurationResponse } from "../models/models_0";
import { GetEventsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class GetEventsConfigurationCommand extends command<GetEventsConfigurationCommandInput, GetEventsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetEventsConfiguration",
  GetEventsConfiguration$
) {
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
