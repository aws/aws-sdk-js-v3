// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventTriggerRequest, DeleteEventTriggerResponse } from "../models/models_0";
import { DeleteEventTrigger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventTriggerCommand}.
 */
export interface DeleteEventTriggerCommandInput extends DeleteEventTriggerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventTriggerCommand}.
 */
export interface DeleteEventTriggerCommandOutput extends DeleteEventTriggerResponse, __MetadataBearer {}

/**
 * Disable and deletes the Event Trigger.
 *
 * > **Note:** You cannot delete an Event Trigger with an active Integration associated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteEventTriggerCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteEventTriggerCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteEventTriggerRequest
 *   DomainName: "STRING_VALUE", // required
 *   EventTriggerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventTriggerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventTriggerResponse
 * //   Message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteEventTriggerCommandInput - {@link DeleteEventTriggerCommandInput}
 * @returns {@link DeleteEventTriggerCommandOutput}
 * @see {@link DeleteEventTriggerCommandInput} for command's `input` shape.
 * @see {@link DeleteEventTriggerCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class DeleteEventTriggerCommand extends command<DeleteEventTriggerCommandInput, DeleteEventTriggerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventTrigger",
  DeleteEventTrigger$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventTriggerRequest;
      output: DeleteEventTriggerResponse;
    };
    sdk: {
      input: DeleteEventTriggerCommandInput;
      output: DeleteEventTriggerCommandOutput;
    };
  };
}
