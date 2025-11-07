// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventTrackersRequest, ListEventTrackersResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListEventTrackers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventTrackersCommand}.
 */
export interface ListEventTrackersCommandInput extends ListEventTrackersRequest {}
/**
 * @public
 *
 * The output of {@link ListEventTrackersCommand}.
 */
export interface ListEventTrackersCommandOutput extends ListEventTrackersResponse, __MetadataBearer {}

/**
 * <p>Returns the list of event trackers associated with the account.
 *       The response provides the properties for each event tracker, including the Amazon Resource
 *       Name (ARN) and tracking ID. For more
 *       information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListEventTrackersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListEventTrackersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListEventTrackersRequest
 *   datasetGroupArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventTrackersCommand(input);
 * const response = await client.send(command);
 * // { // ListEventTrackersResponse
 * //   eventTrackers: [ // EventTrackers
 * //     { // EventTrackerSummary
 * //       name: "STRING_VALUE",
 * //       eventTrackerArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventTrackersCommandInput - {@link ListEventTrackersCommandInput}
 * @returns {@link ListEventTrackersCommandOutput}
 * @see {@link ListEventTrackersCommandInput} for command's `input` shape.
 * @see {@link ListEventTrackersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListEventTrackersCommand extends $Command
  .classBuilder<
    ListEventTrackersCommandInput,
    ListEventTrackersCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "ListEventTrackers", {})
  .n("PersonalizeClient", "ListEventTrackersCommand")
  .sc(ListEventTrackers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventTrackersRequest;
      output: ListEventTrackersResponse;
    };
    sdk: {
      input: ListEventTrackersCommandInput;
      output: ListEventTrackersCommandOutput;
    };
  };
}
