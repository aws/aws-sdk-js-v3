// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionResult,
} from "../models/models_0";
import { AddSourceIdentifierToSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddSourceIdentifierToSubscriptionCommand}.
 */
export interface AddSourceIdentifierToSubscriptionCommandInput extends AddSourceIdentifierToSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link AddSourceIdentifierToSubscriptionCommand}.
 */
export interface AddSourceIdentifierToSubscriptionCommandOutput extends AddSourceIdentifierToSubscriptionResult, __MetadataBearer {}

/**
 * <p>Adds a source identifier to an existing event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, AddSourceIdentifierToSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, AddSourceIdentifierToSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // AddSourceIdentifierToSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new AddSourceIdentifierToSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // AddSourceIdentifierToSubscriptionResult
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
 * @param AddSourceIdentifierToSubscriptionCommandInput - {@link AddSourceIdentifierToSubscriptionCommandInput}
 * @returns {@link AddSourceIdentifierToSubscriptionCommandOutput}
 * @see {@link AddSourceIdentifierToSubscriptionCommandInput} for command's `input` shape.
 * @see {@link AddSourceIdentifierToSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The source could not be found.</p>
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
export class AddSourceIdentifierToSubscriptionCommand extends command<AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "AddSourceIdentifierToSubscription",
  AddSourceIdentifierToSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddSourceIdentifierToSubscriptionMessage;
      output: AddSourceIdentifierToSubscriptionResult;
    };
    sdk: {
      input: AddSourceIdentifierToSubscriptionCommandInput;
      output: AddSourceIdentifierToSubscriptionCommandOutput;
    };
  };
}
