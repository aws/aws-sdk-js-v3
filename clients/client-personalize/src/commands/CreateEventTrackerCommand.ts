// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventTrackerRequest, CreateEventTrackerResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateEventTrackerCommand, se_CreateEventTrackerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventTrackerCommand}.
 */
export interface CreateEventTrackerCommandInput extends CreateEventTrackerRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventTrackerCommand}.
 */
export interface CreateEventTrackerCommandOutput extends CreateEventTrackerResponse, __MetadataBearer {}

/**
 * <p>Creates an event tracker that you use when adding event data to a specified dataset
 *       group using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
 *          <note>
 *             <p>Only one event tracker can be associated with a dataset group. You will get
 *         an error if you call <code>CreateEventTracker</code> using the same dataset group as an
 *         existing event tracker.</p>
 *          </note>
 *          <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation.
 *       Amazon Personalize then appends the event data to the Item interactions dataset of the dataset group you specify
 *       in your event tracker.
 *     </p>
 *          <p>The event tracker can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p>
 *          <note>
 *             <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateEventTrackerRequest
 *   name: "STRING_VALUE", // required
 *   datasetGroupArn: "STRING_VALUE", // required
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEventTrackerCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventTrackerResponse
 * //   eventTrackerArn: "STRING_VALUE",
 * //   trackingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEventTrackerCommandInput - {@link CreateEventTrackerCommandInput}
 * @returns {@link CreateEventTrackerCommandOutput}
 * @see {@link CreateEventTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class CreateEventTrackerCommand extends $Command
  .classBuilder<
    CreateEventTrackerCommandInput,
    CreateEventTrackerCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "CreateEventTracker", {})
  .n("PersonalizeClient", "CreateEventTrackerCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventTrackerCommand)
  .de(de_CreateEventTrackerCommand)
  .build() {}
