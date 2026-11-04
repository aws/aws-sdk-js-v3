// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventsConfigurationRequest } from "../models/models_0";
import { DeleteEventsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the events configuration that allows a bot to receive outgoing events.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
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
export class DeleteEventsConfigurationCommand extends command<DeleteEventsConfigurationCommandInput, DeleteEventsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventsConfiguration",
  DeleteEventsConfiguration$
) {
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
