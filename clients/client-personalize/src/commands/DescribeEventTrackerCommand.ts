// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventTrackerRequest, DescribeEventTrackerResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeEventTrackerCommand, se_DescribeEventTrackerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventTrackerCommand}.
 */
export interface DescribeEventTrackerCommandInput extends DescribeEventTrackerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventTrackerCommand}.
 */
export interface DescribeEventTrackerCommandOutput extends DescribeEventTrackerResponse, __MetadataBearer {}

/**
 * <p>Describes an event tracker. The response includes the <code>trackingId</code> and
 *       <code>status</code> of the event tracker.
 *       For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeEventTrackerRequest
 *   eventTrackerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeEventTrackerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventTrackerResponse
 * //   eventTracker: { // EventTracker
 * //     name: "STRING_VALUE",
 * //     eventTrackerArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     trackingId: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEventTrackerCommandInput - {@link DescribeEventTrackerCommandInput}
 * @returns {@link DescribeEventTrackerCommandOutput}
 * @see {@link DescribeEventTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
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
export class DescribeEventTrackerCommand extends $Command
  .classBuilder<
    DescribeEventTrackerCommandInput,
    DescribeEventTrackerCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeEventTracker", {})
  .n("PersonalizeClient", "DescribeEventTrackerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventTrackerCommand)
  .de(de_DescribeEventTrackerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventTrackerRequest;
      output: DescribeEventTrackerResponse;
    };
    sdk: {
      input: DescribeEventTrackerCommandInput;
      output: DescribeEventTrackerCommandOutput;
    };
  };
}
