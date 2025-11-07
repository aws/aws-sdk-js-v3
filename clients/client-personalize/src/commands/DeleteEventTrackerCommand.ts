// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEventTrackerRequest } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteEventTracker } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventTrackerCommand}.
 */
export interface DeleteEventTrackerCommandInput extends DeleteEventTrackerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventTrackerCommand}.
 */
export interface DeleteEventTrackerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the event tracker. Does not delete the dataset from
 *         the dataset group. For more
 *         information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DeleteEventTrackerRequest
 *   eventTrackerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventTrackerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventTrackerCommandInput - {@link DeleteEventTrackerCommandInput}
 * @returns {@link DeleteEventTrackerCommandOutput}
 * @see {@link DeleteEventTrackerCommandInput} for command's `input` shape.
 * @see {@link DeleteEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
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
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class DeleteEventTrackerCommand extends $Command
  .classBuilder<
    DeleteEventTrackerCommandInput,
    DeleteEventTrackerCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DeleteEventTracker", {})
  .n("PersonalizeClient", "DeleteEventTrackerCommand")
  .sc(DeleteEventTracker)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventTrackerRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventTrackerCommandInput;
      output: DeleteEventTrackerCommandOutput;
    };
  };
}
