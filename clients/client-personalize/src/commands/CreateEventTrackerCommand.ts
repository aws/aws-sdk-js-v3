// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventTrackerRequest, CreateEventTrackerResponse } from "../models/models_0";
import { CreateEventTracker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an event tracker that you use when adding event data to a specified dataset group using the [PutEvents](https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html) API.
 *
 * > **Note:** Only one event tracker can be associated with a dataset group. You will get an error if you call `CreateEventTracker` using the same dataset group as an existing event tracker.
 *
 * When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the [PutEvents](https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html) operation. Amazon Personalize then appends the event data to the Item interactions dataset of the dataset group you specify in your event tracker.
 *
 * The event tracker can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 * - DELETE PENDING > DELETE IN_PROGRESS
 *
 * To get the status of the event tracker, call [DescribeEventTracker](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html).
 *
 * > **Note:** The event tracker must be in the ACTIVE state before using the tracking ID.
 *
 * **Related APIs**
 *
 * - [ListEventTrackers](https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html)
 * - [DescribeEventTracker](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html)
 * - [DeleteEventTracker](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class CreateEventTrackerCommand extends command<CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventTracker",
  CreateEventTracker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventTrackerRequest;
      output: CreateEventTrackerResponse;
    };
    sdk: {
      input: CreateEventTrackerCommandInput;
      output: CreateEventTrackerCommandOutput;
    };
  };
}
