// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutItemsRequest } from "../models/models_0";
import { PutItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutItemsCommand}.
 */
export interface PutItemsCommandInput extends PutItemsRequest {}
/**
 * @public
 *
 * The output of {@link PutItemsCommand}.
 */
export interface PutItemsCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more items to an Items dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing items individually</a>.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutItemsCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutItemsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * // import type { PersonalizeEventsClientConfig } from "@aws-sdk/client-personalize-events";
 * const config = {}; // type is PersonalizeEventsClientConfig
 * const client = new PersonalizeEventsClient(config);
 * const input = { // PutItemsRequest
 *   datasetArn: "STRING_VALUE", // required
 *   items: [ // ItemList // required
 *     { // Item
 *       itemId: "STRING_VALUE", // required
 *       properties: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutItemsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutItemsCommandInput - {@link PutItemsCommandInput}
 * @returns {@link PutItemsCommandOutput}
 * @see {@link PutItemsCommandInput} for command's `input` shape.
 * @see {@link PutItemsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeEventsServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeEvents service.</p>
 *
 *
 * @public
 */
export class PutItemsCommand extends command<PutItemsCommandInput, PutItemsCommandOutput>(
  _ep0,
  _mw0,
  "PutItems",
  PutItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutItemsRequest;
      output: {};
    };
    sdk: {
      input: PutItemsCommandInput;
      output: PutItemsCommandOutput;
    };
  };
}
