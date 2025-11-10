// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEventTriggerRequest, DeleteEventTriggerResponse } from "../models/models_0";
import { DeleteEventTrigger } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Disable and deletes the Event Trigger.</p>
 *          <note>
 *             <p>You cannot delete an Event Trigger with an active Integration associated.</p>
 *          </note>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class DeleteEventTriggerCommand extends $Command
  .classBuilder<
    DeleteEventTriggerCommandInput,
    DeleteEventTriggerCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteEventTrigger", {})
  .n("CustomerProfilesClient", "DeleteEventTriggerCommand")
  .sc(DeleteEventTrigger)
  .build() {
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
