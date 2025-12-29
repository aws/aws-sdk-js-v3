// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateContactAttributesRequest, UpdateContactAttributesResponse } from "../models/models_3";
import { UpdateContactAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactAttributesCommand}.
 */
export interface UpdateContactAttributesCommandInput extends UpdateContactAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactAttributesCommand}.
 */
export interface UpdateContactAttributesCommandOutput extends UpdateContactAttributesResponse, __MetadataBearer {}

/**
 * <p>Creates or updates user-defined contact
 *    attributes associated with the specified contact.</p>
 *          <p>You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the
 *    call is active, you can update the customer's name or the reason the customer called. You can add notes about steps
 *    that the agent took during the call that display to the next agent that takes the call. You can also update
 *    attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers.</p>
 *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information
 *    about contact record retention and the maximum size of the contact record attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature
 *     specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactAttributesRequest
 *   InitialContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Attributes: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateContactAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactAttributesCommandInput - {@link UpdateContactAttributesCommandInput}
 * @returns {@link UpdateContactAttributesCommandOutput}
 * @see {@link UpdateContactAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateContactAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidActiveRegionException} (client fault)
 *  <p>This exception occurs when an API request is made to a non-active region in an Amazon Connect instance configured with Amazon Connect Global Resiliency. For example, if the active region is US West (Oregon) and a request is made to US East (N. Virginia), the exception will be returned.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateContactAttributesCommand extends $Command
  .classBuilder<
    UpdateContactAttributesCommandInput,
    UpdateContactAttributesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateContactAttributes", {})
  .n("ConnectClient", "UpdateContactAttributesCommand")
  .sc(UpdateContactAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactAttributesRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactAttributesCommandInput;
      output: UpdateContactAttributesCommandOutput;
    };
  };
}
