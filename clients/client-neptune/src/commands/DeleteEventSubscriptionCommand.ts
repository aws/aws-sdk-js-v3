// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResult } from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteEventSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventSubscriptionCommand}.
 */
export interface DeleteEventSubscriptionCommandInput extends DeleteEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteEventSubscriptionCommand}.
 */
export interface DeleteEventSubscriptionCommandOutput extends DeleteEventSubscriptionResult, __MetadataBearer {}

/**
 * <p>Deletes an event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DeleteEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventSubscriptionResult
 * //   EventSubscription: { // EventSubscription
 * //     CustomerAwsId: "STRING_VALUE",
 * //     CustSubscriptionId: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     SubscriptionCreationTime: "STRING_VALUE",
 * //     SourceType: "STRING_VALUE",
 * //     SourceIdsList: [ // SourceIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     EventCategoriesList: [ // EventCategoriesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Enabled: true || false,
 * //     EventSubscriptionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEventSubscriptionCommandInput - {@link DeleteEventSubscriptionCommandInput}
 * @returns {@link DeleteEventSubscriptionCommandOutput}
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link InvalidEventSubscriptionStateFault} (client fault)
 *  <p>The event subscription is in an invalid state.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The designated subscription could not be found.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DeleteEventSubscriptionCommand extends $Command
  .classBuilder<
    DeleteEventSubscriptionCommandInput,
    DeleteEventSubscriptionCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteEventSubscription", {})
  .n("NeptuneClient", "DeleteEventSubscriptionCommand")
  .sc(DeleteEventSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventSubscriptionMessage;
      output: DeleteEventSubscriptionResult;
    };
    sdk: {
      input: DeleteEventSubscriptionCommandInput;
      output: DeleteEventSubscriptionCommandOutput;
    };
  };
}
