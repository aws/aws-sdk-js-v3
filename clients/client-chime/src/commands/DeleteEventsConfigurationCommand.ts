// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEventsConfigurationRequest } from "../models/models_0";
import { DeleteEventsConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventsConfigurationCommand}.
 */
export interface DeleteEventsConfigurationCommandInput extends DeleteEventsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventsConfigurationCommand}.
 */
export interface DeleteEventsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the events configuration that allows a bot to receive outgoing events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteEventsConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteEventsConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // DeleteEventsConfigurationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BotId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventsConfigurationCommandInput - {@link DeleteEventsConfigurationCommandInput}
 * @returns {@link DeleteEventsConfigurationCommandOutput}
 * @see {@link DeleteEventsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEventsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class DeleteEventsConfigurationCommand extends $Command
  .classBuilder<
    DeleteEventsConfigurationCommandInput,
    DeleteEventsConfigurationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "DeleteEventsConfiguration", {})
  .n("ChimeClient", "DeleteEventsConfigurationCommand")
  .sc(DeleteEventsConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventsConfigurationCommandInput;
      output: DeleteEventsConfigurationCommandOutput;
    };
  };
}
