// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListPrefetchSchedulesRequest, ListPrefetchSchedulesResponse } from "../models/models_0";
import { de_ListPrefetchSchedulesCommand, se_ListPrefetchSchedulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrefetchSchedulesCommand}.
 */
export interface ListPrefetchSchedulesCommandInput extends ListPrefetchSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListPrefetchSchedulesCommand}.
 */
export interface ListPrefetchSchedulesCommandOutput extends ListPrefetchSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists the prefetch schedules for a playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPrefetchSchedulesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPrefetchSchedulesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaTailorClient(config);
 * const input = { // ListPrefetchSchedulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new ListPrefetchSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListPrefetchSchedulesResponse
 * //   Items: [ // __listOfPrefetchSchedule
 * //     { // PrefetchSchedule
 * //       Arn: "STRING_VALUE", // required
 * //       Consumption: { // PrefetchConsumption
 * //         AvailMatchingCriteria: [ // __listOfAvailMatchingCriteria
 * //           { // AvailMatchingCriteria
 * //             DynamicVariable: "STRING_VALUE", // required
 * //             Operator: "EQUALS", // required
 * //           },
 * //         ],
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       PlaybackConfigurationName: "STRING_VALUE", // required
 * //       Retrieval: { // PrefetchRetrieval
 * //         DynamicVariables: { // __mapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       StreamId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrefetchSchedulesCommandInput - {@link ListPrefetchSchedulesCommandInput}
 * @returns {@link ListPrefetchSchedulesCommandOutput}
 * @see {@link ListPrefetchSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListPrefetchSchedulesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 * @public
 */
export class ListPrefetchSchedulesCommand extends $Command
  .classBuilder<
    ListPrefetchSchedulesCommandInput,
    ListPrefetchSchedulesCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "ListPrefetchSchedules", {})
  .n("MediaTailorClient", "ListPrefetchSchedulesCommand")
  .f(void 0, void 0)
  .ser(se_ListPrefetchSchedulesCommand)
  .de(de_ListPrefetchSchedulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrefetchSchedulesRequest;
      output: ListPrefetchSchedulesResponse;
    };
    sdk: {
      input: ListPrefetchSchedulesCommandInput;
      output: ListPrefetchSchedulesCommandOutput;
    };
  };
}
